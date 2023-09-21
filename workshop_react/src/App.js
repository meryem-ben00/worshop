import { BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './Views/Navbar/NavBar';
import React from 'react';

function App() {
  return (

    <React.Fragment>
    <BrowserRouter>

     
      <Routes>
        <Route path="" element={<NavBar/>} />{" "}
        
      </Routes>
   
  </BrowserRouter>

</React.Fragment>
  )
}

export default App;
