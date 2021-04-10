import * as React from 'react';

import {
    Box,
    ButtonGroup,
    Stack,
} from '@chakra-ui/react';

import CommonPagelayout from '../../../layout/common/common.layout';
import InputForm from './components/InputForm';
import BarGraph from './charts/bar.subview.';
import LineGraph from './charts/line.subview';
 
const Graphs = () => {
    return (
        <>
            <title>Dashboard</title>
            <CommonPagelayout>
                {{
                    header:(     
                        <ButtonGroup variant="outline" spacing='6' mt={['20','16']}>
                            <InputForm />
                        </ButtonGroup>
                    ),
                    content:(    
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
                    )
                }}
            </CommonPagelayout>
        </>
     );
}
 
export default Graphs;