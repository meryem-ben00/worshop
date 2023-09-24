import React from 'react';
import Comp1 from './Comp/Comp1';
import Doctors from './Comp/Doctors';
import Paiginatio from './Comp/Pagination';

const List = ({data = []}) => {
  return (
    <div className='container mx-auto  mt-20 '>
      <Comp1/>
      <Doctors data ={data} />
      <Paiginatio/>
    </div>
  );
}

export default List;
