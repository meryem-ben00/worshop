import { useState } from "react";
import {
    CognitoUserAttribute,
    CognitoUserPool
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";

const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_USERPOOL_ID,
    ClientId: process.env.REACT_APP_APPCLIENT_ID,

});

export const SignIn = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (values) => {
        const email = values.email.trim();
        const password = values.password.trim();
        const attributeList = [
            new CognitoUserAttribute({
                Name: "email",
                Value: email,
            }),
            // new CognitoUserAttribute({
            //     Name: "email",
            //     Value: name,
            // }),
            // new CognitoUserAttribute({
            //     Name: "custom:telnum",
            //     Value: values.telnum,
            // }),
        ];
        userPool.signUp(name, password, attributeList, null, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("call result: ", result);
            navigate("/dashboard");
        });
    };



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
                            <input onChange={evt => { console.log(evt.target.value); setName(evt.target.value) }} type="text" name="name" className="bg-[#DCDCDC] rounded-sm w-[100%]  h-[35px] p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Email</label>
                            <input onChange={evt => { console.log(evt.target.value); setEmail(evt.target.value) }} type="email" name="email" className="bg-[#DCDCDC] rounded-sm w-[100%]  h-[35px] p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Password</label>
                            <input onChange={evt => { console.log(evt.target.value); setPassword(evt.target.value) }} type="password" name="password" className="bg-[#DCDCDC] rounded-sm  w-[100%]  h-[35px]  p-[2px]" />
                        </div>
                        <div className="flex flex-col justify-center w-[55%] gap-[2px]">
                            <label className="text-[10px] font-normal">Confirm Password</label>
                            <input type="password" name="password" className="bg-[#DCDCDC] rounded-sm  w-[100%]  h-[35px]  p-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-[28px] flex justify-center flex-col w-[100%] items-center gap-[5px]">
                    <button onClick={() => { handleSubmit({ name, email, password }) }} className="bg-[#2E8544] w-[60%] rounded-sm h-[34px] text-white mt-[10px] font-bold text-[11px]"> create account </button>
                </div>
            </div >
        </main >
    )
}