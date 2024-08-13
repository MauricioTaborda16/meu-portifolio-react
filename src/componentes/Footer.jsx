import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import'./Footer.css'
import { FaGithub } from "react-icons/fa";

function Foooter(){
    return(
        <footer id="Con">
          <div style={{display:"flex"}}>
          <h1><MdOutlineEmail size={60} className="ic"/> mauriciotabord@gmail.com</h1> 
          <h1> <RiWhatsappLine size={60} className="ic" /> (41) 9 9970-9236</h1>
          </div>
         
          <a href="https://github.com/MauricioTaborda16" className="git"><FaGithub size={100} className="ic"  /></a>
         
        </footer>
    )
}
export default Foooter