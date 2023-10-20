import { useState } from "react";
import Card from "../Components/Card/card"
import Title from "../Components/Title/title"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
  const customCalendar = {
    root: { margin: 0, maxWidth: "100%", width: "100%", fontFamily: "poppins", },
    caption: { borderBottom: '1px solid rgba(0, 0, 0, 0.3)', maxWidth: "100%", width: "100%", marginBottom: "24px", paddingBottom: "8px" },
    caption_label: { textAlign: "center", fontWeight: 400, lineHeight: "normal", fontSize: "12px", fontFamily: 'poppins', fontStyle: "normal" },
    nav_button_next: { width: "18px", height: "18px", opacity: "60%" },
    nav_button_previous: { width: "18px", height: "18px", opacity: "60%" },
    table: { maxWidth: "100%", width: "100%", margin: 0 },
    month: { maxWidth: "100%", width: "100%", margin: 0 },
    head: { marginTop: "15px" },
    head_cell: { color: "#2B2B36", textAlign: "center", fontWeight: 400, fontStyle: "normal" },
    nav: { display: 'flex', gap: '10px' },
  };
  const handleDayClick = (date) => {
    console.log(date);
    setSelectedDate(new Date(date));
  };
  const bookedDays = [new Date(2023, 8, 25), new Date(2023, 8, 26)];
  const [selectedDate, setSelectedDate] = useState(null);


  const CustomDayCell = ({ date, displayMonth, selected }) => {
    const isReserved = bookedDays.some((bookedDays) =>
      isSameDay(date, bookedDays)
    );

    return (
      <div
        className="flex flex-col justify-center content-centent items-center"
        onClick={() => handleDayClick(date)}
      >
        <span className="rdp-button_reset rdp-button rdp-day" style={{ fontWeight: 400, fontSize: "13px", width: "23px", height: "23px", textTransform: 'uppercase' }}> {date.getDate()} </span>
        {isReserved && <span className="w-[8px] h-[8px] bg-[#FF0000] rounded-full"></span>}
        {!isReserved && <span className="w-[8px] h-[8px] bg-inherit rounded-full"></span>}
      </div>
    );
  };

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
  return (
    <Card extraStyle="w-[372px] h-[467px] p-[13px]">
      <div className="grid grid-cols-6 mb-[20px]">
        <Title titleSizing="text-[18px]" givingExtraSpace="col-end-0 col-span-4 font-medium">Calendar</Title>
        <div className="col-start-7 col-end-7 opacity-60 text-sm flex justify-center" >
          <p className="rotate-90 text-[24px] font-light">{'>'}</p>
        </div>
      </div>
      <div className="w-full">
        <DayPicker
          components={{ Day: CustomDayCell }}
          styles={customCalendar}
          selected={selectedDate}
        />
        <div>
          <div className="grid grid-cols-6 mt-[5px] mb-[13px]">
            <Title givingExtraSpace="col-end-0 col-span-4">Upcoming</Title>
            <div className="col-start-7 col-end-7 text-sm flex justify-center" >
              <p className=" text-[#1A71FF] underline cursor-pointer">View All</p>
            </div>
          </div>
          <div className="flex flex-row gap-[19px] items-center bg-[#F0F9FD] p-[7.5px] pr-[12px] pl-[12px] rounded-md">
            <div className="inset-0 rounded-full h-[42px] w-[42px] flex justify-center items-center text-white font-bold " style={{ backgroundImage: "linear-gradient(66deg, #57B4DE -5.25%, #58B6DD 35.43%, #3B29AB 98.77%)" }}>M</div>
            <div>
              <div className="c-[#23262F] text-[15px] font-medium	mb-[1pxs]">Montly doctor’s meet</div>
              <div className="text-[13px]" style={{ color: "rgba(13, 13, 13, 0.60)", }}>8 April, 2021   |   04:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Calendar;