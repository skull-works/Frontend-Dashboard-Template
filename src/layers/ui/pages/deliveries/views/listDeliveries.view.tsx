import React, { Fragment, useState, useEffect } from "react";

import {
    Box,
    Button,
    ButtonGroup,
  } from "@chakra-ui/react"

import { StandardUseColor } from "../../../../../theme/use-color.theme";
import { NavLink } from '../../../components/customChakra.comp';
import CommonPagelayout from "../../../layout/common/common.layout";
import TableDeliveries from "../organisms/list-deliveries/tableDeliveries";
import FilterForm from "../organisms/list-deliveries/filterForm";
import { getDeliveries } from '../delivery.service';
import listDeliveriesStore, { IListDeliveriesStore } from "../store/listDeliveries.store";


export interface ListDeliveriesProps {
    hook?: string;
}
   
const ListDeliveries: React.FC<ListDeliveriesProps> = () => {
    const { buttonColor, hoverColor } = StandardUseColor();
    const tableHeaders = ["POSTING DATE", "STORE", "DR NUMBER", "AMOUNT", "PAYMENT STATUS", ""];

    const filters = listDeliveriesStore((state: IListDeliveriesStore) => state.filters);

    const [isLoading, setIsLoading] = useState(false);
    const [tableData, setTableData] = useState<any>(null);

    useEffect(() => {
        const runAsyncFunc = async () => {
            setIsLoading(true);
            const data = await getDeliveries(filters);
            setTableData(data);
            setIsLoading(false);
        }
        runAsyncFunc();
        return (() => {
            setTableData(null);
            setIsLoading(false);
        });
    }, [filters]);

    return ( 
        <CommonPagelayout>
            {{
                content: (
                    <Fragment>
                        <title>List Deliveries  | Lafonsas</title>
                        <Box fontFamily="Abel" mt="50px" w={["90%","100%","100%","100%"]} mx="auto">
                            <NavLink to="/Delivery/create">
                                <Button 
                                float="right" 
                                mb="20px" 
                                color="white"
                                bg={buttonColor} 
                                _hover={{background: hoverColor}}>Create Item</Button>
                            </NavLink>

                            <ButtonGroup variant="outline">
                                <FilterForm />
                            </ButtonGroup>
                            
                            <TableDeliveries tableHeaders={tableHeaders} tableData={tableData} isLoading={isLoading} />
                        </Box> <br/>
                    </Fragment>
                )
            }}
        </CommonPagelayout>
    );
}

const MemoListDeliveries = React.memo(ListDeliveries);

export default MemoListDeliveries;