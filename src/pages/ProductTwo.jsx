import { useParams } from "react-router-dom";
 
 import big9 from "./../img/big9.jpg"

 import { project_three } from "../help/projectList";



 
 function ProductTwo () {
    const {id} = useParams();
    const projects_three = project_three[id];

    console.log(projects_three)
    return (
        <main className="section">
            <div className="sec-prod">

                <div className="sec-prod-info">

                <div className="sec-prod-href"><a href="#!" className="prod-href">Назад</a></div>

                <div className="sec-info">
                    <h2 className="sec-prod-item">{projects_three.title}</h2>
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
                        <p className="prod-info-block-one">{projects_three.item}</p>
                        <p className="prod-info-block-two">{projects_three.skils}</p>
                        </div>
                    <div className="sec-prod-info-btn">
                        <a href="#!" className="prod-info-href"><button className="prod-info-btn">Купить</button></a>
                    </div>
                    </div>
                </div>
                </div>

                <div className="sec-prod-foto">
                    <img src={projects_three.img} alt="" className="prod-foto" />
                </div>
            </div>
        </main>
    )
 }

 export default ProductTwo