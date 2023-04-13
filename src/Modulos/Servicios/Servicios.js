import React from 'react'
import './Servicios.css'

export const Servicios = () => {
  return (
      <section className='columna_color'>
          <div id="accordion" className="container text center">
              <div className="row" >
                  <div className="col">
                      <h2 className="servicios">Servicios</h2>
                      <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Tarot
                                  </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      El tarot es un conjunto de cartas ilustradas y simbólicas utilizadas en la adivinación y en la exploración del autoconocimiento. Cada carta del tarot representa un arquetipo o concepto universal y puede interpretarse de diferentes maneras según el contexto y la pregunta que se haga. El tarot se ha utilizado durante siglos como una herramienta para entender el pasado, presente y futuro, así como para reflexionar sobre las emociones, las relaciones y los patrones de comportamiento. Aunque el tarot se ha asociado tradicionalmente con la adivinación y la predicción del futuro, también puede ser utilizado como una herramienta para el crecimiento personal y la toma de decisiones.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Astrologia
                                  </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      La astrología es un sistema de conocimiento que estudia la influencia de los astros y los planetas en la vida y personalidad de las personas, así como en los acontecimientos del mundo. La astrología se basa en la observación de los movimientos y posiciones de los planetas, las estrellas y otros cuerpos celestes en relación con la Tierra y se utiliza para hacer predicciones y análisis de la personalidad, la salud, las relaciones y otros aspectos de la vida .
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Runas Vikingas
                                  </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      Las runas son los símbolos más distintivos de los antiguos pueblos nórdicos, entre ellos los vikingos. Estos símbolos fueron el sistema de escritura usado por el nórdico antiguo, usado para inmortalizar en las rocas enseñanzas, historias y valores de estas culturas. Hoy en día, podemos encontrar muchos restos arqueológicos con runas a lo largo de toda Escandinavia, como por ejemplo la piedra de Rök (Suecia) o las piedras de Jelling (Dinamarca) y también en papel, como lo es el “Codex runicus”.
                                      Estos símbolos han despertado el interés de muchas personas relacionadas con los New Age, lo místico y espiritual. No es de extrañar, puesto que estos símbolos están envueltos en un halo de misterio, sobre todo porque pese a ser los antiguos nórdicos los antepasados de los noruegos, suecos, daneses e islandeses, parece que su forma de vida ha quedado anulada por el cristianismo y el mundo grecorromano. Para más inri, el propio nombre de las runas, “run”, significa “secreto”, lo cual despierta todavía más la curiosidad y el misticismo.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <img className=" img-thumbnail float-end " src="servicio.jpg" alt="" />
                  </div>
              </div>
          </div>
      </section>
  )
}
