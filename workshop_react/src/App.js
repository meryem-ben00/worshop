
import React from 'react';
import data from './Soufiane/Data';
import Users from './Soufiane/ListUsers';
import List from './Soufiane/ListDoctors';
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
]);
function App() {
  return (
    <RouterProvider router={router} >
    <div>
      <List data={data} />
    </div>
    </RouterProvider>
  )
}

export default App;
