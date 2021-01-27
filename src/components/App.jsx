import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Header } from "./Header";
import data from "../data";
import { BasicTemplate } from "./BasicTemplate/BasicTemplate";
/**
 * App
 * * Entry point for In-App Career Sites
 * * Fetches initial site data based on URL params (/:org)
 * * Renders dynamic routes
 * ! if no route or org is available, an error page is displayed
 */
const App = () => {
  // Fetch initial site data from route params
  const location = useRouteMatch("/:organization");

  // Render an error page if no params are present
  if (!location || !location.params)
    return <div>Sorry! This page doesn't exist</div>;

  // Stub API response for singular organization site data <3
  const organization = data.organizations.find(
    (o) => o.name === location?.params?.organization
  );

  return (
    <div id="app">
      <Header
        routes={organization?.routes}
        org={location?.params?.organization}
      />
      {organization && (
        <Switch>
          <Route
            path={`/${organization.name}`}
            render={() => <BasicTemplate site={organization} />}
          />
          {organization.routes.map((route, i) => (
            <Route
              path={`/${route.name}`}
              key={i}
              render={() => <BasicTemplate site={organization} />}
            />
          ))}
        </Switch>
      )}
    </div>
  );
};

export default App;
