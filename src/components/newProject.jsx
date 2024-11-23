import { useRef, useState } from "react"
import Input from "./input"
import project_data,{projDeta} from "./projects"
export default function NewProject({changeBtnState}){
    const [savedData,changeState] = useState()

    const title = useRef()
    const desc = useRef()
    const date = useRef()

    function handleSave(){
        const updatedData = {
            id:projDeta.projId,
            title: title.current.value,
            Desc: desc.current.value,
            Due: date.current.value,
            tasks:[]
          };
          changeState((prev) => {
            return {
                ...prev,
                id:projDeta.projId,
            title : title.current.value,
            Desc: desc.current.value,
            Due:date.current.value ,
            tasks: {
    
            }
            }
          });
          projDeta.projId = projDeta.projId+1;

          project_data.push(updatedData);
          console.log(project_data)
          changeBtnState(false)


    }



    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={()=>changeBtnState(false)} className="text-stone-800 hover:text-stone-800">Cancel</button></li>
                <li><button onClick={handleSave} className=" px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-500 rounded-xl" >Save</button></li>
            </menu>
            <Input ref={title} label={"Title"} textArea={false} />
            <Input ref={desc}  label="Description" textArea={true} />
            <Input ref={date}  label="Due Date"  type ="date"/>


        </div>
    )
}