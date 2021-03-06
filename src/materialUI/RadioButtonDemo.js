import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('easy');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">React is</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="easy" control={<Radio />} label="Easy" />
        <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        <FormControlLabel value="none" control={<Radio />} label="None" />

      </RadioGroup>
    </FormControl>
  );
}
