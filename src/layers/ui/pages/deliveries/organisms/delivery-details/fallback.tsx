import React from 'react';
import { VStack, Heading, Button } from '@chakra-ui/react';

import { NavLink, BackArrowIcon } from '../../../../components/customChakra.comp';
import CommonPagelayout from '../../../../layout/common/common.layout';
 
const FallbackView= () => {
    return ( 
        <CommonPagelayout>
                {{
                    leftHeader: (
                        <Heading fontFamily="Abel" >Delivery Details</Heading>
                    ),
                    content: (
                        <VStack spacing={10}>
                            <Heading fontFamily="Abel" textAlign="center" mt="25vh">No Delivery Details for this records</Heading>
                            <NavLink to="/Delivery">
                                <Button colorScheme="teal"> <BackArrowIcon mr="10px" /> Back to Previous Page</Button>
                            </NavLink>
                        </VStack>
                    )
                }}
            </CommonPagelayout>
     );
}
 
export default FallbackView;