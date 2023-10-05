import Card from "../Components/Card/card";


const DailyRead = () => {


    const obj = {
        title: "Equitable medical education with efforts toward real change",
        image: "https://s3-alpha-sig.figma.com/img/531a/9890/a76054c6b1759f73ea24a875bcece04f?Expires=1697414400&Signature=OoTKNIjpyz91hevaj~UFW~dVcW-~uEOTPikKiGy6etsgLygx5XMpWKEu-PG7DLCJPoQWpE~R9A94cZt8XV2h3n49yVQ6tBTLs7cY14DJ70IWnQW8mrYt2fn6S-PU0F~nIYRb5tAovQmO7tCx5XaeOZodhvF0g9o0QRDhS6MVoIrxJkQTgBlYJ5jxf8QVHHpzROn98EEV9Gk7QNSgnICzmfTekKSrVwECJKlfEv7uwN9uzaJJniqYNj31AdUd7x-RnoVOBEv~rAQoElAauULA57dx49D7Z-ol0ivZ~~m6Y5Ofc6bHWh4ni62TRLw8t5XnpNpHvlkWUseu0Ug37SGpbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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