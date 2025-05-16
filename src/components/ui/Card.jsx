import React from 'react';

export function Card({
                         children,
                         title,
                         className = '',
                         ...props
                     }) {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
            {title && (
                <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}