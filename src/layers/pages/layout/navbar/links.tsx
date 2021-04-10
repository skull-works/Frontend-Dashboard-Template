import React, { Fragment } from 'react';
import { ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

 
const NavbarLinks = () => {
    return ( 
        <Fragment>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/'>home</Link>
            </ListItem>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/Dashboard'>dashboard</Link>
            </ListItem>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/Transactions'>transactions</Link>
            </ListItem>
            <ListItem cursor='pointer' _hover={{color: "teal.500"}}>
                <Link to='/inventory'>inventory</Link>
            </ListItem>
        </Fragment>
    );
}
 
export default NavbarLinks;