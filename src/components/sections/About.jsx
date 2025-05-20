import React from 'react';

export function About() {
    return (
        <section id="about" className="section py-16 bg-gradient text-white" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)" }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-12 text-center">Ben Kimim</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div>
                            <img
                            src="https://i.postimg.cc/pTYMF8xn/Whats-App-Image-2025-05-18-at-18-58-35-1.jpg"
                        />

                        </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                            <p className="mb-6 text-lg leading-relaxed">
                                Ben Mertcan Aydemir, 22 yaşındayım ve Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenim görmekteyim. Sporla iç içe bir yaşam tarzını benimsiyorum; özellikle koşu, yüzme, futbol ve basketbol gibi aktivitelerle ilgileniyorum.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed">
                                Akademik hayatımda ise yazılım geliştirme alanında kendimi sürekli olarak geliştirmeye çalışıyorum. Bu zamana kadar silah lisanslama ve satışı üzerine bir proje ile soru bankası sistemine dayalı bir masaüstü uygulaması geliştirdim. Ayrıca regresyon ve lineer regresyon konularında bireysel araştırmalar yaparak veri bilimi alanında da kendimi geliştirmeyi hedefliyorum.
                            </p>
                            <p className="text-lg leading-relaxed">
                                En büyük amacım, bu sektörde uzmanlaşarak uluslararası ölçekte kendi teknoloji şirketimi kurmak ve global pazarda söz sahibi olmaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}