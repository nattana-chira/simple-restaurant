import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../views/Home'
import RestaurantDetail from '../views/RestaurantDetail'

export default function index() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/page/:page">
                <Home />
            </Route>
            <Route exact path="/restaurant/:id">
                <RestaurantDetail />
            </Route>
        </Switch>
    )
}
