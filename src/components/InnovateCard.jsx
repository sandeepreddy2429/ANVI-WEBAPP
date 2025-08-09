import { Link } from "react-router-dom";

const InnovateCard = (props) => {
  const { innovateInfo } = props;
//   console.log(innovateInfo);
  const { heading, desc, img_url } = innovateInfo;

  return (
    <li className="innovate-card w-full max-w-[250px] place-items-start self-center aspect-[3/4] relative rounded-xl hover:scale-105 hover:has-[.innovate-card:hover]:opacity-0 hover:has-[.innovate-card:hover]:place-items-center hover:shadow-md hover:shadow-gray-400 bg-[#00000030] transition-all duration-150 flex flex-col justify-end">
        <img src={img_url} alt={heading} className="aspect-[3/4] w-full absolute top-0 z-[-1] rounded-lg"/>
        <div className="p-2 w-full flex flex-col justify-start align-middle">
            <h5 className="text-md w-auto font-bold text-white border-b-3 border-gray-50 m-2 has-[expertise-card:hover]:text-shadow-2xl text-shadow-gray-800">
                {heading}
            </h5>
            <p className="text-sm text-green-50">{desc}</p>
            <Link className="text-black text-sm bg-gray-50 py-1 px-3 rounded-xl self-end m-2" to={heading === 'Anvi Studios' ? 'entertainment' : heading.split(' ')[1].toLowerCase()}>Learn More</Link>
        </div>
    </li>
  );
};

export default InnovateCard;
