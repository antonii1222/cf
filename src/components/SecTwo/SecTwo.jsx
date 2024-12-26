import zerno from "./../../img/zerno.svg";
import coffe_head from "./../../img/coffe-sec.svg";
import "./style.css"

function SecTwo () {
    return (
        <main className="header">
        
                  <div className="head-info">
                    <h2 className="head-item">ПОЧЕМУ НАС ВЫБИРАЮТ</h2>
                    <p className="head-title">
                      Компания COFFE.IO была создана в 2023<br />
                      году и на сегодняшний день является<br />
                      одной из самых быстрорастущих <br />
                      компаний в сфере кофейного бизнеса в<br />
                      России.<br />
                      </p>
                    <div className="fon-head"><img src={zerno} alt="" className="head-img" /></div>
                  </div>
        
                  <div className="head-foto">
                    <img src={coffe_head} alt="" className="coffe-head" />
                    </div>
        
                  </main>
    )
}

export default SecTwo;