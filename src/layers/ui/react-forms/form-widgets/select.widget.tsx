import React from 'react';

import {
    Select,
    FormLabel,
    FormControl,
    useColorModeValue,
} from "@chakra-ui/react"

import { PropsOptions } from './prop.types';

const SelectWidget = (props: any) => {
    const options: PropsOptions = props.options;
    const borderColor = useColorModeValue('blue.500', 'teal.800');

    return (
        <FormControl id={props.options.title}>
            <FormLabel fontFamily='Abel' fontWeight='1000' fontSize='17px'>{options.title}</FormLabel>
            <Select 
                value={props.value}
                placeholder={props.placeholder}
                variant="flushed"
                borderColor={borderColor}
                onChange={(e) => props.onChange(e.target.value)}>
                    {options.enumOptions.map((el) => <option key={el.value} value={el.value}>{el.label}</option>)}
            </Select>
      </FormControl>
    )
}

export default SelectWidget;