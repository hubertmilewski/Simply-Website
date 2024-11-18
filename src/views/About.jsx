import { Link } from "react-router-dom";
export default function About() {
    return (
        <main>
            <div className="flex flex-col xl:h-screen items-center justify-center xl:space-y-10 space-y-6 px-5 sm:px-10 md:px-20">
                {/* Nagłówki */}
                <div className="text-center mt-10 xl:mt-0 xl:mb-4">
                    <h1 className="xl:text-6xl text-2xl sm:text-4xl md:text-5xl text-[#264653] font-semibold">
                        About Us
                    </h1>
                </div>

                {/* Tekst główny */}
                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4">
                    At <span className="font-semibold">Vacuum Cleaner Express</span>, we specialize in providing the highest quality
                    vacuum cleaners and accessories for your home and office. Our mission is to provide an effective, convenient,
                    and quick solution for everyone who is looking for <span className="font-semibold">reliable cleaning devices</span>.
                </p>
                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4">
                    Thanks to our passion for cleaning technology and many years of experience on the market, we offer a wide range
                    of vacuum cleaners tailored to various needs – from models intended for everyday use to professional devices for
                    intensive use. As a company, we place great emphasis on the quality of our products and services, offering our
                    customers <span className="font-semibold">proven, durable</span> and <span className="font-semibold">energy-saving equipment</span>.
                </p>
                <p className="text-xl md:text-2xl text-[#343A40] text-center max-w-4xl px-4">
                    What makes us different? <span className="font-semibold">Fast delivery</span>, <span className="font-semibold">competitive prices</span>
                    and <span className="font-semibold">comprehensive service</span>. We also offer after-sales service and technical support to ensure
                    that your device works flawlessly for many years. With our experience and commitment, you can be sure that each transaction
                    will provide you with <span className="font-semibold">complete satisfaction</span>.
                </p>
                <h2 className="text-2xl sm:text-2xl md:text-2xl text-[#2A9D8F] mt-4 font-medium text-center">
                    Vacuum Cleaner Express – vacuuming with <span className="font-semibold">class</span>, <span className="font-semibold">speed</span>
                    and <span className="font-semibold">effectiveness</span>.
                </h2>

                {/* Przyciski */}
                <div className="flex justify-center mt-6 pb-4">
                    <Link to="/oferts" className="bg-[#2A9D8F] hover:bg-[#21867A] text-white font-medium rounded-full px-10 py-3 text-2xl shadow-md transition-all duration-300">
                        See Oferts
                    </Link>
                </div>
            </div>
        </main>
    );
}
