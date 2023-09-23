import Card from "./Components/Card/card";
import PatientList from "./PatientList/patientList";




const Profile = () => {

    return (
        <div className="grid grid-rows-2 gap-4 max-w-[1440px]">
            <div className="grid grid-cols-3 gap-4">
                <Card >1</Card>
                <PatientList />
                <Card>3</Card>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Card colSpanStyle="col-span-2">4</Card>
                <Card>5</Card>
            </div>
        </div>
    )
}

export default Profile;