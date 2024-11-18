export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#264653] text-[#F8F9FA]">
            <div className="max-w-7xl mx-auto text-center space-y-4 py-6">
                {/* Logo / Nazwa firmy */}
                <div>
                    <p className="text-xl font-bold">Expert Vacuum Cleaners</p>
                </div>

                {/* Tekst praw autorskich */}
                <div>
                    <p className="text-sm">© {currentYear} Expert Vacuum Cleaners. All rights reserved.</p>
                </div>

                {/* Ikony mediów społecznościowych */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F8F9FA] hover:text-[#3B5998] transition duration-300"
                    >
                        <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F8F9FA] hover:text-[#E4405F] transition duration-300"
                    >
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F8F9FA] hover:text-[#1DA1F2] transition duration-300"
                    >
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}