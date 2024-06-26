import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Cuerpo.css';

const Cuerpo = (props) => {
    return(
        <nav>
            <div className='cont-naveg-bar'>
                <ul className='naveg-bar mt-3'>
                    <li className='naveg' ><Link to="/curriculum">Currículum</Link></li>
                    <li className='naveg' ><Link to="/portafolio">Portafolio</Link></li>
                    <li className='naveg' ><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Cuerpo;