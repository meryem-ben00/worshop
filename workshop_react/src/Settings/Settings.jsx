import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import "./Settings.css"
import AccountSetting from './Content/AccountSetting'
import Password from './Content/Password'
import Email from './Content/Email'

function Settings() {
  return (
    <div className='bg-[#1E2E5C] h-[150vh]'>
        <AccountSetting />
    </div>
  )
}

export default Settings