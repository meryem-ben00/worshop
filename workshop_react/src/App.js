import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import NavBar from "./Navbar/NavBar";
import AccountSetting from "./Settings/Content/AccountSetting";
import Password from "./Settings/Content/Password";
import Email from "./Settings/Content/Email";
import Test from "./Test/Content/Test";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="test" element={<Test />}></Route>
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
