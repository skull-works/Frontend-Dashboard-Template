import React from 'react';

import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";

import { IDelivery } from '../../types/delivery.types';

const Item: React.FC<{ label: string, value: string | number }> = ({ label, value }) => {
    return (
        <ListItem>{label}:  { label === 'Amount' ? `₱${value}`: value}</ListItem>
    )  
}

export interface Section1Props {
    deliveryDetails: IDelivery
}
 
const Section1: React.FC<Section1Props> = ({ deliveryDetails }) => {

    return ( 
        <Flex w={["94%","100%"]} mt="30px">
            <UnorderedList ml="0" listStyleType="none" fontFamily="Abel" fontSize="25px">
                <Item label='Store' value={deliveryDetails.store} />
                <Item label='Posting Date' value={deliveryDetails.postingDate} />
                <Item label='Delivery Number' value={deliveryDetails.deliveryNumber} />
                <Item label='Amount' value={deliveryDetails.amount} />
            </UnorderedList>
        </Flex>
     );
}
 
export default Section1;