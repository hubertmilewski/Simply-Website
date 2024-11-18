import { useState } from "react";
import {Link} from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="static xl:fixed bg-[#F8F9FA] xl:bg-transparent w-full sm:bg-[#F8F9FA] text-[#264653] xl:shadow-none shadow-md">
            <div className="flex justify-between px-8 xl:py-8 py-6 xl:px-32">
                <div>
                    <h1 className="font-semibold text-2xl text-[#264653] hover:text-[#1B3A4B] duration-300">
                        Vacuum Cleaner Expert
                    </h1>
                </div>
                <div>
                    <nav>
                        <ul className="xl:flex text-center mt-2 space-x-8 hidden">
                            <li>
                                <Link to="/home" className="font-medium text-xl text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="font-medium text-xl text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/oferts" className="font-medium text-xl text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                    Oferts
                                </Link>
                            </li>
                            <li>
                                <Link to="/opinions" className="font-medium text-xl text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                    Opinions
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden xl:flex px-12">
                    <Link to="/contact" className="font-medium bg-[#2A9D8F] text-white hover:bg-[#21867A] rounded-full duration-300 px-6 py-2 text-xl shadow-md">
                        Contact Us
                    </Link>
                </div>
                <button className="xl:hidden text-[#264653]" onClick={toggleMenu}>
                    {menuOpen ? <i className="fa-solid fa-bars-staggered"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
            </div>
            {menuOpen && (
                <nav className="fixed w-full bg-[#F8F9FA] px-8 py-4 xl:hidden shadow-md">
                    <ul className="flex flex-col font-medium items-center justify-center space-y-4">
                        <li>
                            <Link to="/home" className="text-lg text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/oferts" className="text-lg text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                Oferts
                            </Link>
                        </li>
                        <li>
                            <Link to="/opinions" className="text-lg text-[#264653] hover:text-[#1B3A4B] duration-300" onClick={closeMenu}>
                                Opinions
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
