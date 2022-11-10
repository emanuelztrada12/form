import React, { useState, useEffect } from "react";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

//Material ui
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

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

const valueBackground = [
  {
    value: "Penales",
    label: "Penales",
  },
  {
    value: "Policiales",
    label: "Policiales",
  },
  {
    value: "Ambos",
    label: "Ambos",
  },
];

const civil = [
  {
    value: "Ti@",
    label: "Ti@",
  },
  {
    value: "Prim@",
    label: "Prim@",
  },
  {
    value: "Herman@",
    label: "Herman@",
  },
  {
    value: "Papa",
    label: "Papá",
  },
  {
    value: "Mama",
    label: "Mamá",
  },
  {
    value: "hij@",
    label: "hij@",
  },
  {
    value: "niet@",
    label: "niet@",
  },
  {
    value: "Sobrin@",
    label: "Sobrin@",
  },
  {
    value: "Padrastro",
    label: "Padrastro",
  },
  {
    value: "Madrastra",
    label: "Madrastra",
  },
  {
    value: "hijastr@",
    label: "hijastr@",
  },
  {
    value: "Cuñad@",
    label: "Cuñad@",
  },
  {
    value: "Suegr@",
    label: "Suegr@",
  },

];

export default function CriminalForm(props) {
  const [associaton, setAssociaton] = useState("");
  const [policiales, setPoliciales] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [family, setFamily] = useState("");
  const [dense, setDense] = React.useState(false);

  const handleChangeAssociation = (e) => {
    let { value } = e.target;
    setAssociaton(value);
  };

  const handleChangePolice = (e) => {
    let { value } = e.target;
    setPoliciales(value);
  };

  const handleChangeC = (e) => {
    let { value } = e.target;
    setC(value);
  };

  const handleChangeD = (e) => {
    let { value } = e.target;
    setD(value);
  };

  const handleChangeFamily = (e) => {
    let { value } = e.target;
    setFamily(value);
  };

  const [criminalValue, setCriminalValue] = useState("");
  const gettingCriminalValue = (e) => {
    let { value } = e.target;
    setCriminalValue(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      criminal_association_option,
      criminal_relacion,
      criminal_name,
      criminal_group_belong,

      criminal_police_option,
      criminal_why_stained,
      criminal_why_clear,

      criminal_family,
      criminal_family_name,
      criminal_family_lastname,
      criminal_family_age,
      criminal_family_civil_status,
      criminal_family_profession,
      criminal_family_phone,
      criminal_family_reason,

      criminal_was_sued,
      criminal_you_demand,
      criminal_was_suedwhy,
      criminal_you_demandwhy,

      //Changes 2.2
      criminal_validation_background,
      criminal_because_record,
      criminal_because_clear,
      criminal_becauseTwo_record,
      criminal_becauseTwo_clear,
      criminal_whyTwo_stained,
      criminal_whyTwo_clear,
      criminal_you_demandwhom,
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
            Actividades Delictivas
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
              icon={<LocalPoliceIcon />}
              label="Actividades Delictivas"
              color="primary"
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
                ¿Posee amigos que sean miembros de una asociación con
                delincuentes o grupos delictivos?:
              </label>
              <SelectField
                name={criminal_association_option.name}
                label={criminal_association_option.label}
                data={value}
                onChange={handleChangeAssociation}
                fullWidth
              />
              {associaton === "Si" && (
                <Grid container spacing={3} style={{ paddingTop: "18px" }}>
                  <Grid item xs={12} sm={6}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Qué relación tiene con la persona:
                    </label>
                    <InputField
                      name={criminal_relacion.name}
                      label={criminal_relacion.label}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Nombre de la persona:
                    </label>
                    <InputField
                      name={criminal_name.name}
                      label={criminal_name.label}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿A qué grupo pertenece?:
                    </label>
                    <InputField
                      name={criminal_group_belong.name}
                      label={criminal_group_belong.label}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Posee antecedentes policiales o penales manchados?:
              </label>
              <SelectField
                name={criminal_police_option.name}
                label={criminal_police_option.label}
                data={value}
                onChange={handleChangePolice}
                fullWidth
              />


              {policiales === "Si" && (
                <>
                  <Grid item
                    xs={12}
                    sm={12}
                    style={{
                      paddingTop: "10px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}>
                    <label
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      ¿Cuales?
                    </label>
                    <SelectField
                      id="criminal_background"
                      name={criminal_validation_background.name}
                      label={criminal_validation_background.label}
                      data={valueBackground}
                      onChange={gettingCriminalValue}
                      fullWidth
                    />
                    {criminalValue === "Policiales" && (
                      <>
                        <Grid container>
                          <Grid
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
                              ¿Por qué los tiene manchados?
                            </label>
                            <InputField
                              name={criminal_why_stained.name}
                              label={criminal_why_stained.label}
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
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Cuando los limpio?:
                            </label>
                            <InputField
                              name={criminal_why_clear.name}
                              label={criminal_why_clear.label}
                              fullWidth
                            />
                            <Grid>

                            </Grid>
                          </Grid>
                        </Grid>

                      </>
                    )}
                    {criminalValue === "Penales" && (
                      <>
                        <Grid container>
                          <Grid
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
                              ¿Por qué los tiene manchados?
                            </label>
                            <InputField
                              name={criminal_because_record.name}
                              label={criminal_because_record.label}
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
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Cuando los limpio?:
                            </label>
                            <InputField
                              name={criminal_because_clear.name}
                              label={criminal_because_clear.label}
                              fullWidth
                            />
                            <Grid>

                            </Grid>
                          </Grid>
                        </Grid>

                      </>
                    )}
                    {criminalValue === "Ambos" && (
                      <>
                        <Grid container>
                          <Grid
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
                              ¿Por qué tiene los penales manchados?
                            </label>
                            <InputField
                              name={criminal_becauseTwo_record.name}
                              label={criminal_becauseTwo_record.label}
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
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Cuando limpio los penales?:
                            </label>
                            <InputField
                              name={criminal_becauseTwo_clear.name}
                              label={criminal_becauseTwo_clear.label}
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
                            }}
                          >
                            <label
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            >
                              ¿Por qué tiene los policiales manchados?
                            </label>
                            <InputField
                              name={criminal_whyTwo_stained.name}
                              label={criminal_whyTwo_stained.label}
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
                            }}
                          >
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              ¿Cuando limpio los policiales?:
                            </label>
                            <InputField
                              name={criminal_whyTwo_clear.name}
                              label={criminal_whyTwo_clear.label}
                              fullWidth
                            />
                            <Grid>


                            </Grid>
                          </Grid>
                        </Grid>

                      </>
                    )}

                  </Grid>
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
                paddingTop: "15px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Posee demandas en su contra?:
              </label>
              <SelectField
                name={criminal_was_sued.name}
                label={criminal_was_sued.label}
                onChange={handleChangeC}
                data={value}
                fullWidth
              />

              {c === "Si" && (
                <Grid container spacing={3} style={{ paddingTop: "18px" }}>
                  <Grid item xs={12} sm={6}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Por qué?:
                    </label>
                    <InputField
                      name={criminal_was_suedwhy.name}
                      label={criminal_was_suedwhy.label}
                      fullWidth
                    />
                  </Grid>
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
                ¿Ha demandado a una empresa o persona?:
              </label>
              <SelectField
                name={criminal_you_demand.name}
                label={criminal_you_demand.label}
                onChange={handleChangeD}
                data={value}
                fullWidth
              />

              {d === "Si" && (
                <Grid container
                  spacing={3}
                  style={{ paddingTop: "18px" }}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <label
                      style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Por qué?:
                    </label>
                    <InputField
                      name={criminal_you_demandwhy.name}
                      label={criminal_you_demandwhy.label}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                  >
                    <label
                      style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿A quién?:
                    </label>
                    <InputField
                      name={criminal_you_demandwhom.name}
                      label={criminal_you_demandwhom.label}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Divider style={{ paddingTop: "40px" }}></Divider>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "30px",
            }}
          >
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
              ¿Tiene familiares detenidos?:
            </label>
            <SelectField
              name={criminal_family.name}
              label={criminal_family.label}
              data={value}
              onChange={handleChangeFamily}
              fullWidth
            />
            {family === "Si" && (
              <Grid>
                <div>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "20px",
                      // fontWeight: "bold",
                      paddingTop: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    Ingrese la información sus familiares detenidos
                  </Typography>
                  <Grid
                    container
                    style={{
                      // paddingTop: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FieldArray
                      name="criminal"
                      render={(arrayHelpers) => (
                        <>
                          <IconButton
                            onClick={() =>
                              arrayHelpers.push({
                                [criminal_family_name.name]: "",
                                [criminal_family_lastname.name]: "",
                                [criminal_family_age.name]: "",
                                [criminal_family_civil_status.name]: "",
                                [criminal_family_profession.name]: "",
                                [criminal_family_phone.name]: "",
                                [criminal_family_reason.name]: "",
                              })
                            }
                          >
                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                          </IconButton>
                          {(values.criminal || []).map((_, index) => (
                            <Grid
                              key={`inputcriminal_${index}`}
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
                                      icon={<GavelIcon />}
                                      color="primary"
                                      label={`Familiar detenido ${index + 1}`}
                                    />
                                  </Divider>

                                  <Box sx={{ flexGrow: 1, maxWidth: "auto" }}>
                                    <Paper elevation={3}>
                                      <Grid>
                                        <Grid>
                                          <Typography
                                            sx={{ mt: 4, mb: 2 }}
                                            variant="h6"
                                            component="div"
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                              paddingTop: "20px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            Información General:
                                          </Typography>
                                          <Divider />
                                          <List dense={dense}>
                                            <ListItem
                                              style={{ paddingBottom: "" }}
                                            >
                                              <ListItemText
                                                primary="Nombre"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "62px",
                                                }}
                                              />
                                              <InputField
                                                name={`criminal.${index}.${criminal_family_name.name}`}
                                                label={
                                                  criminal_family_name.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Apellido"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "62px",
                                                }}
                                              />
                                              <InputField
                                                name={`criminal.${index}.${criminal_family_lastname.name}`}
                                                label={
                                                  criminal_family_lastname.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Relación familiar"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "0px",
                                                }}
                                              />
                                              <SelectField
                                                name={`criminal.${index}.${criminal_family_civil_status.name}`}
                                                label={
                                                  criminal_family_civil_status.label
                                                }
                                                data={civil}
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Año de detención"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "0px",
                                                }}
                                              />
                                              <InputField
                                                name={`criminal.${index}.${criminal_family_profession.name}`}
                                                label={
                                                  criminal_family_profession.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Tiempo detenido"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "0px",
                                                }}
                                              />
                                              <InputField
                                                name={`criminal.${index}.${criminal_family_phone.name}`}
                                                label={
                                                  criminal_family_phone.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Observaciones"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "25px",
                                                }}
                                              />
                                              <InputField
                                                name={`criminal.${index}.${criminal_family_reason.name}`}
                                                label={
                                                  criminal_family_reason.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                          </List>
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                  </Box>
                                </div>
                              </>
                              <IconButton
                                onClick={() =>
                                  arrayHelpers.push({
                                    [criminal_family_name.name]: "",
                                    [criminal_family_lastname.name]: "",
                                    [criminal_family_age.name]: "",
                                    [criminal_family_civil_status.name]: "",
                                    [criminal_family_profession.name]: "",
                                    [criminal_family_phone.name]: "",
                                    [criminal_family_reason.name]: "",
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
            )}
          </Grid>
        </Grid>
      </>
    )
  );
}
