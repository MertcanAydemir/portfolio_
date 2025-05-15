export function About() {
    return (
        <section id="about" className="section py-16 bg-gradient text-white" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)" }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-12 text-center">Ben Kimim</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="rounded-lg shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm p-2">
                            <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="600" height="400" fill="#1E3A8A" fillOpacity="0.1"/>
                                <path d="M150,150 L450,150 L450,250 L150,250 Z" fill="#3B82F6" fillOpacity="0.5"/>
                                <circle cx="300" cy="200" r="50" fill="#6366F1" fillOpacity="0.8"/>
                                <path d="M200,100 L400,100 L400,300 L200,300 Z" stroke="white" strokeWidth="4" fill="none"/>
                                <text x="300" y="200" textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="monospace" fontSize="20">code</text>
                            </svg>
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