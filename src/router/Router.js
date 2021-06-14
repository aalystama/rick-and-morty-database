import { Route, Switch } from "react-router";
import { CharactersPage, LocationsPage, EpisodesPage } from "../views";

function Router() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/characters" component={CharactersPage} />
      <Route path="/locations" component={LocationsPage} />
      <Route path="/episodes" component={EpisodesPage} />
    </Switch>
  );
}

export default Router;
