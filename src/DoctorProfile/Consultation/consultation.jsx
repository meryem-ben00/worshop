import AvatarUser from "../Components/Avatar/avatar";
import Card from "../Components/Card/card";
import Title from "../Components/Title/title";


function getTheColor(type) {
    if (type === "Report")
        return { r: 18, g: 137, b: 131, a: 1 };
    else if (type === "Routine Checkup")
        return { r: 0, g: 0, b: 255, a: 0.6 };
    return { r: 246, g: 32, b: 136, a: 1 };
}


const Consultation = () => {


    const words = ['ADHD', 'Depression', 'Anxiety'];

    return (
        <Card colSpanStyle="col-span-2 evmd:col-span-1 evsm:col-span-1 h-[309px] evmd:h-max evsm:h-max p-[19px]">
            <div className="grid grid-cols-6 mt-[5px] mb-[20px]">
                <Title givingExtraSpace="col-end-0 col-span-4">Upcoming</Title>
                <div className="col-start-7 col-end-7 text-sm flex justify-center" >
                    <p className="text-[19px] font-medium underline cursor-pointer">View All</p>
                </div>
            </div>
            <div className="h-[219px] evmd:h-max evsm:h-max flex flex-row evmd:flex-col evsm:flex-col border-[1px] border-opacity-50 border-blue-500 rounded-md">
                <div className="p-[20px]  border-r-[1px] evmd:border-b-[1px] evsm:border-b-[1px] border-opacity-50 border-blue-500 w-[400px] evmd:w-full evsm:w-full flex justify-center content-center flex-col gap-[10px]">
                    <div className="flex flex-row gap-[19px] items-center rounded-md">
                        <AvatarUser name="Saad AKLLAM" backColor={getTheColor("Report")} />
                        <div>
                            <div className="c-[#23262F] text-[15px] font-medium	mb-[1pxs]">Montly doctor’s meet</div>
                            <div className="text-[13px]" style={{ color: "rgba(13, 13, 13, 0.60)", }}>8 April, 2021   |   04:00 PM</div>
                        </div>
                    </div>
                    <div className="text-center mt-2 flex flex-wrap gap-[52px] justify-center content-center">
                        {words.map((word, index) => { return <span key={index} className="font-medium text-[17px]" >{word}</span> })}
                    </div>
                </div>
                <div className=" p-[42px] flex flex-col gap-[37px] content-center">
                    <div className="flex flex-row gap-[20px] content-center items-star">
                        <div className="text-[12px] font-medium black leading-normal">Last Checked</div>
                        <div className="text-black text-opacity-50 font-normal text-[11px]"> dadjsfjsdfjd sdpfasf fjakna lknasd 'fak 'afvoo</div>
                    </div>
                    <div className="flex flex-row gap-[20px] content-center items-start">
                        <div className="text-[12px] font-medium black leading-normal">Last Checked</div>
                        <div className="text-black text-opacity-50 font-normal text-[11px]">
                            <span className="font-medium text-black text-opacity-100">Dr.Stone</span> dadjsfjsdfjd sdpfasf fjakna
                            <p className="ttext-opacity-100 text-[#1A71FF] underline">#23262F</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Consultation;