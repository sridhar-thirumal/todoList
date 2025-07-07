type TasksTodoProps = {
    taskslen: number,
};

function TasksTodo({ taskslen }: TasksTodoProps) {
    return (
        <h1 className="flex flex-row justify-center">TODO: {taskslen}</h1>
    );
}

export default TasksTodo;
