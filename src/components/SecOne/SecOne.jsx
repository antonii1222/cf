import { NavLink } from "react-router-dom";
import coffe_sec from "./../../img/coffe-head.svg";
import "./style.css"

function SecOne () {
    return (
        <header className="section">
                                  <div className="sec-info">
                                  <p className="sec-title">Вам понравится</p>
                                  <h2 className="sec-item">
                                  ВСЕМ НУЖНО<br />
                                  COFFEMY <br />
                                  </h2>
                                  <NavLink to="/prog" className="sec-href"><button className="sec-btn">Подробнее</button></NavLink>
                                  </div>
                                  <div className="sec-foto">
                                    <img src={coffe_sec} alt="" className="coffe-sec" />
                                  </div>
                                </header>
    )
}

export default SecOne;