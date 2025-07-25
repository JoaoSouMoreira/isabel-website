import { routes } from "../routes";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}><a href={route.path}>{route.element.key}</a></li>
        ))}
      </ul>
    </nav>
  );
}
