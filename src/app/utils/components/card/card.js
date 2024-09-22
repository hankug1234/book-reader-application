
import { useState } from "react";
import './css/card.css'

const Card = ({children, cardClick}) => {

    const [cardPosition, setCardPosition] = useState({x:0,y:0,bp:0})
    const [isMouseLeave, setIsMouseLeave] = useState(true)

    const cardLotate = (e)=>{
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        setCardPosition({x:(-2/15 * y +20),y:(1/5 * x -20),bp:(5*x+5*y)})
        setIsMouseLeave(false)
    }

    const cardLoatateClear = (_) => {
        setIsMouseLeave(true)
    }

    return (
        <>
            <div className="card" onMouseMove={cardLotate} onMouseLeave={cardLoatateClear} onClick={cardClick}
             style={
              isMouseLeave ? {transform: `perspective(600px) rotateX(0deg) rotateY(0deg)`, transition: `transform 2s ease`} :
             {transform:`perspective(600px) rotateX(${cardPosition.x}deg) rotateY(${cardPosition.y}deg)`}
             }>
                <div className="overlay" style={isMouseLeave ? {filter: "opacity(0)"} : {backgroundPosition: `${cardPosition.bp}%`}}/>
                {
                    children
                }
             </div> 
        </>
    );

} 

export default Card