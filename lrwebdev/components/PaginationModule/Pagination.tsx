import Link from 'next/link';
import './Pagination.css';

export default function Pagination() {
    return (
        <nav aria-label="Пагінація сторінок товарів" className="pagination-wrapper">
            <ul className="pagination">
                <li className="page-item disabled">
                    <Link href="#" className="page-link">
                        Попередня
                    </Link>
                </li>
                <li className="page-item active">
                    <Link href="#" className="page-link">
                        1
                    </Link>
                </li>
                <li className="page-item">
                    <Link href="#" className="page-link">
                        2
                    </Link>
                </li>
                <li className="page-item">
                    <Link href="#" className="page-link">
                        3
                    </Link>
                </li>
                <li className="page-item">
                    <Link href="#" className="page-link">
                        Наступна
                    </Link>
                </li>
            </ul>
        </nav>
    );
}