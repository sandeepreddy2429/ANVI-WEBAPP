import { Link } from "react-router-dom";
import ContactUs from "../../components/ContactUs";
import pagesLinks from "../../data/pagesLinks";
import TextAnimToTop from "../../components/TextAnimToTop";

const dimage =
  "https://static.wixstatic.com/media/7ab3a8_765b93a9d6f242aa8fabada6b50dc97f~mv2.png/v1/fill/w_2217,h_965,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png";
// const nimage = "https://static.wixstatic.com/media/7ab3a8_765b93a9d6f242aa8fabada6b50dc97f~mv2.png/v1/fill/w_726,h_1262,fp_0.26_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png"
const roboimg1 =
  "https://static.wixstatic.com/media/7ab3a8_9870ef81d0a844389091202dcd53f7da~mv2.png/v1/fill/w_891,h_1050,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20Anvi%20Surveillance%20Robot%20(LinkedIn%20Post).png";
const roboimg2 =
  "https://static.wixstatic.com/media/c837a6_650c3d880f99434dbc32154c5c9fe2cd~mv2.jpg/v1/fill/w_768,h_1062,fp_0.58_0.42,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/possessed-photography-g29arbbvPjo-unsplash_edited.jpg";
const roboimg3 =
  "https://static.wixstatic.com/media/baac51_c5b56ac2d6804af581a4ab3c889961c2~mv2.jpg/v1/fill/w_855,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Light%20-%20Item%20image%204.jpg";

