import * as React from 'react';

import {
    Box,
    Button
  } from "@chakra-ui/react"

import CommonPagelayout from '../../../layout/common/common.layout';
import TransactionTable from './table.subview';
 
const Transactions = () => {
    return ( 
        <CommonPagelayout>
            {{
                content: (
                    <>
                        <Box mt='100px'>
                            <Button float='right' bg='blue.500' mb='20px' fontFamily='Abel' _hover={{background: 'blue.400'}}>Create Item</Button>
                            <TransactionTable />
                        </Box>
                    </>
                )
            }}
        </CommonPagelayout>
     );
}
 
export default Transactions;