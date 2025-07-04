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
      
      <main className="flex-1 container mx-auto w-full">
        <div className="mx-auto text-center">

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
