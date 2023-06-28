import React from "react";
import ReactDOMClient from "react-dom/client";
import { Bienvenue } from "./screens/Bienvenue";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Bienvenue />);
