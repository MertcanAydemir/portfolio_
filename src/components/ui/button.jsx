import React from 'react';

export function Button({
                           children,
                           variant = 'primary',
                           size = 'md',
                           className = '',
                           ...props
                       }) {
    const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-primary hover:bg-blue-600 text-white focus:ring-primary",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
        dark: "bg-dark hover:bg-gray-800 text-white focus:ring-dark",
        ghost: "text-gray-700 hover:text-primary hover:bg-blue-50 focus:ring-primary"
    };

    const sizeClasses = {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-6",
        lg: "py-3 px-8 text-lg"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}