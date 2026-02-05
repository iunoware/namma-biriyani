import Hero from "@/component/home/Hero";
import CuisineIntroSplit from "@/component/home/CuisineIntroSplit";
import SignatureBiriyaniReveal from "@/component/home/SignatureBiriyaniReveal";
import Interiors from "@/component/home/Interiors";
import MenuCategoriesSection from "@/component/home/MenuCategoriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CuisineIntroSplit />
      {/* <SignatureBiriyaniReveal /> */}
      <Interiors />
      <MenuCategoriesSection />
    </>
  );
}
