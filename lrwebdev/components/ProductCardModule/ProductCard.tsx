'use client';

import { useState } from 'react';
import Image from 'next/image';
import Toast, { ToastType } from '../ToastModule/Toast';
import './ProductCard.css';
import Tooltip from '../TooltipModule/Tooltip';

export interface ProductDetail {
    label: string;
    value: string;
}

export interface Product {
    id: string;
    title: string;
    imageSrc: string;
    price: number;
    details: ProductDetail[];
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { title, price, imageSrc, details } = product;

    // Динамічний стан кнопки: 'idle' | 'loading' | 'added'
    const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'added'>('idle');

    // Стан для Toast-сповіщення
    const [toast, setToast] = useState<{
        show: boolean;
        message: string;
        type: ToastType;
    }>({
        show: false,
        message: '',
        type: 'success',
    });

    const handleAddToCart = async () => {
        if (buttonState !== 'idle') return;

        // 1. Переводимо кнопку в стан завантаження
        setButtonState('loading');

        // Імітація запиту до API / збереження в State
        await new Promise((resolve) => setTimeout(resolve, 600));

        // 2. Змінюємо стан на "Додано"
        setButtonState('added');

        // 3. Показуємо спливаюче сповіщення
        setToast({
            show: true,
            message: `«${title}» успішно додано в кошик!`,
            type: 'success',
        });

        // 4. Через 1.8 секунди повертаємо кнопку в початковий стан
        setTimeout(() => {
            setButtonState('idle');
        }, 1800);
    };

    return (
        <>
            <div className="product-card">
                <div className="product-img-wrapper">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="product-img"
                    />
                </div>

                <div className="product-details">
                    <h3 className="product-title" title={title}>
                        {title}
                        <Tooltip text="Безкоштовна доставка для замовлень від 500 грн" position="right">
                            <span className="shipping-info-badge">🚚 Безкоштовна доставка</span>
                        </Tooltip>
                    </h3>

                    {/* Вивід списку деталей з об'єкта product */}
                    <div className="product-info-list">
                        {details?.map((detail, index) => (
                            <p key={index} className="product-info">
                                <span className="info-label">{detail.label}:</span> {detail.value}
                            </p>
                        ))}
                    </div>

                    <div className="product-price">
                        {price} <span className="currency">грн</span>
                    </div>

                    {/* Динамічна кнопка */}
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={buttonState !== 'idle'}
                        className={`btn btn-add ${
                            buttonState === 'loading'
                                ? 'btn-loading'
                                : buttonState === 'added'
                                    ? 'btn-added'
                                    : 'btn-primary'
                        }`}
                    >
                        {buttonState === 'loading' && (
                            <>
                                <span className="spinner" /> Додаємо...
                            </>
                        )}
                        {buttonState === 'added' && '✓ Додано'}
                        {buttonState === 'idle' && 'Додати до кошика'}
                    </button>
                </div>
            </div>

            {/* Динамічне Toast-сповіщення */}
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast((prev) => ({ ...prev, show: false }))}
                />
            )}
        </>
    );
}