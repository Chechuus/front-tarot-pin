//Cecilia Ceballos
import React, { useState } from 'react'
import { Formulario } from './Formulario.js'
import axios from 'axios'
import './Formulario.css'

//import Swal from 'sweetalert2'


const AltaContacto = () => {


  const [error, setError] = useState(false)
  const messageExito = 'Datos Recibidos con Exito'

  const [exito, setExito] = useState(false)
  const messageError = 'No se Recibieron los Datos por porblemas Internos'

  const [datoContacto, setDatoContacto] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    descripcion: "",
  })

  const cambiaEntrada = (event) => {

    if (exito) setExito(false)
    if (error) setError(false)

    const propertyValue = event.target.value
    const property = event.target.id

    setDatoContacto({ ...datoContacto, [property]: propertyValue })
  }

  const enviaDatos = (event) => {
    event.preventDefault(); //evitar procesamiento automatico
    axios({
      method: "POST",
      url: "https://api-tarot-nva-production.up.railway.app/api/contacto",
      data: datoContacto
    }).then(
      response => {
        setExito(true)
        console.log(response.data)
        setDatoContacto({
          nombre: "",
          apellido: "",
          telefono: "",
          email: "",
          descripcion: "",
        })
      }
    )
      .catch(
        error => {
          setError(true)
          console.log(error)
        }

      )
  }

  return (

    <div className='columna_color'>

      <Formulario cambiaEntrada={cambiaEntrada} enviaDatos={enviaDatos} datoContacto={datoContacto} />
      {
        exito &&
        <div class="alert alert-success" role="alert">
          <button type="button" className="btn-close" data-bs-dismis="alert"></button>
          {messageExito}
        </div>
      }
      {
        error &&
        <div class="alert alert-danger w-h-75" role="alert">
          {messageError}
        </div>
      }
    </div>


  )
}

export default AltaContacto