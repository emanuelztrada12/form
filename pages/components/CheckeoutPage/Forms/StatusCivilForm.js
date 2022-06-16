import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

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

export default function StatusCivilForm(props) {
  const [dateYear, setDateYear] = useState("");

  const gettingDateYear = (e) => {
    var years =
      new Date(new Date() - new Date(e.target.value)).getFullYear() - 1970;
    setDateYear(years);
  };



  // const handleChangeInputLicencia = (index, event) => {
  //     const values = [...inputLicencia];
  //     values[index][event.target.name] = event.target.value;
  //     setLicencia(values);
  // }

  // const handleAddFieldsLicencia = () => {
  //     setLicencia([...inputLicencia, { general_license: '', general_license_type: '', general_license_expire: '' }]);
  // }

  // const handleRemoveFieldsLicencia = (index) => {
  //     const values = [...inputLicencia];
  //     values.splice(index, 1);
  //     setLicencia(values);
  // }

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      general_name,
      general_lastname,
      general_age,
      general_birth,
      general_place_birth,
      general_civil_status,
      general_profession,
      general_direction,
      general_time_reside,
      general_emergency_name,
      general_emergency_kinship,
      general_previous_direction,
      general_phone,
      general_emergency_phone,
      general_dpi,
      general_nit,
      general_igss,
      general_irtra,
      general_email,
      general_license,
      general_license_expire,
      general_license_type,
      general_brand,
      general_model,
    },
  } = props;

  // vehiculo
  const [inputVehiculos, setVehiculo] = useState([
    { general_model: "", general_brand: "" },
  ]);

  // licencia
  const [inputLicense, setLicencia] = useState([
    { general_license: "", general_license_type: "", general_license_expire: "" },
  ]);

  const handleChangeInput = (index, event, name) => {
    const values = [...inputVehiculos];
    values[index][name] = event.target.value;
    setVehiculo(values);
    // console.info(
    //   `\n\n==> { inputVehiculos }\n`,
    //   { inputVehiculos, values },
    //   `\n`,
    //   ``
    // );
  };

  const handleAddFields = () => {
    setVehiculo([...inputVehiculos, { general_model: "", general_brand: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputVehiculos];
    values.splice(index, 1);
    setVehiculo(values);
  };

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
                }}
              >
                Información General
              </Typography>
              <Divider style={{ paddingTop: "20px" }}>
                <Chip
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  label="Datos Personales"
                />
              </Divider>
              <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Nombres:
                  </label>
                  <InputField
                    name={general_name.name}
                    label={general_name.label}
                    fullWidth
                  />
                  <InputField
                    name={"new_field_on_fly"}
                    label={general_name.label}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Apellidos:
                  </label>
                  <InputField
                    name={general_lastname.name}
                    label={general_lastname.label}
                    fullWidth
                  />
                </Grid>
              </Grid>
              {/* 
                        <Grid container style={{ paddingTop: "10px" }}>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Fecha de Nacimiento:
                                </label>
                                <DatePickerField name={general_birth.name} label={general_birth.label} onChange={(e) => { gettingDateYear(e) }} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Lugar de Nacimiento:
                                </label>
                                <InputField name={general_place_birth.name} label={general_place_birth.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Edad:
                                </label>
                                <InputField disabled name={general_age.name} label={general_age.label} value={dateYear} defaultValue={dateYear} fullWidth />
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Estado civil:
                                </label>
                                <SelectField
                                    name={general_civil_status.name}
                                    label={general_civil_status.label}
                                    data={civil}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Profesión u Oficio:
                                </label>
                                <InputField name={general_profession.name} label={general_profession.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Dirección de la vivienda:
                                </label>
                                <InputField name={general_direction.name} label={general_direction.label} fullWidth />
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Tiempo de residir en la vivienda:
                                </label>
                                <InputField name={general_time_reside.name} label={general_time_reside.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Dirección anterior:
                                </label>
                                <InputField name={general_previous_direction.name} label={general_previous_direction.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Teléfono celular:
                                </label>
                                <InputField name={general_phone.name} label={general_phone.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    DPI:
                                </label>
                                <InputField name={general_dpi.name} label={general_dpi.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    NIT:
                                </label>
                                <InputField name={general_nit.name} label={general_nit.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Email:
                                </label>
                                <InputField name={general_email.name} label={general_email.label} fullWidth />
                            </Grid>
                        </Grid>

                        <Divider style={{ paddingTop: "20px" }}>
                            <Chip
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                                label="En caso de emergencias"
                            />
                        </Divider>
                        <Grid container style={{ paddingTop: "18px" }}>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Teléfono de emergencia:
                                </label>
                                <InputField name={general_emergency_phone.name} label={general_emergency_phone.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Nombre:
                                </label>
                                <InputField name={general_emergency_name.name} label={general_emergency_name.label} fullWidth />
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Parentesco:
                                </label>
                                <InputField name={general_emergency_kinship.name} label={general_emergency_kinship.label} fullWidth />
                            </Grid>
                        </Grid>

                        <Divider style={{ paddingTop: "20px" }}>
                            <Chip
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                                label="Afilaciones"
                            />
                        </Divider>
                        <Grid container style={{ paddingTop: "18px" }}>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Afilación IRTRA:
                                </label>
                                <InputField name={general_irtra.name} label={general_irtra.label} fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Afilación IGSS:
                                </label>
                                <InputField name={general_igss.name} label={general_igss.label} fullWidth />
                            </Grid>
                        </Grid> */}

              <Divider style={{ paddingTop: "20px" }}>
                <Chip
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  label="Vehículos"
                />
              </Divider>
              <Grid container style={{ paddingTop: "18px" }}>
                <FieldArray
                  name="vehicle"
                  render={(arrayHelpers) => (
                    <>
                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [general_brand.name]: "",
                            [general_model.name]: "",
                          })
                        }
                      >
                        <AddIcon />
                      </IconButton>
                      {(values.vehicle || []).map((_, index) => (
                        <Grid
                          key={`inputVehiculo_${index}`}
                          item
                          xs={12}
                          sm={6}
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Modelo:
                          </label>
                          <InputField
                            name={`vehicle.${index}.${general_model.name}`}
                            label={general_model.label}

                            fullWidth
                          />
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Marca:
                          </label>
                          <InputField
                            name={`vehicle.${index}.${general_brand.name}`}
                            label={general_brand.label}

                            fullWidth
                          />
                          <IconButton
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </Grid>
                      ))}
                    </>
                  )}
                />
              </Grid>
              <Divider style={{ paddingTop: "20px" }}>
                <Chip
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  label="Licencias"
                />
              </Divider>

              <Grid container style={{ paddingTop: "18px" }}>
                <FieldArray
                  name="license"
                  render={(arrayHelpers) => (
                    <>
                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [general_license.name]: "",
                            [general_license_type.name]: "",
                            [general_license_expire.name]: "",
                          })
                        }
                      >
                        <AddIcon />
                      </IconButton>
                      {(values.license || []).map((_, index) => (
                        <Grid
                          key={`inputLicense${index}`}
                          item
                          xs={12}
                          sm={6}
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Licencia:
                          </label>
                          <InputField
                            name={`license.${index}.${general_license.name}`}
                            label={general_license.label}
                            fullWidth
                          />
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Tipo:
                          </label>
                          <InputField
                            name={`license.${index}.${general_license_type.name}`}
                            label={general_license_type.label}
                            fullWidth
                          />
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Fecha:
                          </label>
                          <DatePickerField
                            name={`license.${index}.${general_license_expire.name}`}
                            // label={general_license_expire.label}
                            fullWidth
                          />
                          <IconButton
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </Grid>
                      ))}
                    </>
                  )}
                />
              </Grid>
              {/* <Grid container style={{ paddingTop: "18px" }}>
                            {
                                inputLicencia.map((inputLicencia, index) => (
                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            Licencia:
                                        </label>
                                        <InputField name={general_license.name} label={general_license.label} value={inputLicencia.license} onChange={event => handleChangeInputLicencia(index, event)} fullWidth />
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            Tipo:
                                        </label>
                                        <InputField name={general_license_type.name} label={general_license_type.label} value={inputLicencia.license_type} onChange={event => handleChangeInputLicencia(index, event)} fullWidth />
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            Fecha de vencimiento:
                                        </label>
                                        <DatePickerField name={general_license_expire.name} label={general_license_expire.label} value={inputLicencia.license_expire} onChange={event => handleChangeInputLicencia(index, event)} fullWidth />
                                        <IconButton
                                            onClick={() => handleRemoveFieldsLicencia(index)}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handleAddFieldsLicencia()}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
                                ))
                            }
                        </Grid> */}
            </Paper>
          </Box>
        </Grid>
      </>
    )
  );
}
