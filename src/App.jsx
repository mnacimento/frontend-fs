import './App.css'
import './i18n/i18n';
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Login from './componentes/Login';
import Clima from './componentes/Clima';
import Menu from './componentes/Menu';
import { BrowserRouter, Routes, Route } from 'react-router';
import FormularioPersona from './componentes/formularios/FormularioPersona';
import ComponenteEjemplo from './componentes/translationComponents/ComponenteEjemplo';
import FormularioPersonaTranslation from './componentes/translationComponents/FormularioPersonaTranslation';
import ListaTareas from './componentes/axiosComponent/ListaTareas';
import ListaDeTareasModal from './componentes/ListaConModal/Lista/ListaDeTareasModal';
import Mapa from './componentes/mapa/Mapa';
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}>
            <Route path='/'element={<Login/>}/>
            <Route path='clima'element={<Clima/>}/>
            <Route path='persona'element={<FormularioPersona/>}/>
            <Route path='ejemploTraduccion'element={<ComponenteEjemplo/>}/>
            <Route path='personaTraduccion'element={<FormularioPersonaTranslation/>}/>
            <Route path='tareas'element={<ListaTareas/>}/>
            <Route path='tareasModal'element={<ListaDeTareasModal/>}/>
            <Route path='mapa'element={<Mapa/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position='bottom-right'/>
    </Provider>
  )
}

export default App;














// const App = () => {

//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/'element={<Login/>}/>
//           <Route path='base' element={<Menu/>}>
//             <Route path='clima'element={<Clima/>}/>
//             <Route path='clima2'element={<Clima/>}/>
//           </Route>

//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   )
// }

// export default App;




//-------------------------------------------------------------------------------------------------------------


// import './App.css'
// import Contenido from './componentes 27-20-2026/Contenido';
// import Menu from './componentes 27-20-2026/Menu';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import Contador from './componentes 27-20-2026/Contador';
// import Boton from './componentes 27-20-2026/Boton';

// const App = () => {

//   return (
//     <Provider store={store}>
//       <Menu/>
//       <div className="contador">
//         <Contador/>
//         <Boton/>
//       </div>
//       <Contenido/>
//     </Provider>
//   )
// }

// export default App;
