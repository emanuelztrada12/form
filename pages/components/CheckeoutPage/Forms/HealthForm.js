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
import InputAdornment from "@mui/material/InputAdornment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeIcon from "@mui/icons-material/Home";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ManIcon from "@mui/icons-material/Man";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SavingsIcon from "@mui/icons-material/Savings";
import Avatar from "@mui/material/Avatar";
import ShopIcon from "@mui/icons-material/Shop";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SubjectIcon from '@mui/icons-material/Subject';

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
    const [validate, setValidate] = useState("");
    const gettingValidate = (e) => {
        let { value } = e.target;
        setValidate(value);
    }


    const [dense, setDense] = React.useState(false);

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            economic_date,
            economic_use,
            economic_plan,
            economic_bill,
            amount,
            economic_balance,
            economic_monthly_payment,
            economic_delinquent_payment,

            economic_vivienda,
            economic_food,
            economic_aporte,
            economic_water,
            economic_phone,
            economic_recreation,
            economic_vestuario,
            economic_gastos,
            economic_trans,
            economic_medic,
            economic_estudy,
            economic_ahorro,
            economic_payment_deuda,
            economic_other,
            economic_total,
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
                                                    }
                                                    data={value}
                                                    autoWidth
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
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
                                                                name="economic"
                                                                render={(arrayHelpers) => (
                                                                    <>
                                                                        <IconButton
                                                                            onClick={() =>
                                                                                arrayHelpers.push({
                                                                                    [economic_date.name]: "",
                                                                                    [economic_use.name]: "",
                                                                                    [economic_plan.name]: "",
                                                                                    [economic_bill.name]: "",
                                                                                    [amount.name]: 0,
                                                                                    [economic_balance.name]: 0,
                                                                                    [economic_monthly_payment.name]: 0,
                                                                                    [economic_delinquent_payment.name]: "",
                                                                                })
                                                                            }
                                                                        >
                                                                            <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                                        </IconButton>
                                                                        {(values.economic || []).map((_, index) => (
                                                                            <Grid
                                                                                key={`inputeconomic_${index}`}
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
                                                                                                            name={economic_vivienda.name}
                                                                                                            label={economic_vivienda.label}
                                                                                                            autoWidth
                                                                                                        />
                                                                                                        <InputField
                                                                                                            name={economic_vivienda.name}
                                                                                                            label={economic_vivienda.label}
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
                                name={economic_food.name}
                                label={economic_food.label}
                                data={value}
                                onChange={gettingValidate}
                                fullWidth
                            />

                            {validate === "Si" && (

                                <div>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Detalle su incidentes, accidentes o intervenciones quirúrgicas:
                                    </label>
                                    <InputField
                                        name={economic_food.name}
                                        label={economic_food.label}
                                        fullWidth
                                    />
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Sufrio amputaciones?:
                                    </label>
                                    <InputField
                                        name={economic_food.name}
                                        label={economic_food.label}
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
                                id="economic_food"
                                name={economic_food.name}
                                label={economic_food.label}
                                data={value}
                                onChange={gettingValidate}
                                fullWidth
                            />

                            {validate === "No" && (

                                <div>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Cuando fue la última vez que le dio COVID-19?:
                                    </label>
                                    <InputField
                                        id="economic_food"
                                        name={economic_food.name}
                                        label={economic_food.label}
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
                                id="economic_food"
                                name={economic_food.name}
                                label={economic_food.label}
                                data={sex}
                                onChange={gettingValidate}
                                fullWidth
                            />

                            {validate === "M" && (
                                <Grid >
                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ¿Se encuentra en estado de gestación?:
                                        </label>
                                        <SelectField
                                            id="economic_food"
                                            name={economic_food.name}
                                            label={economic_food.label}
                                            data={value}
                                            onChange={gettingValidate}
                                            fullWidth
                                        />
                                        {validate === "No" && (
                                            <Grid >
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Tiene interés de tener hijos a corto plazo?:
                                                    </label>
                                                    <SelectField
                                                        id="economic_food"
                                                        name={economic_food.name}
                                                        label={economic_food.label}
                                                        data={value}
                                                        onChange={gettingValidate}
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
                            name={economic_food.name}
                            label={economic_food.label}
                            data={value}
                            onChange={gettingValidate}
                            fullWidth
                        />
                        {validate === "Si" && (
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
                                            name="criminal"
                                            render={(arrayHelpers) => (
                                                <>
                                                    <IconButton
                                                        onClick={() =>
                                                            arrayHelpers.push({
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
                                                                [economic_food.name]: "",
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
                                                                                                name={`criminal.${index}.${economic_food.name}`} label={economic_food.label}
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
                                                                                            <DatePickerField name={`criminal.${index}.${economic_food.name}`} label={economic_food.label}

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
                                                                                                name={`criminal.${index}.${economic_food.name}`}
                                                                                                label={economic_food.label}
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
