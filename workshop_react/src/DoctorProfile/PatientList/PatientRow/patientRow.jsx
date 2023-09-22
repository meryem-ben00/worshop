
import AvatarUser from "../../Components/Avatar/avatar";

function getTheColor(type) {
    if (type === "Report")
        return "#128983";
    else if (type === "Routine Checkup")
        return "#0000FF";
    return "#F62088";
}

const PatientRow = (props) => {

    return (
        <div className="grid grid-cols-6 mt-8 items-center gap-[3em]">
            <AvatarUser name={props.name} backColor={getTheColor(props.type)} />
            <div className="col-start-2 col-end-5">
                <p className="font-medium text-xl leading-normal">{props.name}</p>
                <p className={"text-["+getTheColor(props.type)+ "] font-normal text-sm"}>{props.type}</p>
            </div>
            <div className={"col-start-5 col-end-7 rounded-lg bg-["+getTheColor(props.type)+ "] bg-opacity-30 grid content-center justify-center p-1"}>{props.time}</div>
        </div>
    );
}

export default PatientRow;