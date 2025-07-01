import { Header, Footer } from "@/components/layout";
import { SITE_CONFIG } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Bienvenue sur {SITE_CONFIG.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {SITE_CONFIG.description}
          </p>
          
          <div className="flex gap-4 justify-center">
           
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
