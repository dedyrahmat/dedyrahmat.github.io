import { useState } from "react";
import info from "../constants/info.json";
import {
  Mail,
  Home,
  Info,
  ChartNoAxesCombined,
  AtSign,
  ChartNoAxesColumn,
  Kanban,
  FolderGit2,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { toast } from "sonner";

const NAV_ICON_STYLES = "mr-2 text-sm text-muted-foreground";
const navItems = [
  {
    id: "hero",
    label: "HOME",
    icon: <Home className={NAV_ICON_STYLES} />,
  },
  {
    id: "about",
    label: "ABOUT ME",
    icon: <Info className={NAV_ICON_STYLES} />,
  },
  // { id: "skills", label: "SKILLS" },
  {
    id: "experience",
    label: "EXPERIENCE",
    icon: <ChartNoAxesCombined className={NAV_ICON_STYLES} />,
  },
  {
    id: "projects",
    label: "PROJECTS",
    icon: <FolderGit2 className={NAV_ICON_STYLES} />,
  },
  {
    id: "contact",
    label: "WHERE TO FIND ME",
    icon: <AtSign className={NAV_ICON_STYLES} />,
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId === activeSection) {
      setActiveSection("hero");
    } else {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleCopyEmailAddress = async () => {
    try {
      await navigator.clipboard.writeText(info.EMAIL_ADDRESS);
      toast.success("Yoinked!", {
        position: "bottom-left",
      });
    } catch (error) {
      toast.error("Failed :(", { position: "bottom-left" });
      console.log(error);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:flex lg:h-screen lg:w-sm lg:border-r-2 border-black bg-background lg:flex-col px-10 py-16">
        {/* <nav className="fixed left-0 top-0 z-50 h-screen w-sm border-r-2 border-black bg-background px-10 py-16">*/}
        <div className="flex flex-col space-y-12">
          <div>
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <h1 className="text-2xl font-bold text-foreground font-mono">
                hey, I'm Dera
              </h1>
            </button>
            <Tooltip>
              <TooltipTrigger
                className="mt-2 flex flex-row items-center cursor-pointer"
                onClick={handleCopyEmailAddress}
              >
                <Mail className="text-muted-foreground mr-2 text-sm" />
                <p className="text-sm text-muted-foreground">
                  {info.EMAIL_ADDRESS}
                </p>
              </TooltipTrigger>
              <TooltipContent side="bottom">Yoink email!</TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-row items-center text-left
                text-sm uppercase tracking-widest cursor-pointer
                text-muted-foreground"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-background p-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")}>
          <h1 className="text-xl font-bold text-foreground font-mono">
            hey, I'm Dera
          </h1>
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-foreground hover:bg-secondary transition-all"
        >
          {mobileMenuOpen ? (
            <Kanban className="rotate-90" />
          ) : (
            <ChartNoAxesColumn className="-rotate-90" />
          )}
        </button>
      </header>

      {mobileMenuOpen && (
        <nav className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-background border-b border-border">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium py-2 transition-colors text-muted-foreground flex flex-row items-center"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
