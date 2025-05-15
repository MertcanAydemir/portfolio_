import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-dark text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-lg font-semibold">Mertcan Aydemir</p>
                        <p className="text-gray-400">Bilgisayar Mühendisi</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/MertcanAydemir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} Tüm Hakları Saklıdır</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}