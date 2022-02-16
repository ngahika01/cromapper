import React from 'react';
import './Layers.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Layers() {
  return <div className="Layers">
<FormControl>
{/*  */}
  <InputLabel id="demo-simple-select-label">Layer</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={layer}
    label="layer"
    // onChange={handleChange}
  >
    <MenuItem value={{/*TODO::*/}}>Vegetation Index</MenuItem>
    <MenuItem value={{/*TODO::*/}}>MASI</MenuItem>
    <MenuItem value={{/*TODO::*/}}>NDVI</MenuItem>
    <MenuItem value={{/*TODO::*/}}>ASKDJN</MenuItem>
    <MenuItem value={{/*TODO::*/}}>MEBRAN</MenuItem>
    <MenuItem value={{/*TODO::*/}}></MenuItem>
    <MenuItem value={{/*TODO::*/}}></MenuItem>

  </Select>
</FormControl>
  </div>;
}

export default Layers;
