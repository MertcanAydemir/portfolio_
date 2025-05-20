import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name || formData.name.length < 2) {
            newErrors.name = "İsim en az 2 karakter olmalıdır";
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Geçerli bir e-posta adresi girin";
        }

        if (!formData.message || formData.message.length < 10) {
            newErrors.message = "Mesaj en az 10 karakter olmalıdır";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            // Form gönderimi simülasyonu
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ ...formData, message: "" });
            }, 1000);
        }
    };

    return (
        <section
            id="contact"
            className="section py-16 text-white"
            style={{ background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)" }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-12 text-center">İletişime Geç</h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-2xl mr-4">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">E-posta</h4>
                                        <a
                                            href="mailto:mertcanaydemir973@gmail.com"
                                            className="text-white hover:text-blue-200 transition-colors"
                                        >
                                            mertcanaydemir973@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-4">
                                        <FaGithub />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">GitHub</h4>
                                        <a
                                            href="https://github.com/MertcanAydemir"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-200 transition-colors"
                                        >
                                            github.com/MertcanAydemir
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-4">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">Konum</h4>
                                        <p>Türkiye/Balıkesir</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-medium mb-4">Sosyal Medya</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/MertcanAydemir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                                    >
                                        <FaXTwitter className="text-xl" />
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                                    >
                                        <FaYoutube className="text-xl" />
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                                    >
                                        <FaFacebook className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-white p-8 rounded-lg shadow-md text-dark">
                            <h3 className="text-2xl font-semibold mb-6 text-dark">Mesaj Gönder</h3>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <h4 className="text-xl font-medium mb-2 text-primary">Teşekkürler!</h4>
                                    <p className="mb-4">Mesajınız başarıyla gönderildi.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                    >
                                        Yeni Mesaj Gönder
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                            Ad Soyad
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            placeholder="Adınız ve soyadınız"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                            E-posta
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            placeholder="E-posta adresiniz"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                            Mesaj
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            placeholder="Mesajınız"
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}