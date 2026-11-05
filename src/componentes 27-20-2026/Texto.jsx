import { useState, useRef } from "react";



const Texto = () => {

    const [nombre, setNombre] = useState('');
    const campo = useRef(null);

    const guardar = () => {
        setNombre(campo.current.value)
    }

  return (
    <div>
        {/* <label htmlFor="textNombre">Nombre:</label> */}
        {/* <input type="text" id="textNombre"/><br /> */}

        <label>
            Nombre:
            <input type="text" ref={campo}/>
        </label>
        <input type="button" value="Guardar" onClick={guardar}/>
        <h3>{nombre}</h3>
    </div>
  )
}

export default Texto




// import { useState } from "react";



// const Texto = () => {

//     const [nombre, setNombre] = useState('');

//     const actualizar = (event) => {
//         console.log(event.target.value);
//         setNombre(event.target.value)
//     }

//   return (
//     <div>
//         {/* <label htmlFor="textNombre">Nombre:</label> */}
//         {/* <input type="text" id="textNombre"/><br /> */}

//         <label>
//             Nombre:
//             <input type="text" onChange={actualizar}/>
//         </label>
//         <input type="button" value="Guardar" />
//         <h3>{nombre}</h3>
//     </div>
//   )
// }

// export default Texto