import Link from 'next/link';

export default function AdminHeader() {
    return (
        <header className="admin-header">
            <div className="admin-header-brand">
                <Link href="/admin" className="admin-logo">
                    <span className="logo-icon">🛒</span> <strong>GroceryExpress</strong>{' '}
                    <span className="badge-admin">Admin</span>
                </Link>
            </div>
            <div className="admin-header-user">
        <span>
          Вітаємо, <strong>Адміністратор</strong>
        </span>
                <Link href="/" className="btn btn-outline btn-sm">
                    На сайт
                </Link>
            </div>
        </header>
    );
}