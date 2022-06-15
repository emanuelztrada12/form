import React from 'react';
import { at, rest } from 'lodash';
import { useField } from 'formik';
import { TextField, Alert, Stack } from '@mui/material';

export default function InputField(props) {
  const { errorText, ...rest } = props;
  // console.log(props.value)
  // console.log(rest)
  // console.log(errorText)
  const [field, meta] = useField(props);
  console.log(field)
  // console.log(meta)

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return (
          <div>
            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning"><p>{error}</p></Alert>
              </Stack>
            </div>
          </div>
      );
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      // value={rest.value}
      {...field}
      {...rest}
    />
    
  );
}
