import React from 'react';

export function Section({
                            children,
                            id,
                            title,
                            subtitle,
                            className = '',
                            backgroundClass = 'bg-white',
                            ...props
                        }) {
    return (
        <section id={id} className={`section py-16 ${backgroundClass} ${className}`} {...props}>
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-4">{title}</h2>
                        )}
                        {subtitle && (
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}