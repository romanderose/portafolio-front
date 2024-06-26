import React from 'react';
import '../../styles/components/layout/Cabecera.css';

const Cabecera = (props) => {
    return(
        <header>
            <div>
                <img className='foto-cabecera' src='/images/mi-foto.jpg'  alt="Foto de
                Román De Rose"></img>

                <h1 className='titulo-cabecera'>ROMÁN DE ROSE</h1>
            </div>
        </header>
    )
}

export default Cabecera;