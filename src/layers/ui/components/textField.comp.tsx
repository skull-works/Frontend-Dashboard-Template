import React from 'react';

import { Input, useColorModeValue } from '@chakra-ui/react';

import { StandardUseColor } from "../../../theme/use-color.theme";

export interface CustomTextFieldProps {
    id: string;
    placeholder: string;
    setInputs: React.Dispatch<React.SetStateAction<any>>
}
 
const CustomTextField: React.FC<CustomTextFieldProps> = ({ id, placeholder, setInputs }) => {
    const { hoverColor } = StandardUseColor();
    const inputBorderColor = useColorModeValue("gray.500", "gray.500")

    const onChange = (e: any) => {
        setInputs((inputs: any) => {
            return { ...inputs, [`${id}`]: e.target.value };
        })
    }

    return ( 
        <Input 
            placeholder={placeholder}
            mb="2px" 
            borderColor={inputBorderColor} 
            _focus={{borderColor: hoverColor}} 
            _hover={{borderColor: hoverColor}}
            onChange={onChange}/>
     );
}
 
export default CustomTextField;