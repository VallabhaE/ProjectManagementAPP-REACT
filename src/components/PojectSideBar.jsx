import Button from "./Button";
import project_data from "./projects";
export default function ProjectSidebar({changeBtnState,sendBackproj,addData,prod}){
    function handleProjectClick(id){
        const selectedProject= prod.find((project) => project.id === id);
        sendBackproj(selectedProject)
        console.log(selectedProject)

    }
    return (
        <aside className="w-1/3 px-8 py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200" >Your Projects</h2>
            <div>
            <Button changeState={changeBtnState}> new Project +</Button>
            </div>

            <ul className="mt-4 ">
                {project_data.map((data)=>{
                   return (
                    <button className="mt-3 rounded-md p-2 hover:border hover:bg-stone-600 text-left w-full" onClick={() => handleProjectClick(data.id)} id={data.id}>  <li >{data.title}</li></button>
                   )
                })}
            </ul>
        </aside>
    );
}