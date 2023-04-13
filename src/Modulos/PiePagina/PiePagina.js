//Cecilia Ceballos
import React from 'react'
import './PiePagina.css'
import logo from '../Utilidades/Imagines/Footer/logo_transparent.png'

export const PiePagina = () => {
  return (
    
    <div className='contenedor_all'>
    <footer className='foot' id='foot'>
        <div className='waves'>
            <div className='wave' id='wave1'> </div>
            <div className='wave' id='wave2'> </div>
    
        </div>
        <div className="container_footer">
    
            <div className='container_columnasfooter'>
                <div className='container_logofooter'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
            <div className='contiene_textofooter'>
                    <p>Lorem ipsum dolor sit amet consectetur idiculus a sollicitudin proin, quam mus eu mauris eleifend sapien fringilla. Mi sem semper nulla euismod, tellus tincidunt. </p>
             </div>
        </div>
        <div className='contiene_columnasfooter'>
                  {/* Los iconos los sacamos de la icons   */}
                  <h2>Opciones</h2>
                  <a
                      href="https://www.google.com/"
                      rel="noopener noreferrer"
                  >
                      Tarot
                  </a>
                  <a
                      href="google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Cartas Natales
                  </a>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Runas
                  </a>
        </div>
        <div className='contiene_columnasfooter'>
                  {/* Los iconos los sacamos de la pag de boostrap   */}
                  <h2>Redes Sociales</h2>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i className="bi bi-facebook" color="red">    Facebook</i>
                  </a>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i class="bi bi-instagram">   Instagram</i>
                  </a>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <i class="bi bi-twitter"> Twitter</i>
                  </a>
        </div>
        <div className='contiene_columnasfooter'>
                  {/* Los iconos los sacamos de la icons   */}
                  <h2>Menu</h2>
                  <a
                      className="App-link"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Home
                  </a>
                  <a
                      className="App-link"
                      href="#bienvenido"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      About
                  </a>
                  <a
                      className="App-link"
                      href="#carrusel"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Product
                  </a>
                  <a
                      className="App-link"
                      href="#servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Servicios
                  </a>
                  <a
                      className="App-link"
                      href="#formulario"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Contact
                  </a>
        </div>
    </div>
    <div class="conteiner_copyright">
              <hr style={{
                  color: '#363634',
                  backgroundColor: '#363634',
                  height: 5,
                  borderColor: '#363634'
              }} />
              <p>Todos los derechos reservados © 2023 <b>C-2- Taroy y Astrología</b></p>
          </div>
    
        </footer>
</div>


)
}
