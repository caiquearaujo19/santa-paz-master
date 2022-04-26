import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import './App.scss'

import HomeScreen from './pages/home'
import MatchesScreen from './pages/matches'
import StatsScreen from './pages/stats'
import ReportScreen from './pages/report'
import MatchScreen from './pages/match'
import PlayerScreen from './pages/player'
import TopScorersScreen from './pages/top-scorers'
import TopAssistsScreen from './pages/top-assists'
import TopGoalkeepersScreen from './pages/top-goalkeepers'
import RegisterScreen from './pages/register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home"/>}
          />

          <Route
            path="/home"
            component={HomeScreen}
          />
          <Route
            path="/matches"
            component={MatchesScreen}
          />
          <Route
            path="/stats"
            component={StatsScreen}
          />
          <Route
            path="/report/:id"
            component={ReportScreen}
          />
          <Route
            path="/match/:id"
            component={MatchScreen}
          />
          <Route
            path="/player/:id"
            component={PlayerScreen}
          />
          <Route
            path="/top-scorers"
            component={TopScorersScreen}
          />
          <Route
            path="/top-assists"
            component={TopAssistsScreen}
          />
          <Route
            path="/goalkeepers"
            component={TopGoalkeepersScreen}
          />
          <Route
            path="/register"
            component={RegisterScreen}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
