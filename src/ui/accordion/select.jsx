import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [credit, setCredit] = React.useState("");

  const handleChange = (event) => {
    setCredit(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Срок рассрочки</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={credit}
          label="Срок рассрочки"
          onChange={handleChange}
        >
          <MenuItem value={3}>3 месяцев</MenuItem>
          <MenuItem value={6}>6 месяцев</MenuItem>
          <MenuItem value={12}>12 месяцев</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
