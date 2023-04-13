//Cecilia Ceballos
import React from 'react'
import imagen from '../Utilidades/Imagines/Carrusel/imagenes.js'
import './Carrusel.css'


export const Carrusel = () => {
    const titulo1 ="CARTAS NATALES";
    const titulo2 ="CICLO DE ENCUENTROS";

  return (
      <section className='columna_color'>
          
          <div className='container-fluid row m-0 w-100 vh-100 d-flex justify-content-center align-items-center'>
              <div id='carouselExample' className='carousel slide w-75'>
                  <div className='carousel-inner'>
                      <div className="carousel-item active">
                          <img src={imagen.f1} className="d-block w-100" alt='f1' />
                          <div className='carousel-caption text-bg-warning top-25 start-50 bottom-0 w-50'>
                              <p className='fs-4'><strong>{titulo1}</strong></p>
                              <div className='contiene_texto p-3 w-100 h-100'>
                                  <p className='fs-6 text-start text-wrap'>Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica</p>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src={imagen.f2} className="d-block w-100" alt='f2' />
                          <div className='carousel-caption text-bg-warning top-25 start-50 bottom-0 w-50 h-50 '>
                              <p className='fs-4'><strong>{titulo2}</strong></p>
                              <div className='contiene_texto p-3 w-100 h-100'>
                                  <p className='fs-6 text-start text-wrap'>Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                      </svg>
                      <span className="visually-hidden"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                      <span className="visually-hidden"></span>
                  </button>
              </div>
          </div>
          {/* </div> */}
      </section>
  )
}
