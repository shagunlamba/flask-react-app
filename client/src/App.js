import React, {useState, useEffect} from 'react';

function App() {

  const [value, setValue] = useState('');

  useEffect(()=>{
    fetch('/dummyapi').then((res)=>res.json()).then((data)=>{
      setValue(data.name)
    })
  },[])

  return (
    <div>
        <h1>The data fetched is {value}</h1>
    </div>
  );
}

export default App;
