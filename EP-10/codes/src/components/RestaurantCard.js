import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props)

  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="p-4 m-4 w-52 h-96 rounded-lg  bg-gray-100  hover:bg-gray-300">
      <img className="w-44 h-36 rounded-lg" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
