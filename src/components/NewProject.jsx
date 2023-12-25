import Input from './Input';
import Button from './Button';
import Modal from './Modal';
import { useRef } from 'react';

export default function NewProject({ setProjectState, projectState }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const modalRef = useRef();

    function handleCancel() {
        setProjectState((prevProjectState) => {
            return {
                ...prevProjectState,
                selectedProject: null,
            }
        }) 
    }

    function handleSave() {

        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDate = dateRef.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
            modalRef.current.open();
            return;
        } else {
            setProjectState((prevProjectState) => {
                return {
                    ...prevProjectState,
                    selectedProject: null,
                    projects: [...prevProjectState.projects, {
                        id: `Project${prevProjectState.newId}`, 
                        title: enteredTitle,
                        description: enteredDescription,
                        date: enteredDate,
                    }]
                }
            })
        }
    }

    return (
        <>
            <Modal ref={ modalRef } buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter some data</p>
                <p className="text-stone-600 mb-4">Make sure to fill in all fields</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <Button 
                            className="text-stone-800 hover:text-stone-950"
                            onClick={ handleCancel }
                        >
                            Cancel
                        </Button>
                    </li>
                    <li>
                        <Button 
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={ handleSave }
                        >
                            Save
                        </Button>
                    </li>
                </menu>
                <div>
                    <>
                        <Input label="Title" ref={ titleRef }/>
                        <Input label="Description" ref={ descriptionRef } textarea/>
                        <Input label="Due Date" ref={ dateRef } type="date"/> 
                    </>
                </div>
            </div>
        </>
    );
}