const aboutContent = (
  <>
    <h4 className="text-xl  md:text-2xl text-dark font-bold pt-3 pb-3 ">
      Our Thought
    </h4>
    <p className="text-lg  md:text-xl text-dark">
      At Anvi, our mission is to create an innovative, AI-powered online
      platform that specializes in custom-made men’s formal and ethnic wear.
    </p>
    <h4 className="text-xl  md:text-2xl text-dark font-bold pt-3 pb-3 ">
      Vision
    </h4>
    <p className="text-lg  md:text-xl text-dark">
      We aim to empower men to express their individuality through clothing that
      fits perfectly, looks stylish, and reflects their unique personality — all
      made possible with the help of intelligent technology.
    </p>
  </>
);

const missionContent = (
  <>
    <p className="text-lg  md:text-xl text-dark">
      At Anvi, we are committed to delivering a seamless, personalized tailoring
      experience designed for the modern Indian man. From your first interaction
      to the final delivery, every step is crafted to be intuitive, exclusive,
      and stress-free.
    </p>
    <ul className="list-disc m-0 p-0 px-4">
      <li>
        <h4 className="text-2xl  md:text-2xl text-dark pt-3 pb-3 px-5">
          {" "}
          One Design, One Style:
        </h4>
        <p className="text-lg  md:text-xl text-dark px-5">
          To preserve uniqueness and personal expression, each design on our
          platform is available in a single exclusive style.
        </p>
      </li>
      <li>
        <h4 className="text-2xl  md:text-2xl text-dark pt-3 pb-3 px-5">
          Intelligent Fit Technology:
        </h4>
        <p className="text-lg  md:text-xl text-dark px-5 pb-3">
          Our AI-powered fit prediction engine, paired with easy-to-use
          measurement tools, ensures precise sizing — dramatically reducing the
          need for alterations or returns.
        </p>
      </li>
    </ul>
    <p className="text-lg md:text-xl text-dark">
      Anvi isn’t just about clothing — it’s about confidence, convenience, and a
      new standard in men’s custom wear.
    </p>
  </>
);

const statementContent = (
  <>
    <h4 className="text-2xl  md:text-2xl text-dark font-bold pb-3 pt-3">
      🌿 Sustainability & Indian Heritage
    </h4>
    <p className="text-lg  md:text-xl text-dark">
      At Anvi, we believe that true style is both responsible and rooted in
      tradition. As we build our platform, we are laying the foundation for a
      menswear experience that honors the planet and celebrates the richness of
      Indian craftsmanship.
    </p>

    <ul className="list-disc m-0 p-0 px-4">
      <li className="pt-3">
        <h4 className="text-xl  md:text-2xl text-dark pb-2">
          Conscious by Design
        </h4>
        <p className="text-lg  md:text-xl text-dark">
          Sustainability is a core principle at Anvi. We are committed to
          sourcing eco-friendly, low-impact fabrics that are not only luxurious
          but also breathable and skin-friendly—perfect for India’s diverse
          climate and the needs of today’s conscious consumer.
        </p>
      </li>
      <li className="pt-3">
        <h4 className="text-xl  md:text-2xl text-dark pb-2">
          Honoring Indian Craftmanship
        </h4>
        <p className="text-lg  md:text-xl text-dark">
          India’s textile heritage is vast and vibrant. From Banarasi silks to
          Khadi and Ikat, we aim to collaborate with skilled artisans and
          weavers across the country to preserve and revive traditional
          techniques through contemporary menswear.
        </p>
      </li>
      <li className="pt-3">
        <h4 className="text-xl  md:text-2xl text-dark pb-2">
          A Future of Responsible Fashion
        </h4>
        <p className="text-lg  md:text-xl text-dark">
          As we grow, our promise is to keep environmental impact low and
          cultural value high — creating clothing that tells a story, supports
          communities, and respects the earth.
        </p>
      </li>
    </ul>

    <p className="text-lg  md:text-xl text-dark pt-3">{"​​Anvi is not just tailoring the future of fashion — we’re weaving in sustainability, heritage, and purpose into every stitch."}</p>
  </>
);

export const sections = [
  {
    title: "About",
    desc: "",
    content: aboutContent,
  },
  {
    title: "Mission",
    desc: "",
    content: missionContent,
  },
  {
    title: "Our Statement",
    desc: "",
    content: statementContent,
  },
];
