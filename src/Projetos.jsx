import Card from "./componentes/Card"
import imag from "./imag/desafio.svg"
import landing from "./imag/landing.svg"
import bootc from "./imag/bootcamp.svg"
import pais from "./imag/pais.svg"
import tabu from "./imag/tabuada.svg"
import cep from "./imag/cep.svg"
import "./Projetos.css"
import Tec from "./componentes/Tec"

function Projetos(){
    return(
        <section id="Projetos" className="Pro">
            <h1>Projetos</h1>
            <div className="container">
               <Card
                imag={imag}
                des="Projeto Landing"
                site="https://desafio-landing-page-eight.vercel.app/"
                
               />

               <Card
               imag={cep}
               des="API de CEP"
               site="https://api-dnc-2023.vercel.app/"
               />
            
               </div>
               <div className="container">
               <Card
               imag={landing}
               des="Landing Page DNC"
               site="https://projeto-landing-page-nu-nine.vercel.app/"
               
               />
               <Card
               imag={bootc}
               des="Bootcamp DNC"
               site="https://bootcamp-dnc-gamma.vercel.app/"
               />
               </div>
               <div className="container">
               <Card
               imag={pais}
               des="Projeto Pais"
               site="https://projeto-pais.vercel.app/"
               />

               <Card
               imag={tabu}
               des="Tabuada em JS"
               site="https://tabuada-neon-three.vercel.app/"
               />

               
             
            </div>
            <div>
                <h1>Tecnologias</h1>
                <Tec/>
            </div>
            
        </section>
    )
}
export default Projetos