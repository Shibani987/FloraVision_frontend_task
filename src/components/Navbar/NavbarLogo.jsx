import logo from "../../assets/images/logo/logo.png";

const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="
        flex shrink-0 items-center
        gap-[8px]

        min-[1400px]:gap-[clamp(10px,0.8vw,20px)]
      "
      aria-label="FloraVision home"
    >
      <img
        src={logo}
        alt="FloraVision logo"
        className="
          block w-auto object-contain

          h-[36px]
          sm:h-[40px]
          lg:h-[44px]

          min-[1400px]:h-[clamp(52px,4vw,90px)]
        "
      />

      <span
        className="
          font-['Inter']
          font-[800]
          leading-none
          tracking-[-0.01em]
          text-white/80

          text-[17px]
          sm:text-[19px]
          lg:text-[21px]

          min-[1400px]:text-[clamp(25px,2vw,45px)]
        "
      >
        FloraVision.
      </span>
    </a>
  );
};

export default NavbarLogo;