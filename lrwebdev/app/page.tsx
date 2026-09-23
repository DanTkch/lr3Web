import HeroSection from '@/components/HeroSectionModule/HeroSection';
import CategoriesSection from '@/components/CategoriesSectionModule/CategoriesSection';

export default function HomePage() {
    return (
        <main className="main-content">
            <HeroSection />
            <CategoriesSection />
        </main>
    );
}