import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar({ isLogin, setIsLogin }) {
    return (
        <div
            className="nav-bar"
            style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#795548",
                justifyContent: "space-around",
            }}
        >
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/users">
                <h3>Users</h3>
            </Link>

            <Button variant="info" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Logout" : "Login"}
            </Button>
        </div>
    );
}

export default NavBar;
