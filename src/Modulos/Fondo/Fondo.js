//Cecilia Ceballos
import React from 'react'
import './Fondo.css'
import imagenes from '../Utilidades/Imagines/Fondo/imagenes.js'

export const Fondo = () => {
  return (
     <section className='key'>
      <div className="fondo">
          <div className="container-all">
              <input type="radio" id="1" name="image-slide" hidden />
              <input type="radio" id="2" name="image-slide" hidden />
              <input type="radio" id="3" name="image-slide" hidden />
              <div className="slide_play">
                  <div className="item-slide">
                      <div className="contiene_texto">
                          <h3 className="titulo1"> Que Depara tu Futuro?</h3>
                          <p className="mensaje1">
                              Es un lugar de encuentro para que todos los amantes
                              de las ciencias ocultas puedan compartir un universo en común.
                              <br />
                              ¡Bienvenido a tu nuevo lugar favorito!
                          </p>
                          <button className="boton">Ver mas</button>
                      </div>
                      <img src={imagenes.tarot} alt="1" />
                  </div>
                  <div className="item-slide">
                      <div className="contiene_texto">
                          <h3 className="titulo1"> Que Depara tu Futuro?</h3>
                          <p className="mensaje1">
                              Es un lugar de encuentro para que todos los amantes
                              de las ciencias ocultas puedan compartir un universo en común.
                              <br />
                              ¡Bienvenido a tu nuevo lugar favorito!
                          </p>
                          <button className="boton">Ver mas</button>
                      </div>
                      <img src={imagenes.runas2} alt="2" />
                  </div>
                  <div className="item-slide">
                      <div className="contiene_texto">
                          <h3 className="titulo1"> Que Depara tu Futuro?</h3>
                          <p className="mensaje1">
                              Es un lugar de encuentro para que todos los amantes
                              de las ciencias ocultas puedan compartir un universo en común.
                              <br />
                              ¡Bienvenido a tu nuevo lugar favorito!
                          </p>
                          <button className="boton">Ver mas</button>
                      </div>
                      <img src={imagenes.mazo} alt="3" />
                  </div>
              </div>
          </div>
          <div class="pagination">
              <label htmlFor="1" className="pagination-item">
                  <img src={imagenes.tarot} alt="1" />
              </label>
              <label htmlFor="2" className="pagination-item">
                  <img src={imagenes.mazo} alt="2" />
              </label>
              <label htmlFor="3" className="pagination-item">
                  <img src={imagenes.runas2} alt="3" />
              </label>
          </div>
      </div>
      </section>
  )
}