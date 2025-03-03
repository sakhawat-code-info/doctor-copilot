import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import ContactUsPage from "../Pages/ContactUsPage";
import HealthTips from "../Pages/HealthTips";
import DiseasePage from "../Pages/DiseasePage";
import HospitalInfoPage from "../Pages/HospitalInfoPage";
import DietChartPage from "../Pages/DietChartPage";
import AmbulanceNearMePage from "../Pages/AmbulanceNearMePage";
import DoctorListPage from "../Pages/DoctorListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact_us",
        element: <ContactUsPage />,
      },
      {
        path: "/health_tips",
        element: <HealthTips />,
      },
      {
        path: "/disease",
        element: <DiseasePage />,
      },
      {
        path: "/hospital_info",
        element: <HospitalInfoPage />,
      },
      {
        path: "/diet_chart",
        element: <DietChartPage />,
      },
      {
        path: "/ambulance_near_me",
        element: <AmbulanceNearMePage />,
      },
      {
        path: "/doctor_list",
        element: <DoctorListPage />,
      },
    ],
  },
]);