const Robotics = () => {
  return (
    <>
      <section
        className="h-[90vh] md:min-h-[80vh] max-h-screen object-cover w-screen bg-cover bg-center max-md:bg-right bg-no-repeat flex flex-col justify-center p-10 md:p-15"
        style={{ backgroundImage: `url(${dimage})` }}
      >
        <div className="text-white flex flex-col gap-2 justify-start align-middle text-shadow-x">
          <TextAnimToTop>
          <h1 className="text-5xl text-shadow-gray-900">Anvi Robotics</h1>
          </TextAnimToTop>
          <TextAnimToTop delay={0.3}>
          <p className="text-xl text-shadow-gray-900">
            Automation that thinks, acts, and adapts
          </p>
          </TextAnimToTop>
          <TextAnimToTop delay={0.6} classname="mt-5">
          <Link
            to={pagesLinks.expertiseLinks.Robotics}
            className="hero-link max-w-max mt-5 bg-[#22a0af] px-10 py-3 hover:rounded-sm hover:px-15 transition-all duration-110 hover:bg-green-800"
          >
            Visit Site
          </Link>
          </TextAnimToTop>
        </div>
      </section>

      <section className="bg-[#f4f4f4] max-w-[1600px] m-auto">
        <div className=" h-auto w-full text-center px-5 md:px-15 py-10 pb-20 m-auto max-w-[800px] ">
          <h1 className="md:text-5xl md:pt-20 text-3xl">Our Services</h1>
          <p className="md:text-lg md:pt-8 text-lg pt-4">
            Blending intelligence with engineering, our robotics division is
            built to transform how humans interact with challenging environments
            on Earth. From rescue missions to industrial inspections, our robots
            are designed for purpose, precision, and performance.
          </p>
        </div>

        <div className="w-full flex flex-row max-md:flex-col md:grid-cols-2 md:px-15 px-5 sticky top-4 ">
          <div className="w-full h-auto bg-white max-md:rounded-t-4xl md:rounded-tl-4xl">
            <div className="flex flex-col justify-start gap-2 md:gap-4 min-lg:p-[5vw] min-lg:pl-[3vw] min-lg:pb-0 p-5">
              <img
                src="svgs/robotics-1.svg"
                alt="robotics-1.svg"
                className="w-full max-w-10 min-md:max-w-15  object-contain object-center"
              />
              <h1 className="md:text-4xl text-3xl  font-semibold">
                Surveillance Robot
              </h1>
              <p className=" md:text-lg text-lg">
                “Intelligent eyes. Constant vigilance.”
              </p>
              <p className=" md:text-lg text-lg">
                Designed for real-time monitoring in high-risk or remote
                environments, our autonomous surveillance robots integrate
                advanced vision systems, AI-powered threat detection, and rugged
                mobility. They support security operations, infrastructure
                monitoring, and defense readiness — anytime, anywhere.
              </p>
              <p className="md:text-lg text-lg pb-5">
                Always alert. Always aware.
              </p>
            </div>
          </div>
          <div className="max-md:aspect-square h-auto w-full object-cover bg-white md:rounded-tr-4xl">
            <img
              src={roboimg1}
              alt={roboimg1}
              className="md:rounded-tr-4xl w-full min-md:h-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-row-reverse max-md:flex-col md:grid-cols-2 md:px-15 px-5 sticky top-4 ">
          <div className="w-full h-auto bg-white max-md:rounded-t-4xl md:rounded-tr-4xl">
            <div className="flex flex-col justify-start gap-2 md:gap-4 min-lg:p-[5vw] min-lg:pl-[3vw] min-lg:pb-0 p-5">
              <img
                src="svgs/robotics-2.svg"
                alt="robotics-2.svg"
                className="w-full max-w-10 min-md:max-w-15  object-contain object-center"
              />
              <h1 className="md:text-4xl text-3xl font-bold">
                Semi - Humanoid Robot
              </h1>
              <p className=" md:text-lg text-lg">
                “Engineered to Assist. Designed to Adapt.”
              </p>
              <p className=" md:text-lg text-lg pb-5">
                Our semi-humanoid platforms bridge the gap between machine
                intelligence and human interaction. Capable of natural
                communication, object handling, and situational awareness, these
                robots serve in frontline environments — from smart facilities
                and corporate spaces to healthcare and service sectors.
              </p>
            </div>
          </div>
          <div className="max-md:aspect-square h-auto w-full bg-white">
            <img
              src={roboimg2}
              alt={roboimg2}
              className="md:rounded-tl-4xl w-full min-md:h-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-row max-md:flex-col md:grid-cols-2 md:px-15 px-5 sticky top-4 ">
          <div className="w-full h-auto bg-black text-white max-md:rounded-t-4xl md:rounded-tl-4xl">
            <div className="flex flex-col justify-start gap-2 md:gap-4 min-lg:p-[5vw] min-lg:pl-[3vw] min-lg:pb-0 p-5">
              <img
                src="svgs/robotics-3.svg"
                alt="robotics-3.svg"
                className="w-full max-w-10 min-md:max-w-15 invert object-contain object-center"
              />
              <h1 className="md:text-4xl text-3xl font-semibold">
                Sludge Robot
              </h1>
              <p className=" md:text-lg text-lg">
                “Built for extremes. Optimized for impact.”
              </p>
              <p className=" md:text-lg text-lg pb-5">
                Designed to operate in hazardous, submerged, or contaminated
                environments, our sludge-removal robots are redefining how
                industries manage waste and maintenance. Fully equipped with
                corrosion-resistant builds, environmental sensors, and
                autonomous navigation, they deliver precision where humans
                cannot go.
              </p>
            </div>
          </div>
          <div className="max-md:aspect-square h-auto w-full bg-white">
            <img
              src={roboimg3}
              alt={roboimg3}
              className="md:rounded-tr-4xl w-full min-md:h-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-10 md:py-15 md:px-45 m-auto h-auto w-screen px-3">
        <div className="bg-black text-white text-center md:rounded-4xl md:p-20 p-10 rounded-2xl ">
          <h1 className="md:text-4xl md:mb-5 text-2xl mb-3 font-bold">
            Innovation at the Core
          </h1>
          <p className="md:text-md md:mb-5">
            Every robotic system we build reflects our commitment to innovation,
            reliability, and real-world application. From semi-humanoid
            assistants to industrial-grade cleaning bots, ANVI robotics delivers
            performance where it matters most.
          </p>
          <p className="md:text-md md:mb-5">
            Enabling automation with intelligence. Powering progress with
            purpose
          </p>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default Robotics;
