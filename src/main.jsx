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
      },
      {
        path: "myPayBills",
        element: <MyPayBills></MyPayBills>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayout></RootLayout>
    </RouterProvider>
  </StrictMode>
);
