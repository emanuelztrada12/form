import React, { useState, useEffect } from "react";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import lodash from "lodash";
//Material ui
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const vacunas = [
    {
        value: "Sputnik",
        label: "Sputnik",
    },
    {
        value: "Moderna",
        label: "Moderna",
    },
    {
        value: "Astrazeneca",
        label: "Astrazeneca",
    },
    {
        value: "pfizer",
        label: "pfizer",
    },
];

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

const vac = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
    {
        value: "4",
        label: "4",
    },
]

const sex = [
    {
        value: "H",
        label: "H",
    },
    {
        value: "M",
        label: "M",
    },
]

export default function HealForm(props) {
    const [accidents, setAccident] = useState(""); 
    const gettingValidateAccident = (e) => {
        let { value } = e.target;
        setAccident(value);
    }

    const [covid19, setAcovid19] = useState(""); 
    const gettingValidateCovid= (e) => {
        let { value } = e.target;
        setAcovid19(value);
    }

    const [sexo, setSexo] = useState(""); 
    const gettingValidateSexo= (e) => {
        let { value } = e.target;
        setSexo(value);
    }

    const [lac, setLac] = useState(""); 
    const gettingValidateLac= (e) => {
        let { value } = e.target;
        setLac(value);
    }

    const [gest, setGesta] = useState(""); 
    const gettingValidateGesta= (e) => {
        let { value } = e.target;
        setGesta(value);
    }

    const [dosis, setDosis] = useState(""); 
    const gettingValidateDosis= (e) => {
        let { value } = e.target;
        setDosis(value);
    }
    
    const [dense, setDense] = React.useState(false);

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            disease_hipertension_option,
            disease_diabetes_option,
            disease_VIH_option,
            disease_ITS_option,
            disease_gastritis_option,
            disease_cancer_option,
            disease_cardiopatias_option,

            disease_hipertension_observacion,
            disease_diabetes_observacion,
            disease_VIH_observacion,
            disease_ITS_observacion,
            disease_gastritis_observacion,
            disease_cancer_observacion,
            disease_cardiopatias_observacion,
            
            disease_name,
            disease_observacion,

            accident_option,
            accident_detail, 
            accident_suffer,

            covid_option,
            covid_dosis, 

            validate_sex, 
            validate_gestacion,
            validate_children,
            validate_lactando, 
            validate_lac_month,
            validate_lac_age, 

            validate_dosis, 
            dosis_name, 
            dosis_date, 
            dosis_dosis, 
            
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
                        Factor Salud
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
                            icon={< BloodtypeIcon />}
                            color="primary"
                            label="Enfermedades"
                        />
                    </Divider>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "10px",
                        }}
                    >
                        <Box
                            sx={{ flexGrow: 1, maxWidth: 1800 }}
                            style={{ display: "flex", justifyContent: "center" }}
                        >

                            <Paper elevation={3}>
                                <Grid spacing={3}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            paddingTop: "40px",
                                            paddingLeft: "10px",
                                        }}
                                    >
                                        Enfermedad | Si/No | Observaciones
                                    </Typography>
                                    <Grid>
                                        <Divider />
                                        <List dense={dense}>
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Hipertensión"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_hipertension_option.name}
                                                    label={disease_hipertension_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_hipertension_observacion.name}
                                                    label={disease_hipertension_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Diabetes"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_diabetes_option.name}
                                                    label={disease_diabetes_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_diabetes_observacion.name}
                                                    label={disease_diabetes_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="V.I.H."
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_VIH_option.name}
                                                    label={disease_VIH_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_VIH_observacion.name}
                                                    label={disease_VIH_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="I.T.S."
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_ITS_option.name}
                                                    label={disease_ITS_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_ITS_observacion.name}
                                                    label={disease_ITS_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Gastritis"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_gastritis_option.name}
                                                    label={disease_gastritis_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_gastritis_observacion.name}
                                                    label={disease_gastritis_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Cáncer"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <SelectField
                                                    name={disease_cancer_option.name}
                                                    label={disease_cancer_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_cancer_observacion.name}
                                                    label={disease_cancer_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Cardiopatías"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "15px" }}
                                                />
                                                <SelectField
                                                    name={disease_cardiopatias_option.name}
                                                    label={disease_cardiopatias_option.label}
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={disease_cardiopatias_observacion.name}
                                                    label={disease_cardiopatias_observacion.label}
                                                    autoWidth
                                                />
                                            </ListItem>
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemText
                                                    primary="Otros"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "px" }}
                                                />
                                                <Grid>
                                                    <div>
                                                        <Grid
                                                            style={{
                                                                paddingTop: "18px",
                                                            }}
                                                        >
                                                            <FieldArray
                                                                name="disease"
                                                                render={(arrayHelpers) => (
                                                                    <>
                                                                        <IconButton
                                                                            onClick={() =>
                                                                                arrayHelpers.push({
                                                                                    [disease_name.name]: "",
                                                                                    [disease_observacion.name]: "",
                                                                                })
                                                                            }
                                                                        >
                                                                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                                        </IconButton>
                                                                        {(values.disease || []).map((_, index) => (
                                                                            <Grid
                                                                                key={`inputdisease_${index}`}
                                                                                item
                                                                                xs={12}
                                                                                sm={6}
                                                                            >
                                                                                <>
                                                                                    <div
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
                                                                                                icon={<CreditCardOffIcon />}
                                                                                                color="primary"
                                                                                                label={`Otros ${index + 1}`}
                                                                                            />
                                                                                        </Divider>
                                                                                        <Grid>
                                                                                            <Grid>
                                                                                                <List dense={dense}>
                                                                                                    <ListItem style={{ paddingBottom: "" }}>
                                                                                                        <InputField
                                                                                                            name={`disease.${index}.${disease_name.name}`}
                                                                                                            label={disease_name.label}
                                                                                                            autoWidth
                                                                                                        />
                                                                                                        <InputField
                                                                                                            name={`disease.${index}.${disease_observacion.name}`}
                                                                                                            label={disease_observacion.label}
                                                                                                            autoWidth
                                                                                                        />
                                                                                                    </ListItem>
                                                                                                </List>
                                                                                            </Grid>
                                                                                        </Grid>
                                                                                    </div>
                                                                                </>
                                                                                <IconButton
                                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                                    style={{ paddingTop: "10px" }}
                                                                                >
                                                                                    <RemoveCircleIcon
                                                                                        sx={{ color: "red", fontSize: 30 }}
                                                                                    />
                                                                                </IconButton>
                                                                            </Grid>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            />
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </div>


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
                            icon={<CarCrashIcon />}
                            color="primary"
                            label="Accidentes"
                        />
                    </Divider>
                    <Grid container >
                        <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ¿Ha sufrido incidentes, accidentes o intervenciones quirúrgicas que le hayan dejado secuelas físicas.?:
                            </label>
                            <SelectField
                                name={accident_option.name}
                                label={accident_option.label}
                                data={value}
                                onChange={gettingValidateAccident}
                                fullWidth
                            />
                            {accidents === "Si" && (

                                <div>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Detalle su incidentes, accidentes o intervenciones quirúrgicas:
                                    </label>
                                    <InputField
                                        name={accident_detail.name}
                                        label={accident_detail.label}
                                        fullWidth
                                    />
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Sufrio amputaciones?:
                                    </label>
                                    <InputField
                                        name={accident_suffer.name}
                                        label={accident_suffer.label}
                                        fullWidth
                                    />
                                </div>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "35px" }}>
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ¿Posee síntomas de COVID-19?:
                            </label>
                            <SelectField
                                name={covid_option.name}
                                label={covid_option.label}
                                data={value}
                                onChange={gettingValidateCovid}
                                fullWidth
                            />

                            {covid19 === "No" && (

                                <div>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Cuando fue la última vez que le dio COVID-19?:
                                    </label>
                                    <InputField
                                        name={covid_dosis.name}
                                        label={covid_dosis.label}
                                        fullWidth
                                    />
                                </div>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "35px" }}>
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ¿Sexo?:
                            </label>
                            <SelectField
                                name={validate_sex.name}
                                label={validate_sex.label}
                                onChange={gettingValidateSexo}
                                data={sex}
                                fullWidth
                            />

                            {sexo === "M" && (
                                <Grid container>
                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ¿Se encuentra en estado de gestación?:
                                        </label>
                                        <SelectField
                                            name={validate_gestacion.name}
                                            label={validate_gestacion.label}
                                            data={value}
                                            onChange={gettingValidateGesta}
                                            fullWidth
                                        />
                                        {gest === "No" && (
                                                <Grid style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Tiene interés de tener hijos a corto plazo?:
                                                    </label>
                                                    <InputField
                                                        name={validate_children.name}
                                                        label={validate_children.label}
                                                        fullWidth
                                                    />
                                                </Grid>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ¿Se encuentra lactando?:
                                        </label>
                                        <SelectField
                                            name={validate_lactando.name}
                                            label={validate_lactando.label}
                                            data={value}
                                            onChange={gettingValidateLac} 
                                            fullWidth
                                        />
                                        {lac === "Si" && (
                                            <Grid >
                                                <Grid style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }} >
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Desde hace cuantos meses?:
                                                    </label>
                                                    <InputField
                                                        name={validate_lac_month.name}
                                                        label={validate_lac_month.label}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Edad del hijo?:
                                                    </label>
                                                    <InputField
                                                        name={validate_lac_age.name}
                                                        label={validate_lac_age.label}
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

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                    >
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ¿Posee vacunas contra el COVID-19?:
                        </label>
                        <SelectField
                            name={validate_dosis.name}
                            label={validate_dosis.label}
                            data={value}
                            onChange={gettingValidateDosis}
                            fullWidth
                        />
                        {dosis === "Si" && (
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
                                            paddingLeft: "10px"
                                        }}
                                    >

                                        Ingrese las dosis que posee contra el COVID-19
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
                                            name="dosis"
                                            render={(arrayHelpers) => (
                                                <>
                                                    <IconButton
                                                        onClick={() =>
                                                            arrayHelpers.push({
                                                                [dosis_name.name]: "", 
                                                                [dosis_date.name]: "", 
                                                                [dosis_dosis.name]: "",
                                                            })
                                                        }
                                                    >
                                                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                    </IconButton>
                                                    {(values.dosis || []).map((_, index) => (
                                                        <Grid
                                                            key={`inputdosis_${index}`}
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
                                                                            icon={<VaccinesIcon />}
                                                                            color="primary"
                                                                            label={`Tatuaje ${index + 1}`}
                                                                        />

                                                                    </Divider>

                                                                    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
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
                                                                                        <ListItem style={{ paddingBottom: "" }}
                                                                                        >
                                                                                            <ListItemText
                                                                                                primary="Vacuna"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "62px" }}
                                                                                            />
                                                                                            <SelectField
                                                                                                name={`dosis.${index}.${dosis_name.name}`} label={dosis_name.label}
                                                                                                data={vacunas}
                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                        <Divider />
                                                                                        <ListItem
                                                                                        >

                                                                                            <ListItemText
                                                                                                primary="Fecha de vacunación"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "0px" }}
                                                                                            />
                                                                                            <DatePickerField name={`dosis.${index}.${dosis_date.name}`}

                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                        <Divider />
                                                                                        <ListItem
                                                                                        >

                                                                                            <ListItemText
                                                                                                primary="Dosis"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "80px" }}
                                                                                            />
                                                                                            <SelectField
                                                                                                name={`dosis.${index}.${dosis_dosis.name}`}
                                                                                                label={dosis_dosis.label}
                                                                                                data={vac}
                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                    </List>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Paper>
                                                                    </Box>
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
                                </div>
                            </Grid>


                        )}
                    </Grid>


                </Grid>
            </>
        )
    );
}
