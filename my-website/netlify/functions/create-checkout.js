import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
	try {
		const data = JSON.parse(event.body);

		const { name, email, phone, eventDate, packageName, packagePrice } = data;

		// 💰 SET YOUR DEPOSIT HERE
		const depositAmount = 15000; // $150 in cents

		const session = await stripe.checkout.sessions.create({
			mode: "payment",
			customer_email: email,

			success_url: `${process.env.URL}/booking-success`,
			cancel_url: `${process.env.URL}/booking-cancelled`,

			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: `${packageName} Deposit`,
							description: `Date: ${eventDate}`,
						},
						unit_amount: depositAmount,
					},
					quantity: 1,
				},
			],

			metadata: {
				name,
				phone,
				eventDate,
				packageName,
				packagePrice,
			},
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
›