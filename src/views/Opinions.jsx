import { Link } from "react-router-dom";
export default function Opinions() {
    return (
        <main>
            <div className="flex flex-col xl:h-screen items-center justify-center xl:space-y-10 space-y-6 px-5 sm:px-10 md:px-20">
                {/* Nagłówki */}
                <div className="text-center mt-10 xl:mt-0 xl:mb-8">
                    <h1 className="xl:text-6xl text-2xl sm:text-4xl md:text-5xl text-[#264653] font-semibold">
                        Customer Reviews
                    </h1>
                    <h2 className="text-2xl sm:text-2xl md:text-4xl text-[#2A9D8F] mt-4 font-medium">
                        See What Our Happy Clients Say!
                    </h2>
                </div>

                {/* Opinie */}
                <div className="xl:grid xl:grid-cols-3 xl:gap-12 space-y-6 xl:space-y-0">
                    {/* Pierwsza opinia */}
                    <div className="bg-[#F8F9FA] p-12 rounded-lg shadow-lg text-center">
                        <p className="text-xl text-[#343A40] font-semibold">
                            "Vacuum Cleaner Expert has changed the way I clean my house! The vacuum is so powerful and easy to use. Highly recommend it!"
                        </p>
                        <p className="mt-4 text-[#2A9D8F] font-semibold">John D.</p>
                        <p className="text-[#343A40]">Satisfied Customer</p>
                    </div>

                    {/* Druga opinia */}
                    <div className="bg-[#F8F9FA] p-12 rounded-lg shadow-lg text-center">
                        <p className="text-xl text-[#343A40] font-semibold">
                            "Great customer service! I received my order quickly, and the vacuum works perfectly. Definitely worth the investment."
                        </p>
                        <p className="mt-4 text-[#2A9D8F] font-semibold">Sarah M.</p>
                        <p className="text-[#343A40]">Happy Client</p>
                    </div>

                    {/* Trzecia opinia */}
                    <div className="bg-[#F8F9FA] p-12 rounded-lg shadow-lg text-center">
                        <p className="text-xl text-[#343A40] font-semibold">
                            "I’ve never had such an efficient vacuum cleaner before. It’s perfect for my business. Highly recommend it to anyone!"
                        </p>
                        <p className="mt-4 text-[#2A9D8F] font-semibold">Michael T.</p>
                        <p className="text-[#343A40]">Business Owner</p>
                    </div>
                </div>

                {/* Przycisk dodania opinii */}
                <div className="mt-10 pb-4 text-center">
                <Link to="/contact" className="bg-[#2A9D8F] hover:bg-[#21867A] text-white font-medium rounded-full px-10 py-3 text-2xl shadow-md transition-all duration-300">
                        Contact to Us!
                    </Link>
                </div>
            </div>
        </main>
    );
}
