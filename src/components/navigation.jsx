import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#" },
  { name: "Experience", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b-4 border-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a className="text-3xl md:text-4xl font-bold tracking-tight hover:text-primary transition-colors cursor-pointer">
            DR<span className="text-primary">{"-"}</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((nav, index) => (
              <a
                key={index}
                href={nav.href}
                className="px-4 py-2 font-medium text-foreground hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-black transition-all duration-200"
              >
                {nav.name}
              </a>
            ))}
            <a href="#">
              <button className="bg-primary p-2 cursor-pointer text-primary-foreground ml-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Work with me
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-black bg-background"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-4 border-black bg-background">
            <div className="flex flex-col py-4 gap-2">
              {navItems.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 font-medium text-foreground hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-black transition-all"
                >
                  {nav.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 pt-2"
              >
                <button className="bg-primary p-2 cursor-pointer text-primary-foreground w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Work with me
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
