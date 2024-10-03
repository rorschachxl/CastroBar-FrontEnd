import React from "react";
import Routes from "./routes/Routes";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./components/UserContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <UserProvider>
        <Routes />
    </UserProvider>
);
