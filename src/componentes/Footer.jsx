import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import'./Footer.css'
import { FaGithub } from "react-icons/fa";

function Foooter(){
    return(
        <footer id="Con">
          <h1><MdOutlineEmail size={90} /> mauriciotabord@gmail.com</h1> 
          <h1> <RiWhatsappLine size={90} /> (41) 9 9970-9236</h1>
          <a href="https://github.com/MauricioTaborda16"><FaGithub size={150} /></a>
         
        </footer>
    )
}
export default Foooter