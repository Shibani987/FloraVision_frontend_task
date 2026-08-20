import { useEffect, useRef, useState } from "react";
import PlantCard from "./PlantCard";
import { plantsData } from "../../data/plantsData";
import SectionHeading from "../common/SectionHeading";

const TopSelling = () => {
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  const handleAddToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]);

    console.log("Added to cart:", plant);
  };

  /* ================= SCROLL REVEAL OBSERVER ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        mx-auto w-full
        max-w-[1400px]
        px-4 py-16

        sm:px-6 sm:py-20
        lg:px-10 lg:py-24
        xl:px-16

        min-[1400px]:max-w-[clamp(1600px,88vw,2400px)]
        min-[1400px]:px-[clamp(4rem,6vw,10rem)]
        min-[1400px]:py-[clamp(6rem,8vw,12rem)]
      "
    >
      {/* ================= SECTION HEADING ================= */}

      <SectionHeading>
        Our Top Selling Plants
      </SectionHeading>

      {/* ================= PLANT CARDS ================= */}

      <div
        className="
          mt-16
          grid grid-cols-1
          gap-16

          sm:grid-cols-2
          sm:gap-10

          lg:mt-20
          lg:grid-cols-3
          lg:gap-8

          xl:gap-10

          min-[1400px]:mt-[clamp(6rem,8vw,12rem)]
          min-[1400px]:gap-[clamp(2.5rem,3vw,5rem)]
        "
      >
        {plantsData.map((plant, index) => (
          <div
            key={plant.id}
            className={
              isVisible
                ? "animate-top-selling-reveal"
                : "opacity-0"
            }
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <PlantCard
              plant={plant}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>

      {/* ================= CART COUNT ================= */}

      {cart.length > 0 && (
        <p
          className="
            mt-10
            text-center
            text-sm
            text-white/60

            min-[1400px]:text-[clamp(1rem,1.1vw,1.5rem)]
          "
        >
          Cart items: {cart.length}
        </p>
      )}
    </section>
  );
};

export default TopSelling;