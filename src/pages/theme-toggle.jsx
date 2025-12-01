import { useTheme } from "../context/ThemeContext";
import Button from "../components/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        <Button message="switch theme" onClick={toggleTheme} />
      </div>
      <p>current theme is: {theme} </p>
    </div>
  );
}
