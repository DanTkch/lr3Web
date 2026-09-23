'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Дашборд', href: '/admin' },
    { label: 'Управління складом', href: '/admin/inventory' },
    { label: 'Додати товар', href: '/admin/add-product' },
    { label: 'Замовлення', href: '/admin/orders' },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="admin-sidebar">
            <nav className="admin-nav">
                <h3 className="admin-nav-title">Меню</h3>
                <ul className="admin-nav-list">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href} className={`admin-nav-item ${isActive ? 'active' : ''}`}>
                                <Link href={item.href} className="admin-nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}