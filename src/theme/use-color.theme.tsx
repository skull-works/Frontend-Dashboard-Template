import { useColorModeValue } from "@chakra-ui/react"

export const StandardUseColor = () => {
    const buttonColor = useColorModeValue('blue.500', 'teal.800');
    const hoverColor = useColorModeValue('blue.400', 'teal.600');
    const tableHeaderColor = useColorModeValue("gray.400", "gray.600");
    const dividerColor = useColorModeValue("gray.700", "gray.400");
    const backgroundColor = useColorModeValue('gray.200', 'gray.800');

    return {
        buttonColor,
        hoverColor,
        tableHeaderColor,
        dividerColor,
        backgroundColor
    }
}
