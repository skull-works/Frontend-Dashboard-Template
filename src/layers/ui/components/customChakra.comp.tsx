import { chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon, CloseIcon as CI } from '@chakra-ui/icons'
import { BiAperture } from "react-icons/bi";

const NavLink = chakra(Link);
const BackArrowIcon = chakra(ArrowBackIcon);
const CloseIcon = chakra(CI);
const BiApertureIcon = chakra(BiAperture);

export { 
    NavLink,
    BackArrowIcon,
    BiApertureIcon,
    CloseIcon
 };