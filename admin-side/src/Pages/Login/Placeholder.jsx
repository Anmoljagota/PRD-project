import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({handleChange}) {
  const [age, setAge] = React.useState('');

 

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="senior manager" >Senior Manager</MenuItem>
          <MenuItem value="ceo">CEO</MenuItem>
          <MenuItem value="sde">SDE-1</MenuItem>
          <MenuItem value="senior developer">Senior Developer</MenuItem>
        </Select>
       
      </FormControl>
      
    </div>
  );
}