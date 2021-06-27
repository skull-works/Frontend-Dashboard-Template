import React from "react";
import {
    Box,
    Heading,
    Button,
    Grid, 
    GridItem,
} from "@chakra-ui/react"
import { AddIcon, DeleteIcon } from "@chakra-ui/icons"

import { StandardUseColor } from '../../../../theme/use-color.theme';

interface PropsOptions {
    ariaLabel: string;
}

const ArrayFieldTemplate = (props: any) => {
    const { buttonColor, hoverColor } = StandardUseColor();
    const options: PropsOptions = props.uiSchema["ui:options"];
    
    return (
        <Box width={['100%']} borderBottom="1px" borderRadius="4px" pb="20px" borderColor={buttonColor}>
            <Heading fontFamily="Abel" size="lg" paddingBottom="20px">{props.uiSchema["ui:options"]["title"]}</Heading>
            <Grid 
            width="100%"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={6}>
                {props.items.map((element: any) => {
                    return (
                        <React.Fragment key={element.key}>
                            <GridItem colSpan={[12, 11, 11]} rowSpan={1}>
                                {element.children}
                            </GridItem>
                            <GridItem colSpan={[12,1,1,1]} display="flex" justifyContent="flex-start" alignItems="flex-end">
                                    <Button 
                                    marginLeft={['0', '0']} 
                                    w={["100%", "100%"]}
                                    bg={buttonColor} 
                                    _hover={{background: hoverColor}} 
                                    onClick={() => element.onDropIndexClick(element.index)()}>
                                        <DeleteIcon />
                                    </Button>
                            </GridItem>
                        </React.Fragment>
                    )
                })}
            </Grid>
            {props.canAdd && 
                <Button 
                marginTop="20px"
                fontFamily="Abel"
                bg={buttonColor} type="button"
                _hover={{background: hoverColor}}
                color='white'
                onClick={props.onAddClick}
                aria-label={options.ariaLabel}>
                    <AddIcon w={4} h={4} marginRight="10px" mx="auto"/>
                </Button>
            }
        </Box>
    );
}

const MemoArrayFieldTemplate = React.memo(ArrayFieldTemplate)

export default MemoArrayFieldTemplate;