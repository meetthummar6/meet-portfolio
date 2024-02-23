import HeroPage from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
export default function Home() {
  return (
    <div className="flex flex-col">
        <HeroPage/>
        <AboutUs/>
    </div>
  );
}
