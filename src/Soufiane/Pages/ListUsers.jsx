import Comp1 from '../Components/1-Comp1';
import Doctors from '../Components/2-Doctors';
import Pagination from '../Components/3-Pagination';

const ListUsers = ({data = []}) => {
  return (
    <div className='container mx-auto  mt-2 '>
      <Comp1 children={"Users"}/>
      <Doctors data ={data} isUser />
      <Pagination/>
    </div>
  );
}

export default ListUsers;
