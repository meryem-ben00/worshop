
import AvatarUser from "../../Components/Avatar/avatar";

function getTheColor(type) {
    if (type === "Report")
        return {r: 18, g: 137, b: 131};
    else if (type === "Routine Checkup")
        return {r: 0, g: 0, b: 255};
    return {r: 246, g: 32, b: 136};
}

const PatientRow = (props) => {

    const color = getTheColor(props.type);
    return (
        <div className="grid grid-cols-6 mt-8 items-center gap-[3em]">
            <AvatarUser name={props.name} backColor={color} />
            <div className="col-start-2 col-end-5">
                <p className="font-medium text-xl leading-normal">{props.name}</p>
                <p className="font-normal text-sm" style={{color: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`}}>{props.type}</p>
            </div>
            <div className="col-start-5 col-end-7 rounded-lg bg-opacity-30 grid content-center justify-center p-1" style={{backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`}}>{props.time}</div>
        </div>
    );
}

export default PatientRow;