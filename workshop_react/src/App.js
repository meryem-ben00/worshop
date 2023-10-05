import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import NavBar from './Views/Navbar/NavBar';
import React from 'react';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<NavBar />} >
      {/* <Route index element={<Field />} />
      <Route path='add_post' element={<AddPost />} />
      <Route path='about' element={<About />} /> */}
      <Route path='*' element={<h1>404</h1>}></Route>
    </Route>
  )
  );

  return (
      <RouterProvider router={router} />
  )

}

export default App;
