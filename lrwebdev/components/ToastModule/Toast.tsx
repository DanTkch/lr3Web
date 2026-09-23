'use client';

import { useEffect, useState } from 'react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}

export default function Toast({
                                  message,
                                  type = 'success',
                                  duration = 3000,
                                  onClose,
                              }: ToastProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Запускаємо таймер закриття
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        setIsExiting(true);
        // Даємо час для відтворення анімації зникнення перед видаленням з DOM
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠️';
            case 'info':
            default:
                return 'ℹ️';
        }
    };

    return (
        <div className={`toast-notification toast-${type} ${isExiting ? 'toast-exit' : 'toast-enter'}`}>
            <span className="toast-icon">{getIcon()}</span>
            <span className="toast-message">{message}</span>
            <button
                type="button"
                onClick={handleClose}
                className="toast-close-btn"
                aria-label="Закрити сповіщення"
            >
                &times;
            </button>
        </div>
    );
}