import React, { useState } from 'react';

import {
    FormControl,
    FormLabel,
    Input,
    useColorModeValue
} from "@chakra-ui/react"

import { PropsOptions } from './prop.types';

const InputWidget = (props: any) => {
    const options: PropsOptions = props.options;

    const [value, setValue] = useState(props.value || '');
    const borderColor = useColorModeValue('blue.500', 'teal.800');
    const hoverBorderColor = useColorModeValue('blue.300', 'teal.600');

    const handleOnchange = (e: any) => {
        props.onChange(e.target.value);
        setValue(e.target.value);
    }
    
    return (
        <FormControl id={props.id} marginTop={options.marginTop}>
            <FormLabel fontFamily='Abel' fontWeight='1000' fontSize='17px'>{options.title}</FormLabel>
            <Input 
            type="text"
            borderColor={borderColor}
            bg='none'
            _hover={{borderColor: hoverBorderColor}}
            placeholder={props.placeholder} 
            value={value} 
            required={props.required} 
            onChange={handleOnchange} />
        </FormControl>
    )
}

export default InputWidget;