import TaskItem from "./taskitem";

import type { Task, TaskListProps } from "../types/types";

//TasklistProps- filter
function TaskList({ tasks, setTasks, filter, setEditingTaskId, setInputField }: TaskListProps) {
    /* based on filter should render tasks */
    function renderTaskItem(task: Task) {
        if (filter === "all")
            return (<TaskItem task={task} setTasks={setTasks} setEditingTaskId={setEditingTaskId} setInputField={setInputField}/>);
        else if (filter === "completed" && task.completed === true)
            return (<TaskItem task={task} setTasks={setTasks} setEditingTaskId={setEditingTaskId} setInputField={setInputField}/>);
        else if (filter === "pending" && task.completed === false)
            return (<TaskItem task={task} setTasks={setTasks} setEditingTaskId={setEditingTaskId} setInputField={setInputField}/>);
    }


    return (
        //TaskItemProps- tasks, settasks, setEditingTaskId
        <ul className="flex flex-col gap-4">
            {tasks.map(renderTaskItem)}
        </ul>
    );
}

export default TaskList;
