import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Feed from "./pages/Feed";
import Showroom from "./pages/Showroom"


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed}/>
            <Route path="/showroom" component={Showroom}/>          
        </Switch>
    )
}

export default Routes;