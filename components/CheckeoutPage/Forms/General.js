import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import PersonIcon from "@mui/icons-material/Person";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Alert from "@mui/material/Alert";

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

const validate = [
  {
    value: "Posee",
    label: "Posee",
  },
  {
    value: "No Posee",
    label: "No Posee",
  },
];

const typeLicense = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "M",
    label: "M",
  },
];

export default function General(props) {
  const [dateYear, setDateYear] = useState("");
  const [yearLive, setYearLive] = useState("");
  const [addNit, setAddNit] = useState("");
  const [afilacion, setAfilacion] = useState("");
  const [marriedName, setMarriedName] = useState("");

  const addGeneralNit = (e) => {
    let { value } = e.target;
    setAddNit(value);
  };

  const addMarriedName = (e) => {
    let { value } = e.target;
    setMarriedName(value);
  };

  const selectAfilacion = (e) => {
    let { value } = e.target;
    setAfilacion(value);
  };

  const gettingDateYear = (e) => {
    var years =
      new Date(new Date() - new Date(e.target.value)).getFullYear() - 1970;
    setDateYear(years);
  };

  /* funcion para obtener los datos del input */
  const conditionLive = (e) => {
    const yearLiving = e.target.value;
    setYearLive(yearLiving);
  };

  const alertLive = () => {
    if (yearLive > dateYear) {
      return (
        <Alert severity="warning">
          Tu tiempo de residir no puede ser mayor a tu edad
        </Alert>
      );
    }
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
      /* add  married name */
      general_married_name, // select apellido
      general_lastname_married, // input apellido
      /* ------------------ */
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
      /* add new variables */
      general_nit_select,
      general_afilacion_select,
      /* ----------------- */
      general_igss,
      general_irtra,
      general_email,
      general_license,
      general_license_expire,
      general_license_type,
      general_brand,
      general_model,
      general_model_propetary, // a quien pertenece vehiculo

      /* array de biker */
      general_model_biker,
      general_brand_biker,
      general_model_propetary_biker,
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
            Información General
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
              icon={<PersonIcon />}
              color="primary"
              label="Datos personales"
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

            {/* activar campo de casada */}
            <Grid
              item
              xs={12}
              sm={6}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <div style={{ paddingTop: "10px" }}>
                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                  ¿Posee apellido de casada?:
                </label>
                <SelectField
                  name={general_married_name.name}
                  label={general_married_name.label}
                  onChange={addMarriedName}
                  data={validate}
                  fullWidth
                />
              </div>
            </Grid>
            {marriedName === "Posee" && (
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
                  Apellido de casada:
                </label>
                <InputField
                  name={general_lastname_married.name}
                  label={general_lastname_married.label}
                  fullWidth
                />
              </Grid>
            )}
          </Grid>

          <Grid container style={{ paddingTop: "10px" }}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Fecha de nacimiento:
              </label>
              <DatePickerField
                name={general_birth.name}
                label={general_birth.label}
                onChange={gettingDateYear}
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
                Departamento según su DPI
              </label>
              <InputField
                name={general_place_birth.name}
                label={general_place_birth.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Edad:
              </label>
              <InputField
                disabled
                name={general_age.name}
                label={general_age.label}
                value={dateYear}
                data={dateYear}
                fullWidth
              />
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
                Profesión u Oficio:
              </label>
              <InputField
                name={general_profession.name}
                label={general_profession.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Dirección completa de la vivienda:
              </label>
              <InputField
                name={general_direction.name}
                label={general_direction.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Tiempo de residir en la vivienda:
              </label>
              <InputField
                
                name={general_time_reside.name}
                label={general_time_reside.label}
                onChange={conditionLive}
                fullWidth
              />
              {alertLive()}

              {yearLive == "0" && (
                <>
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Dirección anterior:
                  </label>
                  <InputField
                    name={general_previous_direction.name}
                    label={general_previous_direction.label}
                    fullWidth
                  />
                </>
              )}
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Teléfono celular:
              </label>
              <InputField
                name={general_phone.name}
                label={general_phone.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                DPI:
              </label>
              <InputField
                
                name={general_dpi.name}
                label={general_dpi.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                NIT:
              </label>
              <SelectField
                name={general_nit_select.name}
                label={general_nit_select.label}
                data={validate}
                onChange={addGeneralNit}
                fullWidth
              />
              {addNit === "Posee" && (
                <div style={{ paddingTop: "10px" }}>
                  <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Ingrese su NIT:
                  </label>
                  <InputField
                    
                    name={general_nit.name}
                    label={general_nit.label}
                    fullWidth
                  />
                </div>
              )}
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Email:
              </label>
              <InputField
                name={general_email.name}
                label={general_email.label}
                fullWidth
              />
            </Grid>
          </Grid>

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
              icon={<EmergencyShareIcon />}
              color="primary"
              label="En caso de emergencias"
            />
          </Divider>

          <Grid container style={{ paddingTop: "18px" }}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Teléfono de emergencia:
              </label>
              <InputField
                name={general_emergency_phone.name}
                label={general_emergency_phone.label}
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
                Nombre:
              </label>
              <InputField
                name={general_emergency_name.name}
                label={general_emergency_name.label}
                fullWidth
              />
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
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Parentesco:
              </label>
              <InputField
                name={general_emergency_kinship.name}
                label={general_emergency_kinship.label}
                fullWidth
              />
            </Grid>
          </Grid>

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
              icon={<AssignmentIndIcon />}
              color="primary"
              label="Afiliaciones"
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
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                Afiliación con el IGSS
              </label>
              <SelectField
                name={general_afilacion_select.name}
                label={general_afilacion_select.label}
                data={validate}
                onChange={selectAfilacion}
                fullWidth
              />
              {afilacion === "Posee" && (
                <Grid container style={{ paddingTop: "18px" }}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Afiliación IRTRA:
                    </label>
                    <InputField
                      
                      name={general_irtra.name}
                      label={general_irtra.label}
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
                      Afiliación IGSS:
                    </label>
                    <InputField
                      
                      name={general_igss.name}
                      label={general_igss.label}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
            {/* */}
          </Grid>

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
              icon={<DirectionsCarIcon />}
              color="primary"
              label="Vehículos"
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
            Ingrese si posee algun vehículo
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
              name="vehicle"
              render={(arrayHelpers) => (
                <>
                  <IconButton
                    onClick={() =>
                      arrayHelpers.push({
                        [general_brand.name]: "",
                        [general_model.name]: "",
                        [general_model_propetary.name]: "",
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
                      <Divider
                        style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                          icon={<DirectionsCarIcon />}
                          color="primary"
                          label={index + 1}
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
                              paddingTop: "15px",
                            }}
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
                          </div>

                          <div
                            item
                            xs={12}
                            sm={6}
                            style={{
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              paddingTop: "15px",
                            }}
                          >
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
                          </div>

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
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿A nombre de quien se encuentra el vehículo?:
                            </label>
                            <InputField
                              name={`vehicle.${index}.${general_model_propetary.name}`}
                              label={general_model_propetary.label}
                              fullWidth
                            />
                          </div>
                        </Paper>
                      </Box>

                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [general_brand.name]: "",
                            [general_model.name]: "",
                            [general_model_propetary.name]: "",
                          })
                        }
                      >
                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                        {/* <p style={{ color: "black", fontSize: "20px" }}> Agregar  </p> */}
                      </IconButton>
                      <IconButton onClick={() => arrayHelpers.remove(index)}>
                        <RemoveCircleIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Grid>
                  ))}
                </>
              )}
            />
          </Grid>

          {/* comienza las motocicletas */}
          <Divider style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Chip
              icon={<TwoWheelerIcon />}
              color="primary"
              label="Motocicletas"
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
            Ingrese si posee alguna motocicleta
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
              name="biker"
              render={(arrayHelpers) => (
                <>
                  <IconButton
                    onClick={() =>
                      arrayHelpers.push({
                        [general_brand_biker.name]: "",
                        [general_model_biker.name]: "",
                        [general_model_propetary_biker.name]: "",
                      })
                    }
                  >
                    <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                    {/* <p style={{ color: "black", fontSize: "20px" }}> Agregar  </p> */}
                  </IconButton>
                  {(values.biker || []).map((_, index) => (
                    <Grid
                      key={`inputBiker_${index}`}
                      item
                      xs={12}
                      sm={6}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                      <Divider
                        style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                          icon={<TwoWheelerIcon />}
                          color="primary"
                          label={index + 1}
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
                              paddingTop: "15px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Modelo:
                            </label>
                            <InputField
                              name={`biker.${index}.${general_model_biker.name}`}
                              label={general_model_biker.label}
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
                              paddingTop: "15px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Marca:
                            </label>
                            <InputField
                              name={`biker.${index}.${general_brand_biker.name}`}
                              label={general_brand_biker.label}
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
                              paddingBottom: "10px",
                              paddingTop: "10px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿A nombre de quien se encuentra la motocicleta?:
                            </label>
                            <InputField
                              name={`biker.${index}.${general_model_propetary_biker.name}`}
                              label={general_model_propetary_biker.label}
                              fullWidth
                            />
                          </div>
                        </Paper>
                      </Box>
                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [general_brand_biker.name]: "",
                            [general_model_biker.name]: "",
                            [general_model_propetary_biker.name]: "",
                          })
                        }
                      >
                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                      </IconButton>
                      <IconButton onClick={() => arrayHelpers.remove(index)}>
                        <RemoveCircleIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Grid>
                  ))}
                </>
              )}
            />
          </Grid>

          {/* comienza la divisioon de licencias*/}
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
              icon={<CoPresentIcon />}
              color="primary"
              label="Licencias"
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
            Ingrese si posee alguna licencia
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
                      <Divider
                        style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                          icon={<CoPresentIcon />}
                          color="primary"
                          label={index + 1}
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
                              paddingTop: "15px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              No. Documento:
                            </label>
                            <InputField
                              
                              name={`license.${index}.${general_license.name}`}
                              label={general_license.label}
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
                              paddingTop: "15px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Tipo de licencia:
                            </label>
                            <SelectField
                              name={`license.${index}.${general_license_type.name}`}
                              label={general_license_type.label}
                              data={typeLicense}
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
                              paddingBottom: "10px",
                              paddingTop: "10px",
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Fecha de vencimiento:
                            </label>
                            <DatePickerField
                              name={`license.${index}.${general_license_expire.name}`}
                              fullWidth
                            />
                          </div>
                        </Paper>
                      </Box>

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
                      <IconButton onClick={() => arrayHelpers.remove(index)}>
                        <RemoveCircleIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Grid>
                  ))}
                </>
              )}
            />
          </Grid>
        </Grid>
      </>
    )
  );
}
