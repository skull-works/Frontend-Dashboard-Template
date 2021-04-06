import * as React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading } from "@chakra-ui/react"

 
const InProgressRender = () => {
    return ( 
        <Flex
        h='100%'
        direction='column'
        justifyContent='center'
        alignItems='center'
        >
            <Heading fontFamily='Kiwi Maru'>Page Under Development :-)</Heading>
            <Heading 
            fontFamily='Kiwi Maru'
            fontSize='20px' 
            mt='12px' 
            mr='286px'
            _hover={{color: "teal.500"}}
            >
                <Link to='/'>Click to go back Home</Link>
            </Heading>
        </Flex>
    );
}
 
export default InProgressRender;