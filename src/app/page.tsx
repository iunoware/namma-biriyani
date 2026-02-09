import Hero from "@/component/home/Hero";
import CuisineIntroSplit from "@/component/home/CuisineIntroSplit";
import Interiors from "@/component/home/SignatueDishes";
import MenuCategoriesSection from "@/component/home/MenuCategoriesSection";
import WhyChooseUsSection from "@/component/home/WhyChooseUsSection";
import Gallery from "@/component/home/Gallery";
import TestimonialsSection from "@/component/home/TestimonialsSection";
import Menu from "@/component/shared/Menu";
import EnnaiKari from "@/component/home/EnnaiKari";
import CTA from "@/component/home/CTA";
import ContactSection from "@/component/home/ContactSection";
import LocationSection from "@/component/home/LocationSection";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <CuisineIntroSplit />
      <Interiors />
      <EnnaiKari />
      <MenuCategoriesSection />
      <WhyChooseUsSection />
      <Gallery />
      <TestimonialsSection />
      <Menu />
      <CTA />
      <LocationSection />
      <ContactSection />
    </div>
  );
}
