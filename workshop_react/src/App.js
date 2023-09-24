
import React from 'react';
import Girl from './Soufiane/Images/Girl.png';
import Boy from './Soufiane/Images/Avatar (2).png';
import Boy2 from './Soufiane/Images/Boy2.png';
import Girl2 from './Soufiane/Images/Girl2.png';

import List from './Soufiane/List';
const data = [
  {
    name:"Brooklyn Simmons",
    id:87364523,
    email:"brooklyns@mail.com",
    phoneNumber:"(603) 555-0123",
    dateAdded:"21/12/2022",
    timing:"10:40 PM",
    status :"approved",
    image :Boy,
  },
  {
    name:"Kristin Watson",
    id:93874563,
    email:"kristinw@mail.com",
    phoneNumber:"(219) 555-0114",
    dateAdded:"21/12/2022",
    timing:"05:20 PM",
    status :"declined",
    image :Girl,
  },
  {
    name:"Jacob Jones",
    id:23847569,
    email:"jacbj@mail.com",
    phoneNumber:"(319) 555-0115",
    dateAdded:"21/12/2022",
    timing:"10:40 PM",
    status :"declined",
    image :Boy2,
  },
  {
    name:"Cody Fisher",
    id:39485632,
    email:"codyf@mail.com",
    phoneNumber:"(229) 555-0109",
    dateAdded:"21/12/2022",
    timing:"03:00 PM",
    status :"declined",
    image :Girl2,
  },
  {
    name:"Brooklyn Simmons",
    id:87364523,
    email:"brooklyns@mail.com",
    phoneNumber:"(229) 555-0109",
    dateAdded:"21/12/2022",
    timing:"10:40 PM",
    status :"declined",
    image :Boy,
  },
  {
    name:"Kristin Watson",
    id:93874563,
    email:"kristinw@mail.com",
    phoneNumber:"(219) 555-0114",
    dateAdded:"21/12/2022",
    timing:"05:20 PM",
    status :"declined",
    image :Girl,
  },
  {
    name:"Jacob Jones",
    id:23847569,
    email:"jacbj@mail.com",
    phoneNumber:"(319) 555-0115",
    dateAdded:"21/12/2022",
    timing:"10:40 PM",
    status :"declined",
    image :Boy2,
  },

]
function App() {
  return (
    <div>
      <List data={data} />
    </div>
  )
}

export default App;
