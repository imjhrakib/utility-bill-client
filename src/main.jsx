import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./layouts/Home.jsx";
import RootLayout from "./RootLayout/RootLayout.jsx";
import Bills from "./layouts/Bills.jsx";
import MyPayBills from "./layouts/MyPayBills.jsx";
import MyProfile from "./layouts/MyProfile.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes.jsx";
import NotFoundPage from "./NotFound/NotFound.jsx";
import { HelmetProvider } from "react-helmet-async";
import BillsDetails from "./layouts/BillsDetails.jsx";
import RecentBills from "./layouts/RecentBills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "bills",
        element: <Bills></Bills>,
        loader: () =>
          fetch("https://utility-bill-server.vercel.app/bills").then((res) =>
            res.json()
          ),
      },
      {
        path: "bills/:id",
        element: (
          <PrivateRoute>
            <BillsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://utility-bill-server.vercel.app/bills/${params.id}`
          ).then((res) => res.json()),
      },

      {
        path: "myPayBills",
        element: (
          <PrivateRoute>
            <MyPayBills></MyPayBills>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
