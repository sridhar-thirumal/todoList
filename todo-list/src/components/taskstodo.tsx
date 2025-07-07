import type { TasksTodoProps } from '../types/types';

function TasksTodo({ taskslen, mode }: TasksTodoProps) {
  return (
    <h1
      className={
        mode === 'light'
          ? 'flex flex-row justify-center'
          : 'text-white flex flex-row justify-center'
      }
    >
      TODO: {taskslen}
    </h1>
  );
}

export default TasksTodo;
