import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ModelCardFormat from "../../../utils/components/modelCardFormat/modelCardFormat";
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection";
import { useDispatch } from "react-redux";
import { setDataset as setTtsDataSet } from "../../../../features/train/ttsTrainSlice";
import { setDataset as setRvcDataSet } from "../../../../features/train/rvcTrainSlice";

const Train = ()=>{
    const dispatch = useDispatch()
    const [isDataSelection, setIsDataSelection] = useState(false)
    const onclick = ()=>{
        setIsDataSelection(true)
    }

    const ttsDataClick = (e,data) => {
        setIsDataSelection(false)
        dispatch(setTtsDataSet(data.data_set_id))
    }

    const rvcDataClick = (e,data) => {
        setIsDataSelection(false)
        dispatch(setRvcDataSet(data.data_set_id))
    }

    const path = useLocation().pathname

    const rvcImage = useSelector((state) => state.rvcTrain.image)
    const ttsImage = useSelector((state) => state.ttsTrain.image)
    const rvcTrain = useSelector((state) => state.rvcTrain)
    const ttsTrain = useSelector((state) => state.ttsTrain)

    const rvcDataUrl = useSelector(state=>state.urls.data_page_rvc)
    const ttsDataUrl = useSelector(state=>state.urls.data_page_tts)

    return (
        <div className="train">
            {
                isDataSelection
                ?
                <CardSelectionPage callback={path.indexOf("rvc") > 0 ? rvcDataClick : ttsDataClick} row={2} column={4} width={288} height={424} 
                dataUrl={path.indexOf("rvc") > 0 ? rvcDataUrl : ttsDataUrl} type={path.indexOf("rvc") > 0 ? "RVC" : "TTS"}/>
                :
                <>
                    <div>
                        <ResizableCard width={300} height={500}>
                            <ModelCardFormat width={300} height={500} trainInfo={path.indexOf("rvc") > 0 ? rvcTrain : ttsTrain} 
                            modelImage={path.indexOf("rvc") >= 0 ? rvcImage : ttsImage} type={path.indexOf("rvc") > 0 ? "RVC" : "TTS"}/>
                        </ResizableCard>
                    </div>
                    <div className="model-train-form">
                        <Outlet context={[onclick]}/>
                    </div>
                </>
            }
        </div>
    );
}

export default Train 