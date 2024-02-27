import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyRoute from "./routes/MyRoute";
import MortalContext from "./context/MortalContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContext>
        <MortalContext>
            <BrowserRouter>
                <MyRoute />
                <App />
            </BrowserRouter>
        </MortalContext>
    </AuthContext>
);
