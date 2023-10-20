import Comp1 from "../Components/1-Comp1";
import Doctors from "../Components/2-Doctors";
import Pagination from "../Components/3-Pagination";

const List = ({ data = [] }) => {
  return (
    <div className="w-[100%] flex">
      <div className="font-Poppins w-[100%] self-start">
        <Comp1 children={"Doctors"} />
        <Doctors data={data} />
        <Pagination />
      </div>
    </div>
  );
};

export default List;
