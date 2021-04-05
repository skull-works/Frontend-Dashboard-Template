import React, { Fragment } from 'react';
import { ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

 
const NavbarLinks = () => {
    return ( 
        <Fragment>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/'>Main</Link>
            </ListItem>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/inventory'>Inventory</Link>
            </ListItem>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/stocks'>Stocks</Link>
            </ListItem>
        </Fragment>
    );
}
 
export default NavbarLinks;