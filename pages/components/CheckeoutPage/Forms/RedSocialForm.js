import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import FacebookIcon from "@mui/icons-material/Facebook";

const value = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

export default function RedSocialForm(props) {
  const [vali, SetValida] = useState("");
  const handleChange = (e) => {
    let { value } = e.target;
    SetValida(value);
  };

  const [valitwo, SetValidatwo] = useState("");
  const handleChangetwo = (e) => {
    let { value } = e.target;
    SetValidatwo(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      red_faccebook,
      red_faccebookOther,
      red_faccebookval,
      red_faccebookOtherVal,
    },
  } = props;

  return (
    !isSSR && (
      <>
        <Grid>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "40px",
              paddingLeft: "10px",
            }}
          >
            Redes sociales
          </Typography>
          <Divider style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Chip
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              icon={<FacebookIcon />}
              color="primary"
              label="Facebook"
            />
          </Divider>
          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "15px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Posee facebook?:
              </label>
              <SelectField
                name={red_faccebookval.name}
                label={red_faccebookval.label}
                onChange={handleChange}
                data={value}
                fullWidth
              />
              {vali === "Si" && (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "15px",
                  }}
                >
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Perfil de Facebook:
                  </label>
                  <InputField
                    name={red_faccebook.name}
                    label={red_faccebook.label}
                    fullWidth
                  />
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "15px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Posee otra cuenta de facebook?:
              </label>
              <SelectField
                name={red_faccebookOtherVal.name}
                label={red_faccebookOtherVal.label}
                onChange={handleChangetwo}
                data={value}
                fullWidth
              />
              {valitwo === "Si" && (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "15px",
                  }}
                >
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Perfil de Facebook:
                  </label>
                  <InputField
                    name={red_faccebookOther.name}
                    label={red_faccebookOther.label}
                    fullWidth
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  );
}
