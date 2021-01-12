import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NewArticle from "./pages/NewArticle/NewArticle";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoute exact={true} path="/home" exact component={Home} />
          <ProtectedRoute
            exact={true}
            path="/new-article"
            exact
            component={NewArticle}
          />
          <UnProtectedRoute
            exact={true}
            path="/login"
            exact
            component={Login}
          />
          <UnProtectedRoute
            exact={true}
            path="/register"
            exact
            component={Register}
          />

          <Redirect from="/" to="/home" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
