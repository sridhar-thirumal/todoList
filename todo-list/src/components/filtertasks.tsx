import type { FilterTasksProps } from "../types/types";
import type { TaskFilter } from "../types/types";

function FilterTasks({filter, setFilter}: FilterTasksProps) {
    return (
        <div className="flex flex-row bg-white max-w-2/3 justify-between">
            <label htmlFor="filter">Filter:</label>
            <select id="filter" value={filter} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                setFilter(e.target.value as TaskFilter)
            }>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
}

export default FilterTasks;
