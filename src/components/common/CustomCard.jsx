const CustomCard = ({
  children,
  className = "",
  contentClassName = "",
}) => {
  return (
    <article
      className={`
        relative overflow-visible
        drop-shadow-[0_18px_35px_rgba(0,0,0,0.22)]
        ${className}
      `}
    >
      {/* ================= CARD BACKGROUND ================= */}
      <div
        className="
          absolute inset-0
          h-full w-full
          backdrop-blur-md
        "
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          clipPath: "url(#commonCardShape)",
        }}
      />

      {/* ================= CARD BORDER ================= */}
      <svg
        className="
          pointer-events-none
          absolute inset-0 z-20
          h-full w-full
        "
        viewBox="0 0 400 440"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Full Border */}
<path
  d="
    M 52 1
    H 60

    C 100 1, 112 30, 200 36

    C 288 30, 300 1, 340 1

    H 348
    Q 399 1, 399 52

    V 390
    Q 399 439, 348 439

    H 52
    Q 1 439, 1 390

    V 52
    Q 1 1, 52 1
  "
  stroke="rgba(255,255,255,0.15)"
  strokeWidth="0.5"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
/>

        {/* ================= LEFT TOP HIGHLIGHT ================= */}
        <path
          d="
            M 1 105
            V 52
            Q 1 1, 52 1
          "
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ================= RIGHT BOTTOM HIGHLIGHT ================= */}
        <path
          d="
            M 295 439
            H 348
            Q 399 439, 399 390
            V 335
          "
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ================= CUSTOM CONTENT ================= */}
      <div className={`relative z-30 ${contentClassName}`}>
        {children}
      </div>

      {/* ================= CARD CLIP SHAPE ================= */}
      <svg
        className="absolute h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath
            id="commonCardShape"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M 0.13 0
                H 0.15

                C 0.25 0, 0.28 0.08, 0.5 0.08

                C 0.72 0.08, 0.75 0, 0.85 0

                H 0.87
                Q 1 0, 1 0.13

                V 0.87
                Q 1 1, 0.87 1

                H 0.13
                Q 0 1, 0 0.87

                V 0.13
                Q 0 0, 0.13 0

                Z
              "
            />
          </clipPath>
        </defs>
      </svg>
    </article>
  );
};

export default CustomCard;