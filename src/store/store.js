import { configureStore } from "@reduxjs/toolkit";
import  contadorReducer  from "./slices/contadorSlice";
import  tareasReducer  from "./slices/tareasSlice";
import  spinnerReducer  from "./slices/spinnerSlice";


export const store =  configureStore({
    reducer:{
        contador: contadorReducer,
        tareas: tareasReducer,
        spinner: spinnerReducer
    }
})