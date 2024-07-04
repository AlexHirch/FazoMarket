import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { red } from "@mui/material/colors";

function valuetext(value) {
  return `${value}°C`;
}


export default function RangeSlider({ value, setValue }) {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={103000000}
        sx={{
            color: red[600]
        }}
      />
    </Box>
  );
}
