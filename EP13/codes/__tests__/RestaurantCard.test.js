import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

test("should render RestaurantCard component with props data", () => {
  //   console.log("MOCK_DATA:", MOCK_DATA);
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Manorma");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label", () => {
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const highRated = screen.getByText("High Rated");

  expect(highRated).toBeInTheDocument();
});
