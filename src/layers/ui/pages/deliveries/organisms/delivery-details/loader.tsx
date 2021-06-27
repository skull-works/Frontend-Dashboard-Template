import React from 'react';
import { VStack, Heading, Skeleton } from '@chakra-ui/react';

import CommonPagelayout from '../../../../layout/common/common.layout';
 
const Loader = () => {
    const n: string[] = [];
    for (let i = 0 ; i < 15 ; i++) 
        n.push(`${i}`);

    return ( 
        <CommonPagelayout>
            {{
                leftHeader: (
                    <Heading fontFamily="Abel">Delivery Details</Heading>
                ),
                content: (
                    <VStack mt="30px">
                        <Heading fontFamily="Abel"> Loading Delivery Details ... </Heading>
                        {n.map((i) => <Skeleton key={i} h="20px" w="100%" mt="100px"/>)}
                    </VStack>
                )
            }}
        </CommonPagelayout>
     );
}
 
export default Loader;