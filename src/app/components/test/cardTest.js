import ResizableCard from "../../utils/components/resizableCard/resizableCard";
import "./css/textSlider.css"

const CardTest = () => {

    return (
        <>
        <div class={"test-div"}>
            <ResizableCard width={300} height={500}>
                    <h2>Text that will slide in from the left</h2>
                    <div className={"vertical-line-left"}></div>
                    <div className={"vertical-line-right"}></div>
                    <div className={"horizontal-line-top"}></div>
                    <div className={"horizontal-line-bottom"}></div>
                    <div className={"diagonal-line-top-left"}></div>
                    <div className={"diagonal-line-top-right"}></div>
                    <div className={"diagonal-line-bottom-left"}></div>
                    <div className={"diagonal-line-bottom-right"}></div>
            </ResizableCard>
        </div>
        </>
    )
}

export default CardTest