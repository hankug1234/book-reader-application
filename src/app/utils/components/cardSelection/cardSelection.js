import SwiperCards from "../swiperCards/swiperCards"
import './css/cardSelectionPage.css'
import RegistedCardFormat from "../registCardFormat/registCardFormat"


const registedDataFormater = (data,type,width,height)=>{
    return (
        <RegistedCardFormat registedData={data} type={type} width={width} height={height} />
    )
}

const CardSelectionPage = ({callback,row,column,width,height,dataUrl,type}) => {

    return (
    <div className="selectionPage">
        <SwiperCards isCheckable={true} callback={callback} 
        row={row} column={column} width={width} height={height} dataUrl={dataUrl} 
        formater={(data,width,height)=>registedDataFormater(data,type,width,height)}/>
    </div>
    )
}

export default CardSelectionPage