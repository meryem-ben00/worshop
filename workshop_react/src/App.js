
import React from 'react';

import List from './Soufiane/List';
const data = [
  {
    name:"Brooklyn Simmons",
    id:87364523,
    email:"brooklyns@mail.com",
    phoneNumber:"(603) 555-0123",
    dateAdded:"21/12/2022",
    status :"approved"
  },
  {
    name:"Kristin Watson",
    id:93874563,
    email:"kristinw@mail.com",
    phoneNumber:"(219) 555-0114",
    dateAdded:"21/12/2022",
    status :"declined"
  },
  {
    name:"Jacob Jones",
    id:23847569,
    email:"jacbj@mail.com",
    phoneNumber:"(319) 555-0115",
    dateAdded:"21/12/2022",
    status :"declined"
  },
  {
    name:"Cody Fisher",
    id:39485632,
    email:"codyf@mail.com",
    phoneNumber:"(229) 555-0109",
    dateAdded:"21/12/2022",
    status :"declined"
  },
  {
    name:"Brooklyn Simmons",
    id:87364523,
    email:"brooklyns@mail.com",
    phoneNumber:"(229) 555-0109",
    dateAdded:"21/12/2022",
    status :"declined"
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
