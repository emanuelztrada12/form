import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
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

export default function General(props) {
  const [dateYear, setDateYear] = useState("");

  const gettingDateYear = (e) => {
    var years =
      new Date(new Date() - new Date(e.target.value)).getFullYear() - 1970;
    setDateYear(years);
  };

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

  return (
    !isSSR && (
      <>
        <Grid>
          {/* <Box
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
            <Paper elevation={24} style={{ maxHeight: 1020, overflow: "auto" }}> */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "40px",
              paddingLeft: "10px"
            }}
          >

            Información General
          </Typography>
          <Divider style={{ paddingTop: "20px" }}>
            <Chip
              style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
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
              {/* <InputField
                    name={"new_field_on_fly"}
                    label={general_name.label}
                    fullWidth
                  /> */}
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

          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Fecha de Nacimiento:
              </label>
              <DatePickerField name={general_birth.name} label={general_birth.label} onChange={gettingDateYear} fullWidth />
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
              <InputField disabled name={general_age.name} label={general_age.label} value={dateYear} data={dateYear} fullWidth />
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
              style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
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
              style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
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
          </Grid>

          <Divider style={{ paddingTop: "20px" }}>
            <Chip
              style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
              label="Vehículos"
            />
          </Divider>
          <p style={{ paddingLeft: "15px", paddingTop: "10px", fontSize: "20px", display: "flex", justifyContent: "center" }}>Ingrese si posee algun vehículo</p>

          <Grid container style={{ paddingTop: "18px", display: "flex", justifyContent: "center" }}>
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
                    <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                    {/* <p style={{ color: "black", fontSize: "20px" }}> Agregar  </p> */}
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
                        <RemoveCircleIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Grid>
                  ))}
                </>
              )}
            />
          </Grid>
          <Divider style={{ paddingTop: "20px" }}>
            <Chip
              style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
              label="Licencias"
            />
          </Divider>
          <p style={{ paddingLeft: "15px", paddingTop: "10px", fontSize: "20px", display: "flex", justifyContent: "center" }}>Ingrese si posee alguna licencia</p>
          <Grid container style={{ paddingTop: "18px", display: "flex", justifyContent: "center" }}>
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
                    <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                    {/* <p style={{ color: "black", fontSize: "20px" }}> Agregar  </p> */}
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
                        No. licencia:
                      </label>
                      <InputField
                        name={`license.${index}.${general_license.name}`}
                        label={general_license.label}
                        fullWidth
                      />
                      <label
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Tipo de licencia:
                      </label>
                      <InputField
                        name={`license.${index}.${general_license_type.name}`}
                        label={general_license_type.label}
                        fullWidth
                      />
                      <label
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Fecha de vencimiento:
                      </label>
                      <DatePickerField
                        name={`license.${index}.${general_license_expire.name}`}
                        fullWidth
                      />
                      <IconButton
                        style={{ paddingBottom: "20px" }}
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
          {/* </Paper>
          </Box> */}
        </Grid>
      </>
    )
  );
}
