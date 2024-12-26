import { NavLink } from "react-router-dom"
import "./style.css"

function Project ({title, img, skils, item, index}) {
return (
  <div className="menu-foto-one">

    <NavLink to={'/project/' + index}>
                          <img src={img} alt="" className="menu-coffe-foto" />
                          <p className="menu-coffe-title">{title}</p>
                          <div className="menu-shop">
                              <div className="menu-shop-one">
                              <p className="shop-title-one">{item}</p>
                              <p className="shop-title-two">{skils}</p>
                              </div>
                            
                              <div className="menu-shop-two">
                                  <button className="shop-btn">Купить</button>
                              </div>
                          </div>
    </NavLink>

                      </div>  
)

}

export default Project

