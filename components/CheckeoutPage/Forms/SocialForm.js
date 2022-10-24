import React, { useState, useEffect } from "react";
import { app } from "../credentials/credential.firebase";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import lodash from "lodash";

//Material ui
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
const consumo = [
  {
    value: "Semanal",
    label: "Semanal",
  },
  {
    value: "Social",
    label: "Social",
  },
  {
    value: "Diario",
    label: "Diario",
  },
];

const drug_position = [
  {
    value: "Vende",
    label: "Vende",
  },
  {
    value: "Consume",
    label: "Consume",
  },
  {
    value: "Distribuye",
    label: "Distribuye",
  },
];

export default function SocialForm(props) {
  if (!props.values[props.formField.social_tatto_fot.name])
    props.values[props.formField.social_tatto_fot.name] = "";

  const [valuess, setValue] = useState({});
  const [archivoUrl, setUrl] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [progresss, setProgresss] = useState(0);

  const archivoHandler = async (nvalues, index_old) => {
    const enlaceUrl = "";
    for (const [index, v] of Object.entries(nvalues)) {
      try {
        const archivo = v;
        const storageRef = app.storage().ref(`ImagenesGolden/`);
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        enlaceUrl = await archivoPath.getDownloadURL();
        const value = "";
        if (lodash.isNaN(enlaceUrl)) value = "";
        else value = enlaceUrl;
        valueFto(value, index);
        props.values.social[index_old][props.formField.social_tatto_fot.name] =
          value;

        // console.info(`saving media`, enlaceUrl, index);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const gettingValue = async (name, e, index) => {
    const nvalues = {
      ...valuess,
      [name]: e.target.files[0],
    };
    archivoHandler(nvalues, index);
    setValue(nvalues);
    prog(name, e, index);
  };

  const valueFto = async (value, index) => {
    const nvalues = {
      ...archivoUrl,
      [index]: value,
    };
    // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
    setUrl(nvalues);
  };

  const prog = (name, e, index) => {
    try {
      const file = e.target.files[0];
      const storage = app.storage().ref(`ImagenesGolden/`);
      const task = storage.put(file);
      task.on("state_changed", (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        valueProg(progress, name);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const valueProg = async (value, index) => {
    const nvalues = {
      ...archivoUrl,
      [index]: value,
    };
    setIsLoading(nvalues);
  };

  const onDelete = (arrayHelpers, index, prefix) => {
    arrayHelpers.remove(index);
    const nvalues = { ...archivoUrl };
    for (const key of Object.keys(nvalues)) {
      if (key.match(prefix)) delete nvalues[key];
    }

    setUrl(nvalues, prefix);
  };

  const [value, setValues] = useState({});
  const gettingWorking = (e) => {
    let { value } = e.target;
    setValues(value);
  };

  //changes 2.1
  const [valueDrugs, setDrugs] = useState({});
  const gettingDrugs = (e) => {
    let { value } = e.target;
    setDrugs(value);
  };

  //changes 2.2
  const [valueGroup, setGroup] = useState({});
  const gettingGroup = (e) => {
    let { value } = e.target;
    setGroup(value);
  };

  const [valueF, setValuesF] = useState({});
  const gettingFamily = (e) => {
    let { value } = e.target;
    setValuesF(value);
  };

  const [valueI, setValuesI] = useState({});
  const gettingIlegales = (e) => {
    let { value } = e.target;
    setValuesI(value);
  };

  const [valueAl, setValuesAl] = useState({});
  const gettingAl = (e) => {
    let { value } = e.target;
    setValuesAl(value);
  };

  const [valueFum, setValuesFum] = useState({});
  const gettingFum = (e) => {
    let { value } = e.target;
    setValuesFum(value);
  };

  const [valueTato, setValuesTato] = useState({});
  const gettingTatto = (e) => {
    let { value } = e.target;
    setValuesTato(value);
  };

  const [dense, setDense] = React.useState(false);

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    values,
    formField: {
      social_group,
      social_gtime,
      social_politic,
      social_politic_name,
      social_politic_relacion,
      social_politic_puesto,
      social_fuma,
      social_fuma_time,
      social_alco,
      social_alco_time,
      social_alco_bebida,
      social_drog,
      social_drog_option,
      social_drog_time,
      social_drog_person,

      social_tatto,
      social_tatto_descri,
      social_tatto_sign,
      social_tatto_ubi,
      social_tatto_fot,

      social_fuma_frequency,
      social_alco_howmuch,
      social_alco_frequency,

      //changes 2.1
      social_drug,
      social_drug_relation,
      social_drug_position,

      //changes 2.2
      social_value_gather,
      social_value_howOften,
      social_value_time,
      social_value_conditionWork,
      social_value_amount,
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
            Información Social
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
              icon={<PersonIcon />}
              label="Social"
              color="primary"
            />
          </Divider>
          <Grid container spacing={0} style={{ paddingTop: "18px" }}>
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
                ¿Pertenece a grupos sociales, culturales, deportivos, políticos
                o sindicales?:
              </label>
              <SelectField
                name={social_group.name}
                label={social_group.label}
                data={validate}
                onChange={(e) => gettingWorking(e)}
                fullWidth
              />
              {value === "Si" && (
                <>
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
                        ¿A cuál grupo pertenece?:
                      </label>
                      <InputField
                        name={social_gtime.name}
                        label={social_gtime.label}
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
                        ¿Se reúnen?:
                      </label>
                      <SelectField
                        name={social_value_gather.name}
                        label={social_value_gather.label}
                        onChange={gettingGroup}
                        data={validate}
                        fullWidth

                      />
                      {valueGroup === "Si" && (
                        <>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            style={{
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              paddingTop: "10px",
                            }}
                          >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                              ¿Cada cuanto?:
                            </label>
                            <InputField
                              name={social_value_howOften.name}
                              label={social_value_howOften.label}
                              fullWidth
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            style={{
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              paddingTop: "10px",
                            }}
                          >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                              ¿En que horario?:
                            </label>
                            <InputField
                              name={social_value_time.name}
                              label={social_value_time.label}
                              fullWidth
                            />
                          </Grid>
                        </>
                      )}
                    </Grid>
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
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Tiene un familiar que pertenezca a un partido político o
                puesto, persona expuesta al público?:
              </label>
              <SelectField
                name={social_politic.name}
                label={social_politic.label}
                data={validate}
                onChange={(e) => gettingFamily(e)}
                fullWidth
              />
              {valueF === "Si" && (
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
                    <label
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        paddingTop: "10px",
                      }}
                    >
                      Nombre del familiar:
                    </label>
                    <InputField
                      name={social_politic_name.name}
                      label={social_politic_name.label}
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
                    <label
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        paddingTop: "10px",
                      }}
                    >
                      Relación:
                    </label>
                    <InputField
                      name={social_politic_relacion.name}
                      label={social_politic_relacion.label}
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
                      Puesto o partido político en el que se encuentra:
                    </label>
                    <InputField
                      name={social_politic_puesto.name}
                      label={social_politic_puesto.label}
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
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Tiene el hábito de fumar?:
              </label>
              <SelectField
                name={social_fuma.name}
                label={social_fuma.label}
                data={validate}
                onChange={(e) => gettingFum(e)}
                fullWidth
              />

              {valueFum === "Si" && (
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
                      ¿Cuándo fue la última vez que consumió?:
                    </label>
                    <DatePickerField
                      name={social_fuma_time.name}
                      label={social_fuma_time.label}
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
                      ¿Con qué frecuencia?:
                    </label>
                    <SelectField
                      name={social_fuma_frequency.name}
                      label={social_fuma_frequency.label}
                      data={consumo}
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
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Consume bebidas alcohólicas?:
              </label>
              <SelectField
                name={social_alco.name}
                label={social_alco.label}
                data={validate}
                onChange={(e) => gettingAl(e)}
                fullWidth
              />

              {valueAl === "Si" && (
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
                      ¿Cuándo fue la última vez que consumió?:
                    </label>
                    <DatePickerField
                      name={social_alco_time.name}
                      label={social_alco_time.label}
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
                      ¿Qué fue lo último que consumió?:
                    </label>
                    <InputField
                      name={social_alco_bebida.name}
                      label={social_alco_bebida.label}
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
                      ¿Cuánto consumió?:
                    </label>
                    <InputField
                      name={social_alco_howmuch.name}
                      label={social_alco_howmuch.label}
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
                      ¿Con qué frecuencia?:
                    </label>
                    <SelectField
                      name={social_alco_frequency.name}
                      label={social_alco_frequency.label}
                      data={consumo}
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
                      ¿Se ha presentado a laborar en estado de ebriedad, aliento a alcohol o resaca?:
                    </label>
                    <SelectField
                      name={social_value_conditionWork.name}
                      label={social_value_conditionWork.label}
                      data={validate}
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
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Ha consumido o consume drogas ilegales?:
              </label>
              <SelectField
                name={social_drog.name}
                label={social_drog.label}
                data={validate}
                onChange={(e) => gettingIlegales(e)}
                fullWidth
              />

              {valueI === "Si" && (
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
                      ¿Indique cuáles?:
                    </label>
                    <InputField
                      name={social_drog_option.name}
                      label={social_drog_option.label}
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
                      ¿Como obtuvo la droga?:
                    </label>
                    <InputField
                      name={social_drug.name}
                      label={social_drug.label}
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
                      ¿Cuándo fue la última vez que consumió?:
                    </label>
                    <InputField
                      name={social_drog_time.name}
                      label={social_drog_time.label}
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
                      ¿Cuantas veces lo ha consumido?:
                    </label>
                    <InputField
                      name={social_value_amount.name}
                      label={social_value_amount.label}
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
                      ¿Tiene relación con personas que distribuyan?:
                    </label>
                    <SelectField
                      name={social_drog_person.name}
                      label={social_drog_person.label}
                      data={validate}
                      onChange={(e) => gettingDrugs(e)}
                      fullWidth
                    />
                    {valueDrugs === "Si" && (
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          sm={15}
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            paddingTop: "10px",
                          }}
                        >
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            Parentesco:
                          </label>
                          <InputField
                            name={social_drug_relation.name}
                            label={social_drug_relation.label}
                            fullWidth
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={15}
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            paddingTop: "10px",
                          }}
                        >
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            La persona realiza:
                          </label>
                          <SelectField
                            name={social_drug_position.name}
                            label={social_drug_position.label}
                            data={drug_position}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    )}
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
              ¿Posee tatuajes?:
            </label>
            <SelectField
              name={social_tatto.name}
              label={social_tatto.label}
              data={validate}
              onChange={(e) => gettingTatto(e)}
              fullWidth
            />
            {valueTato === "Si" && (
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
                    Ingrese la información de todos sus tatuajes
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
                      name="social"
                      render={(arrayHelpers) => (
                        <>
                          <IconButton
                            onClick={() =>
                              arrayHelpers.push({
                                [social_tatto_descri.name]: "",
                                [social_tatto_sign.name]: "",
                                [social_tatto_ubi.name]: "",
                                [social_tatto_fot.name]: "",
                              })
                            }
                          >
                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                          </IconButton>
                          {(values.social || []).map((_, index) => (
                            <Grid
                              key={`inputsocial_${index}`}
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
                                      icon={<AutoAwesomeIcon />}
                                      color="primary"
                                      label={`Tatuaje ${index + 1}`}
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
                                            Detalle del tatuaje:
                                          </Typography>
                                          <Divider />
                                          <List dense={dense}>
                                            <ListItem
                                              style={{ paddingBottom: "" }}
                                            >
                                              <ListItemText
                                                primary="Descripción "
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
                                                name={`social.${index}.${social_tatto_descri.name}`}
                                                label={
                                                  social_tatto_descri.label
                                                }
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Significado"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "65px",
                                                }}
                                              />
                                              <InputField
                                                name={`social.${index}.${social_tatto_sign.name}`}
                                                label={social_tatto_sign.label}
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Ubicación"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "75px",
                                                }}
                                              />
                                              <InputField
                                                name={`social.${index}.${social_tatto_ubi.name}`}
                                                label={social_tatto_ubi.label}
                                                fullWidth
                                              />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                              <ListItemText
                                                primary="Fotografía"
                                                primaryTypographyProps={{
                                                  fontSize: 18,
                                                  fontWeight: "medium",
                                                  letterSpacing: 0,
                                                }}
                                                style={{
                                                  textAlign: "start",
                                                  paddingRight: "75px",
                                                }}
                                              />
                                              <InputField
                                                name={`social.${index}.${social_tatto_fot.name}`}
                                                label={social_tatto_fot.label}
                                                value={
                                                  archivoUrl[
                                                  `social.${index}.${social_tatto_fot.name}`
                                                  ]
                                                }
                                                fullWidth
                                              />
                                              <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="label"
                                              >
                                                {isLoading[
                                                  `social.${index}.${social_tatto_fot.name}`
                                                ] < 100 && (
                                                    <CircularProgress
                                                      variant="determinate"
                                                      value={
                                                        isLoading[
                                                        `social.${index}.${social_tatto_fot.name}`
                                                        ]
                                                      }
                                                    />
                                                  )}
                                                {isLoading[
                                                  `social.${index}.${social_tatto_fot.name}`
                                                ] == 100 && (
                                                    <>
                                                      <p
                                                        style={{
                                                          fontSize: "20px",
                                                          color: "green",
                                                          paddingRight: "2px",
                                                        }}
                                                      >
                                                        Imagen subida
                                                      </p>
                                                      <CheckCircleOutlineIcon
                                                        sx={{ color: "green" }}
                                                      />
                                                    </>
                                                  )}
                                                <input
                                                  onChange={(e) => {
                                                    gettingValue(
                                                      `social.${index}.${social_tatto_fot.name}`,
                                                      e,
                                                      index
                                                    );
                                                  }}
                                                  hidden
                                                  accept="image/*"
                                                  type="file"
                                                />

                                                <PhotoCamera />
                                                {/* , archivoHandler(`social.${index}.${social_tatto_fot.name}`, e) */}
                                              </IconButton>
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
                                    [social_tatto_descri.name]: "",
                                    [social_tatto_sign.name]: "",
                                    [social_tatto_ubi.name]: "",
                                    [social_tatto_fot.name]: "",
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
                                  onDelete(
                                    arrayHelpers,
                                    index,
                                    `social.${index}.${social_tatto_fot.name}`
                                  )
                                }
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
