import { useState, useEffect } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../lib/constants";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm"
            }`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold font-['Poppins'] text-primary">
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}>
                        MA
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-medium hover:text-primary transition-colors"
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-4 py-3 space-y-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block font-medium py-2 hover:text-primary transition-colors"
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Sosyal Medya İkonları */}
            <div className="hidden md:flex justify-center space-x-4 mt-4">
                {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon; // Burada icon component olarak geliyor
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary transition-colors"
                            aria-label={social.name}
                        >
                            <Icon className="text-xl" />
                        </a>
                    );
                })}
            </div>
        </header>
    );
}
