import { Link } from "react-router-dom";

const ExpertiseCard = (props) => {
  const { expertiseInfo } = props;
//   console.log(expertiseInfo);
  const { label, url, img_url } = expertiseInfo;

  return (
    <li className="expertise-card w-full aspect-video relative rounded-xl hover:scale-105 hover:has-[.expertise-card:hover]:opacity-0 hover:shadow-md hover:shadow-gray-400 bg-[#00000070] transition-all duration-150 flex flex-col justify-end">
      <Link
        style={{backgroundImage: img_url}}
        className="max-w-[300px] aspect-video place-content-end"
        to={url}
      >
        <img src={img_url} alt={label} className="aspect-video w-full absolute top-0 z-[-1] rounded-lg"/>
        <p className="text-md font-bold text-white max-w-[80%] border-b-2 border-gray-100 p-1 m-2 has-[expertise-card:hover]:text-shadow-2xl text-shadow-gray-800">
          {label}
        </p>
      </Link>
    </li>
  );
};

export default ExpertiseCard;
