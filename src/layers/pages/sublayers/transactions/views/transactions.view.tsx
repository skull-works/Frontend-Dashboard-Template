import React, { useState } from 'react';

import {
    Box,
    Button,
    Stack,
  } from "@chakra-ui/react"
  import { ArrowBackIcon } from '@chakra-ui/icons'

import { ETransactionView } from './type/enum';
import { TypeTransactionView } from './type/interface';

import CommonPagelayout from '../../../layout/common/common.layout';
import TransactionTable from './subview/list-items.subview';
import CreateItem from './subview/create-item.subview';
 
const Transactions = () => {
    const [transactionView, setTransactionView] = useState<TypeTransactionView>(ETransactionView.LIST);

    const Content = () => {
        switch (transactionView) {
            case ETransactionView.CREATE:
                return (
                    <>
                        <Stack>
                            <Button 
                            float='left' 
                            w='30px'
                            bg='blue.500' 
                            mb='20px' 
                            fontFamily='Abel' 
                            _hover={{background: 'blue.400'}}
                            onClick={() => setTransactionView(ETransactionView.LIST)}><ArrowBackIcon /></Button>
                            <CreateItem />
                        </Stack>
                    </>
                )
            default:
                return (
                    <>
                        <Button 
                        float='right' 
                        bg='blue.500' 
                        mb='20px' 
                        fontFamily='Abel' 
                        _hover={{background: 'blue.400'}}
                        onClick={() => setTransactionView(ETransactionView.CREATE)}>Create Item</Button>
                        <TransactionTable />
                    </>
                )
        }
    }

    return ( 
        <CommonPagelayout>
            {{
                content: (
                    <>
                        <Box mt='50px' w={['90%','100%','100%','100%']} mx='auto'>
                            <Content />
                        </Box>
                    </>
                )
            }}
        </CommonPagelayout>
     );
}
 
export default Transactions;