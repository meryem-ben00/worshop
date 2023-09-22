

const AvatarUser = (props) => {

    let i;
    for (i = 0; i < props.name.length; i++){
        if (props.name[i] === ' ')
        break;
    }
    let Avtr = props.name[0];
    if (i < props.name.length)
        Avtr += props.name[i + 1];
    return (
        <div className={"col-end-0 grid rounded-full border-[1px] border-opacity-15 border-[" +props.backColor+ "] content-center justify-center h-[60px] w-[60px]"}>
            <div className="p-[30px]">
             <p className={"grid bg-[" +props.backColor+ "] bg-opacity-60 rounded-full h-[50px] w-[50px] justify-center content-center"}>{Avtr}</p>
            </div>
        </div>
    );
}

export default AvatarUser;