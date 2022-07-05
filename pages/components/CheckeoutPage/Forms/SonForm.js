import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import { valuesIn } from "lodash";

const civil = [
  {
    value: "Soltero",
    label: "Soltero",
  },
  {
    value: "Casado",
    label: "Casado",
  },
  {
    value: "Divorciado",
    label: "Divorciado",
  },
  {
    value: "Viudo",
    label: "Viudo",
  },
  {
    value: "Unido",
    label: "Unido",
  },
  {
    value: "Otra",
    label: "Otra",
  },
];

const life = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

const validate = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

export default function SonForm(props) {
  let [valuess, setValue] = useState({});

  const gettingValue = (name, e) => {
    // // let { name } = e.target;
    // let { value } = e.target;
    // console.log(`${value}.${name}`);
    // setValue(`${value}.${name}`);
    const nvalues = {
      ...valuess,
      [name]: e.target.value,
    };
    console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setValue(nvalues);
  };

  const [valuesPhone, setPhone] = useState("");
  const gettingPhone = (e, index) => {
    let { value } = e.target;
    setPhone(value);
  };

  const [valuesWorking, setWorking] = useState("");
  const gettingWorking = (index, e) => {
    let { value } = e.target;
    setWorking(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      family_son_name,
      family_son_age,
      family_son_status,
      family_son_place,
      family_son_company,
      family_son_financial_income,
      family_son_phone,
      family_son_depend,
      family_son_no_phone,
      family_son_time_died,
      family_son_reason_died,
      family_son_life,
      family_son_phone_val,
      family_son_working_val,
    },
  } = props;

  return (
    !isSSR && (
      <>
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1400,
                height: 1000,
              },
            }}
            display="flex"
            justifyContent="center"
            paddingTop={5}
          >
            <Paper elevation={24} style={{ maxHeight: 1020, overflow: "auto" }}>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                  paddingTop: "15px",
                }}
              >
                Información General
              </Typography>

              <Divider style={{ paddingTop: "20px" }}>
                <Chip
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  label="Hijos"
                />
              </Divider>
              <p
                style={{
                  paddingLeft: "15px",
                  paddingTop: "10px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Ingrese la información de sus hijos
              </p>

              <Grid
                container
                style={{
                  paddingTop: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FieldArray
                  name="son"
                  render={(arrayHelpers) => (
                    <>
                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [family_son_name.name]: "",
                            [family_son_age.name]: "",
                            [family_son_status.name]: "",
                            [family_son_place.name]: "",
                            [family_son_company.name]: "",
                            [family_son_financial_income.name]: "",
                            [family_son_phone.name]: "",
                            [family_son_depend.name]: "",
                            [family_son_no_phone.name]: "",
                            [family_son_time_died.name]: "",
                            [family_son_reason_died.name]: "",
                            [family_son_life.name]: "",
                            [family_son_phone_val.name]: "",
                            [family_son_working_val.name]: "",
                          })
                        }
                      >
                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                        {/* <p style={{ color: "black", fontSize: "20px" }}> Agregar  </p> */}
                      </IconButton>
                      {(values.son || []).map((_, index) => (
                        <Grid
                          key={`inputSon_${index}`}
                          item
                          xs={12}
                          sm={6}
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <>
                            <div
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                ¿Aún Vive?:
                              </label>
                              {`son.${index}.${family_son_life.name}`}
                              <SelectField
                                key={`inputSon_${index}`}
                                name={`son.${index}.${family_son_life.name}`}
                                label={family_son_life.label}
                                data={life}
                                onChange={(e) => {
                                  gettingValue(
                                    `son.${index}.${family_son_life.name}`,
                                    e
                                  );
                                }}
                                fullWidth
                              />

                              {valuess[
                                `son.${index}.${family_son_life.name}`
                              ] === "Si" && (
                                <div>
                                  <h1>
                                    {valuess[
                                      `son.${index}.${family_son_life.name}`
                                    ] || "No"}
                                  </h1>

                                  <div style={{ paddingTop: "10px" }}>
                                    <div
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Nombre:
                                      </label>
                                      <p>{`son.${index}.${family_son_name.name}`}</p>
                                      <InputField
                                        name={`son.${index}.${family_son_name.name}`}
                                        label={family_son_name.label}
                                        fullWidth
                                      />
                                    </div>
                                    <div
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Edad:
                                      </label>
                                      <InputField
                                        name={`son.${index}.${family_son_age.name}`}
                                        label={family_son_age.label}
                                        fullWidth
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* {valuess === `No.[${index}]` ? (
                                                                <div>
                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Tiempo fallecido?:
                                                                        </label>
                                                                        <InputField name={`son.${index}.${family_son_time_died.name}`} label={family_son_time_died.label} fullWidth />
                                                                    </div>
                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Razón de fallecimiento?:
                                                                        </label>
                                                                        <InputField name={`son.${index}.${family_son_reason_died.name}`} label={family_son_reason_died.label} fullWidth />
                                                                    </div>
                                                                </div>
                                                            ) : (<h1></h1>)} */}
                            </div>
                          </>
                          <IconButton
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <RemoveCircleIcon sx={{ color: "red" }} />
                          </IconButton>
                        </Grid>
                      ))}
                    </>
                  )}
                />
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </>
    )
  );
}
