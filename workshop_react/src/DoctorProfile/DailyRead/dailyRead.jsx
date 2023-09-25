import Card from "../Components/Card/card";


const DailyRead = () => {


    const obj = {
                    title: "Equitable medical education with efforts toward real change",
                    image: "https://s3-alpha-sig.figma.com/img/531a/9890/a76054c6b1759f73ea24a875bcece04f?Expires=1696204800&Signature=eDmVo78oALuq1JLl5LLSYhp4nFXNHKn5L4I5QWofwoKhLhP9HyDm7zsUUH37sqhSogitls0v00Voqmh70rz7SR6l1cmrOHz7c~BEogsSlbCx7rZTP80zboel~72KJNM50sNN6FZiVnxx6CYc5MrrDKpbUV-VacwbLVQN3aznB1xoMuqV24RWgDZ3o3o0VQuysfOARr4bM4HlKQbYr8Mfzq5XDvbEYMlq3reblmUsfc12bddjj9g0~avud7hjbee-08xFoQbv7dzhjf0KPGX0-1sDLuEafy-~WhZYSeAoYvSY99i1le~C-bRm4mVcX1a7oNk9QDYOy9nNqOQp9zYrZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
                };
    return (
        <Card colSpanStyle="h-[309px] p-[14px] w-[373px]">
            <h1 className="flex items-center gap-[3px] uppercase text-[12px] font-normal text-opacity-40">
                <span className="w-[7px] h-[7px] rounded-full bg-[#BFEBBF] items-center"></span>
            Daily Read
            </h1>
            <h2 className="font-semibold leading-normal text-[16px] mt-[3px] cursor-pointer">
            {obj.title}
            </h2>
            <img className="h-[196px] w-[344px] rounded-md mt-[17px]" src={obj.image} alt="" />

        </Card>
    );
}

export default DailyRead;