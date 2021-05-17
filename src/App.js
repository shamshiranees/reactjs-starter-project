import "./App.css";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import Home from "./App/Screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />          

          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
