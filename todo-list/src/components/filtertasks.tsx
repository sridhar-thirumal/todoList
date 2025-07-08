import type { FilterTasksProps } from '../types/types';
import type { TaskFilter } from '../types/types';

function FilterTasks({ mode, filter, setFilter }: FilterTasksProps) {
  return (
    <div
      className={
        mode === 'light'
          ? 'flex flex-row bg-white max-w-2/3 justify-between pt-2 pb-2'
          : 'flex flex-row bg-[#14366e] text-white max-w-2/3 justify-between pt-2 pb-2'
      }
    >
      <label htmlFor="filter">Filter:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilter(e.target.value as TaskFilter)
        }
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default FilterTasks;
