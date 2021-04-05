import * as React from 'react';

// Layout
import Navbar from '../layout/navbar';
import { 
    Box, Flex
 } from "@chakra-ui/react"
export interface RoutesProps {
    
}
 
const Routes: React.FC<RoutesProps> = () => {
    return ( 
        <>
            <Flex h='100vh'>
                <Navbar />
                <Box direction='column' w='100%' h='100%' overflow='auto'>
                </Box>
            </Flex>
        </>
     );
}
 
export default Routes;