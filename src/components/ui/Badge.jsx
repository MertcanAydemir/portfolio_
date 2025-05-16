import React from 'react';

export function Badge({
                          children,
                          variant = 'primary',
                          className = '',
                          ...props
                      }) {
    const baseClasses = "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded";

    const variantClasses = {
        primary: "bg-blue-100 text-blue-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        dark: "bg-gray-100 text-gray-800"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <span className={combinedClasses} {...props}>
      {children}
    </span>
    );
}