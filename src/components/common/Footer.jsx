import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { quickLinks } from "../../data/footerData";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    const currentFooter = footerRef.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault();
  };

  return (
    <footer
      ref={footerRef}
      className="
        w-full
        bg-[#162315]
        px-6
        py-12
        text-white

        sm:px-8
        sm:py-14

        lg:px-12
        lg:py-16

        xl:px-16

        min-[1400px]:px-[clamp(4rem,6vw,10rem)]
        min-[1400px]:py-[clamp(5rem,6vw,8rem)]
      "
    >
      <div
        className={`
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          gap-10

          sm:grid-cols-2

          lg:grid-cols-[1.4fr_0.7fr_1.2fr]
          lg:gap-16

          min-[1400px]:max-w-[2200px]
          min-[1400px]:gap-[clamp(4rem,7vw,10rem)]

          ${
            isVisible
              ? "animate-footer-reveal"
              : "translate-y-12 opacity-0"
          }
        `}
      >
        {/* ================= BRAND ================= */}

        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="FloraVision"
              className="
                h-12
                w-auto
                object-contain
              "
            />

            <span
              className="
                text-2xl
                font-bold
                text-white/80

                sm:text-3xl
              "
            >
              FloraVision.
            </span>
          </div>

          <p
            className="
              mt-6
              max-w-[430px]
              text-sm
              leading-relaxed
              text-white/85

              sm:text-base
            "
          >
            From lush indoor greens to vibrant outdoor blooms, our plants
            are crafted to thrive and elevate your living environment.
          </p>

          {/* ================= SOCIAL LINKS ================= */}

          <div
            className="
              mt-12
              flex
              items-center
              gap-8
              text-sm
              font-bold
              text-white/90
            "
          >
            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:text-white/60"
            >
              FB
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="transition hover:text-white/60"
            >
              TW
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition hover:text-white/60"
            >
              LI
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}

        <div>
          <h3
            className="
              text-base
              font-bold
              text-white

              sm:text-lg
            "
          >
            Quick Links
          </h3>

          <nav
            className="
              mt-6
              flex
              flex-col
              items-start
              gap-4
            "
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm
                  text-white/80
                  underline
                  underline-offset-4
                  transition
                  hover:text-white
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ================= NEWSLETTER ================= */}

        <div>
          <h3
            className="
              text-base
              font-bold
              text-white

              sm:text-lg
            "
          >
            For Every Update.
          </h3>

          <form
            onSubmit={handleSubscribe}
            className="
              mt-7
              flex
              w-full
              max-w-[520px]
              items-center
              rounded-md
              border
              border-white/60
              p-0.5
            "
          >
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="
                min-w-0
                flex-1
                bg-transparent
                px-4
                py-2.5
                text-sm
                text-white
                outline-none
                placeholder:text-white/60
              "
            />

            <button
              type="submit"
              className="
                rounded-md
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-[#10190f]

                transition-all
                duration-300

                hover:scale-[1.03]
                hover:bg-white/80

                active:scale-[0.97]

                sm:px-5
              "
            >
              SUBSCRIBE
            </button>
          </form>

          {/* ================= COPYRIGHT ================= */}

          <p
            className="
              mt-24
              text-sm
              text-white/85

              lg:mt-28
            "
          >
            FloraVision © all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;