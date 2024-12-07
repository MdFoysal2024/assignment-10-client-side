import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Main from './Main/Main';
import Home from './components/Home';
import AllCampaign from './Main/AllCampaign';
import AddCampaign from './Main/AddCampaign';
import MyCampaign from './Main/MyCampaign';
import MyDonations from './Main/MyDonations';
import SignUp from './components/SignUp';
import AuthProvider from './provider/AuthProvider';
import SignIn from './components/SignIn';
import PrivateRoute from './routes/PrivateRoute';
import CampaignDetails from './components/CampaignDetails';
import CampaignUpdate from './components/CampaignUpdate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/addNewCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        )
      },
      {
        path: "/myCampaign",

        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>,
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/campaignUpdate/:id",
        element: <CampaignUpdate></CampaignUpdate>,

      },
      {
        path: "/campaignDetails/:id",

        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>,
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const paramsData = await fetch("http://localhost:5000/campaigns")
          const data = await paramsData.json();
          const singleData = data.find(d => d._id == params.id)
          return singleData;
        }
      },

    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
