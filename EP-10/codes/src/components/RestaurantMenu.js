import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const onlineStatus = useOnlineStatus();

  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (!onlineStatus)
    return (
      <h1>It seems you are offline! please check your internet connection. </h1>
    );

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
