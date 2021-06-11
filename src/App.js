import NavBar from "./navigation";
import { GlobalStyle } from "./utility/Utils";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
