// import React, { useState } from "react";

// const ContactUs = () => {
// 	const [form, setForm] = useState({ name: "", email: "", message: "" });
// 	const [status, setStatus] = useState(null);
// 	const [sending, setSending] = useState(false);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setForm((s) => ({ ...s, [name]: value }));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!form.name || !form.email || !form.message) {
// 			setStatus({ type: "error", msg: "Please fill all fields." });
// 			return;
// 		}
// 		setSending(true);
// 		// Simulate send — replace with real API/mail service as needed
// 		await new Promise((r) => setTimeout(r, 800));
// 		setSending(false);
// 		setForm({ name: "", email: "", message: "" });
// 		setStatus({ type: "success", msg: "Message sent — we'll contact you soon." });
// 	};

// 	return (
// 		<div className="w-full p-2 bg-white">
// 			<div className=" mx-auto ">
// 				<div className="rounded-lg overflow-hidden shadow-md mb-10">
// 					<div className="bg-[#203557] px-6 py-12 text-center">
// 						<h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
// 						<p className="text-white/80 mt-2">
// 							We're here to help — reach out and we'll respond as soon as possible.
// 						</p>
// 					</div>
// 				</div>

// 				<div className="grid md:grid-cols-2 gap-8 items-start">
// 					{/* Left: Contact details */}
// 					<div className="space-y-6">
// 						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
// 							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Office Location</h3>
// 							<p className="text-gray-700 font-medium">Pandav Nagar, East Delhi</p>
// 							<p className="text-gray-600 mt-2">Plot no - 53, 3rd floor, Main road, Pandav Nagar</p>
// 							<p className="text-gray-600">East Delhi, PIN code - 110092</p>
// 						</div>

// 						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
// 							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Our Other Branches</h3>
// 							<ul className="text-gray-700 list-disc list-inside space-y-1">
// 								<li>Pandav Nagar, East Delhi</li>
// 								<li>Pandav Nagar, East Delhi</li>
// 								<li>Pandav Nagar, East Delhi</li>
// 							</ul>
// 						</div>

// 						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
// 							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Contact</h3>
// 							<p className="text-gray-700">
// 								<span className="font-medium">Phone:</span> <a href="tel:+919319208666" className="text-[#203557]">+91-9319208666</a>
// 							</p>
// 							<p className="text-gray-700 mt-2">
// 								<span className="font-medium">Email:</span> <a href="mailto:care@vertexsociety.com" className="text-[#203557]">care@vertexsociety.com</a>
// 							</p>
// 						</div>

// 						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
// 							<h3 className="text-xl font-semibold text-[#011A41] mb-2">Corporate Office</h3>
// 							<p className="text-gray-700">Plot no - 53, 3rd floor, Main road, Pandav Nagar, East Delhi</p>
// 						</div>
// 					</div>

// 					{/* Right: Contact form */}
// 					<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
// 						<h3 className="text-2xl font-semibold mb-4 text-[#011A41]">Send us a message</h3>

// 						<form onSubmit={handleSubmit} className="space-y-4">
// 							<div>
// 								<label className="block text-sm font-medium text-gray-700">Name</label>
// 								<input
// 									name="name"
// 									value={form.name}
// 									onChange={handleChange}
// 									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
// 									placeholder="Your name"
// 									aria-label="Name"
// 								/>
// 							</div>

// 							<div>
// 								<label className="block text-sm font-medium text-gray-700">Email</label>
// 								<input
// 									name="email"
// 									value={form.email}
// 									onChange={handleChange}
// 									type="email"
// 									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
// 									placeholder="you@example.com"
// 									aria-label="Email"
// 								/>
// 							</div>

// 							<div>
// 								<label className="block text-sm font-medium text-gray-700">Message</label>
// 								<textarea
// 									name="message"
// 									value={form.message}
// 									onChange={handleChange}
// 									rows={5}
// 									className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 focus:ring-pink-400 focus:border-pink-400"
// 									placeholder="How can we help you?"
// 									aria-label="Message"
// 								/>
// 							</div>

// 							<div className="flex items-center gap-3">
// 								<button
// 									type="submit"
// 									disabled={sending}
// 									className="inline-flex items-center px-5 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded hover:brightness-95 transition"
// 								>
// 									{sending ? "Sending..." : "Send Message"}
// 								</button>
// 								<a href="mailto:care@vertexsociety.com" className="text-sm text-gray-600">Or email us directly</a>
// 							</div>

// 							{status && (
// 								<div className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
// 									{status.msg}
// 								</div>
// 							)}
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ContactUs;
import React, { useState } from "react";
import contactImg from "../assets/images/contact.png";

