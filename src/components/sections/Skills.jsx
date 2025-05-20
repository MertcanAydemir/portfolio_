import React, { useState, useEffect, useRef } from "react";
import {
    FaLaptop,
    FaMobileAlt,
    FaDatabase,
    FaCodeBranch
} from "react-icons/fa";

export function Skills() {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);

    const technicalSkills = [
        { name: "HTML/CSS", percentage: 90 },
        { name: "Python", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "C#", percentage: 80 },
        { name: "React", percentage: 80 },
        { name: "Autodesk Fusion", percentage: 80 },
        { name: "MatLab", percentage: 80 },




    ];

    const otherSkills = [
        {
            icon: <FaLaptop className="h-8 w-8" />,
            title: "UI/UX Tasarım",
            description: "Kullanıcı odaklı, estetik ve kullanımı kolay arayüzler tasarlama"
        },
        {
            icon: <FaMobileAlt className="h-8 w-8" />,
            title: "Responsive Tasarım",
            description: "Tüm cihazlarda mükemmel çalışan web uygulamaları geliştirme"
        },
        {
            icon: <FaDatabase className="h-8 w-8" />,
            title: "Veritabanı Yönetimi",
            description: "Etkili veri ve veritabanı yapılandırma "
        },
        {
            icon: <FaCodeBranch className="h-8 w-8" />,
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