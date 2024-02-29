import AboutSection from "@/components/shared/aboutSection";
import BenefitsSection from "@/components/shared/benefitsSection";
import ContactSection from "@/components/shared/contactSection";
import FooterSection from "@/components/shared/footerSection";
import GoToTopButton from "@/components/shared/goToTopButton";
import Header from "@/components/shared/header";
import HeroSection from "@/components/shared/heroSection";
import PricingSection from "@/components/shared/pricingSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {

  return (
    <ScrollArea className="h-full w-full bg-background scroll-smooth scrollbar-track-none">
      <Header />
      <HeroSection />
      <GoToTopButton />
      <AboutSection />
      <BenefitsSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </ScrollArea>
  );
}

export default Home;
