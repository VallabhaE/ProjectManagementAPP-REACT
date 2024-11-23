import ProjectSidebar from "./components/PojectSideBar"
import NewProject from "./components/newProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDetails";
import project_data from "./components/projects";
import { useState } from "react";
function App() {
  const [newProjectSelected,changeProjState] = useState();
  const [projInfo,changeProjId] = useState(null)
  let showData = false
  if(projInfo!==null){
    showData = true
  }

  function handleRemove(id) {
    project_data = project_data.filter((proj) => proj.id !== id);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSidebar changeBtnState={changeProjState} sendBackproj={changeProjId}/>   
    {newProjectSelected? <NewProject changeBtnState={changeProjState}/>:showData?<ProjectDetails reload={handleRemove} project={projInfo}/> :<NoProjectSelected changeBtnState={changeProjState}/>}

 </ main>
  );
}

export default App;
