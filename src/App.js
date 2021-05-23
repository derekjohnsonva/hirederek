import { ThemeProvider } from "styled-components";
import Theme from "./theme/Theme";
import GlobalStyles from "./theme/GlobalStyles";
import Splash from "./components/Splash";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Running from "./components/Running";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Splash />
      <Profile />
      <Experience />
      <Education />
      <Running />
    </ThemeProvider>
  );
}

export default App;
