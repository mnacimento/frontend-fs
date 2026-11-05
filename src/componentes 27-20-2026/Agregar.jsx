import { useRef } from "react";
import { useDispatch } from "react-redux";
import { agregarTareas } from "../store/slices/tareasSlice";

const Agregar = () => {

    const dispatch = useDispatch();
    const campo = useRef(null);

    const tomarTarea = () => {
        let objTarea = {
            "userId": 1,
            "title": campo.current.value,
            "completed": false
        }

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            body: JSON.stringify(objTarea),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(r => r.json())
            .then(datos => {
                console.log(datos);
                dispatch(agregarTareas(datos))
            })
    }



    return (
        <div className="agregar">
            <label htmlFor="txtAgregar">Agregar:</label>
            <input type="text" name="txtAgregar" id="txtAgregar" ref={campo} />
            <input type="button" value="Agregar" onClick={tomarTarea} />
        </div>
    )
}

export default Agregar