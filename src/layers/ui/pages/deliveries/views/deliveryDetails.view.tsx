import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { 
    VStack, 
    Heading,
    ButtonGroup,
} from '@chakra-ui/react';

import CommonPagelayout from '../../../layout/common/common.layout';
import deliveryDetailsStore, { IDeliveryDetailsStore } from '../store/deliveryDetails.store';
import FallbackView from '../organisms/delivery-details/fallback';
import Menu from '../organisms/delivery-details/menu';
import Loader from '../organisms/delivery-details/loader';
import Section1 from '../organisms/delivery-details/section1';
import Section2 from '../organisms/delivery-details/section2';
import Section3 from '../organisms/delivery-details/section3';
import DeliveryNumberOrders from '../organisms/delivery-details/deliveryNumberOrders';
import ReturnSlip from '../organisms/delivery-details/returnSlip';
import UpdateDelivery from '../organisms/delivery-details/updateDelivery';
 
const DeliveryDetails = () => {
    const useQuery = () => new URLSearchParams(useLocation().search);
    let deliveryId = useQuery().get('deliveryId');

    const [isLoading, setIsLoading] = useState(false);

    const isEdit = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.isEdit);
    const deliveryDetails = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.deliveryDetails);
    const ordersFromRS = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.ordersFromRS);
    const fetchDeliveryDetails = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.fetchDeliveryDetails);
    const resetStates = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.resetStates);

    useEffect(() => {
        const fetchDeliveryDetailsAsync = async () => {
            if (deliveryId){
                setIsLoading(true);
                await fetchDeliveryDetails({ deliveryId });
                setIsLoading(false);
            }
        }

        fetchDeliveryDetailsAsync();

        return (() => {
            setIsLoading(false);
            resetStates();
        });
    }, [deliveryId, fetchDeliveryDetails, resetStates])

    if (isLoading) 
        return (<Loader />);

    if (!deliveryDetails)
        return (<FallbackView />)

    return ( 
        <CommonPagelayout>
            {{
                leftHeader: (
                    <Heading fontFamily="Abel" >Delivery Details</Heading>
                ),
                rightheader: (
                    <ButtonGroup variant="outline" spacing='6' mt={['20','16']}>
                            <Menu />
                    </ButtonGroup>
                ),
                content:  isEdit ? 
                        <UpdateDelivery deliveryDetails={deliveryDetails} />
                        :
                        <VStack spacing={10}>
                            <Section1 deliveryDetails={deliveryDetails} />
                            <Section2 deliveryDetails={deliveryDetails} />
                            <Section3 deliveryDetails={deliveryDetails} />
                            <DeliveryNumberOrders orders={deliveryDetails.deliveryNumberOrders} />
                            <ReturnSlip orders={ordersFromRS}/>
                        </VStack>
            }}
        </CommonPagelayout>
     );
}

const MemoDeliveryDetails = React.memo(DeliveryDetails);
export default MemoDeliveryDetails;