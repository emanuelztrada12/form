import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Alert,
  Stack
} from '@mui/material';

function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{<div>
        <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning"><p>{error}</p></Alert>
          </Stack>
        </div>
      </div>}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''} onChange={(val) => {
        try {
          if (field.onChange) field.onChange(val);
        } catch (error) {}
        if (props.onChange) props.onChange(val, { field, meta });
      }}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
