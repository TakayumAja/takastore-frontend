import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import { Home, Shop } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);
