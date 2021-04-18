import React, { useState, useEffect } from 'react';

import {
    Flex,
    ListItem,
    UnorderedList,
    Divider,
    Text,
    ScaleFade,
    Slide,
    useDisclosure,
    useColorModeValue,
 } from "@chakra-ui/react"
 
import { CloseIcon } from '@chakra-ui/icons'

import { Logo } from './Logo';
import NavbarLinks from './links';


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const navBarBg = useColorModeValue('blue.500', 'teal.800');
    const navBarBgHover = useColorModeValue('blue.400', 'teal.600');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
       window.addEventListener('resize', handleResize)
       return () => {
           window.removeEventListener('resize', handleResize)
       }
    }, [])

    const TransitionWrapper = (props: any) => {
        if (windowWidth < 768) {
            return(
                <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
                    {props.children}
                </Slide>
            );
            
        } 
        
        return (
            <ScaleFade initialScale={0.9} in={isOpen}>
                {props.children}
            </ScaleFade>
        )
    }

    if (isOpen) {
        return ( 
            <TransitionWrapper>
                <UnorderedList 
                zIndex={2} 
                w={['100%', '100%', '160px']}
                py='6'
                bg='blue.800'
                mx={['auto']}
                position='fixed'
                top={['0','0','150']}
                left={['0','0','4']}
                rounded={['','','2xl','2xl']} 
                color='white'
                fontSize='17px'
                fontFamily='Kiwi Maru'
                listStyleType='none'
                textAlign='center'
                spacing='3'>
                    <CloseIcon 
                    w='10px' 
                    position='absolute' 
                    top='0' 
                    left='0'
                    mt='10px'
                    ml='10px'
                    cursor='pointer' 
                    _hover={{color: "teal.500"}}
                    onClick={onToggle}
                    />
                    <ListItem>
                        <Logo h='80px' mx='auto' pointerEvents="none" />
                    </ListItem>
                    <Divider w='80%' mx='auto' />
                    <NavbarLinks />
                </UnorderedList>
            </TransitionWrapper>
        );
    }

    return (
        <Flex
        zIndex={2} 
        direction={['row','row','column']}
        bg={navBarBg}
        border='1px'
        borderColor={navBarBg}
        w={['160px','160px','50px']}
        h={['30px','30px', 'auto']}
        my={['','','auto']} 
        position='fixed'
        roundedRight={['','','lg']}
        rounded={['sm','sm','']}
        py={['6px','6px','10px']}
        marginTop={['2','2','200']}
        marginLeft={['2','2','0']}
        color='white'
        fontSize={['10px','10px','12px']}
        fontFamily='Kiwi Maru'
        textAlign='center'
        justifyContent={['center','center','']}
        cursor='pointer'
        _hover={{backgroundColor: navBarBgHover, borderColor: navBarBgHover}}
        onClick={onToggle}>
            <Text pb={['','4px']} px={['2px']}>N</Text>
            <Text pb={['','4px']} px={['2px']}>A</Text>
            <Text pb={['','4px']} px={['2px']}>V</Text>
            <Text pb={['','4px']} px={['2px']}>I</Text>
            <Text pb={['','4px']} px={['2px']}>G</Text>
            <Text pb={['','4px']} px={['2px']}>A</Text>
            <Text pb={['','4px']} px={['2px']}>T</Text>
            <Text pb={['','4px']} px={['2px']}>E</Text>
        </Flex>
    )
}
 
export default Navbar;