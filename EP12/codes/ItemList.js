import { CDN_URL } from "../utils/constants";
import { UseDispatch, useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItems(item));
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-300 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="bg-black text-white p-1 "
                onClick={() => addItemHandler(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info?.imageId} className="w-full " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
