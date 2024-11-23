import { useRef, useState } from "react"
import project_data from "./projects"

export default function ProjectDetails({ project,reload}) {
  const TaskInfo = useRef()
  const [red,chred] = useState(0)
  // Function to handle task addition
//   function handleRemove(){
//     project_data.remove(project)
//     chred((p)=>p+1)
//   }
  function handletask(event) {
    const task = TaskInfo.current.value; // Get task value
    if (task.length === 0) return
    const updatedProjectData = project_data.findIndex((proj) =>proj.id === project.id)
    project.tasks.push(task)
      // Update the project data (via the parent callback)
      project_data[updatedProjectData] = project;

      // Clear the task input field
      TaskInfo.current.value = "";
      chred((prev)=> prev+1)
    
  }

  return (
    <div className="w-2/3 p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      {/* <button onClick={handleRemove} className="border px-5 rounded bg-stone-950 text-stone-50 m-4">Remove Project</button> */}
      <p className="mt-4">
        <strong>Description:</strong> {project.Desc}
      </p>
      <p className="mt-2">
        <strong>Due Date:</strong> {project.Due}
      </p>
      {project.tasks.length > 0 && (
        <div>
          <h2 className="text-1xl font-bold text-center">Tasks Assigned</h2>
          <ol>
            {project.tasks.map((task, index) => (
              <li key={index}>{index+1}.{task}</li>
            ))}
          </ol>
        </div>
      )}
      <h2 className="text-2xl font-bold">Add Tasks</h2>
      <span className="text-sm">Add one by one</span>
      <textarea className="w-full hover:border h-32" ref={TaskInfo} name="" id="" ></textarea>
      <button onClick={handletask} className="border rounded-md bg-stone-950 text-stone-50 m-2 p-2">
        Save Task
      </button>
    </div>
  );
}
