import { Pencil, Trash } from "lucide-react";
import type { TaskItemProps } from "../types/types";


function TaskItem({ task, setTasks, setEditingTaskId, setInputField}: TaskItemProps) {
  //checkbox onclick should set the task's completed to true and change styling of the p tag
  function checkboxHandle() {
    setTasks(tasks =>
      tasks.map(
        t => t.id === task.id ? { ...t, completed : !t.completed } : t
      )
    )
  }
  //pencil onclick should change the setEditingTaskId to task.id
  function editClickHandle() {
    setEditingTaskId(task.id);
    setInputField(task.text);
  }
  //Trash should delete the task from tasks

  return (
    <li>
      <div className="flex flex-row w-3xs justify-between bg-white">
        <div className="flex flex-row justify-start items-center max-w-1/2">
          <form>
            <input type="checkbox" checked={task.completed} onChange={checkboxHandle}/>
          </form>
          <p className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</p>
        </div>
        <div className="flex flex-row justify-end max-w-1/2">
          <button onClick={editClickHandle}><Pencil /></button>
          <button onClick={() => setTasks(tasks => tasks.filter(t => t.id !== task.id))}><Trash /></button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
