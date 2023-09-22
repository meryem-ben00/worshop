// import { useState } from "react";
import Card from "../Components/Card/card";
import Title from "../Components/Title/title";
import PatientRow from "./PatientRow/patientRow"
const PatientList = () => {
    
    // const [date, SetDate] = useState('Today');
    const date = 'Today';
    // const hideChosingDate = useRef(null);

    // function selectDate()
    // {
    //     hideChosingDate.current.focus();
    //     hideChosingDate.current.select();
    // }
    const PatientListObject = [
        {name: "Saad AKLLAM", type: "Weekly Visit", time: "1:37 PM"}, 
        {name: "Saad AKLLAM9", type: "Routine Checkup", time: "1:37 PM"}, 
        // {name: "Saad AKLLAMd", type: "Weekly Visit", time: "1:37 PM"},
        // {name: "Saad AKLLAM", type: "Report", time: "1:37 PM"},
        {name: "Saad AKLLAM", type: "Weekly Visit", time: "1:37 PM"},
        // {name: "Saad AKLLAMc", type: "Weekly Visit", time: "1:37 PM"},
        {name: "EVBLOOD", type: "Report", time: "1:42 PM"},
    ]
    return (
        <Card>
            <div className="grid grid-cols-6">
                <Title givingExtraSpace="col-end-0 col-span-4">patient list</Title>
                <p className="col-end-8">{date}</p>
                {/* <input  ref={hideChosingDate} type="date"></input> 
                <button onClick={selectDate}>xyz</button> */}
            </div>
            {
                PatientListObject.map((e, index) =>
                    {
                        return <PatientRow key={index}
                                        name={e.name}
                                        time={e.time}
                                        type={e.type}/>
                    })
            }
            <div className="grid grid-cols-6 mt-7">
                <p className="underline decoration-solid font-medium text-lg col-start-3 col-span-4">View more</p>
            </div>
        </Card>
    );
}

export default PatientList;