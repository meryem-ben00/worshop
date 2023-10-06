import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  // helpers :
  function getTheDivStyle(index) {
    return selected === index + 1
      ? "bg-[#1E2E5C] h-full justify-center"
      : selected === index - 1
      ? "bg-[#1E2E5C] h-full justify-center"
      : selected !== index
      ? "bg-[#2E8544] h-full justify-center"
      : "bg-[#2E8544] h-full";
  }

  function getThePtagStyle(index) {
    return selected === index + 1
      ? "rounded-br-lg bg-[#2E8544] h-full w-full justify-center flex p-[20px] items-center"
      : selected === index - 1
      ? "bg-[#2E8544] h-full w-full justify-center flex p-[20px] items-center rounded-bl-lg"
      : selected !== index
      ? "h-full w-full bg-[#2E8544] justify-center flex p-[20px] items-center"
      : "h-full w-full bg-[#1E2E5C] justify-center flex pr-[40px] pl-[40px] items-center rounded-tl-lg rounded-tr-lg";
  }

  function getTheDivStyleMobile(index) {
    return selected === index + 1
      ? "bg-[#1E2E5C] w-full  h-full justify-center"
      : selected === index - 1
      ? "bg-[#1E2E5C] w-full h-full justify-center"
      : selected !== index
      ? "bg-[#2E8544] w-full h-full justify-center"
      : "bg-[#2E8544] w-full h-full";
  }

  function getThePtagStyleMobile(index) {
    return selected === index + 1
      ? "bg-[#2E8544] h-full w-full justify-center flex p-[10px] items-center"
      : selected === index - 1
      ? "bg-[#2E8544] h-full w-full justify-center flex p-[10px] items-center"
      : selected !== index
      ? "h-full w-full bg-[#2E8544] justify-center flex p-[10px] items-center"
      : "h-full w-full bg-[#1E2E5C] justify-center flex p-[10px] pr-[40px] pl-[40px] items-center";
  }

  const [selected, setSelect] = useState(1);

  const [openBur, setBpenBur] = useState(-1);

  function getIndex(index) {
    setSelect(index);
  }

  let navList = ["", "Dashboard", "Users", "Patients", "Test", ""];

  // the component  :
  return (
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
                : openBur === -1
                ? "flex text-[15.34px] h-full w-full evnavsm:hidden"
                : "absolute text-[15.34px] w-full h-fit flex flex-col gap-[20%] bg-[#2E8544] items-center mt-[69px] left-[100%] "
            }
          >
            {navList.map((navName, index) => {
              return index === 0 || navList.length === index + 1 ? (
                <div
                  key={index}
                  className={
                    openBur === -1
                      ? getTheDivStyle(index)
                      : getTheDivStyleMobile(index)
                  }
                >
                  <p
                    className={
                      openBur === -1 ? getThePtagStyle(index) : "hidden"
                    }
                  >
                    {navName}
                  </p>
                </div>
              ) : (
                <NavLink
                  to="/"
                  key={index}
                  onClick={() => getIndex(index)}
                  className={
                    openBur === -1
                      ? getTheDivStyle(index)
                      : getTheDivStyleMobile(index)
                  }
                >
                  <p
                    className={
                      openBur === -1
                        ? getThePtagStyle(index)
                        : getThePtagStyleMobile(index)
                    }
                  >
                    {navName}
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex gap-[32px] evnavsm:gap-[10px] items-center text-right mb-[12px]">
          <img
            className="h-[27px] w-[30px] cursor-pointer"
            src="/images/chat.svg"
            alt="Chat"
          />
          <div className="flex gap-[14px] evnavsm:gap-[10px]  items-center">
            <div className="flex flex-col text-xs evnavmd:hidden">
              <p>Marvin McKinney</p>
              <p className="font-light">Role</p>
            </div>
            <img
              className="h-[38px] w-[38px] rounded-[6px] object-cover cursor-pointer"
              src="https://s3-alpha-sig.figma.com/img/a049/55d7/a53b952704bce7d7673720dd7a763f97?Expires=1697414400&Signature=Eid9dGXhO0Zk909btCHMkecd7JdXqgX6OlSVGburaND9QM-A36Zv22hE-7C154NLTQBorqI4t8HEJeApI~9kNTkq97yJkCmv3PvwLdAZBx-Dw5SlS6mLEhoN4s67E7nAmhmRUuHw-oo2SZuSBJScinwr3juqrzpPCA2STJJ4j0Slv9dNUKxxBIMDLV8FZ14Vchuccn49zfT~ZqFL1IL72Mm6xA9PhFeFEzo74uQzjlgcpqc6OlQki3shU0UxmRRJTiLKHwnNYqNv8tGTj4yJoTmJnQqaXZxOvUhh0bio4lxUjoWGhxnRel30KPFBuwZ0srAtE0K4ncxkZ~WZDXPsWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Admin"
            />
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
