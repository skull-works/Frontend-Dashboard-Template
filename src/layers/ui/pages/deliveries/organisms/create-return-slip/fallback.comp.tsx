import React from 'react';
import { VStack, Heading, Button } from '@chakra-ui/react';

import { NavLink, BackArrowIcon } from '../../../../components/customChakra.comp';
import CommonPagelayout from '../../../../layout/common/common.layout';
 
const FallbackView = () => {
    return ( 
        <CommonPagelayout>
                {{
                    leftHeader: (
                        <Heading fontFamily="Abel" >Create Return Slip</Heading>
                    ),
                    content: (
                        <VStack spacing={10}>
                            <Heading fontFamily="Abel" textAlign="center" mt="25vh">Cannot create return slip to unkown delivery</Heading>
                            <NavLink to="/Delivery">
                                <Button colorScheme="teal"> <BackArrowIcon mr="10px" /> Back to List Deliveries</Button>
                            </NavLink>
                        </VStack>
                    )
                }}
            </CommonPagelayout>
     );
}
 
export default FallbackView;