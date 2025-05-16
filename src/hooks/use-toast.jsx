import { useState } from 'react';

// Benzersiz ID oluşturma fonksiyonu
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

/**
 * @typedef {Object} Toast
 * @property {string} id - Toast ID'si
 * @property {string} message - Toast mesajı
 * @property {string} [title] - Toast başlığı (opsiyonel)
 * @property {'success' | 'error' | 'warning' | 'info'} type - Toast tipi
 * @property {number} [duration=3000] - Toast süresi (ms)
 */

/**
 * Toast bildirimlerini yönetmek için özel hook
 * @returns {Object} Toast işlevleri ve durum
 */
export function useToast() {
    const [toasts, setToasts] = useState([]);

    /**
     * Yeni bir toast ekler
     * @param {Object} options - Toast özellikleri
     * @param {string} options.message - Toast mesajı
     * @param {string} [options.title] - Toast başlığı (opsiyonel)
     * @param {'success' | 'error' | 'warning' | 'info'} [options.type='info'] - Toast tipi
     * @param {number} [options.duration=3000] - Toast süresi (ms)
     * @returns {string} Eklenen toast'un ID'si
     */
    const toast = (options) => {
        const id = generateId();
        const newToast = {
            id,
            message: options.message,
            title: options.title,
            type: options.type || 'info',
            duration: options.duration || 3000
        };

        setToasts((prev) => [...prev, newToast]);

        // Otomatik kaldırma
        if (newToast.duration > 0) {
            setTimeout(() => {
                dismiss(id);
            }, newToast.duration);
        }

        return id;
    };

    /**
     * Başarı toast'u ekler
     * @param {string} message - Toast mesajı
     * @param {Object} [options] - Diğer seçenekler
     * @returns {string} Toast ID'si
     */
    const success = (message, options = {}) => {
        return toast({ message, type: 'success', ...options });
    };

    /**
     * Hata toast'u ekler
     * @param {string} message - Toast mesajı
     * @param {Object} [options] - Diğer seçenekler
     * @returns {string} Toast ID'si
     */
    const error = (message, options = {}) => {
        return toast({ message, type: 'error', ...options });
    };

    /**
     * Uyarı toast'u ekler
     * @param {string} message - Toast mesajı
     * @param {Object} [options] - Diğer seçenekler
     * @returns {string} Toast ID'si
     */
    const warning = (message, options = {}) => {
        return toast({ message, type: 'warning', ...options });
    };

    /**
     * Bilgi toast'u ekler
     * @param {string} message - Toast mesajı
     * @param {Object} [options] - Diğer seçenekler
     * @returns {string} Toast ID'si
     */
    const info = (message, options = {}) => {
        return toast({ message, type: 'info', ...options });
    };

    /**
     * Toast'u kaldırır
     * @param {string} id - Kaldırılacak toast ID'si
     */
    const dismiss = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    /**
     * Tüm toast'ları kaldırır
     */
    const dismissAll = () => {
        setToasts([]);
    };

    // Görünür toast bileşeni render etmek için
    const ToastContainer = () => {
        if (toasts.length === 0) return null;

        return (
            <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`p-4 rounded-md shadow-md max-w-xs animate-fade-in
              ${toast.type === 'success' ? 'bg-green-500 text-white' : ''}
              ${toast.type === 'error' ? 'bg-red-500 text-white' : ''}
              ${toast.type === 'warning' ? 'bg-yellow-500 text-white' : ''}
              ${toast.type === 'info' ? 'bg-blue-500 text-white' : ''}
            `}
                    >
                        {toast.title && (
                            <h4 className="font-semibold mb-1">{toast.title}</h4>
                        )}
                        <p>{toast.message}</p>
                        <button
                            onClick={() => dismiss(toast.id)}
                            className="absolute top-1 right-1 text-white opacity-70 hover:opacity-100"
                            aria-label="Kapat"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return {
        toast,
        success,
        error,
        warning,
        info,
        dismiss,
        dismissAll,
        toasts,
        ToastContainer
    };
}