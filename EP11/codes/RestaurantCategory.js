import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  const { data } = props;

  const handleClick = () => {
    setShowItems(!showItems);
    console.log("clicked");
  };
  return (
    <div>
      <div className="bg-gray-100 w-6/12 p-2 mx-auto my-4 shadow-lg cursor-pointer hover:bg-gray-200">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
