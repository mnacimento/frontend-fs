import { useDispatch, useSelector} from "react-redux";
import { decrementar, incrementar, resetear } from "../store/slices/contadorSlice";

const Boton = () => {

    const contador = useSelector(state => state.contador.cuenta);

    const dispatch = useDispatch();


    const aumentarCuenta = () => {
        console.log('click');
        dispatch(incrementar())
    }

    const drecrementarCuenta = () => {
        dispatch(decrementar())
    }

    const resetearCuenta = () => {
        dispatch(resetear())
    }

    const llegoAlMaximo = () => {
        return contador >=100
    }

  return (
    <div>
        <input type="button" value="Incrementar" onClick={aumentarCuenta} disabled={llegoAlMaximo()}/>
        <input type="button" value="Decrementar" onClick={drecrementarCuenta}/>
        <input type="button" value="Resetear" onClick={resetearCuenta}/>
    </div>
  )
}

export default Boton