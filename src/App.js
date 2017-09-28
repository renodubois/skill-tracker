import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Leaderboard from './Leaderboard'
import Sidebar from './Sidebar'
import './App.css'

export default class App extends Component {
  render () {
    // TODO: Find a better solution to handle this
    const pageTitles = [
      'Home',
      'Leaderboard'
    ]

    return (
      <div>
        <Sidebar pageTitles={pageTitles} />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Leaderboard' component={Leaderboard} />
          </Switch>
        </main>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' />
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossOrigin='anonymous' />
      </div>
    )
  }
}
