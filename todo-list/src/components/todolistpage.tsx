import FilterableTodoList from "./filterabletodolist";
import ToggleDark from "./toggledark";
import { useState } from "react";


function TodoListPage() {

  const [mode, setMode] = useState<"light" | "dark">("light");
  
    return (
      <div className="h-screen w-screen bg-[#518ef0]">
        <ToggleDark mode={mode} setMode={setMode} />
        <FilterableTodoList/>
      </div>
    );
}

export default TodoListPage;
