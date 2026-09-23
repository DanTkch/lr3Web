import Link from 'next/link';
import Image from 'next/image';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-text-content">
                <span className="hero-badge">Час для хорошої їжі</span>
                <h1 className="hero-title">Голод? Замовляйте доставку додому</h1>
                <p className="hero-description">
                    Ваша улюблена їжа прямо до рідної хати — свіжа, гаряча та швидка.
                </p>
                <div className="hero-cta">
                    <Link href="/products" className="btn btn-accent btn-lg">
                        Замовити зараз
                    </Link>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <Image
                    src="/img/delivFoto.png"
                    alt="Кур'єр на скутері доставляє замовлення"
                    width={500}
                    height={380}
                    className="hero-image"
                    priority
                />
            </div>
        </section>
    );
}