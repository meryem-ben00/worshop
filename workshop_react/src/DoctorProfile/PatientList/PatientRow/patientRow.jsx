
import AvatarUser from "../../Components/Avatar/avatar";

function getTheColor(type) {
    if (type === "Report")
        return {r: 18, g: 137, b: 131, a: 1};
    else if (type === "Routine Checkup")
        return {r: 0, g: 0, b: 255, a: 0.6};
    return {r: 246, g: 32, b: 136, a: 1};
}

const PatientRow = (props) => {

    const color = getTheColor(props.type);
    return (
        <div className="flex gap-3 mt-[23px] items-center flex-nowrap">
            <AvatarUser name={props.name} backColor={color} />
            <div className="basis-5/6 grow">
                <p className="font-medium text-xl ">{props.name}</p>
                <p className="font-normal text-sm"
                    style={{color: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`}}>{props.type}</p>
            </div>
            <div className="basis-2/6 w-[82px] h-[32px] rounded-lg bg-opacity-30 grid content-center justify-center text-sm font-normal"
                style={{backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`, color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}}>{props.time}</div>
        </div>
    );
}

export default PatientRow;