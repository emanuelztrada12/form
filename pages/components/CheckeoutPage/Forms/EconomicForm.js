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

const cuenta = [
    {
        value: "Préstamo",
        label: "Préstamo",
    },
    {
        value: "Extrafinanciamientos",
        label: "Extrafinanciamientos",
    },
    {
        value: "Créditos",
        label: "Créditos",
    },
    {
        value: "Hipotecas",
        label: "Hipotecas",
    },
    {
        value: "Visa cuotas de TC",
        label: "Visa cuotas de TC",
    },
    {
        value: "otro",
        label: "otro",
    },
];

const pagos = [
    {
        value: "Ninguno",
        label: "Ninguno",
    },
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
    {
        value: "5",
        label: "5",
    },
    {
        value: "6",
        label: "6",
    },
    {
        value: "7",
        label: "7",
    },
    {
        value: "8",
        label: "8",
    },
    {
        value: "9",
        label: "9",
    },
    {
        value: "10",
        label: "10",
    },
    {
        value: "Más de 10...",
        label: "Más de 10...",
    },
];

export default function EconomicForm(props) {
    //Detalle deuda
    const [valueInfo, setValueInfo] = useState({
    });
    const [totalSum, setTotalSum] = useState("");

    const gettingValueInfo = (name, e) => {
        const invalues = {
            ...valueInfo,
            [name]: e.target.value
        }
        // console.info(`\n\n==> { invalues }\n`, invalues, `\n`, ``);
        setValueInfo(invalues)
        calc_totalInfo(invalues);
    };

    const calc_totalInfo = (invalues) => {
        let newTotal = 0;
        let data = [];
        data = Object.entries(invalues).map(([key, value]) => {
            console.log(`${key}: ${value}`);
            return {
                id: key,
                value: value,
            }
        });

        const suma = data.map(num => parseInt(num.value)).reduce((prev, curr) => prev + curr);
        console.log(suma)
        setTotalSum(suma);
    }

    const [total, setTotal] = useState({});
    const [result, setResult] = useState("");

    const onChange = (name, e) => {
        const nvalues = {
            ...total,
            [name]: e.target.value,
        };
        setTotal(nvalues);
        let res = 0;
        for (const v of Object.values(nvalues)) {
            try {
                const num = parseFloat(v);
                res += num;
            } catch (error) { }
        }
        if (lodash.isNaN(res)) setResult("0.00");
        else setResult(res.toFixed(2));
    };
    const Input = (o, name, _more) => {
        const more = {
            InputProps: {
                startAdornment: <InputAdornment position="start">Q.</InputAdornment>,
            },
            ..._more,
        };
        if (more.InputProps === null) delete more.InputProps;
        return (
            <InputField
                name={name || o.name}
                label={o.label}
                onChange={(e) => onChange(`${name || o.name}`, e)}
                fullWidth
                {...more}
            />
        );
    };

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
                        Información economica
                    </Typography>
                    <Grid>
                        <div>
                            <p
                                style={{
                                    paddingLeft: "15px",
                                    paddingTop: "10px",
                                    fontSize: "20px",
                                    // fontWeight: "bold",
                                    display: "flex",
                                    textAlign: "center",
                                }}
                            >
                                Datos exactos de créditos vigentes, créditos de consumo,
                                tarjetas de crédito, visa cuotas, préstamos o créditos con
                                personas individuales y cualquier deuda que se encuentre en su
                                récord crediticio. recuerde que toda la información será
                                verificada y confrontada)
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
                                                        [amount.name]: "",
                                                        [economic_balance.name]: "",
                                                        [economic_monthly_payment.name]: "",
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
                                                                    icon={<CreditCardOffIcon />}
                                                                    color="primary"
                                                                    label={`Deuda ${index + 1}`}
                                                                />
                                                            </Divider>

                                                            <h1
                                                                style={{
                                                                    paddingBottom: "10px",
                                                                    fontSize: "20px",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    fontWeight: "bold",
                                                                }}
                                                            >
                                                                Detalle de la deuda :{" "}
                                                            </h1>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12} sm={6}>
                                                                    <label
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "bold",
                                                                        }}
                                                                    >
                                                                        ¿Fecha de la solicitud?:
                                                                    </label>
                                                                    <DatePickerField
                                                                        name={`economic.${index}.${economic_date.name}`}
                                                                        label={economic_date.label}
                                                                        fullWidth
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6}>
                                                                    <label
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "bold",
                                                                        }}
                                                                    >
                                                                        ¿Para que lo utilizó?:
                                                                    </label>
                                                                    <InputField
                                                                        name={`economic.${index}.${economic_use.name}`}
                                                                        label={economic_use.label}
                                                                        fullWidth
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6}>
                                                                    <label
                                                                        style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "bold",
                                                                        }}
                                                                    >
                                                                        ¿Debe cancelarlo en un plade de?:
                                                                    </label>
                                                                    <InputField
                                                                        name={`economic.${index}.${economic_plan.name}`}
                                                                        label={economic_plan.label}
                                                                        style={{ paddingBottom: "20px" }}
                                                                        fullWidth
                                                                    />
                                                                </Grid>
                                                            </Grid>

                                                            <Divider />

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
                                                                                Deuda
                                                                            </Typography>
                                                                            <Divider />
                                                                            <List dense={dense}>
                                                                                <ListItem style={{ paddingBottom: "" }}
                                                                                >
                                                                                    <ListItemText
                                                                                        primary="Estado de la cuenta"
                                                                                        primaryTypographyProps={{
                                                                                            fontSize: 18,
                                                                                            fontWeight: 'medium',
                                                                                            letterSpacing: 0,
                                                                                        }}
                                                                                        style={{ textAlign: "start", paddingRight: "10px" }}
                                                                                    />
                                                                                    <SelectField name={`economic.${index}.${economic_bill.name}`} label={economic_bill.label} InputProps={{
                                                                                        startAdornment: (
                                                                                            <InputAdornment position="start">
                                                                                                Q.
                                                                                            </InputAdornment>
                                                                                        ),
                                                                                    }}
                                                                                        data={cuenta} fullWidth />
                                                                                </ListItem>
                                                                                <Divider />
                                                                                <ListItem
                                                                                >

                                                                                    <ListItemText
                                                                                        primary="Monto total"
                                                                                        primaryTypographyProps={{
                                                                                            fontSize: 18,
                                                                                            fontWeight: 'medium',
                                                                                            letterSpacing: 0,
                                                                                        }}
                                                                                        style={{ textAlign: "start", paddingRight: "65px" }}
                                                                                    />
                                                                                    <InputField name={`economic.${index}.${amount.name}`} label={amount.label} onChange={(e) => { gettingValueInfo(`economic_${index}_${amount.name}`, e) }}
                                                                                        InputProps={{
                                                                                            startAdornment: (
                                                                                                <InputAdornment position="start">
                                                                                                    Q.
                                                                                                </InputAdornment>
                                                                                            ),
                                                                                        }}
                                                                                        fullWidth />
                                                                                </ListItem>
                                                                                <Divider />
                                                                                <ListItem
                                                                                >

                                                                                    <ListItemText
                                                                                        primary="Saldo a la fecha"
                                                                                        primaryTypographyProps={{
                                                                                            fontSize: 18,
                                                                                            fontWeight: 'medium',
                                                                                            letterSpacing: 0,
                                                                                        }}
                                                                                        style={{ textAlign: "start", paddingRight: "35px" }}
                                                                                    />
                                                                                    <InputField name={`economic.${index}.${economic_balance.name}`} label={economic_balance.label} onChange={(e) => { gettingValueInfo(`economic_${index}_${economic_balance.name}`, e) }}
                                                                                        InputProps={{
                                                                                            startAdornment: (
                                                                                                <InputAdornment position="start">
                                                                                                    Q.
                                                                                                </InputAdornment>
                                                                                            ),
                                                                                        }}
                                                                                        fullWidth />
                                                                                </ListItem>
                                                                                <Divider />
                                                                                <ListItem
                                                                                >

                                                                                    <ListItemText
                                                                                        primary="Pago mensual"
                                                                                        primaryTypographyProps={{
                                                                                            fontSize: 18,
                                                                                            fontWeight: 'medium',
                                                                                            letterSpacing: 0,
                                                                                        }}
                                                                                        style={{ textAlign: "start", paddingRight: "45px" }}
                                                                                    />
                                                                                    <InputField name={`economic.${index}.${economic_monthly_payment.name}`} label={economic_monthly_payment.label} onChange={(e) => { gettingValueInfo(`economic_${index}_${economic_monthly_payment.name}`, e) }}
                                                                                        InputProps={{
                                                                                            startAdornment: (
                                                                                                <InputAdornment position="start">
                                                                                                    Q.
                                                                                                </InputAdornment>
                                                                                            ),
                                                                                        }}
                                                                                        fullWidth />
                                                                                </ListItem>
                                                                                <Divider />
                                                                                <ListItem
                                                                                >

                                                                                    <ListItemText
                                                                                        primary="Pagos en mora"
                                                                                        primaryTypographyProps={{
                                                                                            fontSize: 18,
                                                                                            fontWeight: 'medium',
                                                                                            letterSpacing: 0,
                                                                                        }}
                                                                                        style={{ textAlign: "start", paddingRight: "38px" }}
                                                                                    />
                                                                                    <SelectField name={`economic.${index}.${economic_delinquent_payment.name}`} label={economic_delinquent_payment.label} data={pagos} fullWidth />
                                                                                </ListItem>
                                                                                <Divider />
                                                                            </List>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Paper>
                                                            </Box>
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
                            icon={<MonetizationOnIcon />}
                            color="primary"
                            label="Presupuesto mensual"
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
                                <Typography
                                    sx={{ mt: 4, mb: 2 }}
                                    variant="h6"
                                    component="div"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingTop: "5px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Ingresos proyectados
                                </Typography>
                                <Grid spacing={3}>
                                    <Grid>
                                        <Divider />
                                        <List dense={dense}>
                                            <ListItem style={{ paddingBottom: "" }}>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <HomeIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Vivienda (alquiler)"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "35px" }}
                                                />
                                                <InputField
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        onChange(`${economic_vivienda.name}`, e)
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
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <FastfoodIcon />
                                                    </Avatar>
                                                </ListItemAvatar>

                                                <ListItemText
                                                    primary="Alimentación Personal"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "15px" }}
                                                />
                                                <InputField
                                                    name={economic_food.name}
                                                    label={economic_food.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_food.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <FamilyRestroomIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Aporte al gasto familiar"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "15px" }}
                                                />
                                                <InputField
                                                    name={economic_aporte.name}
                                                    label={economic_aporte.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_aporte.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <WaterDamageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Agua, Energía y otros"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "20px" }}
                                                />
                                                <InputField
                                                    name={economic_water.name}
                                                    label={economic_water.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_water.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <PhoneIphoneIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Celular"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "83px" }}
                                                />
                                                <InputField
                                                    name={economic_phone.name}
                                                    label={economic_phone.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_phone.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <SelfImprovementIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Recreación"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "65px" }}
                                                />
                                                <InputField
                                                    name={economic_recreation.name}
                                                    label={economic_recreation.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_recreation.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <ManIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Vestuario "
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "74px" }}
                                                />
                                                <InputField
                                                    name={economic_vestuario.name}
                                                    label={economic_vestuario.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_vestuario.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <ShopIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Gastos personales "
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "35px" }}
                                                />
                                                <InputField
                                                    name={economic_gastos.name}
                                                    label={economic_gastos.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_gastos.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <DirectionsBusFilledIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Transporte / Combustible"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "5px" }}
                                                />
                                                <InputField
                                                    name={economic_trans.name}
                                                    label={economic_trans.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_trans.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <LocalHospitalIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Gastos Médicos"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "43px" }}
                                                />
                                                <InputField
                                                    name={economic_medic.name}
                                                    label={economic_medic.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_medic.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    data={pagos}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <AutoStoriesIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Estudios personales"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "25px" }}
                                                />
                                                <InputField
                                                    name={economic_estudy.name}
                                                    label={economic_estudy.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_estudy.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <SavingsIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Ahorros"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "79px" }}
                                                />
                                                <InputField
                                                    name={economic_payment_deuda.name}
                                                    label={economic_payment_deuda.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_payment_deuda.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <CreditCardOffIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Pago de deudas"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "40px" }}
                                                />
                                                <InputField
                                                    name={economic_ahorro.name}
                                                    label={economic_ahorro.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_ahorro.name}`, e);
                                                    }}
                                                    value={totalSum}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ background: "black" }}>
                                                        <AltRouteIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Otros gastos"
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "56px" }}
                                                />
                                                <InputField
                                                    name={economic_other.name}
                                                    label={economic_other.label}
                                                    onChange={(e) => {
                                                        onChange(`${economic_other.name}`, e);
                                                    }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    fullWidth
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemText
                                                    primary="Total: "
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: "medium",
                                                        letterSpacing: 0,
                                                    }}
                                                    style={{ textAlign: "start", paddingRight: "38px" }}
                                                />
                                                <InputField
                                                    name={economic_total.name}
                                                    label={economic_total.label}
                                                    value={result}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                Q.
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </div>
                </Grid>
            </>
        )
    );
}
