import { Menu, X } from "lucide-react";
import { MobileMenuProps } from "../props/navBarProps";

const MobileButton = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) => {
  return (
    <button
      className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors duration-200"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6 text-foreground" />
      ) : (
        <Menu className="w-6 h-6 text-foreground" />
      )}
    </button>
  );
}

export default MobileButton;
