import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import { Home, Shop, Cart, DetailProduct, SignIn, SignUp } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "shop/:id", element: <DetailProduct /> },
      { path: "login", element: <SignIn /> },
      { path: "register", element: <SignUp /> },
    ],
  },
]);
