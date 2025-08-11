import { Link } from "react-router-dom";
import ContactUs from "../../components/ContactUs";
const dimage = "https://static.wixstatic.com/media/7ab3a8_765b93a9d6f242aa8fabada6b50dc97f~mv2.png/v1/fill/w_2217,h_965,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png"
// const nimage = "https://static.wixstatic.com/media/7ab3a8_765b93a9d6f242aa8fabada6b50dc97f~mv2.png/v1/fill/w_726,h_1262,fp_0.26_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png"
const roboimg1 = "https://static.wixstatic.com/media/7ab3a8_9870ef81d0a844389091202dcd53f7da~mv2.png/v1/fill/w_891,h_1050,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20Anvi%20Surveillance%20Robot%20(LinkedIn%20Post).png"
const roboimg2 = "https://static.wixstatic.com/media/c837a6_650c3d880f99434dbc32154c5c9fe2cd~mv2.jpg/v1/fill/w_768,h_1062,fp_0.58_0.42,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/possessed-photography-g29arbbvPjo-unsplash_edited.jpg"
const roboimg3 = "https://static.wixstatic.com/media/baac51_c5b56ac2d6804af581a4ab3c889961c2~mv2.jpg/v1/fill/w_855,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Light%20-%20Item%20image%204.jpg"
const svgimg1 = ""
const Robotics = () => {

  return (
    <>
      <section className="py-16 px-16 m-auto h-screen md:h-[85vh] w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dimage})` }}>
        <h1 className="text-5xl mt-45 m-auto px-2 md:text-5xl md:mt-40 md:px-4 text-white">Anvi Robotics</h1>
        <p className="text-lg px-12 md:text-lg md:px-24 pt-4 text-white">Automation that thinks, acts, and adapts</p>
        <Link to="/robotics" className="inline-block text-black bg-[#22a0af] mx-12 px-3 py-2 mt-2 md:mx-24 md:px-6 md:py-3 md:mt-3">Visit Site</Link>
      </section>




      <section className="bg-[#f4f4f4]">
        <div className=" h-auto w-full text-center  px-15  py-10 m-auto max-w-[800px] ">
          <h1 className="md:text-5xl md:pt-20 text-3xl pt-12  ">Our Services</h1>
          <p className="md:text-lg md:pt-8 text-lg pt-4">Blending intelligence with engineering, our robotics division is built to transform how humans interact with challenging environments on Earth. From rescue missions to industrial inspections, our robots are designed for purpose, precision, and performance.</p>
        </div>


        <div className="bg-[#f4f4f4] flex flex-row max-md:flex-col md:grid-cols-2 md:px-15 px-5 sticky top-4 ">
          <div className=" h-auto w-full bg-white max-md:rounded-t-4xl md:rounded-tl-4xl">
            <img src={svgimg1}></img>
            <h1 className=" md:text-4xl md:px-10 md:pt-10 text-3xl px-10 pt-10 font-bold">Surveillance Robot</h1>
            <p className=" md:text-lg md:px-10 md:pt-10 text-lg px-10 pt-5">“Intelligent eyes. Constant vigilance.”</p>
            <p className=" md:text-lg md:px-10 md:pt-7 text-lg px-10 pt-5">Designed for real-time monitoring in high-risk or remote environments, our autonomous surveillance robots integrate advanced vision systems, AI-powered threat detection, and rugged mobility. They support security operations, infrastructure monitoring, and defense readiness — anytime, anywhere.</p>
            <p className="md:text-lg md:px-10 md:pt-7 text-lg px-10 pt-5 pb-5">Always alert. Always aware.</p>
          </div>
          <div className=" h-auto w-full bg-white md:rounded-tr-4xl  ">
            <img src={roboimg1} className="md:rounded-tr-4xl  "></img>
          </div>
        </div>



        <div className="bg-[#f4f4f4] flex flex-row-reverse max-md:flex-col md:px-15 px-5 md:col-reverse sticky top-4">
          <div className=" h-auto w-full bg-white md:rounded-tr-4xl max-md:rounded-t-4xl ">
            <img src={svgimg1}></img>
            <h1 className=" md:text-4xl md:px-10 md:pt-10 text-3xl px-10 pt-10 font-bold">Semi - Humanoid Robot</h1>
            <p className=" md:text-lg md:px-10 md:pt-10 text-lg px-10 pt-5">“Engineered to Assist. Designed to Adapt.”</p>
            <p className=" md:text-lg md:px-10 md:pt-7 text-lg px-10 pt-5 pb-5">Our semi-humanoid platforms bridge the gap between machine intelligence and human interaction. Capable of natural communication, object handling, and situational awareness, these robots serve in frontline environments — from smart facilities and corporate spaces to healthcare and service sectors.</p>
          </div>
          <div className=" h-auto w-full bg-white  ">
            <img src={roboimg2} className="md:rounded-tl-4xl  "></img>
          </div>
        </div>



        <div className="bg-[#f4f4f4] grid md:grid-cols-2 md:px-15 px-5 rounded-tl-4xl sticky top-4">
          <div className=" h-auto w-full bg-black text-white md:rounded-tl-4xl max-md:rounded-t-4xl ">
            <img src={svgimg1}></img>
            <h1 className=" md:text-4xl md:px-10 md:pt-10 text-3xl px-10 pt-10 font-black">Sludge Robot</h1>
            <p className=" md:text-lg md:px-10 md:pt-10 text-lg px-10 pt-5">“Built for extremes. Optimized for impact.”</p>
            <p className=" md:text-lg md:px-10 md:pt-7 text-lg px-10 pt-5 pb-5">Designed to operate in hazardous, submerged, or contaminated environments, our sludge-removal robots are redefining how industries manage waste and maintenance. Fully equipped with corrosion-resistant builds, environmental sensors, and autonomous navigation, they deliver precision where humans cannot go.</p>
          </div>
          <div className=" h-auto w-full bg-white  ">
            <img src={roboimg3} className="md:rounded-tr-4xl  "></img>
          </div>
        </div>
      </section>
      <section className="bg-[#f4f4f4] md:py-15 md:px-45 m-auto h-auto w-screen px-3 mb-20 ">
        <div className="bg-black text-white text-center md:rounded-4xl md:p-20 p-10 rounded-2xl ">
          <h1 className="md:text-4xl md:mb-5 text-2xl mb-3 font-bold">Innovation at the Core</h1>
          <p className="md:text-md md:mb-5">Every robotic system we build reflects our commitment to innovation, reliability, and real-world application. From semi-humanoid assistants to industrial-grade cleaning bots, ANVI robotics delivers performance where it matters most.</p>
          <p className="md:text-md md:mb-5">Enabling automation with intelligence. Powering progress with purpose</p>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default Robotics;
