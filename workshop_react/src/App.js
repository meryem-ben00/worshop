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
import Login from "./login/login";
import AccountSetting from "./Settings/Content/AccountSetting";
import Password from "./Settings/Content/Password";
import Email from "./Settings/Content/Email";
import Test from "./Test/Content/Test";
import Dashboard from "./Dashboard/Dashboard";
import { SignIn } from "./Sign/Signin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="login" element={<Login />} />
        <Route path="sign" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="add" element={<AddNewUser />}></Route>
        <Route path="details" element={<Details />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="review" element={<Review />}></Route>
        <Route path="user/doctors" element={<List data={data} />}></Route>
        <Route path="user/admin" element={<Profile />}></Route>
        <Route path="registerPatient" element={<RegisterPatient />} />
        <Route path="patients" element={<Patients />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<AccountSetting />}></Route>
        <Route path="settings/password" element={<Password />}></Route>
        <Route path="settings/email" element={<Email />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
