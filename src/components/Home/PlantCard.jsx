import cartIcon from "../../assets/icons/cart.png";
import CustomCard from "../common/CustomCard";

const PlantCard = ({ plant, onAddToCart }) => {
  const { name, description, price, image } = plant;

  return (
    <CustomCard
      className="
        flex min-h-[270px] flex-col
        justify-end

        sm:min-h-[300px]
        lg:min-h-[340px]

        min-[1400px]:min-h-[clamp(380px,25vw,600px)]
      "
    >
      {/* ================= PLANT IMAGE ================= */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0 z-20
          flex w-full
          -translate-x-1/2
          justify-center
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-[230px]
            w-auto
            -translate-y-[75px]
            object-contain
            drop-shadow-2xl

            sm:h-[270px]
            sm:-translate-y-[90px]

            lg:h-[310px]
            lg:-translate-y-[110px]

            min-[1400px]:h-[clamp(350px,22vw,580px)]
            min-[1400px]:-translate-y-[clamp(6rem,7vw,11rem)]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-30 mt-auto

          px-7 pb-6 pt-24

          sm:px-8
          sm:pb-7
          sm:pt-28

          lg:px-9
          lg:pb-8
          lg:pt-32

          min-[1400px]:px-[clamp(2.5rem,3vw,5rem)]
          min-[1400px]:pb-[clamp(2rem,2.5vw,4rem)]
          min-[1400px]:pt-[clamp(9rem,12vw,18rem)]
        "
      >
        <h3
          className="
            text-lg font-medium
            text-white/85

            sm:text-xl

            min-[1400px]:text-[clamp(1.5rem,1.7vw,2.8rem)]
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2
            max-w-[230px]

            text-xs
            leading-relaxed
            text-white/60

            sm:text-sm

            min-[1400px]:mt-[clamp(0.75rem,1vw,1.5rem)]
            min-[1400px]:max-w-[clamp(18rem,20vw,32rem)]
            min-[1400px]:text-[clamp(0.9rem,1vw,1.5rem)]
          "
        >
          {description}
        </p>

        {/* PRICE + CART */}
        <div
          className="
            mt-4
            flex items-center justify-between

            min-[1400px]:mt-[clamp(1.25rem,1.5vw,2.5rem)]
          "
        >
          <span
            className="
              text-lg font-medium
              text-white/80

              sm:text-xl

              min-[1400px]:text-[clamp(1.5rem,1.8vw,3rem)]
            "
          >
            Rs. {price}
          </span>

          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            onClick={() => onAddToCart(plant)}
            className="
              flex h-9 w-9
              items-center justify-center

              rounded-lg
              border border-white/30

              transition
              duration-300
              hover:scale-105
              hover:bg-white/10

              sm:h-10
              sm:w-10

              min-[1400px]:h-[clamp(3rem,3.5vw,5rem)]
              min-[1400px]:w-[clamp(3rem,3.5vw,5rem)]
              min-[1400px]:rounded-[clamp(0.7rem,0.8vw,1.2rem)]
            "
          >
            <img
              src={cartIcon}
              alt=""
              className="
                h-4 w-4
                object-contain

                sm:h-5
                sm:w-5

                min-[1400px]:h-[clamp(1.2rem,1.5vw,2.2rem)]
                min-[1400px]:w-[clamp(1.2rem,1.5vw,2.2rem)]
              "
            />
          </button>
        </div>
      </div>
    </CustomCard>
  );
};

export default PlantCard;