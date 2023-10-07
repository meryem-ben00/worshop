
import React from 'react';
import data from './Soufiane/Data';
import Users from './Soufiane/Pages/ListUsers';
import List from './Soufiane/Pages/ListDoctors';
import AddNewUser from './Soufiane/Pages/AddNewUser';
import Details from './Soufiane/Pages/EnterDetails';
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
