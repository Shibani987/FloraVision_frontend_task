import { useEffect, useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import O2Card from "./O2Card";
import { o2Data } from "../../data/o2Data";

const O2Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);

  const totalSlides = o2Data.length;
  const currentSlide = o2Data[currentIndex];

  /* ================= NEXT SLIDE ================= */
  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % totalSlides
    );
  };

  /* ================= PREVIOUS SLIDE ================= */
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  /* ================= SECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================= PRELOAD IMAGES ================= */
  useEffect(() => {
    o2Data.forEach((item) => {
      const image = new Image();
      image.src = item.image;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#10190f]

        px-4 py-16

        sm:px-6
        sm:py-20

        lg:px-10
        lg:py-24

        xl:px-16

        min-[1400px]:px-[clamp(4rem,7vw,10rem)]
        min-[1400px]:py-[clamp(6rem,8vw,12rem)]
      "
    >
      {/* ================= SECTION HEADING ================= */}
      <SectionHeading>
        Our Best O2
      </SectionHeading>

      {/* ================= CARD ================= */}
      <div
        className="
          mx-auto
          mt-16
          w-full
          max-w-[1400px]

          sm:mt-20
          lg:mt-24
        "
      >
        <div
          className={
            isVisible
              ? "animate-o2-card-reveal"
              : "opacity-0"
          }
        >
          <O2Card
            key={currentSlide.id}
            item={currentSlide}
            currentSlide={currentIndex + 1}
            totalSlides={totalSlides}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        </div>
      </div>

      {/* ================= SLIDE DOTS ================= */}
      <div
        className="
          mt-12
          flex
          items-center
          justify-center
          gap-2
        "
      >
        {o2Data.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  isActive
                    ? "h-1.5 w-6 bg-white"
                    : "h-1.5 w-1.5 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
};

export default O2Section;