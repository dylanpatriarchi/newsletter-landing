'use client';

import { ReactNode } from 'react';

export function BentoGrid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6">
            {children}
        </div>
    );
}

export function BentoCard({
    children,
    className = "",
    title,
    description
}: {
    children?: ReactNode;
    className?: string;
    title: string;
    description: string;
}) {
    return (
        <div className={`glass-liquid rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden group hover:border-[#3B82F6] transition-all duration-500 ${className}`}>
            <div>
                <h3 className="text-2xl font-bold mb-2 text-tight uppercase">{title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{description}</p>
            </div>
            <div className="mt-8">
                {children}
            </div>
        </div>
    );
}
