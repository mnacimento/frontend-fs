import { useSelector, useDispatch } from "react-redux"
import Tarjeta from "./Tarjeta"
import { useEffect } from "react"
import { guardarTareas } from "../store/slices/tareasSlice"

const Tarjetas = () => {

    const tareas = useSelector(state => state.tareas.listaTareas)

    const dispatch = useDispatch();

        useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then(r => r.json())
        .then(datos => {
            dispatch(guardarTareas(datos))
        })
    }, [])
    

    return (
        <div className="tarjetas">
            
            {tareas.map(t => <Tarjeta key={t.id} {...t}/>)}
        </div>
        )
}

export default Tarjetas