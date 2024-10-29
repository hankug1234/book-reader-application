import "./css/MainPage.css"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const MainPage = () => {

    const location = useLocation().pathname

    return (
    <>
        <div className="main-header">
            <div className="topnav">
                <Link className={ location.indexOf("models") >= 0 ? "topnav-link-current" : "topnav-link"} to="/models/tts">MODELS</Link>
                <Link className={ location.indexOf("datas") >= 0 ? "topnav-link-current" : "topnav-link"} to="/datas/tts">DATAS</Link>
                <Link className={ location.indexOf("train") >= 0 ? "topnav-link-current" : "topnav-link"}  to="/train/tts">TRAIN</Link>
                <Link className={ location.indexOf("data-register") >= 0 ? "topnav-link-current" : "topnav-link"}  to="/regist/data/tts">REGIST</Link>
                <Link className={"topnav-link logOut"}  to="/">LOG OUT</Link>
            </div>
        </div>
        <div className="main-body">
            <Outlet/>
        </div>
    </>
    );
}

export default MainPage