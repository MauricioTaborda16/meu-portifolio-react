import './Nav.css'
import { FaGithub } from "react-icons/fa";
function Nav(){
    return(
        <nav>
          
            <ul>
                <li><a href='#Projetos'>Projetos</a></li>
                <li><a href='#TeC'>Tecnologias</a></li>
                <li><a href='#SobreM'>Sobre mim</a></li>
            </ul>
         
          <ul className='icon'>
            <li> <a href='https://github.com/MauricioTaborda16'> <FaGithub size={30} /></a> </li>
          </ul>
            
        </nav>

    )
}

export default Nav