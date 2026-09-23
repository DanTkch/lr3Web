'use client';

import { FormEvent } from 'react';
import './add-product.css'

export default function AdminAddProductPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="page-title-box">
                <h1>Додати новий товар на склад</h1>
            </div>

            <form onSubmit={handleSubmit} className="admin-form">
                <fieldset className="form-fieldset">
                    <legend className="form-legend">Основні дані</legend>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Назва товару:
                            </label>
                            <input type="text" id="name" name="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sku" className="form-label">
                                Артикул (SKU):
                            </label>
                            <input type="text" id="sku" name="sku" className="form-control" required />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="category" className="form-label">
                                Категорія:
                            </label>
                            <select id="category" name="category" className="form-select" required defaultValue="">
                                <option value="" disabled>
                                    -- Оберіть категорію --
                                </option>
                                <option value="vegetables">Овочі та фрукти</option>
                                <option value="dairy">Молочна продукція</option>
                                <option value="meat">М'ясо та птиця</option>
                                <option value="grocery">Бакалія</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Ціна та наявність</legend>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="price" className="form-label">
                                Ціна (грн):
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                step="0.01"
                                min="0"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock" className="form-label">
                                Кількість на складі:
                            </label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                min="0"
                                defaultValue={0}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Зображення</legend>
                    <div className="form-group">
                        <input type="file" id="image" name="image" accept="image/*" className="file-input" />
                    </div>
                </fieldset>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        Створити товар
                    </button>
                    <button type="reset" className="btn btn-reset">
                        Очистити
                    </button>
                </div>
            </form>
        </>
    );
}