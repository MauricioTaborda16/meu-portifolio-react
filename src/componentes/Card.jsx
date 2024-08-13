"use client"
import './Card.css'
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
function Card({imag, des, site, git }){
    const [isHover, setIsHover] = useState(false);
    return(
        <div className="cad">
            <div  style={{position: "relative"} } onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} >
            <div className='cliqu' style={{opacity: isHover ? '0.5' :'0'}}> <a href={site}>Visualizar</a></div>
           <img src={imag}/>
            </div>
         
            <p>{des}</p>
            <button> <a href={git}>Repositorio <FaGithub size={30} id='gi' /></a></button>
        </div>
    )
}
export default Card