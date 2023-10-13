import Comp1 from '../Components/1-Comp1';
import Doctors from '../Components/2-Doctors';
import Pagination from '../Components/3-Pagination';

const List = ({data = []}) => {
  return (
    <div className='container mx-auto font-Poppins '>
      <Comp1 children={"Doctors"}/>
      <Doctors data ={data} />
      <Pagination/>
    </div>
  );
}

export default List;
