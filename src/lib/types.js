/**
 * @typedef {Object} Project
 * @property {string} title - Proje başlığı
 * @property {string} description - Proje açıklaması
 * @property {string[]} tags - Proje etiketleri
 * @property {React.ReactNode} image - Proje görseli
 * @property {string} [demoLink] - Demo bağlantısı
 * @property {string} githubLink - GitHub bağlantısı
 */

/**
 * @typedef {Object} Skill
 * @property {string} name - Beceri adı
 * @property {number} percentage - Beceri yüzdesi
 */

/**
 * @typedef {Object} OtherSkill
 * @property {React.ReactNode} icon - Beceri ikonu
 * @property {string} title - Beceri başlığı
 * @property {string} description - Beceri açıklaması
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} name - Platform adı
 * @property {string} url - Sosyal medya bağlantısı
 * @property {React.ReactNode} icon - Sosyal medya ikonu
 */

/**
 * @typedef {Object} ContactForm
 * @property {string} name - Ad soyad
 * @property {string} email - E-posta adresi
 * @property {string} message - Mesaj
 */

// Tip tanımlamaları için boş bir nesne döndür (ES modülleri için)
export default {};