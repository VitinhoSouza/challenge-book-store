// import {Routes} from 'react-router';
import { Route, Router } from "react-router-dom";
import history from "./history";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./hooks/useAuth";

import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Route exact path="/" component={Login} />

        <Route path="/books" component={Home} />

        <Route path="/login" component={Login} />
      </Router>
    </AuthProvider>
  );
}

export default App;
