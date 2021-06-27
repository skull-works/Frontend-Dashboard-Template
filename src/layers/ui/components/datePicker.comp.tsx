import React from 'react';
import dayjs from 'dayjs';

import {
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
} from "@chakra-ui/react"

import { StandardUseColor } from '../../../theme/use-color.theme';

export interface DatePickerProps {
    id: string;
    label: string;
    setInputs: React.Dispatch<React.SetStateAction<any>>
}

const DatePicker:  React.FC<DatePickerProps>= ({ id, label, setInputs }) => {
    const { hoverColor } = StandardUseColor();
    const borderColor = useColorModeValue("gray.500", "gray.500");

    const onChange = (e: any) => {
        const newDate = dayjs(e.target.value).format("YYYY-MM-DD");
        setInputs((inputs: any) => {
            return { ...inputs, [`${id}`]: newDate };
        })
    }

    return (
        <FormControl>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Input 
            borderColor={borderColor} 
            _hover={{ borderColor: hoverColor }}
            _focus={{borderColor: hoverColor}} 
            type="date" 
            id={id} 
            onChange={onChange} />
        </FormControl>
    );
};

export default DatePicker;