import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar/NavBar';

import data from './Soufiane/Data';
import List from './Soufiane/Pages/ListDoctors';
import AddNewUser from './Soufiane/Pages/AddNewUser';
import Details from './Soufiane/Pages/EnterDetails';
import Services from './Soufiane/Pages/Services';
import Review from './Soufiane/Pages/Review';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />} >
        <Route path='dashboard' element={<h1>dashboard</h1>}></Route>
        <Route path='test' element={<h1>test</h1>}></Route>
        <Route path='patients' element={<List data={data} />}></Route>
        <Route path='add' element={<AddNewUser />}></Route>
        <Route path='details' element={<Details />}></Route>
        <Route path='services' element={<Services />}></Route>
        <Route path='review' element={<Review />}></Route>
        <Route path='users' element={<h1>users</h1>}></Route>
        <Route path='*' element={<h1>404</h1>}></Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )

}

export default App;
