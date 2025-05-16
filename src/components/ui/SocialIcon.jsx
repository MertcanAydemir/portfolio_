import React from 'react';

export function SocialIcon({
                               icon,
                               href,
                               label,
                               className = '',
                               ...props
                           }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white/20 hover:bg-white/30 w-12 h-12 flex items-center justify-center rounded-full transition-colors ${className}`}
            aria-label={label}
            {...props}
        >
            {icon}
        </a>
    );
}