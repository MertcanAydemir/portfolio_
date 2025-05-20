import { FaGithub, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

/**
 * Sosyal medya linkleri (icon component referansları)
 */
export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/MertcanAydemir", icon: FaGithub },
    { name: "Twitter", url: "#", icon: FaTwitter },
    { name: "Instagram", url: "#", icon: FaInstagram },
    { name: "YouTube", url: "#", icon: FaYoutube },
    { name: "Facebook", url: "#", icon: FaFacebook },
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
    { name: "JavaScript", percentage: 80 },
    { name: "React.js", percentage: 75 },
    { name: "Node.js", percentage: 75 },
    { name: "", percentage: 85 },
];

/**
 * Projeler
 */
export const PROJECTS = [
    {
        title: "Regresyon Araştırmam",
        description: "Regresyon analizi üzerine yaptığım çalışmada, değişkenler arasındaki ilişkileri istatistiksel olarak inceleyerek verileri yorumlama ve geleceğe yönelik tahminlerde bulunma becerisi kazandım.",
        tags: [],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    },
    {
        title: "Linear Regresyon Araştırmam",
        description: "Linear regresyon üzerine yaptığım çalışmada, bağımlı ve bağımsız değişkenler arasındaki doğrusal ilişkiyi analiz ederek veri setlerinden anlamlı sonuçlar çıkarma ve geleceğe yönelik öngörülerde bulunma yetkinliği edindim.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    },
    {
        title: "Silah Lisanslama Ve Satış Uygulaması",
        description: "Bir silah sistemin alışı için yapılması gerekenler ve satış işlemleri.",
        tags: ["PyQt5", "SqLite", "QSS"],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    },
    {
        title: "Newton-Raphson Yöntemi Araştırmam",
        description: "Newton-Raphson Yöntemi’ni nümerik analiz kapsamında araştırarak öğrenme fırsatı buldum ve bu sayede denklemlerin köklerini hızlı ve etkili bir şekilde bulmayı sağlayan güçlü bir yöntem olduğunu kavradım.",
        tags: [],
        demoLink: "#",
        githubLink: "https://github.com/MertcanAydemir",
    }
];
