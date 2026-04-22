/* global process */
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
	try {
		const data = JSON.parse(event.body);

		const {
			name,
			email,
			phone,
			date,
			time,
			package: packageName,
			paymentOption,
		} = data;

		let packagePrice = 0;

		if (packageName.includes("Couples Burn")) packagePrice = 32500;
		if (packageName.includes("Basic Bonfire")) packagePrice = 42500;
		if (packageName.includes("Popular Bonfire")) packagePrice = 52500;
		if (packageName.includes("Elite Bonfire")) packagePrice = 62500;

		const depositAmount = 16000;

		if (!packagePrice) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "Invalid package selected" }),
			};
		}

		const amount = paymentOption === "full" ? packagePrice : depositAmount;

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name:
								paymentOption === "full"
									? `${packageName} - Full Payment`
									: `${packageName} - $160 Permit Deposit`,
							description:
								paymentOption === "full"
									? `Full payment for bonfire on ${date} at ${time}`
									: `Permit deposit for bonfire on ${date} at ${time}. Deposit becomes non-refundable once permit is pulled.`,
						},
						unit_amount: amount,
					},
					quantity: 1,
				},
			],
			success_url: "https://badassbonfirepreview.netlify.app/success",
			cancel_url: "https://badassbonfirepreview.netlify.app/",
			customer_email: email,
			metadata: {
				name,
				phone,
				date,
				time,
				package: packageName,
				paymentType: paymentOption,
			},
		});

		await resend.emails.send({
			from: "Badass Bonfires <onboarding@resend.dev>",
			to: "badassbonfire@gmail.com",
			subject: "🔥 New Bonfire Booking",
			html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Package:</strong> ${packageName}</p>
        <p><strong>Payment Option:</strong> ${paymentOption}</p>
      `,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ url: session.url }),
		};
	} catch (err) {
		console.error(err);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Stripe error" }),
		};
	}
}
