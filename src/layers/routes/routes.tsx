import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
 
// Pages
// import InProgressRender from '../pages/sublayers/inprogress/inprogress.view';
import Home from '../ui/pages/home/home.view';
import LoginForm from '../ui/pages/login/views/login.view';
import Graph from '../ui/pages/graphs/views/graph.view';

// Deliveries
import ListDeliveries from '../ui/pages/deliveries/views/listDeliveries.view';
import FormCreateDelivery from '../ui/pages/deliveries/views/createDelivery.view';
import DeliveryDetails from '../ui/pages/deliveries/views/deliveryDetails.view';
import CreateReturnSlip from '../ui/pages/deliveries/views/createReturnSlip.view';
import listDeliveriesStore, { IListDeliveriesStore } from '../ui/pages/deliveries/store/listDeliveries.store';


const Routes = () => {
    const resetListDeliveriesFilters = listDeliveriesStore((state: IListDeliveriesStore) => state.resetStates);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.split('/')[1] !== 'Delivery') 
            resetListDeliveriesFilters();
    }, [location.pathname, resetListDeliveriesFilters])

    return ( 
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={LoginForm} />
            <Route exact path='/Dashboard' component={Graph} />

            {/* Page Deliveries */}
            <Route exact path='/Delivery' component={ListDeliveries} /> 
            <Route exact path='/Delivery/create' component={FormCreateDelivery} /> 
            <Route exact path='/Delivery/Details' component={DeliveryDetails} />
            <Route exact path='/Delivery/ReturnSlip/create' component={CreateReturnSlip} /> 
        </Switch>
     );
}
 
export default Routes;