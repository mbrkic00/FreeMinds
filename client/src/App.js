// ===== Style modules =====
import { ThemeProvider } from "styled-components";
import theme from "./GlobalTheme"
import GlobalStyles from "./styles/Global";
import { StyledApp } from "./styles/App.styled"
// ===== Components =====
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
// ===== React Router =====
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ===== Main export =====
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <Navbar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/about_us" component={AboutUs} exact />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;