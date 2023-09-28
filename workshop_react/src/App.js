import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Views/Navbar/NavBar";
import React from "react";
import RegisterPatient from "./pages/registerPatient";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NavBar />} />{" "}
          <Route path="/registerPatient" element={<RegisterPatient />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
