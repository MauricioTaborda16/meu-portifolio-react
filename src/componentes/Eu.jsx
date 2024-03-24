import './Eu.css'
import { useEffect, useState } from 'react'
function Eu(){
    const [text, setText] = useState('');
     const toRotate = ['Sejam bemvindos ao meu portifólio em REACT'];
     const [loop, setLoop] = useState(0);
     const [isDeleting, setIsDeleting] = useState(false);
     const period = 200;
     const [delta, setDelta] = useState(100)

     useEffect(() =>{
         let ticker = setInterval(()=>{
            toType()
         }, delta)
         return()=> {clearInterval(ticker)}

     }, [text])

     const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);
         
         if(!isDeleting && updatedText === fullText){
           setIsDeleting(true);
           setDelta(period);
         }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
         }
     }

    return(
        <div id='SobreM' className='Eu'>
             <h2>{text}</h2>

            <h1>Olá, eu me chamo Mauricio Taborda</h1>
           
           
            
            <p>Sou um estudante de desenvolvimento WEB,<br/>
            estou iniando a minha carreira como desenvolvedor<br/>
              a abaixo eu deixo alguns dos meus projetos que eu fiz<br/> ao longo dos meus estudos.
            </p>
        </div>
    )
}

export default Eu