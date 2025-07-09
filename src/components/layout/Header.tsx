import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ecedee] px-10 py-3 w-full">
      <div className="font-bold text-lg">
        <Link href="/">Cyprien Rimbaud</Link>
      </div>
      <div className="flex items-center space-x-6 ml-auto">
        <Link href="/" className="hover:bg-black hover:text-white p-2 px-4 rounded-2xl transition-colors hover:font-bold">
          Accueil
        </Link>
        <Link href="/projects" className="hover:bg-black hover:text-white p-2 px-4 rounded-2xl transition-colors hover:font-bold">
          Projets
        </Link>
        <Link href="/contact" className="hover:bg-black hover:text-white p-2 px-4 rounded-2xl transition-colors hover:font-bold">
          Contact
        </Link>
      </div>
    </nav>
  );
} 