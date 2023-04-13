//Cecilia Ceballos
import React from 'react'
import './Formulario.css'
import formulario from '../Utilidades/Imagines/Formulario/formulario.jpg'

export const Formulario = (p) => {
  return (
    <form onSubmit={p.enviaDatos}>
      <div className='partes'>
        <div className='parte fw-bold' id='parte1'>
          <div className="mb-3">
            <strong> <label for="nombre" className='form-label'> Nombre</label></strong>

            <input
              type="text"
              minlength="2" maxlength="25"
              className='form-control'
              id="nombre"
              onChange={p.cambiaEntrada}
              value={p.datoContacto.nombre}
              required
            />

          </div>
          <div className="mb-3">
            <strong><label for="apellido" className='form-label'> Apellido</label></strong>
            <input
              type="text"
              minlength="2" maxlength="25"
              className='form-control'
              id="apellido"
              onChange={p.cambiaEntrada}
              value={p.datoContacto.apellido}
              required
            />
          </div>

          <div className="mb-3">
            <strong><label for="email" className="form-label">Correo Electrónico</label></strong>
            <input
              type="email"
              maxlength="30"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              aria-describedby="helpmail"
              onChange={p.cambiaEntrada}
              value={p.datoContacto.email}
              required
            />
            <div id="helpmail" className="form-text">No compartiremos su email</div>
          </div>
          <div className="mb-3">
            <strong><label for="telefono" className="form-label">Teléfono</label></strong>
            <input
              type="text"
              minlength="5" maxlength="15"
              //pattern="[0-9]{5,15}"
              pattern="[0-9]*"
              className="form-control"
              id="telefono"
              onChange={p.cambiaEntrada}
              value={p.datoContacto.telefono}
              required
            />
            <div className="form-text"> Sólo acepta números.</div>

          </div>
          <div className="mb-3">
            <strong>
              <label for="descripcion" className="form-label">Dejanos Tu Mensaje</label>
            </strong>

            <textarea
              className="form-control"
              id="descripcion"
              maxlength="500"
              rows="5"
              onChange={p.cambiaEntrada}
              value={p.datoContacto.descripcion}
            >
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary col-4 rounded-pill">Contactarme
          </button>
        </div>
        <div className='parte' id='parte2'>
          <img src={formulario}
            alt="formulario" />
        </div>
      </div>
    </form>
  )
}
