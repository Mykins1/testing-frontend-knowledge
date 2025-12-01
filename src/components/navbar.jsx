import { NavLink } from "react-router-dom";
import { ArrowSquareOut } from "phosphor-react";

const ExternalIcon = () => {
  return <ArrowSquareOut size={20} />;
};

export default function NavBar() {
  const navLinks = [
    { name: "Introduction", path: "/" },
    { name: "Outline", path: "outline" },
    { name: "> useState (click counter)", path: "task-1" },
    { name: "> useReducer (arithmetic ops)", path: "task-2" },
    { name: "> useEffect (data fetcher)", path: "task-4" },
    { name: "> useNavigate (navigator)", path: "task-5" },
    { name: "> react props (product list)", path: "task-3" },
    { name: "> context api (theme toggle)", path: "task-6" },
    {
      name: "Capstone Project 1",
      path: "https://stopwatch-mauve-nu.vercel.app",
      isExternal: true,
    },
    {
      name: "Capstone Project 2",
      path: "https://socia-blog.vercel.app",
      isExternal: true,
    },
  ];

  return (
    <nav className="flex flex-col gap-1 items-start whitespace-nowrap">
      {navLinks.map((link) => {
        const isExternal = link.isExternal;

        const baseClasses =
          "flex justify-between items-center gap-2 p-1 transition-colors w-full text-left ";

        const getClasses = ({ isActive }) =>
          `${baseClasses} ${
            isActive
              ? "bg-[#121212] text-white font-semibold"
              : "hover:bg-gray-100"
          }`;

        if (isExternal) {
          return (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses}  hover:bg-gray-100`}
            >
              <span>{link.name}</span>
              <span>{<ExternalIcon />}</span>
            </a>
          );
        }

        return (
          <NavLink key={link.path} to={link.path} className={getClasses}>
            <span>{link.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
