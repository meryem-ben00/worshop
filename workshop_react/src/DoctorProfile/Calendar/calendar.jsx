import { useState } from "react";
import Card from "../Components/Card/card"
import Title from "../Components/Title/title"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Calendar = () => 
{

    // 
    // const disabledDays = [
    //     new Date(2023, 9, 24),
    //     new Date(2023, 9, 27),
    //     new Date(2023, 9, 22),
    //     { from: new Date(2023, 9, 1), to: new Date(2023, 10, 1) }
    //   ];
    // //
    // const [selected, setSelected] = useState(0);
    // const bookedStyle = { border: '2px solid red' };
    return (
        <Card>
            <div className="grid grid-cols-6 mb-[5px]">
                <Title givingExtraSpace="col-end-0 col-span-4">Calendar</Title>
                <div className="col-start-7 col-end-7 opacity-60 text-sm flex justify-center" >
                    <p className="rotate-90 text-[24px] font-light">{'>'}</p>
                </div>
            </div>
            <div>
                {/* 
                color: #000;
text-align: center;
font-family: Poppins;
font-size: 11.067px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.111px;
text-transform: capitalize;
                */}
                <DayPicker 
                styles={{
                        caption: { borderBottom: '1px solid rgba(0, 0, 0, 0.4)' },
                        caption_label: {textAlign: "center", fontWeight: 400, lineHeight: "normal", fontSize: "12px" ,fontFamily: 'poppins'},
                        nav_button_next: {width: "16px", height: "16px"},
                        nav_button_previous: {width: "16px", height: "16px"},
                        root: {width: "inherit", }
                        // nav: {display: "flex", flex: "s"}
                    }}                
                // modifiers={{booked: disabledDays}}
                // modifiersStyles={{ booked: bookedStyle }}
                // selected={selected}
                // onSelect={setSelected}
                />
                {/* {selected && <p>You picked this date {format(selected, 'PP')}</p>} */}
            </div>
        </Card>
    );
}

export default Calendar;