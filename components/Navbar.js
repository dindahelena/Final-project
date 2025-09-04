import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold">Travelly</div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/destinations">Destinasi</Link></li>
        <li><Link href="/promo">Promo</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
