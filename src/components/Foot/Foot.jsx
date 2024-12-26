import foot from "./../../img/foot.svg"
import logo_foot from "./../../img/logo.png";
import "./style.css"

function Foot () {
    return (
        <footer className="footer">

        <div className="foot-logo">
          <img src={logo_foot} alt="" className="foot-img" />
          <p className="foot-title">
            Сеть кофеен <br />
          "COFFE.MY". All <br />
          Rights Reserved. <br />
          © 2023-2024 <br />
          </p>
        </div>

        <div className="foot-nav">
          <a href="#!" className="foot-href">Контакты</a>
          <a href="#!" className="foot-href">Наше меню</a>
        </div>

        <div className="foot-foot">
          <a href="#!" className="foot-num">+7 977 169 66 07</a>
          <a href="mailto:toni.plotnikov.01@gmail.com" className="foot-mail">toni.plotnikov.01@gmail.com</a>
          <div className="foot-info">
            <img src={foot} alt="" className="foot-icons" />
            <p className="foot-text">
              Разработка сайта <br />
            © Плотников Антон <br />
            </p>
          </div>

        </div>
      </footer> 
    )
}

export default Foot;