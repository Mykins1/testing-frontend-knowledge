import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="flex-1 flex min-h-screen">
      <aside className="w-64 border p-4">
        <NavBar />
      </aside>
      <main className="flex-1 flex-col flex items-center justify-center p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
