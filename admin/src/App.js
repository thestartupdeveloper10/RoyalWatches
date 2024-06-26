import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const token = useSelector((state) => state.user.currentUser.token);
  const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);

  console.log("Token:", token);
  console.log("Is Admin:", isAdmin);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {!token ? (
            <Route path="*" element={<Login />} />
          ) : (
            <>
              {isAdmin ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/users" element={<List />} />
                  <Route path="/users/:userId" element={<Single />} />
                  <Route
                    path="/users/new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                  <Route path="/products" element={<List />} />
                  <Route path="/products/:productId" element={<Single />} />
                  <Route
                    path="/products/new"
                    element={<New inputs={productInputs} title="Add New Product" />}
                  />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
