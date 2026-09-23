import FilterSidebar from '@/components/FilterSideBarModule/FilterSidebar';
import ProductCard, { Product } from '@/components/ProductCardModule/ProductCard';
import Pagination from '@/components/PaginationModule/Pagination';

const productsData: Product[] = [
    {
        id: '1',
        title: 'Молоко пастеризоване 2.5%',
        imageSrc: '/img/milk.jpg',
        price: 42,
        details: [
            { label: 'Виробник', value: 'Фермерське господарство' },
            { label: "Об'єм", value: '900 мл' },
        ],
    },
    {
        id: '2',
        title: 'Яблука «Голден» свіжі',
        imageSrc: '/img/apples.jpg',
        price: 35,
        details: [
            { label: 'Країна', value: 'Україна' },
            { label: 'Фасування', value: '1 кг' },
        ],
    },
    {
        id: '3',
        title: 'Філе куряче охолоджене',
        imageSrc: '/img/chicken.jpg',
        price: 185,
        details: [
            { label: 'Категорія', value: "Свіже м'ясо" },
            { label: 'Вага', value: '1 кг' },
        ],
    },
    {
        id: '4',
        title: 'Крупа гречана ядриця',
        imageSrc: '/img/buckwheat.jpg',
        price: 48,
        details: [
            { label: 'Сорт', value: 'Перший' },
            { label: 'Вага', value: '1000 г' },
        ],
    },
    {
        id: '5',
        title: 'Хліб крафтовий цільнозерновий',
        imageSrc: '/img/bread.jpg',
        price: 28,
        details: [
            { label: 'Склад', value: 'борошно пшеничне цільнозернове, закваска' },
            { label: 'Вага', value: '400 г' },
        ],
    },
];

export default function ProductsPage() {
    return (
        <main className="catalog-main">
            <div className="catalog-header-title">
                <h1>Каталог свіжих продуктів</h1>
            </div>

            <div className="catalog-layout">
                <FilterSidebar />

                <section className="products-section">
                    <h2 className="section-title">Продукти в наявності</h2>

                    <div className="products-grid">
                        {productsData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <Pagination />
                </section>
            </div>
        </main>
    );
}