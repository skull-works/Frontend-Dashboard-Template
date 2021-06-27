import * as React from 'react';

import { 
    Flex, 
    VStack, 
    Heading, 
    Table, 
    Thead, 
    Tr, 
    Th, 
    Tbody, 
    Td, 
    useColorModeValue, 
    Box,
} from '@chakra-ui/react';

import { IDelivery } from '../../types/delivery.types';
import deliveryDetailsStore, { IDeliveryDetailsStore } from '../../store/deliveryDetails.store';

const Item: React.FC<{ value: any }> = ({ value }) => {
    return (
        <Td fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]}> { value  ? `₱${value}` : 'N/A' }</Td>
    )  
}

export interface Section2Props {
    deliveryDetails: IDelivery;
}
 
const Section2: React.FC<Section2Props> = ({ deliveryDetails }) => {
    const tableHeaderColor = useColorModeValue("gray.400", "gray.600");

    const totalAmountDue = deliveryDetailsStore((state: IDeliveryDetailsStore) => state.totalAmountDue);

    return ( 
        <Flex direction={["column","column","row","row"]} w={["94%","100%"]}>
            <VStack w={["100%","100%","70%","60%"]} alignItems="flex-start">
                <Heading fontSize={["25px","25px","25px","35px"]} fontFamily="Abel">Deductions:</Heading>
                <Table mt="10px" w={["100%","100%","90%"]} variant="unstyled" size="md">
                    <Thead>
                        <Tr bg={tableHeaderColor}>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >BO</Th>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >WHT</Th>
                            <Th fontFamily="Abel" fontSize={["7pox","15px","15px","1.4vw"]} >Other Deductions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Item value={deliveryDetails.badOrder} />
                            <Item value={deliveryDetails.widthHoldingTax} />
                            <Item value={deliveryDetails.otherDeductions} />
                        </Tr>
                    </Tbody>
                </Table>
            </VStack>
            <VStack mt={["15px","15px", 0]} w={["98%","50%","30%","40%"]} alignItems="flex-start">
                <Heading fontSize={["25px","25px","25px","35px"]} fontFamily="Abel">Total Amount Due:</Heading>
                <Box maxH="120px" h="100%" w={["100%","100%","100%","300px"]} border="2px" borderColor="teal.800">
                    <Heading size="xl" fontFamily="Abel" pt="40px" pb="25px" textAlign="center">{ totalAmountDue === 0 ? 'N/A' : `₱ ${totalAmountDue}` }</Heading>
                </Box>
            </VStack>
        </Flex>
     );
}

export default Section2;