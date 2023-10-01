import { BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './Views/Navbar/NavBar';
import React from 'react';
import Doctor from './Views/Zakaria/Doctor';

function App() {
  return (

    <React.Fragment>
    <BrowserRouter>

     
      <Routes>
        {/* <Route path="" element={<NavBar/>} />{" "} */}
        <Route path="/Doc" element={<Doctor/>} />{" "}
      </Routes>
   
  </BrowserRouter>

</React.Fragment>
  )
}

export default App;
