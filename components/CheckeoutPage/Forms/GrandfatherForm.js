import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import BoyIcon from "@mui/icons-material/Boy";

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

export default function GrandfatherForm(props) {
  //madre abuelo
  let [valuesstwo, setValuetwo] = useState({});
  const gettingValuetwo = (name, e) => {
    let {value} = e.target; 
    setValuetwo(value)
  };

  const [valuesPhonetwo, setPhonetwo] = useState({});
  const gettingPhonetwo = (name, e) => {
    let {value} = e.target; 
    setPhonetwo(value)
  };

  const [valuesWorkingtwo, setWorkingtwo] = useState({});
  const gettingWorkingtwo = (name, e) => {
    let {value} = e.target; 
    setWorkingtwo(value)
  };

  //madre abuelo
  let [valuessMonTwo, setValueMonTwo] = useState({});
  const gettingValueMonTwo = (name, e) => {
    let {value} = e.target; 
    setValueMonTwo(value)
  };

  const [valuesPhoneMonTwo, setPhoneMonTwo] = useState({});
  const gettingPhoneMonTwo = (name, e) => {
    let {value} = e.target; 
    setPhoneMonTwo(value)
  };

  const [valuesWorkingMonTwo, setWorkworkingMonTwo] = useState({});
  const gettingWorkingMonTwo = (name, e) => {
    let {value} = e.target; 
    setWorkworkingMonTwo(value)
  };

  //Padre
  let [valuess, setValue] = useState({});
  const gettingValue = (name, e) => {
    const nvalues = {
      ...valuess,
      [name]: e.target.value,
    };
    setValue(nvalues);
  };

  const [valuesPhone, setPhone] = useState({});
  const gettingPhone = (name, e) => {
    const nvalues = {
      ...valuesPhone,
      [name]: e.target.value,
    };
    setPhone(nvalues);
  };

  const [valuesWorking, setWorking] = useState({});
  const gettingWorking = (name, e) => {
    // let { value } = e.target;
    const nvalues = {
      ...valuesWorking,
      [name]: e.target.value,
    };
    setWorking(nvalues);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      //padre
      family_grandfather_name,
      family_grandfather_age,
      family_grandfather_status,
      family_grandfather_place,
      family_grandfather_company,
      family_grandfather_financial_income,
      family_grandfather_phone,
      family_grandfather_depend,
      family_grandfather_no_phone,
      family_grandfather_time_died,
      family_grandfather_reason_died,
      family_grandfather_life,
      family_grandfather_phone_val,
      family_grandfather_working_val,
      family_grandfather_lifeno_name,
      family_grandfather_lifeno_firstname,
      family_grandmother_name,
      family_grandmother_age,
      family_grandmother_status,
      family_grandmother_place,
      family_grandmother_company,
      family_grandmother_financial_income,
      family_grandmother_phone,
      family_grandmother_depend,
      family_grandmother_no_phone,
      family_grandmother_time_died,
      family_grandmother_reason_died,
      family_grandmother_life,
      family_grandmother_phone_val,
      family_grandmother_working_val,
      family_grandmother_lifeno_name,
      family_grandmother_lifeno_firstname,

      //madre
      family_grandfather_nametwo,
      family_grandfather_agetwo,
      family_grandfather_statustwo,
      family_grandfather_placetwo,
      family_grandfather_companytwo,
      family_grandfather_financial_incometwo,
      family_grandfather_phonetwo,
      family_grandfather_dependtwo,
      family_grandfather_no_phonetwo,
      family_grandfather_time_diedtwo,
      family_grandfather_reason_diedtwo,
      family_grandfather_lifetwo,
      family_grandfather_phone_valtwo,
      family_grandfather_working_valtwo,
      family_grandfather_lifeno_nametwo,
      family_grandfather_lifeno_firstnametwo,
      family_grandmother_nametwo,
      family_grandmother_agetwo,
      family_grandmother_statustwo,
      family_grandmother_placetwo,
      family_grandmother_companytwo,
      family_grandmother_financial_incometwo,
      family_grandmother_phonetwo,
      family_grandmother_dependtwo,
      family_grandmother_no_phonetwo,
      family_grandmother_time_diedtwo,
      family_grandmother_reason_diedtwo,
      family_grandmother_lifetwo,
      family_grandmother_phone_valtwo,
      family_grandmother_working_valtwo,
      family_grandmother_lifeno_nametwo,
      family_grandmother_lifeno_firstnametwo,
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
            Datos de los Abuelos
          </Typography>
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
              label={`Abuelos por parte del padre`}
            />
          </Divider>
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
            <Grid container>
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
                <Box sx={{ flexGrow: 1, maxWidth: 750 }}>
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
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Aún Vive?:
                      </label>
                      <SelectField
                        name={family_grandfather_life.name}
                        label={family_grandfather_life.label}
                        data={life}
                        onChange={(e) => {
                          gettingValue(`family_grandfather_life.name}`, e);
                        }}
                        fullWidth
                      />
                    </div>
                    {valuess[`family_grandfather_life.name}`] === "Si" && (
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Nombre:
                            </label>
                            <InputField
                              name={family_grandfather_name.name}
                              label={family_grandfather_name.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Edad:
                            </label>
                            <InputField
                              name={family_grandfather_age.name}
                              label={family_grandfather_age.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Estado civil:
                            </label>
                            <SelectField
                              name={family_grandfather_status.name}
                              label={family_grandfather_status.label}
                              data={civil}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiene teléfono?:
                            </label>
                            <SelectField
                              name={family_grandfather_phone_val.name}
                              label={family_grandfather_phone_val.label}
                              data={validate}
                              onChange={(e) => {
                                gettingPhone(
                                  `family_grandfather_phone_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesPhone[
                                `family_grandfather_phone_val.name}`
                              ] === "Si" && (
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
                                      Teléfono:
                                    </label>
                                    <InputField
                                      name={family_grandfather_phone.name}
                                      label={family_grandfather_phone.label}
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesPhone[
                                `family_grandfather_phone_val.name}`
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
                                    ¿Motivo del por qué no tiene teléfono?:
                                  </label>
                                  <InputField
                                    name={family_grandfather_no_phone.name}
                                    label={family_grandfather_no_phone.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Labora?:
                            </label>
                            <SelectField
                              name={family_grandfather_working_val.name}
                              label={family_grandfather_working_val.label}
                              data={validate}
                              onChange={(e) => {
                                gettingWorking(
                                  `family_grandfather_working_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesWorking[
                                `family_grandfather_working_val.name}`
                              ] === "Si" && (
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
                                      Puesto donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandfather_place.name}
                                      label={family_grandfather_place.label}
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
                                      Empresa donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandfather_company.name}
                                      label={family_grandfather_company.label}
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
                                      Ingresos promedio:
                                    </label>
                                    <InputField
                                      name={
                                        family_grandfather_financial_income.name
                                      }
                                      label={
                                        family_grandfather_financial_income.label
                                      }
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesWorking[
                                `family_grandfather_working_val.name}`
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
                                    ¿De quién depende económicamente?:
                                  </label>
                                  <InputField
                                    name={family_grandfather_depend.name}
                                    label={family_grandfather_depend.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {valuess[`family_grandfather_life.name}`] === "No" && (
                      <Grid container>
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
                          <div>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Nombre?:
                          </label>
                          <InputField
                            name={family_grandfather_lifeno_name.name}
                            label={family_grandfather_lifeno_name.label}
                            fullWidth
                          />
                          </div>
                        
                          <div style={{paddingTop: "10px"}}>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Tiempo fallecido?:
                          </label>
                          <InputField
                            name={family_grandfather_time_died.name}
                            label={family_grandfather_time_died.label}
                            fullWidth
                          />
                          </div>
                          
                        </Grid>
                        <Grid
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
                          <div>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Apellido?:
                          </label>
                          <InputField
                            name={family_grandfather_lifeno_firstname.name}
                            label={family_grandfather_lifeno_firstname.label}
                            fullWidth
                          />
                          </div>
                         
                         <div style={{paddingTop: "10px"}}>
                         <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Razón de fallecimiento?:
                          </label>
                          <InputField
                            name={family_grandfather_reason_died.name}
                            label={family_grandfather_reason_died.label}
                            fullWidth
                          />
                         </div>
                         
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Box>
              </Grid>

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
                <Box sx={{ flexGrow: 1, maxWidth: 750 }}>
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
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Aún Vive?:
                      </label>
                      <SelectField
                        name={family_grandmother_life.name}
                        label={family_grandmother_life.label}
                        data={life}
                        onChange={(e) => {
                          gettingValue(`family_grandmother_life.name}`, e);
                        }}
                        fullWidth
                      />
                    </div>
                    {valuess[`family_grandmother_life.name}`] === "Si" && (
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Nombre:
                            </label>
                            <InputField
                              name={family_grandmother_name.name}
                              label={family_grandmother_name.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Edad:
                            </label>
                            <InputField
                              name={family_grandmother_age.name}
                              label={family_grandmother_age.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Estado civil:
                            </label>
                            <SelectField
                              name={family_grandmother_status.name}
                              label={family_grandmother_status.label}
                              data={civil}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiene teléfono?:
                            </label>
                            <SelectField
                              name={family_grandmother_phone_val.name}
                              label={family_grandmother_phone_val.label}
                              data={validate}
                              onChange={(e) => {
                                gettingPhone(
                                  `family_grandmother_phone_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesPhone[
                                `family_grandmother_phone_val.name}`
                              ] === "Si" && (
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
                                      Teléfono:
                                    </label>
                                    <InputField
                                      name={family_grandmother_phone.name}
                                      label={family_grandmother_phone.label}
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesPhone[
                                `family_grandmother_phone_val.name}`
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
                                    ¿Motivo del por qué no tiene teléfono?:
                                  </label>
                                  <InputField
                                    name={family_grandmother_no_phone.name}
                                    label={family_grandmother_no_phone.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Labora?:
                            </label>
                            <SelectField
                              name={family_grandmother_working_val.name}
                              label={family_grandmother_working_val.label}
                              data={validate}
                              onChange={(e) => {
                                gettingWorking(
                                  `family_grandmother_working_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesWorking[
                                `family_grandmother_working_val.name}`
                              ] === "Si" && (
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
                                      Puesto donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandmother_place.name}
                                      label={family_grandmother_place.label}
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
                                      Empresa donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandmother_company.name}
                                      label={family_grandmother_company.label}
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
                                      Ingresos promedio:
                                    </label>
                                    <InputField
                                      name={
                                        family_grandmother_financial_income.name
                                      }
                                      label={
                                        family_grandmother_financial_income.label
                                      }
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesWorking[
                                `family_grandmother_working_val.name}`
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
                                    ¿De quién depende económicamente?:
                                  </label>
                                  <InputField
                                    name={family_grandmother_depend.name}
                                    label={family_grandmother_depend.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {valuess[`family_grandmother_life.name}`] === "No" && (
                      <Grid container>
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
                          <div>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Nombre?:
                            </label>
                            <InputField
                              name={family_grandmother_lifeno_name.name}
                              label={family_grandmother_lifeno_name.label}
                              fullWidth
                            />
                          </div>

                          <div style={{ paddingTop: "10px" }}>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiempo fallecido?:
                            </label>
                            <InputField
                              name={family_grandmother_time_died.name}
                              label={family_grandmother_time_died.label}
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid
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
                          <div>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Apellido?:
                            </label>
                            <InputField
                              name={family_grandmother_lifeno_firstname.name}
                              label={family_grandmother_lifeno_firstname.label}
                              fullWidth
                            />
                          </div>

                          <div style={{ paddingTop: "10px" }}>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Razón de fallecimiento?:
                            </label>
                            <InputField
                              name={family_grandmother_reason_died.name}
                              label={family_grandmother_reason_died.label}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
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
              label={`Abuelos por parte de la madre`}
            />
          </Divider>
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
            <Grid container>
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
                <Box sx={{ flexGrow: 1, maxWidth: 750 }}>
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
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Aún Vive?:
                      </label>
                      <SelectField
                        name={family_grandfather_lifetwo.name}
                        label={family_grandfather_lifetwo.label}
                        data={life}
                        onChange={(e) => {
                          gettingValuetwo(`family_grandfather_life.name}`, e);
                        }}
                        fullWidth
                      />
                    </div>
                    {valuesstwo === "Si" && (
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Nombre:
                            </label>
                            <InputField
                              name={family_grandfather_nametwo.name}
                              label={family_grandfather_nametwo.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Edad:
                            </label>
                            <InputField
                              name={family_grandfather_agetwo.name}
                              label={family_grandfather_agetwo.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Estado civil:
                            </label>
                            <SelectField
                              name={family_grandfather_statustwo.name}
                              label={family_grandfather_statustwo.label}
                              data={civil}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiene teléfono?:
                            </label>
                            <SelectField
                              name={family_grandfather_phone_valtwo.name}
                              label={family_grandfather_phone_valtwo.label}
                              data={validate}
                              onChange={(e) => {
                                gettingPhonetwo(
                                  `family_grandfather_phone_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesPhonetwo  === "Si" && (
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
                                      Teléfono:
                                    </label>
                                    <InputField
                                      name={family_grandfather_phonetwo.name}
                                      label={family_grandfather_phonetwo.label}
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesPhonetwo === "No" && (
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
                                    ¿Motivo del por qué no tiene teléfono?:
                                  </label>
                                  <InputField
                                    name={family_grandfather_no_phonetwo.name}
                                    label={family_grandfather_no_phonetwo.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Labora?:
                            </label>
                            <SelectField
                              name={family_grandfather_working_valtwo.name}
                              label={family_grandfather_working_valtwo.label}
                              data={validate}
                              onChange={(e) => {
                                gettingWorkingtwo(
                                  `family_grandfather_working_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesWorkingtwo === "Si" && (
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
                                      Puesto donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandfather_placetwo.name}
                                      label={family_grandfather_placetwo.label}
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
                                      Empresa donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandfather_companytwo.name}
                                      label={family_grandfather_companytwo.label}
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
                                      Ingresos promedio:
                                    </label>
                                    <InputField
                                      name={
                                        family_grandfather_financial_incometwo.name
                                      }
                                      label={
                                        family_grandfather_financial_incometwo.label
                                      }
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesWorkingtwo === "No" && (
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
                                    ¿De quién depende económicamente?:
                                  </label>
                                  <InputField
                                    name={family_grandfather_dependtwo.name}
                                    label={family_grandfather_dependtwo.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {valuesstwo  === "No" && (
                      <Grid container>
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
                          <div>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Nombre?:
                          </label>
                          <InputField
                            name={family_grandfather_lifeno_nametwo.name}
                            label={family_grandfather_lifeno_nametwo.label}
                            fullWidth
                          />
                          </div>
                        
                          <div style={{paddingTop: "10px"}}>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Tiempo fallecido?:
                          </label>
                          <InputField
                            name={family_grandfather_time_diedtwo.name}
                            label={family_grandfather_time_diedtwo.label}
                            fullWidth
                          />
                          </div>
                          
                        </Grid>
                        <Grid
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
                          <div>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Apellido?:
                          </label>
                          <InputField
                            name={family_grandfather_lifeno_firstnametwo.name}
                            label={family_grandfather_lifeno_firstnametwo.label}
                            fullWidth
                          />
                          </div>
                         
                         <div style={{paddingTop: "10px"}}>
                         <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Razón de fallecimiento?:
                          </label>
                          <InputField
                            name={family_grandfather_reason_diedtwo.name}
                            label={family_grandfather_reason_diedtwo.label}
                            fullWidth
                          />
                         </div>
                         
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Box>
              </Grid>

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
                <Box sx={{ flexGrow: 1, maxWidth: 750 }}>
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
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Aún Vive?:
                      </label>
                      <SelectField
                        name={family_grandmother_lifetwo.name}
                        label={family_grandmother_lifetwo.label}
                        data={life}
                        onChange={(e) => {
                          gettingValueMonTwo(`family_grandmother_life.name}`, e);
                        }}
                        fullWidth
                      />
                    </div>
                    {valuessMonTwo === "Si" && (
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Nombre:
                            </label>
                            <InputField
                              name={family_grandmother_nametwo.name}
                              label={family_grandmother_nametwo.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Edad:
                            </label>
                            <InputField
                              name={family_grandmother_agetwo.name}
                              label={family_grandmother_agetwo.label}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Estado civil:
                            </label>
                            <SelectField
                              name={family_grandmother_statustwo.name}
                              label={family_grandmother_statustwo.label}
                              data={civil}
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiene teléfono?:
                            </label>
                            <SelectField
                              name={family_grandmother_phone_valtwo.name}
                              label={family_grandmother_phone_valtwo.label}
                              data={validate}
                              onChange={(e) => {
                                gettingPhoneMonTwo(
                                  `family_grandmother_phone_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesPhoneMonTwo  === "Si" && (
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
                                      Teléfono:
                                    </label>
                                    <InputField
                                      name={family_grandmother_phonetwo.name}
                                      label={family_grandmother_phonetwo.label}
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesPhoneMonTwo === "No" && (
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
                                    ¿Motivo del por qué no tiene teléfono?:
                                  </label>
                                  <InputField
                                    name={family_grandmother_no_phonetwo.name}
                                    label={family_grandmother_no_phonetwo.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Labora?:
                            </label>
                            <SelectField
                              name={family_grandmother_working_valtwo.name}
                              label={family_grandmother_working_valtwo.label}
                              data={validate}
                              onChange={(e) => {
                                gettingWorkingMonTwo(
                                  `family_grandmother_working_val.name}`,
                                  e
                                );
                              }}
                              fullWidth
                            />
                            <div>
                              {valuesWorkingMonTwo === "Si" && (
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
                                      Puesto donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandmother_placetwo.name}
                                      label={family_grandmother_placetwo.label}
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
                                      Empresa donde labora:
                                    </label>
                                    <InputField
                                      name={family_grandmother_companytwo.name}
                                      label={family_grandmother_companytwo.label}
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
                                      Ingresos promedio:
                                    </label>
                                    <InputField
                                      name={
                                        family_grandmother_financial_incometwo.name
                                      }
                                      label={
                                        family_grandmother_financial_incometwo.label
                                      }
                                      fullWidth
                                    />
                                  </div>
                                </div>
                              )}

                              {valuesWorkingMonTwo === "No" && (
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
                                    ¿De quién depende económicamente?:
                                  </label>
                                  <InputField
                                    name={family_grandmother_dependtwo.name}
                                    label={family_grandmother_dependtwo.label}
                                    fullWidth
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {valuessMonTwo === "No" && (
                      <Grid container>
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
                          <div>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Nombre?:
                            </label>
                            <InputField
                              name={family_grandmother_lifeno_nametwo.name}
                              label={family_grandmother_lifeno_nametwo.label}
                              fullWidth
                            />
                          </div>

                          <div style={{ paddingTop: "10px" }}>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Tiempo fallecido?:
                            </label>
                            <InputField
                              name={family_grandmother_time_diedtwo.name}
                              label={family_grandmother_time_diedtwo.label}
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid
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
                          <div>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Apellido?:
                            </label>
                            <InputField
                              name={family_grandmother_lifeno_firstnametwo.name}
                              label={family_grandmother_lifeno_firstnametwo.label}
                              fullWidth
                            />
                          </div>

                          <div style={{ paddingTop: "10px" }}>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Razón de fallecimiento?:
                            </label>
                            <InputField
                              name={family_grandmother_reason_diedtwo.name}
                              label={family_grandmother_reason_diedtwo.label}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  );
}
