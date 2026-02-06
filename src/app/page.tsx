import Hero from "@/component/home/Hero";
import CuisineIntroSplit from "@/component/home/CuisineIntroSplit";
import Interiors from "@/component/home/SignatueDishes";
import MenuCategoriesSection from "@/component/home/MenuCategoriesSection";
import WhyChooseUsSection from "@/component/home/WhyChooseUsSection";
import Gallery from "@/component/home/Gallery";
import TestimonialsSection from "@/component/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CuisineIntroSplit />
      <Interiors />
      <MenuCategoriesSection />
      <WhyChooseUsSection />
      <Gallery />
      <TestimonialsSection />
    </>
  );
}
