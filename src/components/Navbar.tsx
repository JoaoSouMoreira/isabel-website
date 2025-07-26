import { routes } from "../routes";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <h1 className="navbar-title">Isabel Castanho.</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.path}><a href={route.path}>{route.name}</a></li>
        ))}
      </ul>
    </nav>
  );
}
