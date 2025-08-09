import ExpertiseCard from "../components/ExpertiseCard";
import InnovateCard from "../components/InnovateCard";
import { expertisesList } from "../data/expertisesList";
import { innovateList } from "../data/innovateList";

const Home = () => {
  const backgroundStyle = {
    backgroundImage:
      "url(https://static.wixstatic.com/media/7ab3a8_95e829a254e04063979c56a5837db23af000.jpg/v1/fill/w_1039,h_768,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/7ab3a8_95e829a254e04063979c56a5837db23af000.jpg)",
  };
  return (
    <>
      {/* Hero Section  */}
      <section
        style={backgroundStyle}
        className="hero-section w-full min-h-screen bg-no-repeat bg-cover"
      >
        <div className="w-full text-left flex flex-col gap-3 px-10 min-md:pl-[10vw] py-10 min-h-[50vh] place-content-center">
          <h1 className="text-4xl font-semibold min-md:text-nowrap">
            Engineering Your Edge{" "}
            <sup className="font-extrabold text-[15px] top-[-15px]">TM</sup>
          </h1>
          <p className="text-md max-w-[370px] leading-5">
            Our promise to enterprises to give the strategic advantage — with
            breakthrough products, deep tech systems, and future-proof
            solutions.
          </p>
        </div>
      </section>

      {/* We Build Section */}
      <section className="p-5 my-10">
        <img
          src="https://static.wixstatic.com/media/7ab3a8_a81f515e03634af2b9b5780ce6cf45e8~mv2.png/v1/fill/w_1490,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/we%20build%20plain.png"
          className="w-full object-contain"
        />
        <p className="max-w-[620px] text-md m-auto text-center tracking-wide leading-5">
          "Every leap forward begins with a bold idea. At ANVI, we don't just
          imagine the future — we engineer it. Across every frontier, we build
          what tomorrow is made of."
        </p>
      </section>

      {/* Industries Section */}
      <section className="p-5 w-full my-10">
        <div className="max-w-[900px] m-auto">
          <div className="grid grid-cols-2">
            <h2 className="text-5xl font-bold font-sans">Industries</h2>
            <p className="text-md font-thin tracking-wide leading-5">
              Our expertise spans across 8 transformative sectors — from
              Robotics, Space, and AI to Green Energy, Semiconductors,
              Industrial Systems, Gaming, and Textiles — delivering innovation
              where it matters most.
            </p>
          </div>
          <ul className="m-0 mt-5 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {expertisesList.map((each) => (
              <ExpertiseCard expertiseInfo={each} key={each.label} />
            ))}
          </ul>
        </div>
      </section>

      {/* Next At Anvi Section */}
      <section className="p-5 w-full my-10">
        <div className="max-w-[900px] m-auto grid grid-cols-2">
          <h2 className="text-5xl font-thin font-sans">
            <b>Next at</b> anvi
          </h2>
          <p className="text-md font-thin tracking-wide leading-5">
            "At anvi, our engineers don’t work by the clock — they work by
            vision. Relentlessly innovating, designing, and building what’s
            next. 'Next at a n v i' is where tomorrow’s breakthroughs begin —
            and the future takes shape."
          </p>
        </div>
        <ul className="m-0 mt-5 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
          {innovateList.map((each) => (
            <InnovateCard innovateInfo={each} key={each.heading} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
