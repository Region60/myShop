import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

interface SelectComponentsProps {
  selectComponentItems: number[]
}

export default function SelectComponent({
  selectComponentItems,
}: SelectComponentsProps) {
  const [value, setValue] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth:70 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select value={value} onChange={handleChange} autoWidth>
          <MenuItem value=""></MenuItem>
          {selectComponentItems.map((i, ind) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
