import SwiperCards from "../swiperCards/swiperCards"
import './css/cardSelectionPage.css'

const CardSelectionPage = ({callback}) => {

    return (
    <div className="selectionPage">
        <SwiperCards perview="3" row="2" space="10" isCheckable={true} callback={callback}/>
    </div>
    )
}

export default CardSelectionPage