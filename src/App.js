import Home from "./pages/home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from "./protectedroute/ProtectedRoute.js";
import Message from "./pages/message/Message.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/message" component={Message} />
      </Switch>
    </Router>
  );
};

export default App;
