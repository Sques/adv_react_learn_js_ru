import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import Auth from './components/routes/auth'
import Admin from './components/routes/Admin'
import People from './components/routes/People'
import ProtectedRoute from './components/common/ProtectedRoute'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <ul>
                    <li><NavLink to={'/auth'} >Auth</NavLink></li>
                    <li><NavLink to={'/admin'} >Admin</NavLink></li>
                    <li><NavLink to={'/people'} >People</NavLink></li>
                </ul>
                <Route path='/auth' component={Auth}/>
                <ProtectedRoute path='/admin' component={Admin}/>
                <ProtectedRoute path='/people' component={People}/>
            </div>
        )
    }
}

export default App