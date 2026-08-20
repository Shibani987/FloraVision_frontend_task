import { navItems } from "../../data/navData";

const NavLinks = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`
        absolute
        left-[18px]
        right-[18px]
        top-full
        mt-[8px]

        flex
        flex-col
        items-start
        gap-[18px]

        bg-[#10190f]/95
        px-[18px]
        py-[18px]

        font-['Indie_Flower']
        shadow-[0_16px_28px_rgba(0,0,0,0.25)]

        transition-all
        duration-300
        ease-out

        ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }

        sm:left-[24px]
        sm:right-[24px]
        sm:gap-[20px]

        lg:left-1/2
        lg:right-auto
        lg:top-1/2
        lg:mt-0

        lg:pointer-events-auto
        lg:flex
        lg:-translate-x-1/2
        lg:-translate-y-1/2
        lg:flex-row
        lg:items-center
        lg:opacity-100

        lg:gap-[48px]
        lg:bg-transparent
        lg:p-0
        lg:shadow-none

        xl:gap-[56px]

        min-[1400px]:gap-[clamp(68px,5vw,140px)]
      `}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={handleLinkClick}
          className="
            flex
            items-center
            gap-2

            font-normal
            leading-none
            text-white/90

            transition-all
            duration-200

            hover:translate-x-1
            hover:text-white

            text-[15px]
            sm:text-[17px]
            lg:text-[19px]

            lg:hover:translate-x-0
            lg:hover:-translate-y-[2px]

            min-[1400px]:text-[clamp(22px,1.7vw,38px)]
          "
        >
          {item.label}

          {item.hasDropdown && (
            <span
              className="
                inline-block
                h-0
                w-0
                shrink-0

                border-l-[5px]
                border-r-[5px]
                border-t-[7px]

                border-l-transparent
                border-r-transparent
                border-t-white/90
              "
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;