

const Login = () => {
    return (
        <main className="items-center justify-center h-screen">
            <div className="flex flex-col bg-white w-[640.8px] rounded-lg pt-[2%] pb-[5%]">
                <div className="flex h-[50px] w-[100%] items-center justify-center mb-[86px]">
                    <img className="h-[50px] w-[65px]" src="/images/logoicon.svg" alt="Logo" />
                    <img className="h-[35px] w-[253px]" src="/images/loginlogo.svg" alt="Logo" />
                </div>
                <div className="w-[100%] flex justify-end">
                    <div className="flex flex-col w-[80%] ">
                        <h1 className="text-black font-bold	text-[28px] ">Sign into <br /> Your account</h1>
                    </div>
                </div>
                <div>

                    <div className="flex flex-col justify-center w-[100%] items-center gap-[10px] mt-[27px]">
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Email or Username</label>
                            <input type="email" name="email" className="bg-[#DCDCDC] rounded-sm w-[100%]  h-[35px] p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Password</label>
                            <input type="password" name="password" className="bg-[#DCDCDC] rounded-sm  w-[100%]  h-[35px]  p-[2px]" />
                        </div>
                        <div className="w-[55%] flex gap-[5%]">
                            <input type="checkbox" name="checkbox" className="border-[#D9D9D9] border-[1px]" />
                            <label className="text-[10px] font-normal">Remember Me</label>
                        </div>
                    </div>
                </div>
                <div className="mt-[28px] flex justify-center flex-col w-[100%] items-center gap-[5px]">
                    <p className="border-[#D9D9D9] leading-[120%]"> - Or Sign in with - </p>
                    <div className="flex gap-[10px]">
                        <img className="cursor-pointer w-[35px] h-[35px]  p-[10px] border-[1px] rounded-sm" src="https://s3-alpha-sig.figma.com/img/0c59/00fb/3b0129136274a5e5edb22fbbccf79c73?Expires=1698624000&Signature=AumAttPnAA6ilSf~1cfZQSlWd7VDlpE4G4wFOqWxRE3el0Rcm8k2UKnm6bNQG6QQfqA9na0LHPs5qOyBtikf6F3KKDXEKV2weJaKv9c~T7QnJ3Z2NlbGVnf5LWD6wVvykK09VN5cc1-JvaUlfr-vLdcRkGoMm0cPNU7VBGyFgeCvBblTO9firqznMg0Oa1jsgoJ0xJ53KNUfcm53qalig~kQD-mMluNY9u9RkHS8~eVLtMYyT5~WNxbkvuIHBe4H2a4R1sQcZqdL~iBFHBwGcTMHjJR4aOvFpW7K~XKBD5hjLRxNRb-CHQHE40KA6nJvXvhANwTS7fqrCqX5igETQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Google" />
                        <img className="cursor-pointer w-[35px] h-[35px] p-[10px] border-[1px] rounded-sm" src="/images/facebook.svg" alt="Facebook" />
                        <img className="cursor-pointer w-[35px] h-[35px] p-[10px] border-[1px] rounded-sm" src="/images/x.svg" alt="Tweeter" />
                    </div>

                    <button className="bg-[#2E8544] w-[60%] rounded-sm h-[34px] text-white mt-[10px] font-bold text-[11px]"> sign in </button>
                </div>
            </div >
        </main >
    )
}

export default Login;