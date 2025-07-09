import { Header, Footer } from "@/components/layout";
import { 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  ContactSection 
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />   
      <main className="flew container mx-auto w-full">
        <div className="text-center mx-auto w-full">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main> 
      <Footer />
    </div>
  );
}
