import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(menuItems);

  return (
    <div>
      {}
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      {menuItems.map((items) => (
        <li key={items.card.info.id}>
          {items.card.info.name} - Rs.{items.card.info.price / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
