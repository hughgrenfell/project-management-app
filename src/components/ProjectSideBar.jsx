import Button from './Button';

export default function ProjectSideBar({ setProjectState, projectState }) {

    function handleNewProjectClick() {

        setProjectState((prevProjectState) => {
            return {
            ...prevProjectState,
            newId: prevProjectState.newId + 1,
            selectedProject: undefined
            }
        })
    }

    function handleSelectProjectClick(project) {

        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProject: project 
            }
        })
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={ handleNewProjectClick }>
                    + Add Project
                </Button>
            </div>
            <ul>
                {
                    projectState.projects.map(( project ) => {
                        return (
                            <li key={ project.id }>
                                <button 
                                    className="hover:text-stone-400" 
                                    onClick={ () => handleSelectProjectClick(project) }
                                >
                                    { project.title }
                                </button></li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}