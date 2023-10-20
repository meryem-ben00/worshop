import Card from "../Components/Card/card";
import Title from "../Components/Title/title";
import PatientRow from "./PatientRow/patientRow"
const PatientList = () => {

    const date = 'Today';
    const PatientListObject = [
        { name: "Saad AKLLAM", type: "Weekly Visit", time: "1 : 37 PM" },
        { name: "Amy Dunham", type: "Routine Checkup", time: "1 : 37 PM" },
        { name: "Saad AKLLAM", type: "Weekly Visit", time: "1 : 37 PM" },
        { name: "Mohcine ghalmi", type: "Report", time: "1 : 42 PM" },
    ]
    return (
        <Card extraStyle="h-[467px] w-[100%]">
            <div className="grid grid-cols-6 mb-[5px]">
                <Title givingExtraSpace="col-end-0 col-span-4">patient list</Title>
                <div className="col-start-7 col-end-7 opacity-60 text-sm flex justify-center gap-1 items-center" >
                    {date}
                    <p className="rotate-90 text-[24px] font-light">{'>'}</p>
                </div>
            </div>
            <div>
                {
                    PatientListObject.map((e, index) => {
                        return <PatientRow key={index}
                            name={e.name}
                            time={e.time}
                            type={e.type} />
                    })
                }
            </div>
            <div className="grid grid-cols-6 mt-7">
                <p className="underline decoration-solid font-medium text-lg col-start-3 col-span-4 text-[18px] leading-none">View more</p>
            </div>
        </Card>
    );
}

export default PatientList;