import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

interface SelectComponentsProps {
  selectComponentItems: number[]
  callback: Function
  quantityProductForPage:number
}

export default function SelectComponent({
  selectComponentItems,
  callback,
  quantityProductForPage
}: SelectComponentsProps) {
  const [value, setValue] = React.useState(String(quantityProductForPage))

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
    callback(event.target.value)

  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 70 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select value={value} onChange={handleChange} autoWidth>
          <MenuItem value=""></MenuItem>
          {selectComponentItems.map((i, ind) => (
            <MenuItem key={ind} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
