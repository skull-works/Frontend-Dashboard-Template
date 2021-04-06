import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
 
// Pages
import Home from '../pages/home/home';
import Graph from '../pages/graphs/graphs';

const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/graphs'>
                    <Graph />
                </Route>
                <Route exact path='/inventory'>
                    inventory
                </Route>
            </Switch>
        </>
     );
}
 
export default Routes;