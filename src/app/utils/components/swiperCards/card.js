
import { useState } from "react";
import './css/card.css'

const Card = ({url}) => {

    const [cardPosition, setCardPosition] = useState({x:0,y:0,bp:0})
    const [isMouseLeave, setIsMouseLeave] = useState(true)

    const cardLotate = (e)=>{
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetX;
        setCardPosition({x:(2/15 * y -20),y:(-1/5 * x +20),bp:(5*x+5*y)})
        setIsMouseLeave(false)
        console.log(x,y)
    }

    const cardLoatateClear = (_) => {
        setIsMouseLeave(true)
    }

    return (
        <>
            <div className="card" onMouseMove={cardLotate} onMouseLeave={cardLoatateClear}
             style={
             {transform: [{perspective:'350px'}, {rotateY:`${cardPosition.y}deg`}, {rotateX:`${cardPosition.x}dge`}] ,backgroundPosition: `${cardPosition.bp}%`}
             }/>
        </>
    );

}
//<div className="overlay" style={isMouseLeave&&{filter: "opacity(0)"}}/> isMouseLeave ? {transform: [{perspective:'350px'}, {rotateY:`0deg`}, {rotateX:`0dge`}]} : 
export default Card