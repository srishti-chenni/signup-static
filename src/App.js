import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
