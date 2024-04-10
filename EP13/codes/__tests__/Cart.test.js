import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from "../utils/appStore";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";

import MOCK_DATA from "../mocks/mockResMenu.json";

import "@testing-library/jest-dom";

// global.fetch = jest.fn(() =>
//   Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
// );

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// console.log(MOCK_DATA);

// it("should load restaurant menu component ", async () => {
//   await act(async () => render(<RestaurantMenu />));

//   expect(screen.getAllByTestId("foodItem").length).toBe(11);
// });

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("New Launches (9)");
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(11);
});
