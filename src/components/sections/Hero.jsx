export function Hero() {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="section pt-32 pb-16 bg-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h1 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
                            <span className="block">Merhaba, ben</span>
                            <span className="text-primary block mt-2">Mertcan Aydemir</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Bilgisayar Mühendisi
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                                onClick={() => scrollToSection("#portfolio")}
                            >
                                Projelerim
                            </button>
                            <button
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition-colors"
                                onClick={() => scrollToSection("#contact")}
                            >
                                İletişime Geç
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-300 border-8 border-white shadow-xl flex items-center justify-center">
                            <svg className="w-32 h-32 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}