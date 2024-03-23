import react from '../assets/react.svg'
import css from '../assets/css.jpg'
import html from '../assets/html.png'
import js from '../assets/js.png'
import './Tec.css'
function Tec(){
    return(
        <section id='TeC'>
           
            
          <div className="tec"> <p>HTML</p>
              <img src={html} alt="" />
          </div>

          <div className="tec">
           
             <p>CSS</p>
             <img src={css} alt="" />

          </div>

          <div className="tec">
             <p>JavaScript</p>
             <img src={js} alt="" />

          </div>

          <div className="tec">
            
             <p>React</p>
             <img src={react} alt="" />  
          </div>

        </section>
    )
}
export default Tec