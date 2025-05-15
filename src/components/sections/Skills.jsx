import { useState, useEffect, useRef } from "react";

export function Skills() {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);

    const technicalSkills = [
        { name: "HTML/CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React.js", percentage: 80 },
        { name: "Node.js", percentage: 75 },
        { name: "MongoDB", percentage: 70 },
    ];

    const otherSkills = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "UI/UX Tasarım",
            description: "Kullanıcı odaklı, estetik ve kullanımı kolay arayüzler tasarlama"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Responsive Tasarım",
            description: "Tüm cihazlarda mükemmel çalışan web uygulamaları geliştirme"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            title: "Veritabanı Yönetimi",
            description: "Etkili veri modelleme ve veritabanı yapılandırma becerileri"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Git & GitHub",
            description: "Versiyon kontrolü ve ekip çalışması için Git ve GitHub kullanımı"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animated]);

    return (
        <section id="skills" ref={sectionRef} className="section py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-12 text-center">Neler Yapabilirim</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold font-['Poppins'] mb-6">Teknik Beceriler</h3>

                        {technicalSkills.map((skill, index) => (
                            <div className="mb-6" key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span>{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: animated ? `${skill.percentage}%` : "0%" }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold font-['Poppins'] mb-6">Diğer Beceriler</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {otherSkills.map((skill, index) => (
                                <div className="p-6 bg-white rounded-lg shadow-md" key={index}>
                                    <div className="text-primary mb-4">
                                        {skill.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
                                    <p className="text-gray-600">
                                        {skill.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}