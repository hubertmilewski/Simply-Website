import {Link} from "react-router-dom";
export default function Home() {
    return (
        <main>
            <div className="flex flex-col h-screen items-center justify-center xl:space-y-10 space-y-6 px-5 sm:px-10 md:px-20">
                {/* Nagłówki */}
                <div className="text-center mt-10 xl:mt-0 xl:mb-8">
                    <h1 className="xl:text-6xl text-2xl sm:text-4xl md:text-5xl text-[#264653] font-semibold">
                        <span className="text-[#2A9D8F]">Expert</span> Vacuum Cleaners
                    </h1>
                    <h2 className="text-2xl sm:text-2xl md:text-4xl text-[#2A9D8F] mt-4 font-medium">
                        Your <span className="italic font-semibold">Cleaning Partner</span>!
                    </h2>
                </div>

                {/* Tekst główny */}
                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4">
                    At <span className="font-semibold text-[#2A9D8F]">Vacuum Cleaners Expert</span>, we offer a wide selection of <span className="font-semibold text-[#264653]">modern vacuum cleaners</span> that will make it easier to keep order in every home. Our <span className="italic font-semibold text-[#2A9D8F]">passion for cleanliness</span> is combined with experience - since <span className="font-semibold text-[#F4A261]">2010</span> we have been providing our clients with <span className="font-semibold text-[#2A9D8F]">proven solutions</span> and <span className="font-semibold text-[#E76F51]">professional service</span>.
                </p>

                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4 mt-4">
                    Check out our offer and discover how easily you can <span className="font-semibold text-[#2A9D8F]">keep clean</span>!
                </p>

                {/* Przyciski */}
                <div className="mt-6">
                    <Link to="/about" className="bg-[#2A9D8F] hover:bg-[#21867A] text-white font-medium rounded-full px-10 py-3 text-2xl shadow-md transition-all duration-300">
                        Learn More
                    </Link>
                </div>

                {/* Statystyki */}
                <div className="xl:flex hidden justify-center items-center text-center gap-24 mt-10">
                    <div className="text-[#2A9D8F] bg-[#F8F9FA] border border-[#E0E0E0] w-52 h-28 flex flex-col justify-center items-center rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-2xl">10k+</p>
                        <p className="text-[#343A40]">Sold Vacuums</p>
                    </div>
                    <div className="text-[#2A9D8F] bg-[#F8F9FA] border border-[#E0E0E0] w-52 h-28 flex flex-col justify-center items-center rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-2xl">98%</p>
                        <p className="text-[#343A40]">Good Opinion</p>
                    </div>
                    <div className="text-[#2A9D8F] bg-[#F8F9FA] border border-[#E0E0E0] w-52 h-28 flex flex-col justify-center items-center rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-2xl">10 years</p>
                        <p className="text-[#343A40] text-xs">Years in the Industry</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
