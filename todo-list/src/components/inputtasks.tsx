import { Plus } from "lucide-react";
import { Check } from "lucide-react";
import type { InputTasksProps } from "../types/types";

//Props = inpf, setinpf, tasks, settasks, editingid, setEditingId 

function InputTasks({ tasks, setTasks, inputField, setInputField, editingTaskId, setEditingTaskId }: InputTasksProps) {
    function addTask(e: React.FormEvent<HTMLFormElement>) {
        /* setTasks-new task, inputf value = ""*/
      e.preventDefault();
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          completed: false,
          text: inputField,
        },
      ]);
      setInputField('');
    }

    function editTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      /*alter the text of the task with id === editingtaskId
        editingtaskid = null inputfield.value = ""*/
        setTasks(tasks =>
            tasks.map(task =>
                task.id === editingTaskId ?
                    { ...task, text: inputField} :
                    task
            )
        );
        setEditingTaskId(null);
        setInputField("");
    }

    return (
        <div className="flex flex-row justify-between">
            {!editingTaskId ?
                <form onSubmit={addTask}>
                    <input type="text" className="bg-white" required value={inputField} onChange={e => setInputField(e.target.value)}/>
                    <button><Plus/></button>
                </form> : 
                <form onSubmit={editTask}>
                    <input type="text" className="bg-white" required value={inputField} onChange={e => setInputField(e.target.value)} />
                    <button><Check/></button>
                </form>
            }
        </div>
    );
}

export default InputTasks;
