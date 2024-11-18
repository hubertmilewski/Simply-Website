import { Link } from "react-router-dom";
export default function Oferts() {
    return (
        <main>
            <div className="flex flex-col xl:h-screen items-center justify-center xl:space-y-10 space-y-6 px-5 sm:px-10 md:px-20">
                {/* Nagłówki */}
                <div className="text-center mt-10 xl:mt-0 xl:mb-8">
                    <h1 className="xl:text-6xl text-2xl sm:text-4xl md:text-5xl text-[#264653] font-semibold">
                        Our Offer
                    </h1>
                    <h2 className="text-2xl sm:text-2xl md:text-4xl text-[#2A9D8F] mt-4 font-medium">
                        Choose the Perfect Vacuum Cleaner for Your Needs
                    </h2>
                </div>

                {/* Tekst główny */}
                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4">
                    At <span className="font-semibold text-[#2A9D8F]">Vacuum Cleaner Expert</span>, we offer a wide selection of modern vacuum cleaners designed to make it easier to keep your home and office spotless. Whether you're looking for something compact for everyday use or a heavy-duty industrial vacuum, we have the perfect solution for you.
                </p>

                <div className="mt-10 space-y-8">
                    {/* Kategoria produktów */}
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-[#264653]">
                            Home Vacuum Cleaners
                        </h3>
                        <p className="text-xl text-[#343A40] mt-4">
                            Lightweight, easy-to-use models perfect for everyday cleaning needs. They provide powerful suction and are ideal for cleaning carpets, floors, and upholstery.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <h3 className="text-2xl font-semibold text-[#264653]">
                            Bagless Vacuum Cleaners
                        </h3>
                        <p className="text-xl text-[#343A40] mt-4">
                            Modern, bagless models that are incredibly convenient, eliminating the need for bag replacements. They are perfect for quick cleaning and maintaining order in your home.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <h3 className="text-2xl font-semibold text-[#264653]">
                            Industrial Vacuum Cleaners
                        </h3>
                        <p className="text-xl text-[#343A40] mt-4">
                            Heavy-duty vacuum cleaners designed for intensive use. Perfect for businesses, workshops, and large spaces that require regular, efficient cleaning.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <h3 className="text-2xl font-semibold text-[#264653]">
                            Vacuum Cleaner Accessories
                        </h3>
                        <p className="text-xl text-[#343A40] mt-4">
                            A wide range of accessories including brushes, filters, hoses, and bags that will make your cleaning routine even easier and more efficient.
                        </p>
                    </div>
                </div>

                {/* Dlaczego warto wybrać nas? */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-[#2A9D8F]">Why Choose Us?</h3>
                    <ul className="text-xl text-[#343A40] mt-4">
                        <li>Wide range of products tailored to your needs</li>
                        <li>High-quality vacuum cleaners from trusted brands</li>
                        <li>Fast and efficient delivery</li>
                        <li>Expert advice and professional customer support</li>
                    </ul>
                </div>

                {/* Przyciski */}
                <div className="mt-6 pb-4">
                    <Link to="/opinions" className="bg-[#2A9D8F] hover:bg-[#21867A] text-white font-medium rounded-full px-10 py-3 text-2xl shadow-md transition-all duration-300">
                        Explore Our Offer
                    </Link>
                </div>
            </div>
        </main>
    );
}
