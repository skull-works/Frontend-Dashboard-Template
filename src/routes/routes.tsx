import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
 
const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path='/'>
                    Home
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