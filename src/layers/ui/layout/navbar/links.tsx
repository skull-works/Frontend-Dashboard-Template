import React from "react";
import { Link } from "react-router-dom";

import { chakra, UnorderedList, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaMotorcycle, FaKey } from "react-icons/fa";

const Navlink = chakra(Link);
 
const NavbarLinks = () => {
    const textColor = useColorModeValue("gray.700", "gray.100");

    return ( 
        <UnorderedList
        marginTop="20px"
        fontSize="20px"
        listStyleType="none"
        w="80%" 
        mx="auto"
        textAlign={["center", "center", "left"]}
        color={textColor}
        lineHeight="45px">
            <ListItem cursor="pointer" _hover={{color: "teal.500"}}>
                <Navlink to="/" display="flex" flexDirection="row" alignItems="center"> 
                    <FaHome /> 
                    <Text marginLeft="10px">home</Text>
                </Navlink>
            </ListItem>
            <ListItem cursor="pointer" _hover={{color: "teal.500"}}>
                <Navlink to="/Dashboard" display="flex" flexDirection="row" alignItems="center">
                    <FaChartBar /> 
                    <Text marginLeft="10px">dashboard</Text>
                </Navlink>
            </ListItem>
            <ListItem cursor="pointer" _hover={{color: "teal.500"}}>
                <Navlink to="/Delivery" display="flex" flexDirection="row" alignItems="center">
                    <FaMotorcycle />
                    <Text marginLeft="10px">delivery</Text>
                </Navlink>
            </ListItem>
            <ListItem cursor="pointer" _hover={{color: "teal.500"}}>
                <Navlink to="/Login" display="flex" flexDirection="row" alignItems="center">
                    <FaKey />
                    <Text marginLeft="10px">login</Text>
                </Navlink>
            </ListItem>
        </UnorderedList>
    );
}
 
export default NavbarLinks;