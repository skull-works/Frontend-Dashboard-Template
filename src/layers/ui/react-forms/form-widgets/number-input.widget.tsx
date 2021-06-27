import React, { useState } from 'react';

import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useColorModeValue
} from "@chakra-ui/react"

import { PropsOptions } from './prop.types';

const NumberInputWidget = (props: any) => {
    const options: PropsOptions = props.options;

    const borderColor = useColorModeValue('blue.500', 'teal.800');

    const [value, setValue] = useState(props.value);

    const handleOnchange = (e: any) => {
        props.onChange(e.target.value);
        setValue(e.target.value);
    }

    return (
        <FormControl id={props.id}>
            <FormLabel fontFamily='Abel' fontWeight='1000' fontSize='17px'>{options.title}</FormLabel>
            <NumberInput
            defaultValue={value || 0}
            borderColor={borderColor}>
                <NumberInputField 
                value={value}
                required={props.required} 
                onChange={handleOnchange}/>
                <NumberInputStepper>
                    <NumberIncrementStepper borderColor={borderColor} />
                    <NumberDecrementStepper borderColor={borderColor} />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    )
}

export default NumberInputWidget;