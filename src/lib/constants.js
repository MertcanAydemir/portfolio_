import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/**
 * Sosyal medya linkleri
 */
export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: "https://github.com/MertcanAydemir",
        icon: <FaGithub className="text-xl" />,
    },
    {
        name: "Twitter",
        url: "#",
        icon: <FaXTwitter className="text-xl" />,
    },
    {
        name: "Instagram",
        url: "#",
        icon: <FaInstagram className="text-xl" />,
    },
    {
        name: "YouTube",
        url: "#",
        icon: <FaYoutube className="text-xl" />,
    },
    {
        name: "Facebook",
        url: "#",
        icon: <FaFacebook className="text-xl" />,
    },
];

/**
 * İletişim bilgileri
 */
export const CONTACT_INFO = {
    email: "mertcanaydemir973@gmail.com",
    location: "Türkiye",
};

/**
 * Navigasyon linkleri
 */
export const NAV_LINKS = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Ben Kimim", href: "#about" },
    { name: "Neler Yapabilirim", href: "#skills" },
    { name: "Portfolyo", href: "#portfolio" },
    { name: "İletişim", href: "#contact" },
];

/**
 * Teknik beceriler
 */
export const TECHNICAL_SKILLS = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
];

/**
 * Projeler
 */
export const PROJECTS = [
    {
        title: "E-ticaret Platformu",
        description: "Modern ve kullanıcı dostu bir e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi.",
        tags: ["React", "Node.js", "MongoDB"],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    },
    {
        title: "Görev Yönetim Uygulaması",
        description: "Kanban tarzı görev yönetim uygulaması. Sürükle-bırak özelliği, görev atama ve bildirimler içerir.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    },
    {
        title: "Hava Durumu Uygulaması",
        description: "Konuma dayalı hava durumu tahmini uygulaması. 7 günlük tahmin ve saatlik detaylar sunar.",
        tags: ["JavaScript", "API", "CSS3"],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    }
];