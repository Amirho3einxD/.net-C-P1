import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import Activityform from "../../features/activities/form/Activityform";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'activities',element:<ActivitiesDashboard/>},
            {path:'activities/:id',element:<ActivityDetailPage/>},
            {path:'createActivity',element:<Activityform key='create'/>},
            {path:'manage/:id',element:<Activityform/>},
            {path:'counter',element:<Counter/>}
        ]
    }
])