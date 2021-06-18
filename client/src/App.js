import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './pages/HomePage/Home';

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


// const App = () => {

//   const [isAuth, setAuth] = useState(localStorage.getItem('user-info'));

//   return (
//     <>
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/login" exact>
//           <Login setAuth={setAuth} />
//       </Route>
//       <Route path="/register" exact component={Register} />
//       {
//         isAuth ?
//         <Route path="/profile/:username" exact component={Home} /> :
//         <Redirect to="/" />
//       }
//     </Switch>
//     </>
//   );
// }

export default App;
