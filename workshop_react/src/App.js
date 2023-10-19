<<<<<<< HEAD
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import AccountSetting from './Settings/Content/AccountSetting';
import Password from './Settings/Content/Password';
import Email from './Settings/Content/Email';
import Test from './Test/Content/Test';
import NavBar from './Navbar/NavBar';
=======
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import NavBar from "./Navbar/NavBar";

import data from "./Soufiane/Data";
import List from "./Soufiane/Pages/ListDoctors";
import AddNewUser from "./Soufiane/Pages/AddNewUser";
import Details from "./Soufiane/Pages/EnterDetails";
import Services from "./Soufiane/Pages/Services";
import Review from "./Soufiane/Pages/Review";
import Profile from "./DoctorProfile/profile";
import RegisterPatient from "./pages/RegisterPatient";
import Patients from "./pages/Patients";
import Chat from "./pages/Chat";
>>>>>>> main

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
<<<<<<< HEAD
      <Route path='/' element={<NavBar />} >
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='test' element={<Test />}></Route>
        <Route path='patients' element={<h1>patients</h1>}></Route>
        <Route path='users' element={<h1>users</h1>}></Route>
        <Route path='settings' element={<AccountSetting />}></Route>
        <Route path='settings/password' element={<Password />}></Route>
        <Route path='settings/email' element={<Email />}></Route>
        <Route path='*' element={<h1>404</h1>}></Route>
=======
      <Route path="/" element={<NavBar />}>
        <Route path="dashboard" element={<h1>dashboard</h1>}></Route>
        <Route path="test" element={<h1>test</h1>}></Route>
        <Route path="patients" element={<List data={data} />}></Route>
        <Route path="add" element={<AddNewUser />}></Route>
        <Route path="details" element={<Details />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="review" element={<Review />}></Route>
        <Route path="users" element={<Profile />}></Route>
        <Route path="registerPatient" element={<RegisterPatient />} />
        <Route path="patients" element={<Patients />} />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<h1>404</h1>}></Route>
>>>>>>> main
      </Route>
    )
  );

<<<<<<< HEAD
  return (
    <RouterProvider router={router} />
  )

=======
  return <RouterProvider router={router} />;
>>>>>>> main
}

export default App;