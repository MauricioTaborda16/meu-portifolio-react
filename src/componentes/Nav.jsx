import './Nav.css'
import { FaGithub } from "react-icons/fa";
function Nav(){
    return(
        <nav id='f'>
          
            <ul>
                <li><a href='#Projetos'>Projetos</a></li>
                <li><a href='#TeC'>Tecnologias</a></li>
                <li><a href='#SobreM'>Sobre mim</a></li>
                <li><a href='#Con'>Contato</a></li>
            </ul>
         
          <ul className='icon'>
            <li> <a href='https://github.com/MauricioTaborda16' id="ico"> <FaGithub size={60} /></a> </li>
          </ul>
            
        </nav>

    )
}

export default Nav