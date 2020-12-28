import "./App.scss";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { gsTheme } from "./styles/ThemeProvider";

import { PhonesContainer } from "./containers/PhonesContainer/PhonesContainer";
import { NavbarComponent } from "../src/components/NavbarComponent/NavbarComponent";
import { PhonesInfo } from "./containers/PhonesContainer/PhonesInfo";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

function App() {
  let history = useHistory();
  return (
    <Router history={history}>
      <div className="App">
        <MuiThemeProvider theme={gsTheme}>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={PhonesContainer} />
            <Route path="/info/:phoneName" component={PhonesInfo} />
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
  );
}

export default App;
