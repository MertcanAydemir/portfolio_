import React, { forwardRef } from 'react';

export const Input = forwardRef(({
                                     type = 'text',
                                     label,
                                     id,
                                     error,
                                     className = '',
                                     ...props
                                 }, ref) => {
    const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors";
    const errorClasses = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "";
    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`;

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                className={combinedClasses}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
});