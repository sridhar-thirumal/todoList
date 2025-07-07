import FilterableTodoList from './filterabletodolist';
import ToggleDark from './toggledark';
import { useState } from 'react';

function TodoListPage() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <div
      className={
        mode === 'light'
          ? 'h-screen w-screen bg-[#518ef0]'
          : 'h-screen w-screen bg-[#010a17]'
      }
    >
      <ToggleDark mode={mode} setMode={setMode} />
      <FilterableTodoList mode={mode} />
    </div>
  );
}

export default TodoListPage;
