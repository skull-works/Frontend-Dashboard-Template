import React from "react";
import dayjs from 'dayjs';

import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Skeleton,
    Tag,
    useColorModeValue,
} from "@chakra-ui/react"

import { NavLink } from "../../../../components/customChakra.comp";
import { IDelivery } from "../../types/delivery.types";

const scrollBarCss = {
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "6px"
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#696969",
      borderRadius: "10px",
    },
};

const SkeletonLoader = () => {
    const n: string[] = [];
    for (let i = 0 ; i < 5 ; i++) 
        n.push(`${i}`);

    return (
        <Tbody position="relative">
            {
                n.map((i) =>  
                    <Tr key={i}>
                        { n.map((i) => <Td key={i} w="25%"><Skeleton height="20px" /></Td>) }
                    </Tr>
                )
            }
        </Tbody>
    )  
}
  
export interface TableDeliveriesProps {
    tableHeaders: string[];
    tableData: IDelivery[];
    isLoading: boolean;
}
 
const TableDeliveries: React.FC<TableDeliveriesProps> = ({ tableHeaders, tableData, isLoading }) => {
    const headerBarColor = useColorModeValue("gray.300", "gray.900");
    const textColor = useColorModeValue("gray.800", "white");
    const background = useColorModeValue("gray.400", "gray.600");
    const borderColor = useColorModeValue("gray.400", "gray.600");

    return ( 
        <Box
        w="100%"
        maxHeight="500px"
        mx="auto"
        border="1px"
        borderRadius="sm"
        borderColor={background}
        overflow="hidden"
        overflowY="auto"
        overflowX="auto"
        css={scrollBarCss}
        >
            <Table 
            variant="simple"
            w="100%"
            size="lg"
            >
                <Thead>
                    <Tr>
                        {  tableHeaders && tableHeaders.map((header: string) => 
                            <Th  key={header} position="sticky" top={0} zIndex={1} color={textColor}  w="25%" fontFamily="Abel" bg={headerBarColor} borderColor={borderColor}>
                                {header}
                            </Th>) 
                        }
                    </Tr>
                </Thead>
                { isLoading ? <SkeletonLoader /> :
                    <Tbody position="relative">
                        {  tableData && tableData.map((data: IDelivery) => {
                                let paymentStatus = data.amountPaid && data.amountPaid > 0 ? 'PAID' : 'UNPAID';
                                let color = paymentStatus === 'PAID' ? 'green' : 'red';

                                return (
                                    <Tr key={data.deliveryNumber} borderColor={borderColor} fontFamily="Abel" _hover={{background: background}}>
                                        <Td w="25%" borderColor={borderColor}>{dayjs(data.postingDate).format("YYYY MMM DD")}</Td>
                                        <Td w="25%" borderColor={borderColor}>{data.store}</Td>
                                        <Td w="25%" borderColor={borderColor}>{data.deliveryNumber}</Td>
                                        <Td w="25%" borderColor={borderColor}>₱{data.amount}</Td>
                                        <Td w="25%" borderColor={borderColor} fontWeight="800">
                                            <Tag variant="solid" colorScheme={color} >
                                                {paymentStatus}
                                            </Tag>
                                        </Td>
                                        <Td w="25%" borderColor={borderColor}>
                                            <NavLink to={{ pathname: "/Delivery/Details", search: `?deliveryId=${data.id}`}}>
                                                <Button colorScheme="messenger">
                                                        view more
                                                </Button>
                                            </NavLink>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                }
            </Table>
        </Box>
     );
}

const MemoTableDeliveries = React.memo(TableDeliveries)
 
export default MemoTableDeliveries;