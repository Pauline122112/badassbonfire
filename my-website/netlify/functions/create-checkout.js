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
			guestCount,
			guests,
			location,
			notes,
		} = data;

		// ✅ Fix guest count (handles both frontend names)
		const finalGuestCount = guestCount || guests || "";

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

		// ✅ Stripe Checkout Session
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
				email,
				phone,
				date,
				time,
				package: packageName,
				paymentType: paymentOption,
				guestCount: finalGuestCount,
				location: location || "",
				notes: notes || "",
			},
		});

		// ✅ EMAILS
		try {
			// 🔔 ADMIN EMAIL (you)
			const adminEmail = await resend.emails.send({
				from: "Badass Bonfires <onboarding@resend.dev>",
				to: "pauline.dev007@gmail.com",
				subject: `🔥 New Booking: ${packageName} (${date})`,
				html: `
          <h2>🔥 New Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Payment Option:</strong> ${paymentOption}</p>
          <p><strong>Guest Count:</strong> ${finalGuestCount}</p>
          <p><strong>Location:</strong> ${location || ""}</p>
          <p><strong>Notes:</strong> ${notes || ""}</p>
        `,
			});

			// 📩 CUSTOMER EMAIL
			const customerEmail = await resend.emails.send({
				from: "Badass Bonfires <onboarding@resend.dev>",
				to: email,
				subject: `CUSTOMER TEST ${Date.now()}`,
				html: `
          <h2>You're Booked (Almost) 🔥</h2>
          <p>Hi ${name},</p>

          <p>We received your bonfire request and will contact you shortly to confirm everything.</p>

          <h3>Your Booking Details</h3>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Guest Count:</strong> ${finalGuestCount}</p>
          <p><strong>Location:</strong> ${location || "TBD"}</p>
          <p><strong>Payment Option:</strong> ${paymentOption}</p>

          <p>If anything needs to be updated, just reply to this email.</p>

          <p>🔥 Badass Bonfires</p>
        `,
			});

			console.log("Admin email:", adminEmail);
			console.log("Customer email:", customerEmail);
		} catch (emailError) {
			console.error("Resend email failed:", emailError);
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ url: session.url }),
		};
	} catch (err) {
		console.error("Stripe error:", err);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Something went wrong" }),
		};
	}
}
