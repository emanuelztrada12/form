import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import Container from "@mui/material/Container";
import { InputField, SelectField, DatePickerField, CheckboxField } from "../../FormFields";
import MovingIcon from "@mui/icons-material/Moving";

export default function AutorizationForm(props) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: { validation_form },
  } = props;

  const validate = [
    {
      value: "Acepto ",
      label: "Acepto ",
    },
  ];

  return (
    !isSSR && (
      <>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "40px",
              paddingLeft: "10px",
            }}
          >
            Terminos y condiciones
          </Typography>
          <Divider />
          <Container>
            <Box sx={{ my: 2 }}>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et.
              </p>
            
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px"}}>
              <SelectField
                name={validation_form.name}
                label={validation_form.label}
                data={validate}
                sx={{ m: 1, width: '30ch' }}
              />
            </div>
              
              
            </Box>
          </Container>
      </>
    )
  );
}
