import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
// import Test from "./components/Test";
import UsersList from "./components/UsersList";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/about" component={About} />
          <Route path="/about/contact" render={() => <h1>Contact Page</h1>} />
          <Route path="/test/:name" component={Test} /> */}

                    <Route
                        path="/users"
                        render={(props) => (
                            <UsersList isLogin={isLogin} {...props} />
                        )}
                    />
                    <Route path="/profile/:Id">
                        <Profile isLogin={isLogin} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
