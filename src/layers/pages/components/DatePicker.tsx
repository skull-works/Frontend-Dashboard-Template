import React, { useState} from 'react';
import Datepicker from 'react-date-picker';
import {
    Box
  } from "@chakra-ui/react"

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const onChange = (date: any) => {
        setStartDate(date)
    }

    return (
        <Box color='gray.500'>
            <Datepicker
            value={startDate}
            onChange={onChange}
            />
        </Box>
    );
};

export default DatePicker;