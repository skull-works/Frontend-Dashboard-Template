import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const ObjectFieldTemplate = (props: any) => {
    return (
        <React.Fragment>
            <Grid
            width="100%"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={6}
            >
                {props.description}
                {props.properties.map((element: any) => {
                    const colSpan = element.content.props.uiSchema["ui:options"]["colSpan"];
                    const rowSpan = element.content.props.uiSchema["ui:options"]["rowSpan"];
                    return (
                        <GridItem key={element.name} colSpan={colSpan} rowSpan={rowSpan} className="property-wrapper">
                            {element.content}
                        </GridItem>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
}

const MemoObjectFieldTemplate = React.memo(ObjectFieldTemplate);

export default MemoObjectFieldTemplate;