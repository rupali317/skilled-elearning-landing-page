import { Courses } from "./components/Courses";
import { Introduction } from "./components/Introduction";
import * as GlobalStyles from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <Introduction />
      <Courses />
    </>
  );
}

export default App;
