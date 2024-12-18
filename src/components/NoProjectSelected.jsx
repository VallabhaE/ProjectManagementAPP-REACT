import noProjImg from "../assets/no-projects.png"
import Button from "./Button";


export default function NoProjectSelected({changeBtnState}){
    return (
        <div className="mt-2 text-center w-2/3">
            <img src={noProjImg} alt="" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Porject Selectd</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with new one</p>
            <p className="mt-8">
           <Button changeState={changeBtnState}>Create New Project</Button>
            </p>
        </div>
    )
}