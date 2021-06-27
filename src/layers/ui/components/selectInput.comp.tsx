import React, { useState } from 'react';

import {
    Select,
    FormLabel,
    FormControl,
    useColorModeValue,
} from "@chakra-ui/react"

interface SelectInputProps {
    title?: string;
    incomingValue: string;
    options: {label: string, value: string}[];
    props?: any;
}

const SelectInput: React.FC<SelectInputProps> = ({ title, incomingValue, options, props}) => {
    const borderColor = useColorModeValue('blue.500', 'teal.800');

    const [value, setValue] = useState(incomingValue);

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    if (title)
        return (
            <FormControl id={title}>
                <FormLabel fontFamily='Abel' fontWeight='1000' fontSize='20px'>{title}</FormLabel>
                <Select 
                    value={value}
                    variant="flushed"
                    borderColor={borderColor}
                    onChange={onChange}>
                        {options.map((el: any) => <option key={el.value} value={el.value}>{el.label}</option>)}
                </Select>
            </FormControl>
        )
    
    return (
        <Select 
            {...props}
            value={value}
            variant="flushed"
            borderColor={borderColor}
            onChange={onChange}>
                {options.map((el: any) => <option key={el.value} value={el.value}>{el.label}</option>)}
        </Select>
    )
}

export default SelectInput;