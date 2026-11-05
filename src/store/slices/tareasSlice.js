import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listaTareas: []
}

export const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        guardarTareas: (state, action) => { 
           console.log(action);
           state.listaTareas = action.payload;
        },
        agregarTareas: (state, action) => {
            console.log(action.payload);
            state.listaTareas.push(action.payload)
        }

    }
})

export const { guardarTareas, agregarTareas } = tareasSlice.actions;
export default tareasSlice.reducer;