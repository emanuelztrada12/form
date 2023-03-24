import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import BoyIcon from "@mui/icons-material/Boy";
import InputAdornment from "@mui/material/InputAdornment";

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

export default function StepBrothersForm(props) {
  let [valuess, setValue] = useState({});
  let [information, setInformation] = useState({});
  const gettingInformation = (name, e) => {
    const nvalues = {
      ...information,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setInformation(nvalues);
  };
  
  /* funcion para obtener los datos del input */
  const [conditionYear, setConditionYear] = useState("");
  const conditionEdad = (e) => {
    const yearLiving = e.target.value;
    // console.log(yearLiving);
    setConditionYear(yearLiving);
  };
  
  const [conditionPhone, setContidionPhone] = useState("");
  const phone = (e) => {
    const phone = e.target.value; 
    console.log(phone);
    setContidionPhone(phone); 
  }; 

  
  const gettingValue = (name, e) => {
    const nvalues = {
      ...valuess,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setValue(nvalues);
  };

  const [valuesPhone, setPhone] = useState({});
  const gettingPhone = (name, e) => {
    const nvalues = {
      ...valuesPhone,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setPhone(nvalues);
  };

  const [valuesWorking, setWorking] = useState({});
  const gettingWorking = (name, e) => {
    // let { value } = e.target;
    const nvalues = {
      ...valuesWorking,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setWorking(nvalues);
  };

  const [valueValidate, setValueValidate] = useState("");
  const gettingValidate = (e) => {
    let { value } = e.target;
    setValueValidate(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      family_validate_stepbrother,
      family_stepbrother_name,
      family_stepbrother_age,
      family_stepbrother_status,
      family_stepbrother_place,
      family_stepbrother_company,
      family_stepbrother_financial_income,
      family_stepbrother_phone,
      family_stepbrother_depend,
      family_stepbrother_no_phone,
      family_stepbrother_time_died,
      family_stepbrother_reason_died,
      family_stepbrother_life,
      family_stepbrother_phone_val,
      family_stepbrother_working_val,
      /* add name and lastname */
      family_stepbrother_died_name,
      family_stepbrother_died_lastname,
      /* select and input information */
      family_stepbrother_has_information,
      family_stepbrother_reason_dont_has,
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
            Datos de los hermanastros
          </Typography>
          <Divider style={{ paddingTop: "20px" }}></Divider>

          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Usted tiene hermanastros?:
              </label>
              <SelectField
                id="family_validate_stepbrother"
                name={family_validate_stepbrother.name}
                label={family_validate_stepbrother.label}
                data={validate}
                onChange={gettingValidate}
                fullWidth
              />
              {valueValidate === "Si" && (
                <div>
                  <p
                    style={{
                      paddingLeft: "15px",
                      paddingTop: "10px",
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Ingrese la información de sus hermanastros
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
                      name="stepbrother"
                      render={(arrayHelpers) => (
                        <>
                          <IconButton
                            onClick={() =>
                              arrayHelpers.push({
                                [family_stepbrother_name.name]: "",
                                [family_stepbrother_age.name]: "",
                                [family_stepbrother_status.name]: "",
                                [family_stepbrother_place.name]: "",
                                [family_stepbrother_company.name]: "",
                                [family_stepbrother_financial_income.name]: "",
                                [family_stepbrother_phone.name]: "",
                                [family_stepbrother_depend.name]: "",
                                [family_stepbrother_no_phone.name]: "",
                                [family_stepbrother_time_died.name]: "",
                                [family_stepbrother_reason_died.name]: "",
                                [family_stepbrother_life.name]: "",
                                [family_stepbrother_phone_val.name]: "",
                                [family_stepbrother_working_val.name]: "",
                                /* add name and lastname */
                                [family_stepbrother_died_name.name]: "",
                                [family_stepbrother_died_lastname.name]: "",
                                /* select and input information */
                                [family_stepbrother_has_information.name]: "",
                                [family_stepbrother_reason_dont_has.name]: "",
                              })
                            }
                          >
                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                          </IconButton>
                          {(values.stepbrother || []).map((_, index) => (
                            <Grid
                              key={`inputstepbrother_${index}`}
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
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
                                  <Divider
                                    style={{
                                      paddingTop: "20px",
                                      paddingBottom: "20px",
                                    }}
                                  >
                                    <Chip
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        paddingTop: "20px",
                                        paddingBottom: "20px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                      }}
                                      icon={<BoyIcon />}
                                      color="primary"
                                      label={`Hermanastro ${index + 1}`}
                                    />
                                  </Divider>
                                  <Box sx={{ flexGrow: 1, maxWidth: "auto" }}>
                                    <Paper elevation={3}>
                                      <div
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                          paddingBottom: "10px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                          }}
                                        >
                                          ¿Posee información?:
                                        </label>
                                        <SelectField
                                          key={`inputstepbrother_${index}`}
                                          name={`stepbrother.${index}.${family_stepbrother_has_information.name}`}
                                          label={
                                            family_stepbrother_has_information.label
                                          }
                                          data={life}
                                          onChange={(e) => {
                                            gettingInformation(
                                              `stepbrother.${index}.${family_stepbrother_has_information.name}`,
                                              e
                                            );
                                          }}
                                          fullWidth
                                        />
                                      </div>
                                      {information[
                                        `stepbrother.${index}.${family_stepbrother_has_information.name}`
                                      ] === "Si" && (
                                        <div>
                                          <div
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{
                                              paddingLeft: "10px",
                                              paddingRight: "10px",
                                              paddingBottom: "10px",
                                              paddingTop: "10px",
                                            }}
                                          >
                                            <label
                                              style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              ¿Aún vive?:
                                            </label>
                                            <SelectField
                                              key={`inputstepbrother_${index}`}
                                              name={`stepbrother.${index}.${family_stepbrother_life.name}`}
                                              label={
                                                family_stepbrother_life.label
                                              }
                                              data={life}
                                              onChange={(e) => {
                                                gettingValue(
                                                  `stepbrother.${index}.${family_stepbrother_life.name}`,
                                                  e
                                                );
                                              }}
                                              fullWidth
                                            />
                                          </div>
                                          {valuess[
                                            `stepbrother.${index}.${family_stepbrother_life.name}`
                                          ] === "Si" && (
                                            <div>
                                              <div>
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
                                                    Nombre completo:
                                                  </label>
                                                  <InputField
                                                    name={`stepbrother.${index}.${family_stepbrother_name.name}`}
                                                    label={
                                                      family_stepbrother_name.label
                                                    }
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
                                                    name={`stepbrother.${index}.${family_stepbrother_age.name}`}
                                                    label={
                                                      family_stepbrother_age.label
                                                    }
                                                    onChange={conditionEdad}
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
                                                    paddingTop: "10px",
                                                  }}
                                                >
                                                  <label
                                                    style={{
                                                      fontSize: "18px",
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    Estado civil:
                                                  </label>
                                                  <SelectField
                                                    name={`stepbrother.${index}.${family_stepbrother_status.name}`}
                                                    label={
                                                      family_stepbrother_status.label
                                                    }
                                                    data={civil}
                                                    fullWidth
                                                  />
                                                </div>

                                                {conditionYear >= 18 && (
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
                                                      style={{
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      ¿Tiene teléfono? :
                                                    </label>
                                                    <SelectField
                                                      name={`stepbrother.${index}.${family_stepbrother_phone_val.name}`}
                                                      label={
                                                        family_stepbrother_phone_val.label
                                                      }
                                                      onChange={phone}
                                                      data={validate}
                                                      
                                                      fullWidth
                                                    />
                                                    <div>
                                                      {conditionPhone  === "Si" && (
                                                        <div
                                                          style={{
                                                            paddingTop: "10px",
                                                          }}
                                                        >
                                                          <div
                                                            item
                                                            xs={12}
                                                            sm={6}
                                                            style={{
                                                              paddingLeft:
                                                                "10px",
                                                              paddingRight:
                                                                "10px",
                                                            }}
                                                          >
                                                            <label
                                                              style={{
                                                                fontSize:
                                                                  "18px",
                                                                fontWeight:
                                                                  "bold",
                                                              }}
                                                            >
                                                              Teléfono:
                                                            </label>
                                                            <InputField
                                                              name={`stepbrother.${index}.${family_stepbrother_phone.name}`}
                                                              label={
                                                                family_stepbrother_phone.label
                                                              }
                                                              fullWidth
                                                            />
                                                          </div>
                                                        </div>
                                                      )}

                                                      {conditionPhone === "No" && (
                                                        <div
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          style={{
                                                            paddingLeft: "10px",
                                                            paddingRight:
                                                              "10px",
                                                            paddingTop: "10px",
                                                          }}
                                                        >
                                                          <label
                                                            style={{
                                                              fontSize: "18px",
                                                              fontWeight:
                                                                "bold",
                                                            }}
                                                          >
                                                            ¿Motivo del por qué
                                                            no tiene teléfono?:
                                                          </label>
                                                          <InputField
                                                            name={`stepbrother.${index}.${family_stepbrother_no_phone.name}`}
                                                            label={
                                                              family_stepbrother_no_phone.label
                                                            }
                                                            fullWidth
                                                          />
                                                        </div>
                                                      )}
                                                    </div>
                                                  </div>
                                                )}

                                                <div
                                                  item
                                                  xs={12}
                                                  sm={6}
                                                  style={{
                                                    paddingLeft: "10px",
                                                    paddingRight: "10px",
                                                    paddingTop: "10px",
                                                    paddingBottom: "10px",
                                                  }}
                                                >
                                                  <label
                                                    style={{
                                                      fontSize: "18px",
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    ¿Labora?:
                                                  </label>
                                                  <SelectField
                                                    name={`stepbrother.${index}.${family_stepbrother_working_val.name}`}
                                                    label={
                                                      family_stepbrother_working_val.label
                                                    }
                                                    data={validate}
                                                    onChange={(e) => {
                                                      gettingWorking(
                                                        `stepbrother.${index}.${family_stepbrother_working_val.name}`,
                                                        e
                                                      );
                                                    }}
                                                    fullWidth
                                                  />
                                                  <div>
                                                    {valuesWorking[
                                                      `stepbrother.${index}.${family_stepbrother_working_val.name}`
                                                    ] === "Si" && (
                                                      <div
                                                        style={{
                                                          paddingTop: "10px",
                                                        }}
                                                      >
                                                        <div
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          style={{
                                                            paddingLeft: "10px",
                                                            paddingRight:
                                                              "10px",
                                                          }}
                                                        >
                                                          <label
                                                            style={{
                                                              fontSize: "18px",
                                                              fontWeight:
                                                                "bold",
                                                            }}
                                                          >
                                                            Puesto donde labora:
                                                          </label>
                                                          <InputField
                                                            name={`stepbrother.${index}.${family_stepbrother_place.name}`}
                                                            label={
                                                              family_stepbrother_place.label
                                                            }
                                                            fullWidth
                                                          />
                                                        </div>
                                                        <div
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          style={{
                                                            paddingLeft: "10px",
                                                            paddingRight:
                                                              "10px",
                                                          }}
                                                        >
                                                          <label
                                                            style={{
                                                              fontSize: "18px",
                                                              fontWeight:
                                                                "bold",
                                                            }}
                                                          >
                                                            Empresa donde
                                                            labora:
                                                          </label>
                                                          <InputField
                                                            name={`stepbrother.${index}.${family_stepbrother_company.name}`}
                                                            label={
                                                              family_stepbrother_company.label
                                                            }
                                                            fullWidth
                                                          />
                                                        </div>
                                                        <div
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          style={{
                                                            paddingLeft: "10px",
                                                            paddingRight:
                                                              "10px",
                                                            paddingTop: "10px",
                                                          }}
                                                        >
                                                          <label
                                                            style={{
                                                              fontSize: "18px",
                                                              fontWeight:
                                                                "bold",
                                                            }}
                                                          >
                                                            Ingresos promedio:
                                                          </label>
                                                          <InputField
                                                            
                                                            name={`stepbrother.${index}.${family_stepbrother_financial_income.name}`}
                                                            label={
                                                              family_stepbrother_financial_income.label
                                                            }
                                                            InputProps={{
                                                              startAdornment: (
                                                                <InputAdornment position="start">
                                                                  Q.
                                                                </InputAdornment>
                                                              ),
                                                            }}
                                                            fullWidth
                                                          />
                                                        </div>
                                                      </div>
                                                    )}

                                                    {valuesWorking[
                                                      `stepbrother.${index}.${family_stepbrother_working_val.name}`
                                                    ] === "No" && (
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
                                                          style={{
                                                            fontSize: "18px",
                                                            fontWeight: "bold",
                                                          }}
                                                        >
                                                          ¿De quién depende
                                                          económicamente?:
                                                        </label>
                                                        <InputField
                                                          name={`stepbrother.${index}.${family_stepbrother_depend.name}`}
                                                          label={
                                                            family_stepbrother_depend.label
                                                          }
                                                          fullWidth
                                                        />
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          )}
                                          {valuess[
                                            `stepbrother.${index}.${family_stepbrother_life.name}`
                                          ] === "No" && (
                                            <div>
                                              {/* add name and lastname */}
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
                                                  style={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  Nombres:
                                                </label>
                                                <InputField
                                                  name={`stepbrother.${index}.${family_stepbrother_died_name.name}`}
                                                  label={
                                                    family_stepbrother_died_name.label
                                                  }
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
                                                  paddingTop: "10px",
                                                }}
                                              >
                                                <label
                                                  style={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  Apellidos:
                                                </label>
                                                <InputField
                                                  name={`stepbrother.${index}.${family_stepbrother_died_lastname.name}`}
                                                  label={
                                                    family_stepbrother_died_lastname.label
                                                  }
                                                  fullWidth
                                                />
                                              </div>
                                              {/* --------------------- */}
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
                                                  style={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  ¿Tiempo fallecido?:
                                                </label>
                                                <InputField
                                                  name={`stepbrother.${index}.${family_stepbrother_time_died.name}`}
                                                  label={
                                                    family_stepbrother_time_died.label
                                                  }
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
                                                  paddingTop: "10px",
                                                  paddingBottom: "10px",
                                                }}
                                              >
                                                <label
                                                  style={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  ¿Razón de fallecimiento?:
                                                </label>
                                                <InputField
                                                  name={`stepbrother.${index}.${family_stepbrother_reason_died.name}`}
                                                  label={
                                                    family_stepbrother_reason_died.label
                                                  }
                                                  fullWidth
                                                />
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                      {information[
                                        `stepbrother.${index}.${family_stepbrother_has_information.name}`
                                      ] === "No" && (
                                        <div
                                          item
                                          xs={12}
                                          sm={6}
                                          style={{
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            paddingBottom: "10px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "18px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            ¿Motivo del por qué no tiene
                                            información?:
                                          </label>
                                          <InputField
                                            name={`stepbrother.${index}.${family_stepbrother_reason_dont_has.name}`}
                                            label={
                                              family_stepbrother_reason_dont_has.label
                                            }
                                            fullWidth
                                          />
                                        </div>
                                      )}
                                    </Paper>
                                  </Box>
                                </div>
                              </>
                              <IconButton
                                onClick={() =>
                                  arrayHelpers.push({
                                    [family_stepbrother_name.name]: "",
                                    [family_stepbrother_age.name]: "",
                                    [family_stepbrother_status.name]: "",
                                    [family_stepbrother_place.name]: "",
                                    [family_stepbrother_company.name]: "",
                                    [family_stepbrother_financial_income.name]:
                                      "",
                                    [family_stepbrother_phone.name]: "",
                                    [family_stepbrother_depend.name]: "",
                                    [family_stepbrother_no_phone.name]: "",
                                    [family_stepbrother_time_died.name]: "",
                                    [family_stepbrother_reason_died.name]: "",
                                    [family_stepbrother_life.name]: "",
                                    [family_stepbrother_phone_val.name]: "",
                                    [family_stepbrother_working_val.name]: "",
                                    /* add name and lastname */
                                    [family_stepbrother_died_name.name]: "",
                                    [family_stepbrother_died_lastname.name]: "",
                                    /* select and input information */
                                    [family_stepbrother_has_information.name]:
                                      "",
                                    [family_stepbrother_reason_dont_has.name]:
                                      "",
                                  })
                                }
                              >
                                <AddBoxIcon
                                  color="primary"
                                  sx={{ fontSize: 30 }}
                                />
                              </IconButton>
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
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  );
}
