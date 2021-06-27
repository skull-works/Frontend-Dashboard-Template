import React, { Fragment } from 'react';

import {
    Flex,
    Divider,
    Heading,
    Table, 
    Tbody, 
    Td, 
    Th, 
    Thead, 
    Tr,
} from '@chakra-ui/react';

import { StandardUseColor } from  '../../../../../../theme/use-color.theme';
import { IDeliveryOrderReturnSlip } from '../../types/delivery.types';

export interface ReturnSlipProps {
    orders: IDeliveryOrderReturnSlip[];
}
 
const ReturnSlip: React.FC<ReturnSlipProps> = ({ orders }) => {
    const { tableHeaderColor, dividerColor } = StandardUseColor();
    let orderId = 0;
    let totalAmountFromReturnSlip = 0;

    return ( 
        <Fragment>
            <Flex flexDirection="row" w={["92%","100%","100%","100%"]} justifyContent="space-around">
                <Divider borderColor={dividerColor} orientation="horizontal" pt='60px'  w={["0%","0%","0%","40%"]}/>
                <Heading fontFamily="Abel" pt={['5px','10px','40px','40px']}> Return Slip </Heading>
                <Divider borderColor={dividerColor} orientation="horizontal" pt={['25px','35px','60px','60px']}  w={["55%","65%","75%","40%"]}/>
            </Flex>
            { orders.length > 0 ?
                <Table mt="10px" w={["90%","100%","80%"]} variant="unstyled" size="md">
                    <Thead>
                        <Tr bg={tableHeaderColor}>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >QTY</Th>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >SIZE</Th>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >PRICE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            orders.map((order) => {
                                ++orderId;
                                totalAmountFromReturnSlip += order.price;
                            return (
                                <Tr key={orderId}>
                                    <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]}>{order.quantity}</Td>
                                    <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]}>{order.size}</Td>
                                    <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]}>₱ {order.price}</Td>
                                </Tr>
                            )
                            })
                        }
                        <Tr>
                            <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]}></Td>
                            <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]} bg={tableHeaderColor} textAlign="center">TOTAL</Td>
                            <Td fontFamily="Abel" fontSize={["13px","13px","15px","1.4vw"]}>₱ { totalAmountFromReturnSlip }</Td>
                        </Tr>
                    </Tbody>
                </Table> : <Heading fontFamily="Abel">N/A</Heading>
            }
            
            <Divider borderColor="gray.800" orientation="horizontal" pt='20px'  w="40%"/>
        </Fragment>
     );
}
 
export default ReturnSlip;