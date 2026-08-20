import { useEffect, useRef, useState } from "react";
import CustomCard from "../common/CustomCard";
import SectionHeading from "../common/SectionHeading";
import { reviewsData } from "../../data/reviewsData";

const CustomerReview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      <SectionHeading>
        Customer Review
      </SectionHeading>

      <div
        className="
          mt-16
          grid grid-cols-1
          gap-8

          sm:grid-cols-2
          sm:gap-10

          lg:mt-20
          lg:grid-cols-3
          lg:gap-8

          xl:gap-10

          min-[1400px]:mt-[clamp(6rem,8vw,12rem)]
          min-[1400px]:gap-[clamp(2rem,3vw,5rem)]
        "
      >
        {reviewsData.map((review, index) => (
          <div
            key={review.id}
            className={
              isVisible
                ? "animate-review-card-reveal"
                : "opacity-0"
            }
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <CustomCard
              className="
                h-[320px] w-full
                overflow-hidden
              "
              contentClassName="
                h-full
                overflow-hidden
                p-[60px]
              "
            >
              {/* Review Header */}
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="
                    h-12 w-12
                    shrink-0
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h3
                    className="
                      text-sm font-semibold
                      text-white
                      sm:text-base
                    "
                  >
                    {review.name}
                  </h3>

                  <div
                    className="
                      mt-1
                      text-sm text-yellow-400
                    "
                  >
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p
                className="
                  mt-6
                  overflow-hidden
                  text-sm
                  leading-relaxed
                  text-white/70
                "
              >
                {review.review}
              </p>
            </CustomCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;