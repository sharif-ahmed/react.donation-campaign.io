import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';
import CampaignDetails from '../components/CampaignDetails/CampaignDetails';
import Campaigns from './../components/Campaigns/Campaigns';

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:"/donation",
                element:<Campaigns></Campaigns>
            },
            {
                path:"/campaigns/:id",
                element:<CampaignDetails></CampaignDetails>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            
        ]
    }
]);

export default MyRouter;