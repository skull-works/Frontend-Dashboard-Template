import * as React from 'react';

import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
  } from "@chakra-ui/react"

  export interface TransactionTableProps {
      hook?: string;
  }
   
  const TransactionTable: React.FC<TransactionTableProps> = () => {
    const background = useColorModeValue('gray.400', 'gray.600');
    const borderColor = useColorModeValue('gray.300', 'gray.800');
    const border = useColorModeValue('2px', '');

    const tableHeaders = ['Order No', 'Order Type', 'Order Status', 'Order Date'];
    const tableData = [
        {
            orderNo: 1,
            orderType: 'product',
            orderStatus: 'active',
            orderDate: '01/03/2021'
        },
        {
            orderNo: 2,
            orderType: 'service',
            orderStatus: 'active',
            orderDate: '01/05/2021'
        },
        {
            orderNo: 3,
            orderType: 'product',
            orderStatus: 'canceled',
            orderDate: '01/10/2021'
        },
        {
            orderNo: 4,
            orderType: 'product',
            orderStatus: 'completed',
            orderDate: '01/22/2021'
        },
    ]
    
      return ( 
        <Box
        w='100%'
        mx='auto'
        border='1px'
        borderRadius='lg'
        borderColor={background}
        overflow='hidden'
        >
            <Table 
            variant='simple'
            w='100%'
            size='lg'
            >
                <Thead>
                    <Tr>
                        {  tableHeaders && tableHeaders.map((header: string) => <Th key={header}  w='25%' fontFamily='Abel'>{header}</Th>) }
                    </Tr>
                </Thead>
                <Tbody>
                    {  tableData && tableData.map((data: any) => {
                            let color  = 'blue.500';
                            if (data.orderStatus === 'canceled') color = 'red.500'
                            else if (data.orderStatus === 'completed') color = 'green.400'
                            return (
                                <Tr key={data.orderNo} border={border} borderColor={borderColor} fontFamily='Abel' _hover={{background: background}} cursor='pointer'>
                                    <Td w='25%'>{data.orderNo}</Td>
                                    <Td w='25%'>{data.orderType}</Td>
                                    <Td w='25%' color={color}>{data.orderStatus}</Td>
                                    <Td w='25%'>{data.orderDate}</Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </Box>
       );
  }
   
  export default TransactionTable;