import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="flex flex-col items-center">
      <Link to="/">Home</Link>
      <Link to="task 1">click counter</Link>
      <Link to="task 2">productlist</Link>
      <Link to="task 3">user fetcher</Link>
    </nav>
  );
}
