import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { Navbar } from '../components/ui/Navbar'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <Fragment>
        <Navbar />
        <div className="container-fluid mt-2">
          <Switch>
            <Route exact path="/marvel" component= { MarvelScreen } />
            <Route exact path="/hero/:heroeId" component= { HeroScreen } />
            <Route exact path="/dc" component= { DcScreen } />
            <Route exact path="/search" component= { SearchScreen } />
            <Redirect to="/marvel" />
          </Switch>
        </div>
    </Fragment>
  )
}
