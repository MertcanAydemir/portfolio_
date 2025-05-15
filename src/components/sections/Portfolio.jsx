import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Portfolio() {
    const projects = [
        {
            title: "E-ticaret Platformu",
            description: "Modern ve kullanıcı dostu bir e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi.",
            tags: ["React", "Node.js", "MongoDB"],
            image: (
                <svg className="w-full h-48 bg-blue-100" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#DBEAFE" />
                    <rect x="50" y="50" width="500" height="300" fill="#BFDBFE" rx="8" />
                    <rect x="100" y="100" width="150" height="150" fill="#93C5FD" rx="4" />
                    <rect x="300" y="100" width="200" height="30" fill="#60A5FA" rx="4" />
                    <rect x="300" y="150" width="200" height="20" fill="#3B82F6" rx="4" />
                    <rect x="300" y="190" width="150" height="20" fill="#2563EB" rx="4" />
                    <rect x="100" y="280" width="400" height="40" fill="#1D4ED8" rx="4" />
                </svg>
            ),
            demoLink: "#",
            githubLink: "https://github.com/MertcanAydemir",
        },
        {
            title: "Görev Yönetim Uygulaması",
            description: "Kanban tarzı görev yönetim uygulaması. Sürükle-bırak özelliği, görev atama ve bildirimler içerir.",
            tags: ["Vue.js", "Firebase", "Tailwind CSS"],
            image: (
                <svg className="w-full h-48 bg-green-100" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#DCFCE7" />
                    <rect x="50" y="50" width="500" height="300" fill="#BBF7D0" rx="8" />
                    <rect x="75" y="100" width="120" height="200" fill="#86EFAC" rx="4" />
                    <rect x="240" y="100" width="120" height="200" fill="#4ADE80" rx="4" />
                    <rect x="405" y="100" width="120" height="200" fill="#22C55E" rx="4" />
                    <rect x="90" y="120" width="90" height="30" fill="#16A34A" rx="4" />
                    <rect x="90" y="170" width="90" height="30" fill="#16A34A" rx="4" />
                    <rect x="255" y="120" width="90" height="30" fill="#15803D" rx="4" />
                    <rect x="420" y="120" width="90" height="30" fill="#166534" rx="4" />
                </svg>
            ),
            demoLink: "#",
            githubLink: "https://github.com/MertcanAydemir",
        },
        {
            title: "Hava Durumu Uygulaması",
            description: "Konuma dayalı hava durumu tahmini uygulaması. 7 günlük tahmin ve saatlik detaylar sunar.",
            tags: ["JavaScript", "API", "CSS3"],
            image: (
                <svg className="w-full h-48 bg-indigo-100" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#E0E7FF" />
                    <rect x="50" y="50" width="500" height="300" fill="#C7D2FE" rx="8" />
                    <circle cx="150" cy="150" r="60" fill="#A5B4FC" />
                    <path d="M350,120 Q400,80 450,120 Q500,160 450,200 Q400,240 350,200 Q300,160 350,120 Z" fill="#6366F1" />
                    <rect x="100" y="250" width="400" height="60" fill="#4F46E5" rx="4" />
                    <rect x="100" y="250" width="70" height="60" fill="#4338CA" rx="4" />
                    <rect x="180" y="250" width="70" height="60" fill="#3730A3" rx="4" />
                    <rect x="260" y="250" width="70" height="60" fill="#312E81" rx="4" />
                    <rect x="340" y="250" width="70" height="60" fill="#1E1B4B" rx="4" />
                    <rect x="420" y="250" width="70" height="60" fill="#312E81" rx="4" />
                </svg>
            ),
            demoLink: "#",
            githubLink: "https://github.com/MertcanAydemir",
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
                            <div className="w-full h-48 overflow-hidden">
                                {project.image}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>

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

                                <div className="flex justify-between">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            className="text-primary hover:text-blue-700 font-medium transition-colors flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt className="mr-1" /> Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        className="text-dark hover:text-primary transition-colors flex items-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="mr-1" /> Kaynak Kod
                                    </a>
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
                        className="inline-flex items-center bg-dark hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                    >
                        <FaGithub className="mr-2" /> Daha Fazla Proje İçin GitHub Profilimi Ziyaret Edin
                    </a>
                </div>
            </div>
        </section>
    );
}