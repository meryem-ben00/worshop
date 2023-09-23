import React from 'react';
import Comp1 from './Comp/Comp1';
import Comp2 from './Comp/Comp2';
import Comp3 from './Comp/Comp3';

const List = ({data = []}) => {
  return (
    <div className='container mx-auto  my-28'>
      <Comp1/>
      <Comp2 data ={data} />
      <Comp3/>
    </div>
  );
}

export default List;
