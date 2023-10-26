

export const SignIn = () => {
    return (
        <main className="items-center justify-center h-screen">
            <div className="flex flex-col bg-white w-[640.8px] rounded-lg pt-[2%] pb-[5%]">
                <div className="flex h-[50px] w-[100%] items-center justify-center mb-[86px]">
                    <img className="h-[50px] w-[65px]" src="/images/logoicon.svg" alt="Logo" />
                    <img className="h-[35px] w-[253px]" src="/images/loginlogo.svg" alt="Logo" />
                </div>
                <div className="w-[100%] flex justify-end">
                    <div className="flex flex-col w-[80%] ">
                        <h1 className="text-black font-bold	text-[28px] ">Create a <br /> New account</h1>
                    </div>
                </div>
                <div>

                    <div className="flex flex-col justify-center w-[100%] items-center gap-[10px] mt-[27px]">
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">User name</label>
                            <input type="email" name="email" className="bg-[#DCDCDC] rounded-sm w-[100%]  h-[35px] p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Email</label>
                            <input type="email" name="email" className="bg-[#DCDCDC] rounded-sm w-[100%]  h-[35px] p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Password</label>
                            <input type="password" name="password" className="bg-[#DCDCDC] rounded-sm  w-[100%]  h-[35px]  p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Confirm Password</label>
                            <input type="password" name="password" className="bg-[#DCDCDC] rounded-sm  w-[100%]  h-[35px]  p-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-[28px] flex justify-center flex-col w-[100%] items-center gap-[5px]">
                    <button className="bg-[#2E8544] w-[60%] rounded-sm h-[34px] text-white mt-[10px] font-bold text-[11px]"> create account </button>
                </div>
            </div >
        </main >
    )
}