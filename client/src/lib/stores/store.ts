import { createContext } from "react";
import counterStor from "./counterStore";
import { uiStore } from "./uiStore";
import { ActivityStore } from "./activityStore";

interface Store{
    counterStore:counterStor
    uiStore:uiStore
    activityStore:ActivityStore
}

export const store:Store={
     counterStore:new counterStor(),
     uiStore:new uiStore(),
     activityStore:new ActivityStore()
}
export const StoreContext=createContext(store);