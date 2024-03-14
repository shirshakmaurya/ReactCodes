import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Body from "../src/components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
