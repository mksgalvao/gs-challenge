import "./App.scss";

import { Container } from "./components/Container";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { gsTheme } from "./styles/ThemeProvider";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={gsTheme}>
        <Container />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
