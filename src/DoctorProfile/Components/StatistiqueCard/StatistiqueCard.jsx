

const StatistiqueCard = (props) => {

    const up = true;
    return (
        <div className={"bg-[#2E8544] h-[110px] w-[197px] rounded-xl p-[15px] " + props.extraStyle}>
            <h1 className="text-white text-[16px] font-medium tracking-[0.16px] capitalize mb-[9px]">New Patients</h1>
            <div className={"flex gap-[40px] relative "+ (up ? "items-end" : "flex-row items-baseline")}>
                <h1 className="text-white text-[32px] font-medium items-center">1337</h1>
                {up && <div className="bg-[#FFF] text-[17px] h-[31px] w-[82px] flex flex-row gap-[3px] text-[#008000] rounded-xl absolute right-0 mr-[-20px] bottom-[20%] items-center justify-center"> 51%
                <img className="w-[21px] h-[13px]" src="/images/up.svg" alt="up" /> </div>}
                {!up && <div  className="bg-[#FBC3C3] text-[12px] font-normal text-[#D30404] h-[22px] w-[59px] flex flex-row gap-[3px] rounded-md items-center justify-center"> 20%
                <img className="h-[15px] w-auto transform rotate-68.156" src="/images/down.svg" alt="down" /> </div>}
            </div>
        </div>
    );

}

export default StatistiqueCard;