import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Leaderboard from './Leaderboard'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Leaderboard} />
          </Switch>
        </main>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' />
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous' />
      </div>
    )
  }
}

export default App
