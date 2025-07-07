import { Pencil, Trash } from 'lucide-react';
import type { TaskItemProps } from '../types/types';

function TaskItem({
  mode,
  task,
  setTasks,
  setEditingTaskId,
  setInputField,
}: TaskItemProps) {
  //checkbox onclick should set the task's completed to true and change styling of the p tag
  function checkboxHandle() {
    setTasks((tasks) =>
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  }
  //pencil onclick should change the setEditingTaskId to task.id
  function editClickHandle() {
    setEditingTaskId(task.id);
    setInputField(task.text);
  }
  //Trash should delete the task from tasks

  return (
    <li>
      <div
        className={
          mode === 'light'
            ? 'flex flex-row w-3xs justify-between bg-white pt-1 pb-1'
            : 'flex flex-row w-3xs justify-between bg-[#14366e] pt-1 pb-1'
        }
      >
        <div className="flex flex-row justify-start items-center max-w-1/2">
          <form>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={checkboxHandle}
            />
          </form>
          <p
            className={`
    ${task.completed ? 'line-through text-gray-500' : mode === 'dark' ? 'text-white' : ''}
  `}
          >
            {task.text}
          </p>
        </div>
        <div className="flex flex-row justify-end max-w-1/2">
          <button
            style={{ all: 'unset', cursor: 'pointer' }}
            onClick={editClickHandle}
          >
            <Pencil className={mode === 'dark' ? 'text-white' : ''} />
          </button>
          <button
            style={{ all: 'unset', cursor: 'pointer' }}
            onClick={() =>
              setTasks((tasks) => tasks.filter((t) => t.id !== task.id))
            }
          >
            <Trash className={mode === 'dark' ? 'text-white' : ''} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
