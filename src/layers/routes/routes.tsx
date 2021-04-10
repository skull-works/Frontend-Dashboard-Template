import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
 
// Pages
import InProgressRender from '../pages/sublayers/inprogress/inprogress.view';
import Home from '../pages/sublayers/home/home.view';
import Graph from '../pages/sublayers/graphs/view/graph.view';

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