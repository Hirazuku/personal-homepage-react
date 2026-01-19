import { HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from '../../common/themeSlice';
import { PersonalHomepage } from "../../features/PersonalHomepage/index";

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <PersonalHomepage />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;