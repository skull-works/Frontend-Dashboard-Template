import React from "react";

import { 
    Flex, 
    Heading, 
    Table, 
    Tbody, 
    Td, 
    Th, 
    Thead, 
    Tr,
} from "@chakra-ui/react";

import { StandardUseColor } from  '../../../../../../theme/use-color.theme';
import { IDelivery } from '../../types/delivery.types';
import deliveryDetailsStore, { IDeliveryDetailsStore } from "../../store/deliveryDetails.store";

const Item: React.FC<{ incomingValue: any, isMoney?: boolean }> = ({ incomingValue, isMoney }) => {
    const value = incomingValue ? incomingValue : 'N/A';
    const displayValue = isMoney ? (value === 'N/A' ? value : `₱${value}`) : value;
    
    return (
        <Td fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]}>{ displayValue }</Td>
    )  
}

export interface Section3Props {
    deliveryDetails: IDelivery;
}
 
const Section3: React.FC<Section3Props> = ({ deliveryDetails }) => {

    const { tableHeaderColor } = StandardUseColor();

    let paidDifference: number | null = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.paidDifference);
    let paymentStatus: string = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.paymentStatus);

    return ( 
        <Flex direction="column" w={["94%","100%"]} overflowX="auto">
            <Heading position="sticky" left={0} top={0} fontSize={["25px","25px","25px","35px"]} fontFamily="Abel">Payment Details:</Heading>
            <Table mt="10px" w={["100%","100%","100%"]} variant="unstyled" size="md">
                <Thead>
                    <Tr bg={tableHeaderColor}>
                        <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Payment Status</Th>
                        <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Amount Paid</Th>
                        <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Check Number</Th>
                        <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Check Date</Th>
                        <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Difference</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Item incomingValue={paymentStatus} />
                        <Item incomingValue={deliveryDetails.amountPaid} isMoney={true} />
                        <Item incomingValue={deliveryDetails.checkNumber} />
                        <Item incomingValue={deliveryDetails.checkDate} />
                        <Item incomingValue={paidDifference} />
                    </Tr>
                </Tbody>
            </Table>
        </Flex>
     );
}
 
export default Section3;