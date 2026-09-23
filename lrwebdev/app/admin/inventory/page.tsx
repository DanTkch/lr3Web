'use client';

import { FormEvent } from 'react';
import './inventory.css';

export default function AdminInventoryPage() {
    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
    };

    const handleSaveAll = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="page-title-box">
                <h1>Облік залишків та зміна цін</h1>
            </div>

            <div className="admin-card search-card">
                <form onSubmit={handleSearch} className="search-form">
                    <label htmlFor="search" className="form-label">
                        Пошук:
                    </label>
                    <div className="search-input-group">
                        <input
                            type="search"
                            id="search"
                            name="q"
                            placeholder="Назва або SKU..."
                            className="form-control"
                        />
                        <button type="submit" className="btn btn-accent">
                            Шукати
                        </button>
                    </div>
                </form>
            </div>

            <form onSubmit={handleSaveAll} className="inventory-form">
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Назва товару</th>
                            <th>Категорія</th>
                            <th>Ціна (грн)</th>
                            <th>Залишок</th>
                            <th>Статус</th>
                            <th>Дії</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <code className="sku-code">MILK-PAST-01</code>
                            </td>
                            <td className="product-title-cell">Молоко пастеризоване 2.5%</td>
                            <td>Молочна продукція</td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue="42.00"
                                    step="0.5"
                                    className="form-control table-input-price"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue="45"
                                    min="0"
                                    className="form-control table-input-stock"
                                />
                            </td>
                            <td>
                                <span className="status-badge status-success">В наявності</span>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-outline">
                                    Зберегти
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code className="sku-code">VEG-APP-002</code>
                            </td>
                            <td className="product-title-cell">Яблука «Голден»</td>
                            <td>Овочі та фрукти</td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue="35.00"
                                    step="0.5"
                                    className="form-control table-input-price"
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue="6"
                                    min="0"
                                    className="form-control table-input-stock"
                                />
                            </td>
                            <td>
                                <span className="status-badge status-warning">Закінчується</span>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-outline">
                                    Зберегти
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-actions table-actions">
                    <button type="submit" className="btn btn-primary">
                        Зберегти всі зміни у таблиці
                    </button>
                </div>
            </form>
        </>
    );
}