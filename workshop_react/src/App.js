<<<<<<< HEAD
=======
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import NavBar from './Navbar/NavBar';
>>>>>>> 4d70016ce5951db80d7686bfe2fff8d175f7097c

import React from 'react';
import data from './Soufiane/Data';
import Users from './Soufiane/Pages/ListUsers';
import List from './Soufiane/Pages/ListDoctors';
import AddNewUser from './Soufiane/Pages/AddNewUser';
import Details from './Soufiane/Pages/EnterDetails';
import Services from './Soufiane/Pages/Services';
import Review from './Soufiane/Pages/Review';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List data={data}/>,
    errorElement: <h1>Sorry this page is not exist...</h1>,
  },
  {
    path: "/users",
    element: <Users data = {data}/>,
  },
  {
    path: "/add",
    element: <AddNewUser />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);
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
<<<<<<< HEAD
    <RouterProvider router={router} >
      <div>
        <List data={data} />
      </div>
    </RouterProvider>
=======
    <RouterProvider router={router} />
>>>>>>> 4d70016ce5951db80d7686bfe2fff8d175f7097c
  )

}

export default App;
