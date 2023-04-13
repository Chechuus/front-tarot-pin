//Cecilia Ceballos
import React from 'react'
import hola from '../Utilidades/Imagines/Bienvenida/Bienve.jpg'
import  './Bienvenido.css'


export const Bienvenido = () => {
    const styles ={
                  objectFit:"cover"
                  }
    const mje ="Se Feliz"
    const bienvenida ="Bienvenidos"
    const contacto ="Contacto"
    // const mjecaja=


    return (
    <div className='container'>
        <div className='row py-5'>
            <div className='col-lg-1 d-none d-lg-flex align-items-center'>
                <div className='lc-block d-flex' >
                    <p className='texto_vertical h1'>{mje}</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
                <div className='lc-block ratio ratio-1x1 shadow-lg  zoom-in'>
                   
                   <img className='img-fluid border border-dark border-5 rounded-3' style={styles} src={hola} alt={`Bienvenida`}></img>
                </div>
            </div>
            <div className='col-lg-4 offset-lg-1'>
                <div className='lc-block my-5 concept.concept-seven'>
                    <div editable='rich'>
                        
                        <h2 className="bienvenida fw-bold display-5">{bienvenida}</h2>
                    </div>
                </div>
                <div className='lc-block my-5'>
                    <div editable='rich'>
                    <p className="lead">
                    "Quickly Lorem ipsum dolor sit amet consectetur adipiscing elit a morbi suscipit 
                    malesuada, lacinia accumsan est primis ad nisi himenaeos litora purus nostra, urna 
                    aenean rhoncus ullamcorper nec et pulvinar quisque velit faucibus.";
                    </p>
                    </div>
                </div>
                <div className='lc-block'>
                    {/* <a className='btn btn-primary btn-lg' href='#' role='button'>{contacto}</a> */}
                     
                    <a href='/'><button className='btn btn-primary btn-lg' onClick='/'>{contacto}</button></a>
                    
                </div>
            </div>
        </div>
    </div>
      
  )
}

