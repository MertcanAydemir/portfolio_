/**
 * Sınıf adlarını birleştiren yardımcı fonksiyon
 * @param {string[]} classes - Birleştirilecek sınıf adları
 * @returns {string} Birleştirilmiş sınıf adları
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * Sayfa içinde belirli bir elemana kaydıran yardımcı fonksiyon
 * @param {string} elementId - Hedef elementin ID'si
 * @param {Object} options - Kaydırma seçenekleri
 */
export function scrollToElement(elementId, options = { behavior: 'smooth' }) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView(options);
    }
}

/**
 * E-posta doğrulama fonksiyonu
 * @param {string} email - Doğrulanacak e-posta adresi
 * @returns {boolean} E-posta geçerli mi?
 */
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Rastgele ID oluşturan fonksiyon
 * @returns {string} Benzersiz ID
 */
export function generateId() {
    return Math.random().toString(36).substring(2, 9);
}