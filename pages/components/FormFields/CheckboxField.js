import React from "react";
import { at } from "lodash";
import { useField } from "formik";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
import { Alert, Stack } from "@mui/material";

export default function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return (
        <div>
          <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
            <FormHelperText>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="warning">
                  <p>{error}</p>
                </Alert>
              </Stack>
            </FormHelperText>
          </div>
        </div>
      );
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={_onChange} />}
        label={label}
      />
      {_renderHelperText()}
    </FormControl>
  );
}
