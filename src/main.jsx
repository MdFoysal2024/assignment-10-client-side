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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
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
