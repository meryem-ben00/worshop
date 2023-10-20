import PatientList from "./PatientList/patientList";
import Calendar from "./Calendar/calendar";
import Consultation from "./Consultation/consultation";
import DailyRead from "./DailyRead/dailyRead";
import StatistiqueCard from "./Components/StatistiqueCard/StatistiqueCard";

const Profile = () => {
  return (
    <div className="grid grid-cols-3 evmd:grid-cols-2 evsm:grid-cols-1 auto-cols-max gap-4 items-center justify-items-center">
      <div>
        <h1 className="capitalize text-white font-semibold text-[33px] mb-[27px]">
          <span className="text-[#2E8544]">Dr.</span>Brooklyn Simmons
        </h1>
        <h3 className="text-white font-medium text-[22px]">
          Visits for Today
        </h3>
        <h2 className="text-white font-medium text-[55px]">104</h2>
        <div className="flex flex-col flex-nowrap gap-[29px] justify-center">
          <div className="flex flex-nowrap gap-[7%] items-center">
            <StatistiqueCard extraStyle="grid-cols-0" />
            <StatistiqueCard extraStyle="grid-cols-1" />
          </div>
          <div className="flex flex-nowrap gap-[7%] items-center">
            <StatistiqueCard extraStyle="grid-cols-0" />
            <StatistiqueCard extraStyle="grid-cols-1" />
          </div>
        </div>
      </div>
      <PatientList />
      <Calendar />
      <Consultation />
      <DailyRead />
    </div>
  );
};

export default Profile;
