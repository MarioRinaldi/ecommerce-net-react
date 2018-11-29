import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage'
import Page404 from './pages/Page404'

class PrivateRoute extends Component {
    render() {
        const component = this.props.component
        if (localStorage.getItem('TOKEN')) {
            return (
                <Route component={component} />
            )
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
}


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <PrivateRoute path="/checkout" component={FormPage} />
                <Route component={Page404} />
            </Switch>
        )
    }
}
