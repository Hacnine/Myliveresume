import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-end space-x-8 p-6 text-gray-300 text-sm font-roboto font-bold">
      <Link href="#home"><p className="hover:text-yellow-500">Home</p></Link>
      <Link href="#portfolio"><p className="hover:text-yellow-500">Portfolio</p></Link>
      <Link href="#blog"><p className="hover:text-yellow-500">Blog</p></Link>
      <Link href="#contact"><p className="hover:text-yellow-500 font-poppins ">Contact</p></Link>
    </header>
  );
}
