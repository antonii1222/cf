import { useParams } from "react-router-dom";
 
 import big5 from "./../img/big5.jpg"

 import { project_two } from "../help/projectList";



 
 function ProductOne () {
    const {id} = useParams();
    const projects_two = project_two[id];

    console.log(projects_two)
    return (
        <main className="section">
            <div className="sec-prod">

                <div className="sec-prod-info">

                <div className="sec-prod-href"><a href="#!" className="prod-href">Назад</a></div>

                <div className="sec-info">
                    <h2 className="sec-prod-item">{projects_two.title}</h2>
                    <p className="sec-prod-title">
                    Молочный кофейный <br />
                    напиток на основе эспрессо <br />
                    и нежного <br />
                    взбитого молока. Наше зерно: <br />
                    свежеобжареная 100% арабика <br />
                    Бразилия Моджиана <br />
                    </p>

                    <div className="sec-prod-info-block">

                        <div className="sec-prod-info-title">
                        <p className="prod-info-block-one">{projects_two.item}</p>
                        <p className="prod-info-block-two">{projects_two.skils}</p>
                        </div>
                    <div className="sec-prod-info-btn">
                        <a href="#!" className="prod-info-href"><button className="prod-info-btn">Купить</button></a>
                    </div>
                    </div>
                </div>
                </div>

                <div className="sec-prod-foto">
                    <img src={projects_two.big} alt="" className="prod-foto" />
                </div>
            </div>
        </main>
    )
 }

 export default ProductOne