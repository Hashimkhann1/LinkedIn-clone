import React , {useEffect} from 'react';
import './App.css';
import Header from './components/Headrer';
import { useSelector} from 'react-redux'
import {selectUser} from './features/Userslice'
import Login from './components/Login'
import {auth} from './server/firestore'
import {useDispatch} from 'react-redux'
import {login , logout} from './features/Userslice'
import Home from './pages/Home'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import Network from './pages/Network'
import Jobs from './pages/Jobs'
import Messaging from './pages/Messaging'
import Notification from './pages/Notifications'


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // user is login
        console.log(userAuth);
        dispatch(login({
          Email: userAuth.email,
			  	Fullname: userAuth.displayName,
			  	ProfileUrl: userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout())
      }
    });
  }, []);


  return (
    <Router>
    <>
    {!user ? <Login/>:
    <div className="App">
        <Header/>
        <div>
          <Route>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Network' component={Network}/>
              <Route path='/Jobs' component={Jobs}/>
              <Route path='/Messaging' component={Messaging}/>
              <Route path='/Notification' component={Notification}/>
            </Switch>
          </Route>
        </div>
      </div>
}
    </>
    </Router>

  );
}

export default App;

