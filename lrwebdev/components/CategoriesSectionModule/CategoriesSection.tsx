import Link from 'next/link';
import './CategorySection.css';

interface Category {
    id: string;
    name: string;
    icon: string;
    slug: string;
}

const categories: Category[] = [
    { id: '1', name: 'Піца', icon: '🍕', slug: 'pizza' },
    { id: '2', name: 'Суші', icon: '🍣', slug: 'sushi' },
    { id: '3', name: 'Молочні вироби', icon: '🥛', slug: 'burgers' },
    { id: '4', name: 'Напої', icon: '🥤', slug: 'drinks' },
];

export default function CategoriesSection() {
    return (
        <section id="products" className="categories-section">
            <h2 className="section-title">Популярні категорії</h2>
            <ul className="categories-grid">
                {categories.map((category) => (
                    <li key={category.id} className="category-item">
                        <Link href={`/products?category=${category.slug}`} className="category-card">
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}