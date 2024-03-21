import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("useRestaurantMenu hook");
  useEffect(() => {
    console.log("useRestaurantMenu hook");
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    console.log("useRestaurantMenu hook");
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await response.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);

    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
