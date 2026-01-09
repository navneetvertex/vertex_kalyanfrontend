import React, { useState } from "react";

const ContactUs = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState(null);
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			setStatus({ type: "error", msg: "Please fill all fields." });
			return;
		}
		setSending(true);
		// Simulate send — replace with real API/mail service as needed
		await new Promise((r) => setTimeout(r, 800));
		setSending(false);
		setForm({ name: "", email: "", message: "" });
		setStatus({ type: "success", msg: "Message sent — we'll contact you soon." });
	};

	return (
		<div className="w-full p-2 bg-white">
			<div className=" mx-auto ">
				<div className="rounded-lg overflow-hidden shadow-md mb-10">
					<div className="bg-[#203557] px-6 py-12 text-center">
						<h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
						<p className="text-white/80 mt-2">
							We're here to help — reach out and we'll respond as soon as possible.
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 items-start">
					{/* Left: Contact details */}
					<div className="space-y-6">
						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Office Location</h3>
							<p className="text-gray-700 font-medium">Pandav Nagar, East Delhi</p>
							<p className="text-gray-600 mt-2">Plot no - 53, 3rd floor, Main road, Pandav Nagar</p>
							<p className="text-gray-600">East Delhi, PIN code - 110092</p>
						</div>

						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Our Other Branches</h3>
							<ul className="text-gray-700 list-disc list-inside space-y-1">
								<li>Pandav Nagar, East Delhi</li>
								<li>Pandav Nagar, East Delhi</li>
								<li>Pandav Nagar, East Delhi</li>
							</ul>
						</div>

						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Contact</h3>
							<p className="text-gray-700">
								<span className="font-medium">Phone:</span> <a href="tel:+919319208666" className="text-[#203557]">+91-9319208666</a>
							</p>
							<p className="text-gray-700 mt-2">
								<span className="font-medium">Email:</span> <a href="mailto:care@vertexsociety.com" className="text-[#203557]">care@vertexsociety.com</a>
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Corporate Office</h3>
							<p className="text-gray-700">Plot no - 53, 3rd floor, Main road, Pandav Nagar, East Delhi</p>
						</div>
					</div>

					{/* Right: Contact form */}
					<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
						<h3 className="text-2xl font-semibold mb-4 text-[#011A41]">Send us a message</h3>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">Name</label>
								<input
									name="name"
									value={form.name}
									onChange={handleChange}
									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
									placeholder="Your name"
									aria-label="Name"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">Email</label>
								<input
									name="email"
									value={form.email}
									onChange={handleChange}
									type="email"
									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
									placeholder="you@example.com"
									aria-label="Email"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">Message</label>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									rows={5}
									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
									placeholder="How can we help you?"
									aria-label="Message"
								/>
							</div>

							<div className="flex items-center gap-3">
								<button
									type="submit"
									disabled={sending}
									className="inline-flex items-center px-5 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded hover:brightness-95 transition"
								>
									{sending ? "Sending..." : "Send Message"}
								</button>
								<a href="mailto:care@vertexsociety.com" className="text-sm text-gray-600">Or email us directly</a>
							</div>

							{status && (
								<div className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
									{status.msg}
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
