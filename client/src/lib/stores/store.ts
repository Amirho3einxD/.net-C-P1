import { createContext } from "react";
import counterStor from "./counterStore";
import { uiStore } from "./uiStore";

interface Store{
    counterStore:counterStor
    uiStore:uiStore
}

export const store:Store={
     counterStore:new counterStor(),
     uiStore:new uiStore()
}
export const StoreContext=createContext(store);