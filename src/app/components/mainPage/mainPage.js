import "./css/MainPage.css"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const MainPage = () => {

    return (
    <>
        <header className="main-header">
            <div className="topnav">
                <Link className="topnav-link" to="/models">MODELS</Link>
                <Link className="topnav-link" to="/datas">DATAS</Link>
                <Link className="topnav-link" to="/train">TRAIN</Link>
            </div>
        </header>
        <div className="main-body">
            <Outlet/>
        </div>
    </>
    );
}

export default MainPage