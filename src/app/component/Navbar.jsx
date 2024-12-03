

export default function Navbar({ refs }) {

  const handleScroll = (section) => {
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const menuItems = ["Home", "Resume", "Projects", "References", "Contact"];

  return (
    <header className=" bg-slate-900 container mx-auto w-full wrapper flex md:justify-end justify-center space-x-8 p-6  text-gray-300 text-xs font-roboto font-bold fixed top-0 z-40">
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => handleScroll(item)}
            className={`text-lg hover:text-yellow-500 ${item === 'Contact' ? 'md:block hidden': null}`}
          >
            {item}
          </button>
          {/* Bottom border animation */}
          <div className={`absolute bottom-0 left-0 h-[2px] bg-yellow-500 w-[9px] transition-all duration-500 group-hover:w-full ${item === 'Contact' ? 'md:block hidden': null}`} />
        </div>
      ))}
    </header>
  );
}
