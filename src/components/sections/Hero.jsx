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
                            <img
                                src="https://i.postimg.cc/13P601pn/Whats-App-Image-2025-05-18-at-18-51-55.jpg"
                                alt="Mertcan Aydemir"
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-xl"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}