import { Link } from "react-router-dom";

const ExpertiseCard = (props) => {
  const { expertiseInfo } = props;
//   console.log(expertiseInfo);
  const { label, url, img_url } = expertiseInfo;

  return (
    <li className="expertiseCard w-full max-sm:w-[95%] m-auto aspect-video relative rounded-md overflow-hidden hover:scale-105 hover:shadow-md hover:shadow-gray-400 transition-all duration-150 flex flex-col justify-end">
      <Link
        style={{backgroundImage: `url(${img_url})`}}
        className="w-full m-auto aspect-video bg-cover place-content-end"
        to={url}
      >
        <p className="text-md font-bold text-white max-w-[80%] border-b-2 border-gray-100 p-1 m-2 has-[expertise-card:hover]:text-shadow-2xl text-shadow-gray-800">
          {label}
        </p>
      </Link>
    </li>
  );
};

export default ExpertiseCard;
