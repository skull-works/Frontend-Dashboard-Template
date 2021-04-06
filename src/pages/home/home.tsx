import * as React from 'react';

import {
    Box,
    Heading,
    Divider,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';

 
const Home = () => {
    return (
        <>
            <title>Home</title>
            <Box w={['100%','70%']} h='100%' overflow='auto' mx='auto'>
                <Heading fontFamily='Kiwi Maru' mt='16' textAlign='center' fontSize={['28px', '40px']}>ABOUT THE PORTAL</Heading>
                <Divider w={['90%','70%']} h='0.2vh' mx='auto' mt='4' bg='gray.600' />
                <UnorderedList w={['90%','70%']} mx='auto' mt='8' fontFamily='Abel'>
                    <Heading fontFamily='Kiwi Maru' mb='4'>Pages:</Heading>
                    <ListItem ml='30px'>Home</ListItem>
                    <ListItem ml='30px'>Inventory</ListItem>
                    <ListItem ml='30px'>Stocks</ListItem>
                    <ListItem ml='30px'>Accounts</ListItem>
                </UnorderedList>
                <UnorderedList w={['90%','70%']} mx='auto' mt='8' fontFamily='Abel'>
                    <Heading fontFamily='Kiwi Maru' mb='4'>Features:</Heading>
                    <ListItem ml='30px'>Users can input and save inventory with timestamps</ListItem>
                    <ListItem ml='30px'>Users can check inventory histories to review</ListItem>
                    <ListItem ml='30px'>Users can check current available stocks</ListItem>
                    <ListItem ml='30px'>Users can check calculations of returns for the day</ListItem>
                </UnorderedList>
            </Box>
        </>
    );
}
 
export default Home;