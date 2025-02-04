import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import "./index.css";
import DetailProductPage from "./pages/DetailProductPage";
import Collection from "./pages/Collection";
import ModelProvider from "./context/ModelProvider";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Favorite from "./pages/Favorite";
import Register from "./pages/auth/Register";
import AuthLayout from "./pages/auth/AuthLayout";
import Account from "./pages/Account";
import Logout from "./pages/auth/Logout";
import Login from "./pages/auth/Login";
import CheckOutPage from "./pages/CheckOutPage";
import Success from "./pages/Success";
import SearchPage from "./pages/SearchPage";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:slugProduct",
        element: <DetailProductPage />,
      },
      {
        path: "/collection/:slugCollection",
        element: <Collection />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/search/:slugSearch",
        element: <SearchPage />,
      },
      {
        element: <AuthLayout/>,
        children: [
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ModelProvider>
      <RouterProvider router={router} />
    </ModelProvider>
  </Provider>
);
