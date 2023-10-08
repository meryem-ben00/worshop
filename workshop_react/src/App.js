import { BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './Views/Navbar/NavBar';
import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import AccountSetting from './Settings/Content/AccountSetting';
import Password from './Settings/Content/Password';
import Email from './Settings/Content/Email';
import Test from './Test/Content/Test';

function App() {
  return (

    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/settings" element={<AccountSetting/>} />
        <Route path="/password" element={<Password/>} />
        <Route path="/email" element={<Email/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
  </BrowserRouter>

</React.Fragment>
  )
}

export default App;
