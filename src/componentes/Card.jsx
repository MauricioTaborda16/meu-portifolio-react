import './Card.css'
function Card({imag, des, site, }){
    return(
        <div className="cad">
            <img src={imag}/>
            <p>{des}</p>
            <button> <a href={site}>Ver</a></button>
        </div>
    )
}
export default Card