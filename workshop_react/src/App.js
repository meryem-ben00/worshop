
import React from 'react';

import List from './Soufiane/List';
const data = [
  {
    name:"Brooklyn Simmons",
    id:64974,
    email:"soufine@gmail.com",
    phoneNumber:"(212)6879521",
    dateAdded:"21/12/2022",
  },
  {
    name:"Brooklyn Simmons",
    id:64974,
    email:"soufine@gmail.com",
    phoneNumber:"(212)6879521",
    dateAdded:"21/12/2022",
  },
  {
    name:"Brooklyn Simmons",
    id:64974,
    email:"soufine@gmail.com",
    phoneNumber:"(212)6879521",
    dateAdded:"21/12/2022",
  },
  {
    name:"Brooklyn Simmons",
    id:64974,
    email:"soufine@gmail.com",
    phoneNumber:"(212)6879521",
    dateAdded:"21/12/2022",
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
