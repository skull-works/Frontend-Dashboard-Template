import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
 
// Pages
import Home from '../pages/home/home';

const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/inventory'>
                    Inventory
                </Route>
                <Route exact path='/stocks'>
                    stocks
                </Route>
            </Switch>
        </>
     );
}
 
export default Routes;