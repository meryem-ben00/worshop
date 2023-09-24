import Comp1 from './Comp/Comp1';
import Doctors from './Comp/Doctors';
import Pagination from './Comp/Pagination';

const ListUsers = ({data = []}) => {
  return (
    <div className='container mx-auto  mt-20 '>
      <Comp1/>
      <Doctors data ={data} isUser  />
      <Pagination/>
    </div>
  );
}

export default ListUsers;
