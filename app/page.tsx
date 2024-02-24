import HeroPage from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <div className="flex flex-col">
        <HeroPage/>
        <AboutUs/>
        <Projects/>
        <ContactUs/>
    </div>
  );
}
