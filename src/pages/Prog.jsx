import Project from "../components/project/Project"
import { project } from "../help/projectList";
import { project_two } from "../help/projectList";
import { project_three } from "../help/projectList";

function Prog () {
    return (
       <main className="section">

        <div className="prog-list">

            <div className="prog-list-item">
                <h2 className="prog-item">МЕНЮ КОФЕЙНИ</h2>
            </div>

            <div className="prog-menu">

                <div className="menu-one">

                {project.map((project, index)=> {
                    return <Project key={index} title={project.title} img={project.img} skils={project.skils} item={project.item} index={index}></Project>
                })}

                </div>
                {/* <div className="menu-two">

                {project_two.map((project_two, index)=> {
                    return <Project key={index} title={project_two.title} img={project_two.img} skils={project_two.skils} item={project_two.item}></Project>
                })}   

                </div>
                <div className="menu-three">
                    
                {project_three.map((project_three, index)=> {
                    return <Project key={index} title={project_three.title} img={project_three.img} skils={project_three.skils} item={project_three.item}></Project>
                })}  

                </div> */}
            </div>
        </div>
       </main>
    )
}

export default Prog;