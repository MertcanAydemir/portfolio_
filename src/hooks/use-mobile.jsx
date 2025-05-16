import { useState, useEffect } from 'react';

/**
 * Ekran boyutunun mobil olup olmadığını kontrol eden hook
 * @param {number} [breakpoint=768] - Mobil ekran boyutu sınırı
 * @returns {boolean} Ekran mobil boyutta mı?
 */
export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // İlk kontrol
        checkMobile();

        // Ekran boyutu değiştiğinde kontrol et
        window.addEventListener('resize', checkMobile);

        // Temizleme fonksiyonu
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, [breakpoint]);

    return isMobile;
}