//Cecilia Ceballos
import React from 'react'
import imagenes from '../Utilidades/Imagines/Nosotras/imagenes.js'
import './Nosotras.css'

export const Nosotras = () => {
    const nombre_cintia = "Cintia"
    const nombre_chechu = "Chechu"
    const volver = "Volver"
    return (
        <div className='contiene__tarjetas'>
                    <div className='tarjetas'>
                        <div className='foto front'>
                            <img src={imagenes.cintia} alt='cintia' />
                            <h3>{nombre_cintia}</h3>
                        </div>
                        <div className="foto back">
                            <h3>{nombre_cintia}</h3>
                            <p> Nombre: Cintia Chatard</p>
                            <p> Apodo: Cin</p>
                            <p> lore loem lorem lorem lorem loremlore loem lorem lorem lorem loremlore</p>
                            <div className="link">
                                <a href='/'>{volver}</a>
                            </div>
                        </div>
                    </div>
                    <div className='tarjetas'>
                        <div className='foto front'>
                            <img src={imagenes.chechu} alt='ceci' />
                            <h3>{nombre_chechu}</h3>
                        </div>
                        <div className="foto back">
                            <h3>{nombre_chechu}</h3>
                            <p> Nombre: Cecilia Ceballos</p>
                            <p> Apodo: Chechus</p>
                            <p> Vegana Amante de los Animales</p>
                            <p> lore loem lorem lorem lorem loremlore loem lorem lorem lorem loremlore loem lorem lorem lorem lorem </p>
                            <div className="link">
                                <a href='/'>{volver}</a>
                            </div>
                        </div>
                    </div>
                </div>

    )
}
