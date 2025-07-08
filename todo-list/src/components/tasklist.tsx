import TaskItem from './taskitem';

import type { TaskListProps } from '../types/types';

//TasklistProps- filter
function TaskList({
  mode,
  tasks,
  setTasks,
  filter,
  setEditingTaskId,
  setInputField,
}: TaskListProps) {
  /* based on filter should render tasks */

  return (
    //TaskItemProps- tasks, settasks, setEditingTaskId
    <ul className="flex flex-col gap-4">
      {tasks
        .filter((task) => {
          if (filter === 'all') return true;
          if (filter === 'completed') return task.completed;
          if (filter === 'pending') return !task.completed;
          return false;
        })
        .map((task) => (
          <TaskItem
            key={task.id}
            mode={mode}
            task={task}
            setTasks={setTasks}
            setEditingTaskId={setEditingTaskId}
            setInputField={setInputField}
          />
        ))}
    </ul>
  );
}

export default TaskList;
