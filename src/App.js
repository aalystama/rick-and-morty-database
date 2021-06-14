import NavBar from "./navigation";
import { GlobalStyle } from "./utility/Utils";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <NavBar />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
