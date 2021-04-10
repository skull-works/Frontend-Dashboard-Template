import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
 
// Pages
import InProgressRender from '../views/pages/inprogress/index';
import Home from '../views/pages/home/home';
import Graph from '../views/pages/graphs/graphs';

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
                    <InProgressRender />
                </Route>
            </Switch>
        </>
     );
}
 
export default Routes;