import React, { Component } from 'react';
import Header from './Components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signin/Signup';
import Signin from './Signin/Signin';
import Learn from './Learn/Learn';
import History from './Learn/History';
import Teach from './Teach/Teach';
import Art from './Learn/Art'
import Design from './Learn/Design'
import Literature from './Learn/Literature'
import Math from './Learn/Math';
import Programming from './Learn/Programming';
import Speech from './Learn/Speech';
import Sports from './Learn/Sports';
import Profile from './Profile/Profile';
import EditProfile from './Profile/ProfileEdit';
import "./App.css";

class App extends Component {
    state = {
        value: 0
    };
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="main">
                <Header />
                <Switch>
                    <Route exact path ='/' component={Signin}/>
                    <Route path = '/Signup' component={Signup}/>
                    <Route exact path = '/Explore' component={Learn}/>
                    <Route path = '/Explore/History' component={History}/>
                    <Route path = '/Explore/Math' component={Math}/>
                    <Route path = '/Explore/Programming' component={Programming}/>
                    <Route path = '/Explore/Speech' component={Speech}/>
                    <Route path= '/Explore/Art' component={Art} />
                    <Route path= '/Explore/Literature' component={Literature} />
                    <Route path= '/Explore/Design' component={Design} />
                    <Route path= '/Explore/Sports' component={Sports} />
                    <Route path = '/Profile' component={Profile}/>
                    <Route path='/Courses' component={Teach} />
                    <Route path= '/EditProfile' component={EditProfile} />
                </Switch>
            </div>
            </BrowserRouter>

        )
    }
}

export default App