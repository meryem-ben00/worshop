// import { useState } from "react";
// import { useState } from "react";
import Card from "../Components/Card/card"
import Title from "../Components/Title/title"
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Calendar = () => 
{
    const customCalendar = {root: {margin: 0,  maxWidth: "100%", width: "100%", fontFamily: "poppins", },
                                caption: { borderBottom: '1px solid rgba(0, 0, 0, 0.3)', maxWidth: "100%", width: "100%", marginBottom: "24px", paddingBottom: "8px"},
                                caption_label: {textAlign: "center", fontWeight: 400, lineHeight: "normal", fontSize: "12px" ,fontFamily: 'poppins', fontStyle: "normal"},
                                nav_button_next: {width: "18px", height: "18px", opacity: "60%"},
                                nav_button_previous: {width: "18px", height: "18px", opacity: "60%"},
                                table: {maxWidth: "100%", width: "100%", margin: 0},
                                month: {maxWidth: "100%", width: "100%", margin: 0},
                                head: {marginTop: "15px"},
                                head_cell: {color: "#2B2B36", textAlign: "center", fontWeight: 400, fontStyle: "normal"},
                                nav: {display: 'flex', gap: '10px'}
                            };
    const bookedDays = [new Date(2023, 9 - 1, 25), new Date(2023, 9 - 1, 26)];
    
    // const [booked, setBooked] = useState(false);
    
    const handleDayClick = (day, modifiers) => {
        // setBooked(day && modifiers.booked);
    };
    
    function CustomCaption(props) {
        console.log(props)

        return (
          <h2>
            {props}
          </h2>
        );
      }
    // const bookedStyle = { border: '2px solid currentColor' };
    return (
        <Card extraStyle="w-[372px]">
            <div className="grid grid-cols-6 mb-[20px]">
                <Title givingExtraSpace="col-end-0 col-span-4">Calendar</Title>
                <div className="col-start-7 col-end-7 opacity-60 text-sm flex justify-center" >
                    <p className="rotate-90 text-[24px] font-light">{'>'}</p>
                </div>
            </div>
            <div className="w-full">
                <DayPicker 
                // components={{Day: CustomCaption}}
                styles={customCalendar}
                modifiers={{booked: bookedDays}}
                modifiersStyles={{ booked: {content: "·", display: "block", textAlign: "center", marginTop: "5px", border: '2px solid red'}, }}
                onDayClick={handleDayClick}
                />
            </div>
        </Card>
    );
}

export default Calendar;