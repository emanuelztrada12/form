import React, { useState, useEffect } from "react";
import { InputField, SelectField, DatePickerField, CheckboxField } from "../../FormFields";
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
 
    if (!props.values[props.formField.economic_total.name])
        props.values[props.formField.economic_total.name] = 0;

    if (!props.values[props.formField.economic_payment_deuda.name])
        props.values[props.formField.economic_payment_deuda.name] = 0;

    if (!props.values[props.formField.economic_vivienda.name])
        props.values[props.formField.economic_vivienda.name] = 0;

    if (!props.values[props.formField.economic_food.name])
        props.values[props.formField.economic_food.name] = 0;

    if (!props.values[props.formField.economic_aporte.name])
        props.values[props.formField.economic_aporte.name] = 0;

    if (!props.values[props.formField.economic_water.name])
        props.values[props.formField.economic_water.name] = 0;

    if (!props.values[props.formField.economic_phone.name])
        props.values[props.formField.economic_phone.name] = 0;

    if (!props.values[props.formField.economic_recreation.name])
        props.values[props.formField.economic_recreation.name] = 0;

    if (!props.values[props.formField.economic_vestuario.name])
        props.values[props.formField.economic_vestuario.name] = 0;

    if (!props.values[props.formField.economic_gastos.name])
        props.values[props.formField.economic_gastos.name] = 0;

    if (!props.values[props.formField.economic_trans.name])
        props.values[props.formField.economic_trans.name] = 0;

    if (!props.values[props.formField.economic_medic.name])
        props.values[props.formField.economic_medic.name] = 0;

    if (!props.values[props.formField.economic_estudy.name])
        props.values[props.formField.economic_estudy.name] = 0;

    if (!props.values[props.formField.economic_ahorro.name])
        props.values[props.formField.economic_ahorro.name] = 0;

    if (!props.values[props.formField.economic_other.name])
        props.values[props.formField.economic_other.name] = 0;

    const [total, setTotal] = useState(0);
    const [result, setResult] = useState(0);   
    const [totals, set_total] = useState(0);

    const calculate = (nvalues) => {
        setTotal(nvalues);
        let res = 0;
        for (const v of Object.values(nvalues)) {
            try {
                const num = parseFloat(v);
                res += num;
            } catch (error) {
                console.error(error)
            }
        }

        let value;
        if (lodash.isNaN(res)) value=0; 
        else value = res.toFixed(2);
        setResult(value);
        props.values[props.formField.economic_payment_deuda.name] = parseFloat(value);
        
    };

    const onChange = (name, e) => {
        const nvalues = {
            ...total,
            [name]: e.target.value,
        };

        calculate(nvalues);
    };
        
    const onDelete = (arrayHelpers, index, prefix) => {
        arrayHelpers.remove(index);
        const nvalues = { ...total };
        for (const key of Object.keys(nvalues)) {
            if (key.match(prefix)) delete nvalues[key];
        }
        calculate(nvalues);
    };

    // const Input = (o, name, _more) => {
    //     const more = {
    //       InputProps: {
    //         startAdornment: <InputAdornment position="start">Q.</InputAdornment>,
    //       },
    //       ..._more,
    //     };
    //     if (more.InputProps === null) delete more.InputProps;
    //     return (
    //       <InputField
    //         name={name || o.name}
    //         label={o.label}
    //         onChange={(e) => onChange(`${name || o.name}`, e)}
    //         fullWidth
    //         {...more}
    //       />
    //     );
    //   };

    const [valuess, set_values] = useState({
        economic_vivienda: 0,
        economic_food: 0,
        economic_aporte: 0,
        economic_water: 0,
        economic_phone: 0,
        economic_recreation: 0,
        economic_vestuario: 0,
        economic_gastos: 0,
        economic_trans: 0,
        economic_medic: 0,
        economic_estudy: 0,
        economic_ahorro: 0,
        economic_other: 0
    });

    const gettingValue = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value
        }
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        set_values(nvalues)
        calc_total(nvalues);
    };


    const calc_total = (nvalues) => {
        const { economic_vivienda, economic_food, economic_aporte, economic_water, economic_phone, economic_recreation, economic_vestuario, economic_gastos,
            economic_trans, economic_medic, economic_estudy, economic_ahorro, economic_other } = nvalues;

        let value;
        const newTotal = parseFloat(economic_vivienda) + parseFloat(economic_food) + parseFloat(economic_aporte)
            + parseFloat(economic_water) + parseFloat(economic_phone) + parseFloat(economic_recreation) + parseFloat(economic_vestuario)
            + parseFloat(economic_gastos) + parseFloat(economic_trans) + parseFloat(economic_medic) + parseFloat(economic_estudy)
            + parseFloat(economic_ahorro) + parseFloat(economic_other)
        if (lodash.isNaN(newTotal)) value = 0.00;
        else value = newTotal.toFixed(2);
        set_total(value)
        props.values[props.formField.economic_total.name] = parseFloat(value);
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

            economic_dateother,
            economic_useother,
            economic_planother,
            economic_billother,
            amountother,
            economic_balanceother,
            economic_monthly_paymentother,
            economic_delinquent_paymentother,
            econmic_observaciones,

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
                        Información económica
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
                                Datos exactos de créditos vigentes, créditos de consumo, tarjetas de crédito, visa cuotas,
                                 préstamos o créditos con personas individuales y cualquier deuda que se encuentre en su récord crediticio.
                                  Recuerde que toda la información será verificada y confrontada.
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
                                                                Detalle de la deuda:{" "}
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
                                                                        
                                                                    ¿Para qué lo utilizó?:

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
                                                                        ¿Debe cancelarlo en un plan de?:
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
                                                                                    <InputField type="Number" name={`economic.${index}.${amount.name}`} label={amount.label} onChange={(e) => { onChange(`economic.${index}.${amount.name}`, e) }}
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
                                                                                    <InputField type="Number" name={`economic.${index}.${economic_balance.name}`} label={economic_balance.label}
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
                                                                                    <InputField type="Number" name={`economic.${index}.${economic_monthly_payment.name}`} label={economic_monthly_payment.label}
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
                                                        onClick={() =>
                                                            onDelete(arrayHelpers, index, `economic.${index}`)
                                                        }
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

                    <Divider style={{paddingTop: "15px"}}/>

                    <Grid>
                        <div>
                            <p
                                style={{
                                    paddingLeft: "15px",
                                    paddingTop: "10px",
                                    fontSize: "20px",
                                    // fontWeight: "bold",
                                    textAlign: "center"
                                }}
                            >
                                Deudas que se encuentran a su nombre, pero otra persona realiza los pagos. 
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
                                    name="economicother"
                                    render={(arrayHelpers) => (
                                        <>
                                            <IconButton
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        [economic_dateother.name]: "",
                                                        [economic_useother.name]: "",
                                                        [economic_planother.name]: "",
                                                        [economic_billother.name]: "",
                                                        [amountother.name]: 0,
                                                        [economic_balanceother.name]: 0,
                                                        [economic_monthly_paymentother.name]: 0,
                                                        [economic_delinquent_paymentother.name]: "",
                                                        [econmic_observaciones.name]: ""
                                                    })
                                                }
                                            >
                                                <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                            </IconButton>
                                            {(values.economicother || []).map((_, index) => (
                                                <Grid
                                                    key={`inputeconomicother_${index}`}
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
                                                                Detalle de la deuda:{" "}
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
                                                                        name={`economicother.${index}.${economic_dateother.name}`}
                                                                        label={economic_dateother.label}
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
                                                                        name={`economicother.${index}.${economic_useother.name}`}
                                                                        label={economic_useother.label}
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
                                                                        ¿Debe cancelarlo en un plan de?:
                                                                    </label>
                                                                    <InputField
                                                                        name={`economicother.${index}.${economic_planother.name}`}
                                                                        label={economic_planother.label}
                                                                        style={{ paddingBottom: "20px" }}
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
                                                                        Observaciones*:
                                                                    </label>
                                                                    <InputField
                                                                        name={`economicother.${index}.${econmic_observaciones.name}`}
                                                                        label={econmic_observaciones.label}
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
                                                                                    <SelectField name={`economicother.${index}.${economic_billother.name}`} label={economic_billother.label} InputProps={{
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
                                                                                    <InputField type="Number" name={`economicother.${index}.${amountother.name}`} label={amountother.label}
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
                                                                                    <InputField type="Number" name={`economicother.${index}.${economic_balanceother.name}`} label={economic_balanceother.label}
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
                                                                                    <InputField type="Number" name={`economicother.${index}.${economic_monthly_paymentother.name}`} label={economic_monthly_paymentother.label}
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
                                                                                    <SelectField name={`economicother.${index}.${economic_delinquent_paymentother.name}`} label={economic_delinquent_paymentother.label} data={pagos} fullWidth />
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
                                                        onClick={() =>
                                                            onDelete(arrayHelpers, index, `economicother.${index}`)
                                                        }
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
                                                    type="Number"
                                                    name={economic_vivienda.name}
                                                    label={economic_vivienda.label}
                                                    onChange={(e) =>
                                                        gettingValue(`${economic_vivienda.name}`, e)
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
                                                    type="Number"
                                                    name={economic_food.name}
                                                    label={economic_food.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_food.name}`, e);
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
                                                    type="Number"
                                                    name={economic_aporte.name}
                                                    label={economic_aporte.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_aporte.name}`, e);
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
                                                    type="Number"
                                                    name={economic_water.name}
                                                    label={economic_water.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_water.name}`, e);
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
                                                    type="Number"
                                                    name={economic_phone.name}
                                                    label={economic_phone.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_phone.name}`, e);
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
                                                    type="Number"
                                                    name={economic_recreation.name}
                                                    label={economic_recreation.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_recreation.name}`, e);
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
                                                    type="Number"
                                                    name={economic_vestuario.name}
                                                    label={economic_vestuario.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_vestuario.name}`, e);
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
                                                    type="Number"
                                                    name={economic_gastos.name}
                                                    label={economic_gastos.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_gastos.name}`, e);
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
                                                    type="Number"
                                                    name={economic_trans.name}
                                                    label={economic_trans.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_trans.name}`, e);
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
                                                    type="Number"
                                                    name={economic_medic.name}
                                                    label={economic_medic.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_medic.name}`, e);
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
                                                    type="Number"
                                                    name={economic_estudy.name}
                                                    label={economic_estudy.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_estudy.name}`, e);
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
                                                    type="Number"
                                                    name={economic_ahorro.name}
                                                    label={economic_ahorro.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_ahorro.name}`, e);
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
                                                    type="Number"
                                                    name={economic_payment_deuda.name}
                                                    label={economic_payment_deuda.label}
                                                    value={result}
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
                                                    type="Number"
                                                    name={economic_other.name}
                                                    label={economic_other.label}
                                                    onChange={(e) => {
                                                        gettingValue(`${economic_other.name}`, e);
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
                                                    type="Number"
                                                    name={economic_total.name}
                                                    label={economic_total.label}
                                                    value={parseFloat(totals) + parseFloat(result)}
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
