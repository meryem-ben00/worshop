import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getIndex, getTheDivStyle, getThePtagStyle } from "./HelperFunctions";
import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: process.env.REACT_APP_USERPOOL_ID,
  ClientId: process.env.REACT_APP_APPCLIENT_ID,
});

const NavBar = () => {
  useEffect(() => {
    console.log(location);
    const currentUser = userPool.getCurrentUser();
    console.log(currentUser);
    if (!currentUser && (location?.pathname !== "/login" || location?.pathname !== "/sign"))
      navigate('/login')
    else if (currentUser && (location?.pathname === "/login" || location?.pathname === "/sign"))
      navigate('/dashboard')
  }, [])
  const navigate = useNavigate();
  const location = useLocation();
  const navList = ["", "Dashboard", "Users", "Patients", "Test", ""];

  const [selected, setSelect] = useState(1);
  const [openBur, setBpenBur] = useState(-1);
  const [showDoc, setShowDoc] = useState(false);
  const handleMouseOver = () => {
    setShowDoc(true)
  }


  return location?.pathname === "/login" || location?.pathname === "/sign" ? (
    <Outlet />
  ) : (
    <div className="bg-[#2E8544]">
      <nav className="pr-[24px] pl-[24px] bg-[#2E8544] h-[69px] flex justify-between items-center text-[#F4FFF3] font-semibold pt-[12px]">
        <div className="flex justify-between evnavsm:justify-start items-center h-full w-[50%] max-w-[900px] evnavsm:flex-col  evnavsm:relative">
          <img
            className="h-[25px] mb-[12px] evnavsm:self-start evnavsm:h-full evnavsm:w-[60%]"
            src="/images/logo.svg"
            alt="LOGO"
          />
          <div
            className={
              openBur === false
                ? "hidden"
                : `evnavsm:absolute text-[15.34px] w-full evnavsm:h-fit h-full flex evnavsm:flex-col \
                evnavsm:gap-[20%] evnavsm:bg-[#2E8544] evnavsm:items-center evnavsm:mt-[69px] evnavsm:left-[100%]`
            }
          >
            {navList.map((navName, index) => {
              return index === 0 || navList.length === index + 1 ? (
                <div key={index} className={getTheDivStyle(index, selected)}>
                  <p
                    className={
                      getThePtagStyle(index, selected) + " evnavsm:hidden"
                    }
                  >
                    {navName}
                  </p>
                </div>
              ) : (
                <div key={index}>
                  <NavLink
                    to={"/" + (index !== 2 ? navName.toLowerCase() : 'user/doctors')}

                    onClick={() => getIndex(index, setSelect)}
                    className={getTheDivStyle(index, selected)}
                    onMouseOver={index === 2 ? handleMouseOver : () => { setShowDoc(false) }}
                  >
                    <p className={getThePtagStyle(index, selected)}>{navName}</p>
                  </NavLink>
                  {(index === 2) ?
                    (<div style={{ display: showDoc === false ? 'none' : 'flex' }} className="absolute rounded-md flex justify-center items-center gap-[5px] w-[300px] h-[66px] bg-[#FAFAFA] text-[#1E2E5C]">
                      <NavLink onClick={() => { setShowDoc(false) }} to={"/user/doctors"} style={{ background: location?.pathname === "/user/doctors" ? '#2E8544' : 'white' }} className="w-[40%] h-[60%]  ml-[3px] rounded-md flex justify-center items-center bg-opacity-40">Doctor</NavLink>
                      <NavLink onClick={() => { setShowDoc(false) }} to={"/user/admin"} style={{ background: location?.pathname === "/user/admin" ? '#2E8544' : 'white' }} className="w-[50%] h-[60%] mr-[3px] rounded-md flex justify-center items-center bg-[#2E8544] bg-opacity-40">Administration</NavLink>
                    </div>) : <></>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-[32px] evnavsm:gap-[10px] items-center text-right mb-[12px]">
          <NavLink to={"/chat"}>
            <img
              className="h-[27px] w-[30px] cursor-pointer"
              src="/images/chat.svg"
              alt="Chat"
            />
          </NavLink>
          <div className="flex gap-[14px] evnavsm:gap-[10px]  items-center">
            <div className="flex flex-col text-xs evnavmd:hidden">
              <NavLink to={"/settings"}>
                <p>Marvin McKinney</p>
                <p className="font-light">Role</p>
              </NavLink>
            </div>
            <NavLink to={"/settings"}>
              <img
                className="h-[38px] w-[38px] rounded-[6px] object-cover cursor-pointer"
                src="https://s3-alpha-sig.figma.com/img/a049/55d7/a53b952704bce7d7673720dd7a763f97?Expires=1697414400&Signature=Eid9dGXhO0Zk909btCHMkecd7JdXqgX6OlSVGburaND9QM-A36Zv22hE-7C154NLTQBorqI4t8HEJeApI~9kNTkq97yJkCmv3PvwLdAZBx-Dw5SlS6mLEhoN4s67E7nAmhmRUuHw-oo2SZuSBJScinwr3juqrzpPCA2STJJ4j0Slv9dNUKxxBIMDLV8FZ14Vchuccn49zfT~ZqFL1IL72Mm6xA9PhFeFEzo74uQzjlgcpqc6OlQki3shU0UxmRRJTiLKHwnNYqNv8tGTj4yJoTmJnQqaXZxOvUhh0bio4lxUjoWGhxnRel30KPFBuwZ0srAtE0K4ncxkZ~WZDXPsWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Admin"
              />
            </NavLink>
            <div
              className="h-[24px] w-[24px] flex-col gap-[5px] hidden evnavsm:flex"
              onClick={() => setBpenBur(openBur === -1 || openBur === false)}
            >
              <div className="w-full bg-white h-[3px] rounded-lg"></div>
              <div className="w-full bg-white h-[3px] rounded-lg"></div>
              <div className="w-full bg-white h-[3px] rounded-lg"></div>
            </div>
            <img
              className="h-[27px] w-[27px] cursor-pointer"
              src="/images/logout.svg"
              alt="Logout"
            />
          </div>
        </div>
      </nav>
      <main className="bg-[#1E2E5C]">
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