const branches = [
  {
    id: "pandav",
    label: "Pandav Nagar, East Delhi",
    title: "Pandav Nagar Branch",
    address: [
      "Plot no - 53, 3rd floor, Main road, Pandav Nagar",
      "East Delhi, PIN code - 110092",
    ],
    phone: "+91-9319208666",
  },
  {
    id: "laxmi",
    label: "Laxmi Nagar, East Delhi",
    title: "Laxmi Nagar Branch",
    address: [
      "XYZ Complex, 2nd floor, Main road, Laxmi Nagar",
      "East Delhi, PIN code - 1100XX",
    ],
    phone: "+91-98XXXXXX01",
  },
  {
    id: "preet",
    label: "Preet Vihar, East Delhi",
    title: "Preet Vihar Branch",
    address: [
      "ABC Tower, 1st floor, Main road, Preet Vihar",
      "East Delhi, PIN code - 1100YY",
    ],
    phone: "+91-98XXXXXX02",
  },
];

const ContactUsPage = () => {
  const [activeBranchId, setActiveBranchId] = useState("pandav");
  const activeBranch = branches.find((b) => b.id === activeBranchId);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

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
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    setStatus({
      type: "success",
      msg: "Message sent — we'll contact you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO: image left, heading right */}
      <section className="bg-[#203557] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left image */}
           <div className="overflow-hidden shadow-xl">
  <img
    src={contactImg}
    alt="People discussing finance"
    className="w-full h-auto object-contain"
  />
</div>


            {/* Right heading + intro */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-yellow-300 mb-3">
                Contact us
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                We are here to help you
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Reach out for questions about membership, deposits, loans, or
                branch services. Choose a branch below or send a quick enquiry
                and the team will get back within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BELOW HERO: branches, address, and form in one pattern */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Office + Corporate always visible */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-[#203557] mb-2">
              Office Location
            </h3>
            <p className="text-slate-800 font-medium">
              Pandav Nagar, East Delhi
            </p>
            <p className="text-slate-600 mt-2 text-sm">
              Plot no - 53, 3rd floor, Main road, Pandav Nagar
            </p>
            <p className="text-slate-600 text-sm">
              East Delhi, PIN code - 110092
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-[#203557] mb-2">
              Corporate Office
            </h3>
            <p className="text-slate-700 text-sm">
              Plot no - 53, 3rd floor, Main road, Pandav Nagar, East Delhi
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-[#203557] mb-2">
              Contact
            </h3>
            <p className="text-slate-700 text-sm">
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+919319208666"
                className="text-[#203557] underline-offset-2 hover:underline"
              >
                +91-9319208666
              </a>
            </p>
            <p className="text-slate-700 text-sm mt-2">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:care@vertexsociety.com"
                className="text-[#203557] underline-offset-2 hover:underline"
              >
                care@vertexsociety.com
              </a>
            </p>
          </div>
        </div>

        {/* Branch selector + form row */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: branch selector + active details */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 lg:p-7">
            <h2 className="text-xl font-semibold text-[#203557] mb-4">
              Our Other Branches
            </h2>

            <div className="flex flex-wrap gap-3 mb-5">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={
                    "px-4 py-2 rounded-full text-xs sm:text-sm border transition " +
                    (activeBranchId === branch.id
                      ? "bg-[#203557] text-white border-[#203557] shadow-md"
                      : "bg-white text-[#203557] border-[#203557]/40 hover:bg-[#203557]/5")
                  }
                >
                  {branch.label}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-[#203557]/40 bg-slate-50 p-5">
              <h4 className="text-lg font-semibold text-[#203557] mb-2">
                {activeBranch.title}
              </h4>
              <p className="text-sm text-slate-800">
                <span className="font-semibold">Address: </span>
                {activeBranch.address[0]}
              </p>
              <p className="text-sm text-slate-800">
                {activeBranch.address[1]}
              </p>
              <p className="text-sm text-slate-800 mt-2">
                <span className="font-semibold">Phone: </span>
                <a
                  href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-[#203557] underline-offset-2 hover:underline"
                >
                  {activeBranch.phone}
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT: compact contact form */}
          <div className="bg-[#203557] rounded-2xl shadow-xl text-white p-6 lg:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 w-40 h-40 bg-white/5 rounded-full" />
            <div className="pointer-events-none absolute -left-12 bottom-0 w-32 h-32 bg-yellow-400/10 rounded-full" />

            <div className="relative">
              <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
              <p className="text-sm text-white/80 mb-6">
                Prefer email? Fill this quick form and our support team will
                respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-0 block w-full border border-white/15 rounded-lg px-3 py-2.5 text-sm bg-white/5 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-0 block w-full border border-white/15 rounded-lg px-3 py-2.5 text-sm bg-white/5 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-0 block w-full border border-white/15 rounded-lg px-3 py-2.5 text-sm bg-white/5 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-1 inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-400 text-[#203557] text-sm font-semibold shadow-md hover:bg-yellow-300 disabled:opacity-70 disabled:cursor-not-allowed transition"
                >
                  {sending ? "Sending..." : "Send message"}
                </button>

                {status && (
                  <p
                    className={
                      "mt-2 text-xs " +
                      (status.type === "success"
                        ? "text-emerald-200"
                        : "text-red-200")
                    }
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;



