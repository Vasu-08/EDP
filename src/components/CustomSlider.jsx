import * as React from 'react';
import Slider from '@material-ui/core/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
    return `${value}°C`;
}

export default function CustomSlider({ value, setValue }) {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: 300,
            '& .MuiSlider-track': {
                backgroundColor: 'white'
            },
            '& .MuiSlider-thumb': {
                color: 'white'
            },
            '& .MuiSlider-valueLabel': {
                color: 'black'
            },
            '& .MuiSlider-rail': {
                backgroundColor: 'white'
            }
        }}>
            <Slider
                aria-label="Custom marks"
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                step={5}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}
