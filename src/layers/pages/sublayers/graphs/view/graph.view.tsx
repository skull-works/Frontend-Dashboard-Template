import * as React from 'react';

import {
    Box,
    Heading,
    Divider,
    Flex,
    ButtonGroup,
    Stack,
} from '@chakra-ui/react';

import InputForm from './components/InputForm';
import BarGraph from './charts/bar.subview.';
import LineGraph from './charts/line.subview';
 
const Graphs = () => {
    return (
        <>
            <title>Dashboard</title>
            <Box w={['100%','84%']} h='100%' mx='auto' >
                <Box w={['94%','96%']} mx='auto'>
                    <Flex justifyContent='space-between'>
                        <Heading fontFamily='Kiwi Maru' mt={['20','16']} ml='' textAlign='left' fontSize={['25px', '25px', '40px']}>Good Day, User</Heading>
                        <ButtonGroup variant="outline" spacing='6' mt={['20','16']}>
                            <InputForm />
                        </ButtonGroup>
                    </Flex>
                    <Divider w='100%' h='0.2vh' mt='4' bg='gray.600' />
                </Box>
                <Stack
                direction={['column', 'column', 'column', 'row']}
                mt='20'
                spacing='6'
                >
                    <Box w={['100%', '100%', '100%', '40%']} h='500px' bg='gray.700' rounded='md'>
                        <LineGraph />
                    </Box>
                    <Box w={['100%', '100%', '100%', '60%']} h='500px' bg='gray.700' rounded='md'>
                        <BarGraph />
                    </Box>
                </Stack>
            </Box>
        </>
     );
}
 
export default Graphs;