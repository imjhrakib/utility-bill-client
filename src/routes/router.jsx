import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Bills from "../layouts/Bills";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import BillsDetails from "../layouts/BillsDetails";
import MyPayBills from "../layouts/MyPayBills";
import MyProfile from "../layouts/MyProfile";
import LoginPage from "../components/LoginPage/LoginPage";
import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import NotFoundPage from "../NotFound/NotFound";
import RootLayout from "../RootLayout/RootLayout";
import Dashboard from "../dashboard/Dashboard";
import DashboardHome from "../dashboard/DashboardHome";
import Statistics from "../dashboard/DashboardStatistics";

export const router = createBrowserRouter([
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
        path: "about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "bills/:id",
        element: <BillsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://utility-bill-server.vercel.app/bills/${params.id}`
          ).then((res) => res.json()),
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
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
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
        path: "statistics",
        element: (
          <PrivateRoute>
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
