import { Moon, Sun } from 'lucide-react';

type ToggleDarkProps = {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

function ToggleDark({ mode, setMode }: ToggleDarkProps) {
  //button onclick changes mode state and toggles button svg
  return (
    <button
      className="absolute top-0 right-0 m-4 px-4 py-2"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}

export default ToggleDark;
