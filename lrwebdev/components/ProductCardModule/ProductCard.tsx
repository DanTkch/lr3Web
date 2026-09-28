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

    const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'added'>('idle');

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

        setButtonState('loading');

        await new Promise((resolve) => setTimeout(resolve, 600));

        setButtonState('added');

        setToast({
            show: true,
            message: `«${title}» успішно додано в кошик!`,
            type: 'success',
        });

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
