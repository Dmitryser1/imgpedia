import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import UserStore from "./store/UserStore";
import ImageStore from "./store/ImageStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        image: new ImageStore(),
    }}>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
    </Context.Provider>
  </React.StrictMode>
);
