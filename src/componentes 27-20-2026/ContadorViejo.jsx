import { useState, useEffect } from "react";


const ContadorViejo = () => {

    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    //version 1 se ejecuta siempre que se mnodifica un estado del componente sin importar que este asociado al efecto
    // useEffect(() =>{
    //     document.title = `Cuenta: ${contador}`
        
    // });

    //version 2 con array de dependencias vacio, que se ejecuta una unica vz cuando renderiza por primera vez el componente
    // useEffect(() =>{
    //     document.title = `Cuenta: ${contador}`
        
    // }, []);

    // version 3 ejecutar el efecto cuando se modifica el estado que esta oobservado este hook
    useEffect(() =>{
        document.title = `Cuenta: ${contador}`
        
    }, [contador]);


    const contar = () =>{
        console.log("click");
        setContador(contador+1) 
    }

  return (
    <div>
        <input type="button" value="Presionar" onClick={contar}/>
            <h2>{contador}</h2>
        <input type="button" value="Presionar 2" onClick={() => setContador2(contador2 + 2)}/>
            <h2>{contador2}</h2>
    </div>
  )
}

export default ContadorViejo

//     const [contador, setContador] = useState(0);

//     // let contador = 0;
//     const contar = () =>{
//         console.log("click");
//         // setContador(4)
//         // setContador(contador++)
//         setContador(contador+1)
//         // contador++;
        
//     }

//   return (
//     <div>
//         <input type="button" value="Presionar" onClick={contar}/>
//             <h2>{contador}</h2>
//         <input type="button" value="Presionar 2" onClick={() => console.log("click 2")}/>
//     </div>
//   )
// }

// export default Contador