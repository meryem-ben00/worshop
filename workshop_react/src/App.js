import { BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './Views/Navbar/NavBar';
import React from 'react';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (

    <React.Fragment>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />{" "}
      </Routes>
  </BrowserRouter>

</React.Fragment>
  )
}

export default App;
