import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InputAdornment from "@mui/material/InputAdornment";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Alert from "@mui/material/Alert";


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

const banking = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

const had_page_data = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

const value_relation = [
  {
    value: "Ti@",
    label: "Ti@",
  },
  {
    value: "Herman@",
    label: "Herman@",
  },
  {
    value: "Padre",
    label: "Padre",
  },
  {
    value: "Madre",
    label: "Madre",
  },
  {
    value: "Sobrin@",
    label: "Sobrin@",
  },
];
export default function WorkForm(props) {
  const [dateYear, setDateYear] = useState("");
  const [yearLive, setYearLive] = useState("");
  const [yearActual, setYearActual] = useState("");
  let [valuess, setValue] = useState({});
  const gettingValue = (name, e) => {
    const nvalues = {
      ...valuess,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setValue(nvalues);
  };


  const dateFuncion = () => {
    const time = new Date();
    const [dateIso, date] = time.toISOString().split('T'); 
    // console.log([dateIso]);
    return [dateIso]; 
  }


  const [entity, setEntity] = useState("");
  const gettinEntity = (e) => {
    let { value } = e.target;
    setEntity(value);
  };

  const [relationFamily, setRelationFamily] = useState("");
  const gettinRelation = (e) => {
    let { value } = e.target;
    setRelationFamily(value);
  };

  const [had_page, setHadPage] = useState("");
  const gettinHadPage = (e) => {
    let { value } = e.target;
    setHadPage(value);
  };
  const [valueValidate, setValueValidate] = useState({});
  const gettingValidate = (name, e) => {
    const nvalues = {
      ...valuess,
      [name]: e.target.value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setValueValidate(nvalues);
  };

  const [valueNe, setValueNe] = useState({});
  const gettingValueNe = (e) => {
    const { value } = e.target;
    setValueNe(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  /* funcion para obtener los datos del input */
  const conditionLive = (e) => {
    const yearLiving = e.target.value;
    setYearLive(yearLiving);
  };

  const alertLive = () => {
    if (yearLive > dateYear) {
      return (
        <Alert severity="warning">
          Tu fecha de ingreso no puede ser mayor a la de egreso
        </Alert>
      );
    }
  };

  /* funcion para obtener los datos del input */
  const conditionLiveTwo = (e) => {
    const yearLivingTwo = e.target.value;
    setDateYear(yearLivingTwo);
  };

  const alertLiveTwo = () => {
    if (dateYear < yearLive) {
      return (
        <Alert severity="warning">
          Tu fecha de egreso no puede ser menor a la de ingreso
        </Alert>
      );
    } 
    // else if (dateYear > yearActual) {
    //   return (
    //     <Alert severity="warning">
    //       Tu fecha de egreso no puede ser mayor al año actual
    //     </Alert>
    //   );
    // }
  };

  const {
    values,
    formField: {
      work_name,
      work_position,
      work_entry,
      work_withdrawal,
      work_salary,
      work_boss,
      work_chiefposition,
      work_phone,
      work_phone_boss,
      work_withdrawalreason,
      work_phone_val,
      work_phone_reason,
      work_reference,
      work_reference_reason,
      work_banrural,
      work_valNe,
      work_ne_name,
      work_ne_web,
      work_ne_dateInit,
      work_ne_detailIncome,
      work_ne_whatwill,
      /* add new data */
      work_select_entity,
      work_had_page,

      // changes 2.3
      work_name_entity,
      work_lsname_entity,
      work_bank,
      work_relation,
    },
  } = props;

  return (
    !isSSR && (
      <>
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
          Información laboral
        </Typography>
        <Divider style={{ paddingTop: "20px" }}></Divider>
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
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Ha laborado alguna vez en el Grupo Financiero Banrural?:
              </label>
              <SelectField
                // key={`inputwork_${index}`}
                name={work_banrural.name}
                label={work_banrural.label}
                data={validate}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Posee algún negocio?:
              </label>
              <SelectField
                name={work_valNe.name}
                label={work_valNe.label}
                data={validate}
                onChange={(e) => {
                  gettingValueNe(e);
                }}
                fullWidth
                style={{ paddingBottom: "40px" }}
              />
              {valueNe === "Si" && (
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
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Nombre del negocio:
                    </label>
                    <InputField
                      name={work_ne_name.name}
                      label={work_ne_name.label}
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
                      ¿Tiene página web?:
                    </label>
                    <SelectField
                      // key={`inputwork_${index}`}
                      name={work_had_page.name}
                      label={work_had_page.label}
                      data={had_page_data}
                      onChange={(e) => {
                        gettinHadPage(e);
                      }}
                      fullWidth
                    />
                    {had_page === "Si" && (
                      <Grid>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          Página del negocio:
                        </label>
                        <InputField
                          name={work_ne_web.name}
                          label={work_ne_web.label}
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
                      paddingTop: "10px",
                    }}
                  >
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Fecha de inicio:
                    </label>
                    <DatePickerField
                      name={work_ne_dateInit.name}
                      label={work_ne_dateInit.label}
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
                      Detallar ganancias:
                    </label>
                    <InputField
                      name={work_ne_detailIncome.name}
                      label={work_ne_detailIncome.label}
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
                      paddingBottom: "40px",
                    }}
                  >
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Qué hará con el negocio si es contratado?:
                    </label>
                    <InputField
                      name={work_ne_whatwill.name}
                      label={work_ne_whatwill.label}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* 
                    aditional data 
                */}
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
        </Grid>

        <Grid item xs={12} sm={6} style={{
          paddingLeft: "10px",
          paddingRight: "10px",
        }}>
          <label style={{ fontSize: "18px", fontWeight: "bold" }}>
            ¿Posee un familiar en una entidad bancaria?:
          </label>
          <SelectField
            // key={`inputwork_${index}`}
            name={work_select_entity.name}
            label={work_select_entity.label}
            data={banking}
            onChange={(e) => {
              gettinEntity(e);
            }}
            fullWidth
          />
          {entity === "Si" && (
            <Grid container>
              <Grid
                container
                style={{
                  paddingTop: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    paddingLeft: "15px",
                    paddingTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
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
                    name="workFamilyBanck"
                    render={(arrayHelpers) => (
                      <>
                        <IconButton
                          onClick={() =>
                            arrayHelpers.push({
                              [work_name_entity.name]: "",
                              [work_lsname_entity.name]: "",
                              [work_bank.name]: "",
                              [work_relation.name]: "",
                            })
                          }
                        >
                          <AddBoxIcon
                            color="primary"
                            sx={{ fontSize: 30 }}
                          />
                        </IconButton>
                        {(values.workFamilyBanck || []).map(
                          (_, index) => (
                            <Grid
                              key={`inputWorkFamilyBanck${index}`}
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
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
                                  icon={<MenuBookIcon />}
                                  color="primary"
                                  label={`Familiar ${index + 1}`}
                                />
                              </Divider>
                              <Box
                                sx={{ flexGrow: 1, maxWidth: "auto" }}
                              >
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
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Nombres del familiar:
                                    </label>
                                    <InputField
                                      name={`workFamilyBanck.${index}.${work_name_entity.name}`}
                                      label={
                                        work_name_entity.label
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
                                      Apellido del familiar:
                                    </label>
                                    <InputField
                                      name={`workFamilyBanck.${index}.${work_lsname_entity.name}`}
                                      label={
                                        work_lsname_entity.label
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
                                      Banco:
                                    </label>
                                    <InputField
                                      name={`workFamilyBanck.${index}.${work_bank.name}`}
                                      label={
                                        work_bank.label
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
                                      Relación:
                                    </label>
                                    <SelectField
                                      name={`workFamilyBanck.${index}.${work_relation.name}`}
                                      label={
                                        work_relation.label
                                      }
                                      data={value_relation}
                                      onChange={(e) => {
                                        gettinRelation(e);
                                      }}
                                      fullWidth
                                    />
                                  </div>
                                </Paper>
                              </Box>

                              <IconButton
                                onClick={() =>
                                  arrayHelpers.push({
                                    [work_name_entity.name]: "",
                                    [work_lsname_entity.name]: "",
                                    [work_bank.name]: "",
                                    [work_relation.name]: "",
                                  })
                                }
                              >
                                <AddBoxIcon
                                  color="primary"
                                  sx={{ fontSize: 30 }}
                                />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  arrayHelpers.remove(index)
                                }
                              >
                                <RemoveCircleIcon
                                  sx={{ color: "red" }}
                                />
                              </IconButton>
                            </Grid>
                          )
                        )}
                      </>
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid>
          <Divider style={{ paddingTop: "20px" }}></Divider>
          <Grid>
            <div>
              <p
                style={{
                  paddingLeft: "15px",
                  paddingTop: "40px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Tener presente que tiene que colocar todos sus trabajos, ya sea,
                vacacionista, temporal, informal, por facturación o planilla.
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
                  name="work"
                  render={(arrayHelpers) => (
                    <>
                      <IconButton
                        onClick={() =>
                          arrayHelpers.push({
                            [work_name.name]: "",
                            [work_position.name]: "",
                            [work_entry.name]: "",
                            [work_withdrawal.name]: "",
                            [work_salary.name]: "",
                            [work_boss.name]: "",
                            [work_chiefposition.name]: "",
                            [work_withdrawalreason.name]: "",
                            [work_phone.name]: "",
                            [work_phone_boss.name]: "",
                            [work_phone_val.name]: "",
                            [work_phone_reason.name]: "",
                            [work_reference.name]: "",
                            [work_reference_reason.name]: "",
                          })
                        }
                      >
                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                      </IconButton>
                      {(values.work || []).map((_, index) => (
                        <Grid
                          key={`inputwork_${index}`}
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
                                  icon={<WorkOutlineIcon />}
                                  color="primary"
                                  label={`Trabajo ${index + 1}`}
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
                                      paddingTop: "10px",
                                    }}
                                  >
                                    <label
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Nombre de la empresa:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_name.name}`}
                                      label={work_name.label}
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
                                      Cargo que desempeño:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_position.name}`}
                                      label={work_position.label}
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
                                      Fecha de ingreso:
                                    </label>
                                    <DatePickerField
                                      name={`work.${index}.${work_entry.name}`}
                                      label={work_entry.label}
                                      InputProps={{ inputProps: { min: "1950-01-01", max: dateFuncion() } }}
                                      onChange={conditionLive}
                                      fullWidth
                                    />
                                    {alertLive()}
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
                                      Fecha de egreso:
                                    </label>
                                    <DatePickerField
                                      name={`work.${index}.${work_withdrawal.name}`}
                                      label={work_withdrawal.label}
                                      InputProps={{ inputProps: { min: "1950-01-01", max: dateFuncion() } }}
                                      onChange={conditionLiveTwo}
                                      fullWidth
                                    />
                                    {alertLiveTwo()}
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
                                      Salario devengado:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_salary.name}`}
                                      label={work_salary.label}
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
                                      Nombre del jefe inmediato:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_boss.name}`}
                                      label={work_boss.label}
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
                                      Puesto del jefe inmediato:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_chiefposition.name}`}
                                      label={work_chiefposition.label}
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
                                      Número del jefe inmediato:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_phone_boss.name}`}
                                      label={work_phone_boss.label}
                                      fullWidth
                                    />
                                  </div>
                                  <div></div>
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
                                      ¿Posee el teléfono de la empresa?:
                                    </label>
                                    <SelectField
                                      key={`inputwork_${index}`}
                                      name={`work.${index}.${work_phone_val.name}`}
                                      label={work_phone_val.label}
                                      data={life}
                                      onChange={(e) => {
                                        gettingValue(
                                          `work.${index}.${work_phone_val.name}`,
                                          e
                                        );
                                      }}
                                      fullWidth
                                    />

                                    {valuess[
                                      `work.${index}.${work_phone_val.name}`
                                    ] === "Si" && (
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
                                            Número de la empresa:
                                          </label>
                                          <InputField
                                            name={`work.${index}.${work_phone.name}`}
                                            label={work_phone.label}
                                            fullWidth
                                          />
                                        </div>
                                      )}

                                    {valuess[
                                      `work.${index}.${work_phone_val.name}`
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
                                            ¿Motivo de no poseer el teléfono?:
                                          </label>
                                          <InputField
                                            name={`work.${index}.${work_phone_reason.name}`}
                                            label={work_phone_reason.label}
                                            fullWidth
                                          />
                                        </div>
                                      )}
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
                                      Motivo de su retiro:
                                    </label>
                                    <InputField
                                      name={`work.${index}.${work_withdrawalreason.name}`}
                                      label={work_withdrawalreason.label}
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
                                      ¿Posee constancia laboral?:
                                    </label>
                                    <SelectField
                                      key={`inputwork_${index}`}
                                      name={`work.${index}.${work_reference.name}`}
                                      label={work_reference.label}
                                      data={life}
                                      onChange={(e) => {
                                        gettingValidate(
                                          `work.${index}.${work_reference.name}`,
                                          e
                                        );
                                      }}
                                      fullWidth
                                    />

                                    {valueValidate[
                                      `work.${index}.${work_reference.name}`
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
                                            ¿Por qué?:
                                          </label>
                                          <InputField
                                            name={`work.${index}.${work_reference_reason.name}`}
                                            label={work_reference_reason.label}
                                            fullWidth
                                          />
                                        </div>
                                      )}
                                  </div>
                                </Paper>
                              </Box>
                            </div>
                          </>
                          <IconButton
                            onClick={() =>
                              arrayHelpers.push({
                                [work_name.name]: "",
                                [work_position.name]: "",
                                [work_entry.name]: "",
                                [work_withdrawal.name]: "",
                                [work_salary.name]: "",
                                [work_boss.name]: "",
                                [work_chiefposition.name]: "",
                                [work_withdrawalreason.name]: "",
                                [work_phone.name]: "",
                                [work_phone_boss.name]: "",
                                [work_phone_val.name]: "",
                                [work_phone_reason.name]: "",
                                [work_reference.name]: "",
                                [work_reference_reason.name]: "",
                              })
                            }
                          >
                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
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
          </Grid>
        </Grid>
      </>
    )
  );
}
