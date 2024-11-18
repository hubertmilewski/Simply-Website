export default function Contact() {
    return (
        <main>
            <div className="flex flex-col xl:h-screen items-center justify-center xl:space-y-10 space-y-6 px-5 sm:px-10 md:px-20">
                {/* Nagłówki */}
                <div className="text-center mt-10 xl:mt-0 xl:mb-8">
                    <h1 className="xl:text-6xl text-2xl sm:text-4xl md:text-5xl text-[#264653] font-semibold">
                        Contact Us
                    </h1>
                    <h2 className="text-2xl sm:text-2xl md:text-4xl text-[#2A9D8F] mt-4 font-medium">
                        Get in Touch with Our Team
                    </h2>
                </div>

                {/* Formularz kontaktowy */}
                <div className="w-full max-w-3xl bg-[#F8F9FA] p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl text-center font-semibold text-[#264653]">
                        We’d love to hear from you!
                    </h3>

                    <form className="mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg text-[#343A40]" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 mt-2 border border-[#E0E0E0] rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-lg text-[#343A40]" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 mt-2 border border-[#E0E0E0] rounded-lg"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-lg text-[#343A40]" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="w-full p-3 mt-2 border border-[#E0E0E0] rounded-lg"
                                required
                            ></textarea>
                        </div>
                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-[#2A9D8F] hover:bg-[#21867A] text-white font-medium rounded-full px-10 py-3 text-2xl shadow-md transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Dane kontaktowe */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl text-[#264653] font-semibold">
                        Or Reach Us Through:
                    </h3>
                    <ul className="text-xl text-[#343A40] mt-4 pb-4">
                        <li>Email: <span className="font-semibold text-[#2A9D8F]">contact@vacuumcleanerexpert.com</span></li>
                        <li>Phone: <span className="font-semibold text-[#2A9D8F]">+123 456 7890</span></li>
                        <li>Address: <span className="font-semibold text-[#2A9D8F]">123 Vacuum St, Clean City, 12345</span></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
