
export default function Navbar() {
  return (
    <header className="bg-slate-900 container mx-auto flex justify-end space-x-8 p-6 text-gray-300 text-sm font-roboto font-bold">
      {["Home", "Portfolio", "Projects", "Contact"].map((item, index) => (
        <div key={index} className="relative group">
          <a href={`#${item.toLowerCase()}`}>
            <p className="hover:text-yellow-500 text-lg">{item}</p>
          </a>
          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-yellow-500 w-[9px] transition-all duration-500 group-hover:w-full" />
        </div>
      ))}
    </header>
  );
}
