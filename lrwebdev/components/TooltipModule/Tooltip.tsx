'use client';

import { useState, ReactNode, useRef } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
    text: string;
    position?: TooltipPosition;
    delay?: number; // затримка перед появою в мілісекундах
    children: ReactNode;
}

export default function Tooltip({
                                    text,
                                    position = 'top',
                                    delay = 150,
                                    children,
                                }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
        >
            {children}
            {isVisible && (
                <div className={`tooltip-bubble tooltip-${position}`} role="tooltip">
                    {text}
                </div>
            )}
        </div>
    );
}