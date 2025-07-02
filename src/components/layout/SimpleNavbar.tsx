import Link from 'next/link';

export default function SimpleNavbar() {
  return (
    <nav className="w-full h-16 flex items-center px-6 border-b border-border/40 bg-background/95">
      <div className="flex-1" />
      <div className="flex items-center space-x-6 ml-auto">
        <Link href="/" className="hover:underline">
          Accueil
        </Link>
        <Link href="/projets" className="hover:underline">
          Projets
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
} 