import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import { Hero } from "./components";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Hero /> }],
  },
]);
