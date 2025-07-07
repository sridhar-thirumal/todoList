export type Mode = 'light' | 'dark';

export type FilterableTodoListProps = {
  mode: Mode;
};

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type TaskFilter = 'all' | 'completed' | 'pending';

export type InputTasksProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  inputField: string;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
  editingTaskId: number | null;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  mode: Mode;
};

export type FilterTasksProps = {
  mode: Mode;
  filter: TaskFilter;
  setFilter: React.Dispatch<React.SetStateAction<TaskFilter>>;
};

export type TaskListProps = {
  mode: Mode;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  filter: TaskFilter;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
};

export type TaskItemProps = {
  mode: Mode;
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setInputField: React.Dispatch<React.SetStateAction<string>>;
};

export type TasksTodoProps = {
  taskslen: number;
  mode: Mode;
};
