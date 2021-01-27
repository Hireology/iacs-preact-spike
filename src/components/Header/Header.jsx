import { useRouteMatch, Link } from "react-router-dom";
import { HeaderStyles } from "./HeaderStyles";

export const Header = ({ routes }) => {
  const location = useRouteMatch("/:organization");
  const ROUTE_EXCEPTIONS = ["home"];

  return (
    <HeaderStyles>
      <h1>Preact Spike</h1>
      <nav>
        {routes.map(
          (route) =>
            !ROUTE_EXCEPTIONS.includes(route.name) && (
              <Link
                activeClassName="active"
                to={`${location.url}/${route.name}`}
              >
                {route.name}
              </Link>
            )
        )}
      </nav>
    </HeaderStyles>
  );
};
