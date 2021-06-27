import React, { useState, useEffect } from "react";

import {
    chakra,
    Box,
    Flex,
    Divider,
    ScaleFade,
    Slide,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react"
 
import { FaHome, FaChartBar, FaMotorcycle, FaKey } from "react-icons/fa";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

import { Logo } from "./Logo";
import NavbarLinks from "./links";
import { NavLink } from "../../components/customChakra.comp";


const HomeIcon = chakra(FaHome);
const ChartsIcon = chakra(FaChartBar);
const MotorIcon = chakra(FaMotorcycle);
const KeyIcon = chakra(FaKey);

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const navBarBg = useColorModeValue("gray.200", "gray.800");
    const iconColor = useColorModeValue("gray.600", "gray.400");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
       window.addEventListener("resize", handleResize)
       return () => {
           window.removeEventListener("resize", handleResize)
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
                <Box 
                zIndex={2} 
                w={["100%", "100%", "220px"]}
                h={["auto", "auto", "100%"]}
                py="6"
                bg={navBarBg}
                boxShadow="3px 5px 5px 0px rgba(0,0,0,0.68)"
                mx={["auto"]}
                position="relative"
                left={["0","0","0"]}
                color="white"
                fontSize="17px"
                fontFamily="Kiwi Maru"
                spacing="3">
                    <CloseIcon 
                    color={iconColor}
                    w="10px" 
                    position="absolute" 
                    top="0" 
                    left="2"
                    mt="10px"
                    ml="10px"
                    cursor="pointer" 
                    _hover={{color: "teal.500"}}
                    onClick={onToggle}
                    />
                    <Logo marginTop="30px" marginBottom="20px" h="100px" mx="auto" pointerEvents="none" />
                    <Divider w="80%" borderColor={iconColor} mx="auto" />
                    <NavbarLinks />
                </Box>
            </TransitionWrapper>
        );
    }

    return (
        <Flex
        zIndex={2} 
        direction={["row","row","column"]}
        bg={navBarBg}
        boxShadow="3px 5px 5px 0px rgba(0,0,0,0.68)"
        border="1px"
        borderColor={["gray.800","", "gray.800"]}
        w={["0","auto","60px"]}
        h={["30px","30px", "100%"]}
        my={["","","auto"]} 
        position="relative"
        py={["6px","6px","10px"]}
        marginTop={["2","2","0"]}
        marginLeft={["2","2","0"]}
        color="white"
        fontSize={["10px","10px","12px"]}
        fontFamily="Kiwi Maru"
        textAlign="center">
            <HamburgerIcon position="relative" color={iconColor} top={[0,0,2]} mx="auto" w={6} h={6} cursor="pointer" _hover={{ color: 'teal.400'}} onClick={onToggle}/>
            <Flex display={["none","none", "flex"]} position="relative" direction="column" mx="auto" top="40px">
                <NavLink to="/">
                    <HomeIcon color={iconColor} width={8} height={8} _hover={{ color: 'teal.400'}} />
                </NavLink>
                <NavLink to="/Dashboard" pt="30px">
                    <ChartsIcon color={iconColor} width={8} height={8} _hover={{ color: 'teal.400'}} />
                </NavLink>
                <NavLink to="/Delivery" pt="30px">
                    <MotorIcon color={iconColor} width={8} height={8} _hover={{ color: 'teal.400'}} />
                </NavLink>
                <NavLink to="/Login" pt="30px">
                    <KeyIcon color={iconColor} width={8} height={8} _hover={{ color: 'teal.400'}} />
                </NavLink>
            </Flex>
        </Flex>
    )
}
 
export default Navbar;