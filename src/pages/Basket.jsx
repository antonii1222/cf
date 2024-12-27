import { NavLink } from "react-router-dom";


function Basket () {
    return (
        <main className="section">
            <p className="basket-title">В вашей корзине пока что пусто,<NavLink to="/prog" className="basket-href">перейти к каталогу</NavLink></p> 
        </main>
    )
}

export default Basket;