import { menuItems } from "../../contants/data";

const NavBarDesktop = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-foreground/80 hover:text-[#FF6B6B] transition-colors duration-200 relative group"
        >
          {item.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B6B] group-hover:w-full transition-all duration-300"></span>
        </a>
      ))}
    </nav>
  )
}

export default NavBarDesktop;
