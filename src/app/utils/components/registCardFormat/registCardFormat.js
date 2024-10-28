import "./css/registCardFormat.css"

const InfoList =  ({infos}) => {
    return (
        <>
        {
            infos.map((info,i)=><h1 key={i} style={{bottom:`${70 - 7*i}%`}} className={"dataInfo_r nanum-brush-script-regular"}>{info}</h1>)
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
            <h2 className={"dataType_r nanum-brush-script-regular"}>{`${type} DATA`}</h2>
            <div className={"dataBody"}>
                <InfoList infos={Object.entries(registedData).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)}/>
                <label for={"dataDescription_r"} className={"descriptionLabel_r nanum-brush-script-regular"}>{"description:"}</label>
                <div id={"dataDescription_r"} className={"dataDescription_r nanum-brush-script-regular"}>{registedData.description}</div>
            </div>
            <h2 className={"dataName_r nanum-brush-script-regular"}>{registedData.data_set_name}</h2>
            <div className={"dataBackgroundImage"} style={{width: `${width}px`,height: `${height}px`, position:"absolute", top:"0%"}}/>
        </>
    )
}

export default RegistedCardFormat