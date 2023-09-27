import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title, handleNavBarClose }) => {
  
  return (
    <ScrollLink
      to={href}
      onClick={handleNavBarClose}
      smooth={true}
      spy={true}
      duration={100}
      offset={
        href == "about"
          ? -50
          : href == "contact"
          ? -100
          : href == "projects"
          ? -100
          : 0
      }
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
