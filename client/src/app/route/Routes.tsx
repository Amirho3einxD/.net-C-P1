import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import Activityform from "../../features/activities/form/Activityform";
import ActivityDetail from "../../features/activities/details/ActivityDetail";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'activities',element:<ActivitiesDashboard/>},
            {path:'activities/:id',element:<ActivityDetail/>},
            {path:'createActivity',element:<Activityform key='create'/>},
            {path:'manage/:id',element:<Activityform/>}
        ]
    }
])