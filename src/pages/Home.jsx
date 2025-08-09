import ContactUs from "../components/ContactUs";
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
        className="hero-section w-full min-h-screen bg-no-repeat bg-cover max-md:bg-right-center"
      >
        <div className="w-full text-left flex flex-col gap-3 px-10 min-md:pl-[10vw] py-10 min-h-[50vh] place-content-center">
          <h1 className="text-4xl md:text-5xl font-semibold min-md:text-nowrap">
            Engineering Your Edge{" "}
            <sup className="font-extrabold text-[20px] md:text-[15px] top-[-15px]">TM</sup>
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
          <div className="grid grid-cols-1 md:grid-cols-2 max-md:text-center">
            <h2 className="text-5xl font-bold font-sans max-md:p-5">Industries</h2>
            <p className="text-md font-thin tracking-wide leading-5">
              Our expertise spans across 8 transformative sectors — from
              Robotics, Space, and AI to Green Energy, Semiconductors,
              Industrial Systems, Gaming, and Textiles — delivering innovation
              where it matters most.
            </p>
          </div>
          <ul className="m-0 mt-5 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {expertisesList.map((each) => (
              <ExpertiseCard expertiseInfo={each} key={each.label} />
            ))}
          </ul>
        </div>
      </section>

      {/* Next At Anvi Section */}
      <section className="p-5 w-full my-10">
        <div className="max-w-[900px] m-auto grid grid-cols-1 md:grid-cols-2 max-md:text-center">
          <h2 className="text-5xl font-thin font-sans max-md:p-5">
            <b>Next at</b> anvi
          </h2>
          <p className="text-md font-thin tracking-wide leading-5">
            "At anvi, our engineers don’t work by the clock — they work by
            vision. Relentlessly innovating, designing, and building what’s
            next. 'Next at a n v i' is where tomorrow’s breakthroughs begin —
            and the future takes shape."
          </p>
        </div>
        <ul className="m-auto mt-5 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
          {innovateList.map((each) => (
            <InnovateCard innovateInfo={each} key={each.heading} />
          ))}
        </ul>
      </section>

      <section className="px-10 py-15 w-full my-10 bg-black sticky top-0 z-0">
        <div className="rounded-tl-xl rounded-bl-xl max-md:rounded-tr-3xl max-md:rounded-bl-3xl max-md:rounded-tl-none overflow-hidden w-full flex max-md:flex-col justify-center align-middle gap-0">
          <div className="bg-gray-400 aspect-[5/4] max-md:aspect-auto w-1/2 max-md:w-full p-6 flex flex-col justify-center align-middle gap-2">
            <h4 className="text-3xl font-bold">"Bold Ideas. Real Impact."</h4>
            <p className="tex-md font-light height-">We don’t just talk about change — we engineer it. A N V I Foundation turns bold visions into programs that touch lives, lift communities, and rewrite stories of hope.</p>
          </div>
          <img
            className="w-full min-md:max-w-1/2 max-md:w-screen md:w-full aspect-[5/4] max-md:aspect-video object-cover object-center"
            src="https://media.gettyimages.com/id/1488640232/photo/engineering-tablet-and-people-in-automation-lab-with-machine-for-analysis-research-and.jpg?s=612x612&w=0&k=20&c=0sq5Av7w-ffMcxIFuJvnukp7d1cwyl86bGO6PV6kgNI=" alt="engineering"
          />
          </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Home;
