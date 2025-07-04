import { Header, Footer } from "@/components/layout";
import { SITE_CONFIG } from "@/constants";
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
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">

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
