import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  /**
   * Toggles the "dark" class on the document element
   * based on the value of the "theme" state.
   * This will switch the theme from light to dark mode.
   */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /**
   * Toggles the theme between 'dark' and 'light'.
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="h-screen dark:bg-black justify-center items-center flex">
      <button
        className="p-4 py-2 rounded-lg dark:bg-white bg-black  text-white dark:text-black"
        onClick={toggleTheme}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
