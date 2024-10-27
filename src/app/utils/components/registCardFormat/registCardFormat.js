import "./css/registCardFormat.css"

const InfoList =  ({infos}) => {
    return (
        <>
        {
            infos.map((info,i)=><h1 key={i} style={{bottom:`${70 - 7*i}%`}} className={"dataInfo"}>{info}</h1>)
        }
        </>
    )
}

const RegistedCardFormat = ({registedData,type,width,height}) => {

    const infoFilter = (s) => {
        return !(s.indexOf("data_set_name") >= 0) && !(s.indexOf("description") >=0 )
    }

    return (
        <>
            <h1 className={"dataType"}>{`${type} DATA`}</h1>
            <InfoList infos={Object.entries(registedData).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)}/>
            <label for={"dataDescription"} className={"descriptionLabel"}>{"description:"}</label>
            <div id={"dataDescription"} className={"dataDescription"}>{registedData.description}</div>
            <h1 className={"dataName"}>{registedData.data_set_name}</h1>
            <div style={{width: `${width}px`,height: `${height}px`, backgroundColor: "black", position:"absolute", top:"0%" }}/>
        </>
    )
}

export default RegistedCardFormat