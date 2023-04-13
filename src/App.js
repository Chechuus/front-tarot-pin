import './index.scss';
import { NavBar } from "./Modulos/NavBar/NavBar";
import { Fondo } from "./Modulos/Fondo/Fondo";
import { Bienvenido } from "./Modulos/Bienvenido/Bienvenido";
import { Carrusel } from "./Modulos/Carrusel/Carrusel";
import { Servicios } from "./Modulos/Servicios/Servicios";
import { Nosotras } from "./Modulos/Nosotras/Nosotras";
import AltaContacto from "./Modulos/Formulario/AltaContacto.js";
import { PiePagina } from './Modulos/PiePagina/PiePagina';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Fondo/>
     <Bienvenido/>
     <Carrusel/>
     <Servicios/>
     <AltaContacto/>
     <Nosotras/>
     <PiePagina/>
    </div>
  );
}

export default App;
