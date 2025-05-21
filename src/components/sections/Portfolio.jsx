import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

export function Portfolio() {
    const projects = [
        {
            title: "Regresyon Araştırmam",
            description: "Regresyon analizi üzerine yaptığım çalışmada, değişkenler arasındaki ilişkileri istatistiksel olarak inceleyerek verileri yorumlama ve geleceğe yönelik tahminlerde bulunma becerisi kazandım.",
            tags: [],
            image: (
                <img src="/Photograph/dogrusal-linear-regresyon.jpeg" alt="Regresyon"  />
            ),
            pdfLink: "/pdf_file/linear_regresyon.pdf",
        },
        {
            title: "Çoklu Linear Regresyon Araştırmam",
            description: "Linear regresyon üzerine yaptığım çalışmada, bağımlı ve bağımsız değişkenler arasındaki doğrusal ilişkiyi analiz ederek veri setlerinden anlamlı sonuçlar çıkarma ve geleceğe yönelik öngörülerde bulunma yetkinliği edindim.",
            tags: [],
            image: (
                <img src="/Photograph/Çoklu_lineer_regresyon.png" alt="Çoklu Linear Regresyon" width="300" />
            ),
             pdfLink: "/pdf_file/coklu_linear_regresyon.pdf",

        },
        {
            title: "Newton-Raphson Yöntemi Araştırmam",
            description: "Newton-Raphson Yöntemi’ni nümerik analiz kapsamında araştırarak öğrenme fırsatı buldum ve bu sayede denklemlerin köklerini hızlı ve etkili bir şekilde bulmayı sağlayan güçlü bir yöntem olduğunu kavradım.",
            tags: [],
            image: (
                <img src="/Photograph/Newton-Raphson-Method.png" alt="Newton-Raphson" width="250"/>
            ),
            pdfLink: "/pdf_file/MertcanAydemir_202313709075_Nümerik.pdf"
        },
        {
            title: "Silah Lisanslama Ve Satış Uyguluması",
            description: "Bir silah sistemin alışı için yapılması gerekenler ve satış işlemleri için bir uygulama tasarladım.",
            tags: ["PyQt5", "SqLite", "Python"],
            image: (
                <img src="/Photograph/Silah_sistemleri.jpg" alt="Silah Lisanslama Ve Satış" width="500" />
            ),
            githubLink: "https://github.com/MertcanAydemir/arms_licensing_and_sales",
        },
        {
            title: "Soru Bankası Uygulaması",
            description: "Soru bankası uygulamam, kullanıcıların kendi sorularını hazırlayıp sisteme yükleyebildiği kişisel ve özelleştirilebilir bir soru yönetim platformudur.",
            tags: ["PyQt5", "Python"],
            image: (
                <img src="/Photograph/kitap.webp" alt="Soru Bankası"  />
            ),
            githubLink: "https://github.com/MertcanAydemir/question_bank_",
        },
        {
            title: "Metin Düzenleyici Uygulaması",
            description: "Metin düzenleyici uygulamam, kullanıcıların yazılarını oluşturup düzenleyebileceği basit ve işlevsel bir yazım aracı olarak tasarlanmıştır.",
            tags: ["PyQt5", "Python"],
            image: (
                <img src="/Photograph/metin_düzenleyeci.png" alt="Metin Düzenleyici"  />
            ),
            githubLink: "https://github.com/MertcanAydemir/text_editor_",
        },
    ];

    return (
        <section id="portfolio" className="section py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-12 text-center">Portfolyo</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
                        >
                            <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                                {project.image}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.pdfLink && (
                                        <a
                                            href={project.pdfLink}
                                            className="text-red-600 hover:text-red-800 font-medium transition-colors flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaFilePdf className="mr-1" /> PDF
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            className="text-gray-800 hover:text-black transition-colors flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub className="mr-1" /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/MertcanAydemir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                    >
                        <FaGithub className="mr-2" /> Daha Fazla Proje İçin GitHub Profilimi Ziyaret Edin
                    </a>
                </div>
            </div>
        </section>
    );
}
