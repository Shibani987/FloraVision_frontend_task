import { Search } from "lucide-react";
import cartIcon from "../../assets/icons/cart.png";

const NavbarActions = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className="
        ml-auto flex items-center

        gap-[18px]
        sm:gap-[22px]
        lg:gap-[25px]

        min-[1400px]:gap-[clamp(32px,2.5vw,60px)]
      "
    >
      {/* Search */}
      <button
        type="button"
        aria-label="Search"
        className="
          flex items-center justify-center
          text-white/90
          transition-all duration-200
          hover:scale-110 hover:text-white
        "
      >
        <Search
          size={21}
          strokeWidth={1.45}
          className="
            min-[1400px]:h-[clamp(25px,2vw,48px)]
            min-[1400px]:w-[clamp(25px,2vw,48px)]
          "
        />
      </button>

      {/* Cart */}
      <button
        type="button"
        aria-label="Shopping bag"
        className="
          flex items-center justify-center
          text-white/90
          transition-all duration-200
          hover:scale-110 hover:text-white
        "
      >
        <img
          src={cartIcon}
          alt=""
          className="
            block object-contain

            h-[22px] w-[22px]

            min-[1400px]:h-[clamp(27px,2vw,50px)]
            min-[1400px]:w-[clamp(27px,2vw,50px)]
          "
        />
      </button>

      {/* Animated Menu - Mobile + Desktop */}
      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="
          flex items-center justify-center
          text-white/90
          transition hover:text-white
        "
      >
        <svg
          className="
            h-[20px] w-[26px]
            overflow-visible

            sm:h-[22px] sm:w-[28px]

            min-[1400px]:h-[clamp(24px,2vw,46px)]
            min-[1400px]:w-[clamp(32px,2.5vw,60px)]
          "
          viewBox="0 0 26 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line
            x1="2"
            y1="5"
            x2="24"
            y2="5"
            className={`
              origin-center
              transition-all
              duration-300
              ease-in-out
              ${
                isMenuOpen
                  ? "translate-y-[5px] rotate-45"
                  : ""
              }
            `}
          />

          <line
            x1="8"
            y1="15"
            x2="24"
            y2="15"
            className={`
              origin-center
              transition-all
              duration-300
              ease-in-out
              ${
                isMenuOpen
                  ? "-translate-y-[5px] -rotate-45"
                  : ""
              }
            `}
          />
        </svg>
      </button>
    </div>
  );
};

export default NavbarActions;