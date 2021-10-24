// ===== Style modules =====
import { ThemeProvider } from "styled-components";
import theme from "./GlobalTheme"
import GlobalStyles from "./styles/Global";
import { StyledApp } from "./styles/App.styled"
// ===== Components =====
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

// ===== Main export =====
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
        <Homepage />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;