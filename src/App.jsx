import { useState } from 'react';

import ProjectSideBar from './components/ProjectSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {

  const [ projectState, setProjectState ] = useState({
    selectedProject: null,
    newId: 4,
    projects: [
      {
        id: "Project0",
        title: "Project One",
        description: "This is a new sample project",
        date: "2023-12-12"
      }, 
      {
        id: "Project1",
        title: "Project Two",
        description: "This is another sample project",
        date: "2023-10-10"
      },
      {
        id: "Project2",
        title: "Project Three",
        description: "This is another sample project",
        date: "2023-10-10"
      },
      {
        id: "Project3",
        title: "Project Four",
        description: "This is another sample project",
        date: "2023-10-10"
      } 
    ],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject.id,
        id: taskId,
      }

      return {
        ...prevState,
        selectedProject: null,
        tasks: [ newTask, ...prevState.tasks ]
      }

    })
  }

  function handleDeleteTask() {

  }

  let content;

  if (projectState.selectedProject === null) {
    content = 
      <NoProjectSelected 
        setProjectState={ setProjectState }
      />
  } else if (projectState.selectedProject === undefined) {
    content = 
      <NewProject 
        setProjectState={ setProjectState } 
        projectState={ projectState } 
      />
  } else {
    content = 
    <SelectedProject 
      setProjectState={ setProjectState } 
      projectState={ projectState }
      onAddTask={ handleAddTask }
      onDeleteTask={ handleDeleteTask } 
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar setProjectState={ setProjectState } projectState={ projectState } />
      { content }
    </main>
  );
}

export default App;
