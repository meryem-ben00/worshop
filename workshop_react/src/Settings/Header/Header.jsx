import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div>
      <div>
        <h1 className='text-[27px] font-semibold p-[40px] text-[white]'>Settings</h1>
      </div>
      <div className='ml-[18%] w-[700px]'>
        <nav className='border-b-2 border-solid'>
          <ul className='flex gap-[25px] text-[20px] text-[white] pb-[7px] pl-[10px]'>
            <li className=''>
              <NavLink to="/settings" className={location.pathname === '/settings' ? 'text-[#2E8544]' : ''}>Account Setting</NavLink>
            </li>
            <li>
              <NavLink to="/settings/password" className={location.pathname === '/settings/password' ? 'text-[#2E8544]' : ''}>Password</NavLink>
            </li>
            <li>
              <NavLink to="/settings/email" className={location.pathname === '/settings/email' ? 'text-[#2E8544]' : ''}>Email</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
