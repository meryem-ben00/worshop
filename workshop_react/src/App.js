import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar/NavBar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />} >
        <Route path='dashboard' element={<h1>dashboard</h1>}></Route>
        <Route path='test' element={<h1>test</h1>}></Route>
        <Route path='patients' element={<h1>patients</h1>}></Route>
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
