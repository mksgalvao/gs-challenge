import "./App.scss";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { gsTheme } from "./styles/ThemeProvider";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import { PhonesContainer } from "./containers/PhonesContainer/PhonesContainer";
import { NavbarComponent } from "../src/components/NavbarComponent/NavbarComponent";
import { PhonesInfo } from "./components/PhonesInfo/PhonesInfo";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

const { store } = configureStore();
function App() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <MuiThemeProvider theme={gsTheme}>
            <NavbarComponent />
            <Switch>
              <Route exact path="/" component={PhonesContainer} />
              <Route path="/info/:phoneName" component={PhonesInfo} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
