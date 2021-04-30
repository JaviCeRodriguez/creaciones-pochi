import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
    return (
        <Router>
            <Switch>
                <Theme>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sobre-mi" component={About} />
                    <Route exact path="/creaciones" component={Products} />
                </Theme>
            </Switch>
        </Router>
    );
};

export default App;
