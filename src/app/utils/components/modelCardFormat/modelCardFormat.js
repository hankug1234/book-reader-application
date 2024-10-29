import DefaultEffect from "../textEffect/defaultEffect"

const ModelCardFormat = ({width,height,modelImage,trainInfo,type}) => {

    const infoFilter = (s) => {return !(s.indexOf("modelName") >= 0) && !(s.indexOf("image") >= 0)}
    const infos = (datas)=> Object.entries(datas).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)

    return(
        <>
            <img src={modelImage} style={{width:`${width}px`, height:`${height}px`,zIndex:100}} alt="empty"/>
            <DefaultEffect name={trainInfo.model_name} type={type} infos={infos(trainInfo)} width={width} />
        </>
    )

}

export default ModelCardFormat