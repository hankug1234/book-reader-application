import "./css/textSlider.css"

const DefaultEffect = ({type,name,infos,width}) => {

    return (
        <>
            <h2 className={"cardType"}>{type}</h2>
            <h2 className={"cardName"}>{name}</h2>
            {
                infos.map((info,i)=> <h2 key={i} className={"cardInfo"} style={{bottom:`${30 - 5*i}%`}}>{info}</h2>)
            }
            <div className={"vertical-line-left"} style={{width:`${width}px`}}></div>
            <div className={"vertical-line-right"} style={{width:`${width}px`}}></div>
            <div className={"horizontal-line-top" } style={{width:`${width}px`}}></div>
            <div className={"horizontal-line-bottom"} style={{width:`${width}px`}}></div>
        </>
    )
}

export default DefaultEffect