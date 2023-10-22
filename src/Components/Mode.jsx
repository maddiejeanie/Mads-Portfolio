import { Card, FormControlLabel, Switch} from '@mui/material';

function Mode() {
  return (
                    <div className='Card Mode' id='Mode'>
      <FormControlLabel
    control={<Switch />}
    label="Dark Mode"
    id="mode"
    name="mode"
    />
    </div>
  );
}

export default Mode;
