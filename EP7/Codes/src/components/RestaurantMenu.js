import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   const [restaurantMenu, setRestaurantMenu] = useState([]);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    getRestaurantMenu();
    console.log("fetched complete");
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await response.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);

    setResInfo(json?.data);

    // setRestaurantMenu(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
  };
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
