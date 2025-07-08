import TaskItem from './taskitem';

import type { Task, TaskListProps } from '../types/types';

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
  function renderTaskItem(task: Task) {
    const isCompleted = task.completed;

    const shouldRender =
      filter === 'all' ||
      (filter === 'completed' && isCompleted) ||
      (filter === 'pending' && !isCompleted);

    if (!shouldRender) return null;

    return (
      <TaskItem
        key={task.id}
        mode={mode}
        task={task}
        setTasks={setTasks}
        setEditingTaskId={setEditingTaskId}
        setInputField={setInputField}
      />
    );
  }

  return (
    //TaskItemProps- tasks, settasks, setEditingTaskId
    <ul className="flex flex-col gap-4">{tasks.map(renderTaskItem)}</ul>
  );
}

export default TaskList;
