import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-end space-x-8 p-6 text-gray-300 text-sm font-roboto font-bold">
      {["Home", "Portfolio", "Blog", "Contact"].map((item, index) => (
        <div key={index} className="relative group">
          <Link href={`#${item.toLowerCase()}`}>
            <p className="hover:text-yellow-500 text-lg">{item}</p>
          </Link>
          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-yellow-500 w-[9px] transition-all duration-500 group-hover:w-full" />
        </div>
      ))}
    </header>
  );
}
