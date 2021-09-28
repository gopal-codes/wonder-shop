import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbarcomponent from './component/Navbarcomponent'
import Brands from './component/Brands';
import Home from './component/Home';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Search from './component/Search';
import Profile from './component/Profile';


function App() {
  return (
    <div>
       <Router>
      <Navbarcomponent/>

      <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/brands">
                    <Brands />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>

            </Router>

    </div>
  )
}

export default App
