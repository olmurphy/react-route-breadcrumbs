import { ReactElement } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from "../types/routes";

export default function Breadcrumbs(): ReactElement | null {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav className="nav-container">
      <ul className="breadcrumbs">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <li className="item" key={match.pathname} >
            <Link to={match.pathname} >
              {breadcrumb}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
