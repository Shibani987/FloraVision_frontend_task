const SectionHeading = ({ children }) => {
  return (
    <div className="relative mx-auto w-fit">
      {/* Right Top Corner */}
      <span
        className="
          absolute -right-3 -top-2 h-8 w-12
          sm:-right-5 sm:-top-3 sm:h-10 sm:w-16

          min-[1400px]:-right-[2vw]
          min-[1400px]:-top-[1.5vw]
          min-[1400px]:h-[4vw]
          min-[1400px]:w-[6vw]
        "
        style={{
          borderRight: "2px solid transparent",
          borderTop: "2px solid transparent",
          borderImage:
            "linear-gradient(to right, #FBD300, #ffffff) 1",
        }}
      />

      <h2
        className="
          text-center font-['Inter']
          text-2xl font-semibold text-white
          sm:text-3xl
          lg:text-4xl

          min-[1400px]:text-[3.5vw]
        "
      >
        {children}
      </h2>

      {/* Left Bottom Corner */}
      <span
        className="
          absolute -bottom-2 -left-3 h-8 w-12
          sm:-bottom-3 sm:-left-5 sm:h-10 sm:w-16

          min-[1400px]:-bottom-[1.5vw]
          min-[1400px]:-left-[2vw]
          min-[1400px]:h-[4vw]
          min-[1400px]:w-[6vw]
        "
        style={{
          borderLeft: "2px solid #FBD300",
          borderBottom: "2px solid transparent",
          borderImage:
            "linear-gradient(to right, #FBD300, #ffffff) 1",
        }}
      />
    </div>
  );
};

export default SectionHeading;