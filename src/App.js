import "./App.scss";

import { Provider } from "react-redux";
import { Store } from "./redux/store.ts";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { gsTheme } from "./styles/ThemeProvider";

import { PhonesContainer } from "./containers/PhonesContainer/PhonesContainer";
import { NavbarComponent } from "../src/components/NavbarComponent/NavbarComponent";
import { PhonesInfo } from "./components/PhonesInfo";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

function App() {
  let history = useHistory();

  return (
    <Provider store={Store}>
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
    </Provider>
  );
}

export default App;
