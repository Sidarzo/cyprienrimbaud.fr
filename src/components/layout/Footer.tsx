export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © 2024 Cyprien Rimbaud. Tous droits réservés.
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <a href="https://github.com" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
} 