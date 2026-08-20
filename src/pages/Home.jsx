import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero";
import FeaturedCard from "../components/Home/FeaturedCard";
import TrendyPlants from "../components/Home/TrendyPlants";
import TopSelling from "../components/Home/TopSelling";
import CustomerReview from "../components/reviews/CustomerReview";
import O2Section from "../components/O2/O2Section";
import Footer from "../components/common/Footer";

import heroBg from "../assets/images/hero/bg.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full text-white">
      {/* ================= HOME ================= */}
      <section
        id="home"
        className="
          relative w-full
          bg-[#10190f]
          bg-cover
          bg-top
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Navbar />

        <main className="mt-[30px] w-full px-[26px] pb-20">
          {/* ================= HERO ================= */}
          <div
            className="
              grid grid-cols-1 gap-12
              lg:grid-cols-2
              lg:items-center
            "
          >
            <Hero />

            <div className="flex justify-center lg:justify-end">
              <FeaturedCard />
            </div>
          </div>

          {/* ================= TRENDY PLANTS ================= */}
          <div id="plants">
            <TrendyPlants />
          </div>
        </main>
      </section>

      {/* ================= TOP SELLING ================= */}
      <section className="w-full bg-[#162315]">
        <TopSelling />
      </section>

      {/* ================= CUSTOMER REVIEW ================= */}
      <section className="w-full bg-[#162315]">
        <CustomerReview />
      </section>

      {/* ================= O2 SECTION ================= */}
      <div id="more">
        <O2Section />
      </div>

      {/* ================= FOOTER ================= */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;