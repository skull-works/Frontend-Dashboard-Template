import * as React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading } from "@chakra-ui/react"

 
const InProgressRender = () => {
    return (
        <>
            <title>Under Development</title>
            <Flex
            h='100%'
            direction='column'
            justifyContent='center'
            alignItems='center'
            >
                <Heading fontFamily='Kiwi Maru' fontSize={['20px','30px']}>Page Under Development :-)</Heading>
                <Heading 
                fontFamily='Kiwi Maru'
                fontSize='15px' 
                mt='12px' 
                _hover={{color: "teal.500"}}
                >
                    <Link to='/'>Click this to go back Home</Link>
                </Heading>
            </Flex>
        </>
    );
}
 
export default InProgressRender;