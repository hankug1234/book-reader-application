
import { useState } from "react";
import './css/card.css'

const ResizableCard = ({children,width,height}) => {

    const [cardPosition, setCardPosition] = useState({x:0,y:0,bp:0})
    const [isMouseLeave, setIsMouseLeave] = useState(true)

    const cardLotate = (e)=>{
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        setCardPosition({x:(-41/height * y +20),y:(44/width * x -20),bp:(5*x+5*y)})
        setIsMouseLeave(false)
    }

    const cardLoatateClear = (_) => {
        setIsMouseLeave(true)
    }

    return (
        <>
            <div className="card" onMouseMove={cardLotate} onMouseLeave={cardLoatateClear}
             style={
              isMouseLeave ? {transform: `perspective(600px) rotateX(0deg) rotateY(0deg)`, transition: `transform 2s ease`, width:`${width}px`, height:`${height}px`} :
             {transform:`perspective(600px) rotateX(${cardPosition.x}deg) rotateY(${cardPosition.y}deg)`, transition: `transform 0.3s ease` , width:`${width}px`, height:`${height}px`}
             }>
                <div className="overlay" style={isMouseLeave ? {filter: "opacity(0)", width:width, height:height} : {backgroundPosition: `${cardPosition.bp}%`, width:`${width}px`, height:`${height}px`}}/>
                {
                    children
                }
             </div> 
        </>
    );

} 

export default ResizableCard 