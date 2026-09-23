import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav-container">
                <Link href="/" className="logo">
                    <span className="logo-icon">🛒</span>
                    <span>Grocery<span className="logo-accent">Express</span></span>
                </Link>

                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">
                            Головна
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/products" className="nav-link">
                            Каталог продуктів
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/#about" className="nav-link">
                            Про нас
                        </Link>
                    </li>
                </ul>

                <div className="auth-buttons">
                    {/* Кнопка швидкого переходу в Адмінпанель */}
                    <Link href="/admin" className="btn btn-outline" style={{ borderColor: '#0F172A', color: '#0F172A' }}>
                        ⚙️ Адмінка
                    </Link>

                    <button type="button" className="btn btn-outline">
                        Логін
                    </button>
                    <button type="button" className="btn btn-primary">
                        Реєстрація
                    </button>
                </div>
            </nav>
        </header>
    );
}