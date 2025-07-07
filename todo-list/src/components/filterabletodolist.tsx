import FilterTasks from './filtertasks';
import InputTasks from './inputtasks';
import TaskList from './tasklist';
import TasksTodo from './taskstodo';
import { useState } from 'react';
import type { Task } from '../types/types';
import type { TaskFilter } from '../types/types';
import type { FilterableTodoListProps } from '../types/types';

function FilterableTodoList({ mode }: FilterableTodoListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>('all');
  const [inputField, setInputField] = useState<string>('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/5">
      <TasksTodo taskslen={tasks.length} mode={mode} />
      <InputTasks
        mode={mode}
        tasks={tasks}
        setTasks={setTasks}
        inputField={inputField}
        setInputField={setInputField}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
      />
      <FilterTasks mode={mode} filter={filter} setFilter={setFilter} />
      <TaskList
        mode={mode}
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        setEditingTaskId={setEditingTaskId}
        setInputField={setInputField}
      />
    </div>
  );
}

export default FilterableTodoList;
