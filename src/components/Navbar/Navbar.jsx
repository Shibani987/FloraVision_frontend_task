import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
  className="
    relative z-50 w-full
    h-[76px]
    sm:h-[84px]
    lg:h-[90px]

    min-[1400px]:h-[clamp(105px,7vw,170px)]

    animate-navbar-reveal
  "
>
      <nav
        className="
          relative flex h-full items-center

          px-[26px]
          sm:px-[32px]
          lg:px-[38px]

          min-[1400px]:px-[clamp(48px,4vw,100px)]
        "
      >
        {/* Logo */}
        <NavbarLogo />

        {/* Navigation Links */}
        <NavLinks
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Right Actions */}
        <NavbarActions
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;