'use client';

import { FormEvent } from 'react';
import './FilterSidebar.css';

export default function FilterSidebar() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Логіка відправки фільтрів або пошуку
    };

    return (
        <aside className="filter-sidebar">
            <h2 className="filter-title">Фільтр товарів</h2>

            <form onSubmit={handleSubmit} className="filter-form">
                <div className="form-group search-group">
                    <label htmlFor="search-product" className="form-label">
                        Пошук продуктів:
                    </label>
                    <div className="search-input-wrapper">
                        <input
                            type="search"
                            id="search-product"
                            name="query"
                            placeholder="Наприклад: молоко, яблука..."
                            className="form-control"
                        />
                        <button type="submit" className="btn btn-accent btn-search">
                            Знайти
                        </button>
                    </div>
                </div>

                <div className="filter-divider"></div>

                <fieldset className="filter-fieldset">
                    <legend className="filter-legend">Категорії продуктів</legend>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-veg" name="category" value="vegetables" />
                        <label htmlFor="cat-veg">Овочі та фрукти</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-dairy" name="category" value="dairy" />
                        <label htmlFor="cat-dairy">Молочна продукція та яйця</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-meat" name="category" value="meat" />
                        <label htmlFor="cat-meat">М'ясо, птиця та риба</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-grocery" name="category" value="grocery" />
                        <label htmlFor="cat-grocery">Бакалія та крупи</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-bakery" name="category" value="bakery" />
                        <label htmlFor="cat-bakery">Хліб та випічка</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="cat-drinks" name="category" value="drinks" />
                        <label htmlFor="cat-drinks">Напої та соки</label>
                    </div>
                </fieldset>

                <div className="filter-divider"></div>

                <fieldset className="filter-fieldset">
                    <legend className="filter-legend">Особливості</legend>
                    <div className="checkbox-group">
                        <input type="checkbox" id="tag-organic" name="tag" value="organic" />
                        <label htmlFor="tag-organic">Еко / Органік</label>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="tag-sale" name="tag" value="sale" />
                        <label htmlFor="tag-sale">Акційні товари</label>
                    </div>
                </fieldset>

                <div className="filter-divider"></div>

                <div className="form-group">
                    <label htmlFor="sort-products" className="form-label">
                        Сортувати за:
                    </label>
                    <select id="sort-products" name="sort" className="form-select">
                        <option value="popular">Популярністю</option>
                        <option value="price-asc">Ціною (спочатку дешевші)</option>
                        <option value="price-desc">Ціною (спочатку дорожчі)</option>
                        <option value="name">Назвою (А-Я)</option>
                    </select>
                </div>

                <button type="reset" className="btn btn-reset">
                    Скинути всі фільтри
                </button>
            </form>
        </aside>
    );
}