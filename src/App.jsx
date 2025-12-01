import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen font-semibold text-2xl
               bg-white text-gray-900 
               transition-colors duration-300">
        <aside className="border-r p-3 dark:border-gray-700">
          <NavBar />
        </aside>
        <main className="flex-1 flex justify-center p-3 overflow-y-auto h-screen">
          <Outlet />
        </main>
      </div>{" "}
    </ThemeProvider>
  );
}

export default App;
