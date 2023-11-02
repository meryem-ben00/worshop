export function getTheDivStyle(index, selected) {
    return selected === index + 1
        ? "bg-[#1E2E5C]  evnavsm:w-full  h-full justify-center"
        : selected === index - 1
            ? "bg-[#1E2E5C] evnavsm:w-full h-full justify-center"
            : selected !== index
                ? "bg-[#2E8544] evnavsm:w-full h-full justify-center"
                : "bg-[#2E8544] evnavsm:w-full h-full";
}

export function getThePtagStyle(index, selected) {
    return selected === index + 1
        ? "rounded-br-lg evnavsm:rounded-none bg-[#2E8544] h-full w-full justify-center flex evnavsm:p-[10px] p-[20px] items-center"
        : selected === index - 1
            ? "rounded-bl-lg evnavsm:rounded-none bg-[#2E8544] h-full w-full justify-center flex evnavsm:p-[10px] p-[20px] items-center"
            : selected !== index
                ? "h-full w-full bg-[#2E8544] justify-center flex evnavsm:p-[10px] p-[20px] items-center"
                : "rounded-tl-lg rounded-tr-lg  evnavsm:rounded-none h-full w-full bg-[#1E2E5C] justify-center flex evnavsm:p-[10px] p-[20px] pr-[40px] pl-[40px] items-center";
}

export function getIndex(index, setSelect) {
    setSelect(index);
}