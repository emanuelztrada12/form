import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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

const life = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
]

const validate = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
]

export default function FamilyForm(props) {
    const [values, setValue] = useState("");
    const gettingValue = (e) => {
        let { value } = e.target;
        setValue(value)
    }

    const [valuesPhone, setPhone] = useState("");
    const gettingPhone = (e) => {
        let { value } = e.target;
        setPhone(value);
    }

    const [valuesWorking, setWorking] = useState("");
    const gettingWorking = (e) => {
        let { value } = e.target;
        setWorking(value);
    }

    const [valuesMom, setValueMom] = useState("");
    const gettingValueMom = (e) => {
        let { value } = e.target;
        setValueMom(value)
    }

    const [valuesPhoneMom, setPhoneMom] = useState("");
    const gettingPhoneMom = (e) => {
        let { value } = e.target;
        setPhoneMom(value);
    }

    const [valuesWorkingMom, setWorkingMom] = useState("");
    const gettingWorkingMom = (e) => {
        let { value } = e.target;
        setWorkingMom(value);
    }

    const [valuesStepfather, setValueStepfather] = useState("");
    const gettingValueStepfather = (e) => {
        let { value } = e.target;
        setValueStepfather(value)
    }

    const [valuesPhoneStepfather, setPhoneStepfather] = useState("");
    const gettingPhoneStepfather = (e) => {
        let { value } = e.target;
        setPhoneStepfather(value);
    }

    const [valuesWorkingStepfather, setWorkingStepfather] = useState("");
    const gettingWorkingStepfather = (e) => {
        let { value } = e.target;
        setWorkingStepfather(value);
    }

    const [valueInfoStepfather, setInfoStepfather] = useState("");
    const gettingInfoStepfather = (e) => {
        let { value } = e.target;
        setInfoStepfather(value);
    }


    const [valuesStepmother, setValueStepmother] = useState("");
    const gettingValueStepmother = (e) => {
        let { value } = e.target;
        setValueStepmother(value)
    }

    const [valuesPhoneStepmother, setPhoneStepmother] = useState("");
    const gettingPhoneStepmother = (e) => {
        let { value } = e.target;
        setPhoneStepmother(value);
    }

    const [valuesWorkingStepmother, setWorkingStepmother] = useState("");
    const gettingWorkingStepmother = (e) => {
        let { value } = e.target;
        setWorkingStepmother(value);
    }

    const [valueInfoStepmother, setInfoStepmother] = useState("");
    const gettingInfoStepmother = (e) => {
        let { value } = e.target;
        setInfoStepmother(value);
    }

    const [stepParents, setStepParents] = useState("");
    const gettingValidate = (e) => {
        let { value } = e.target;
        setStepParents(value);
    }



    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        formField: {
            family_validate_stepparents,

            family_dad_name,
            family_dad_age,
            family_dad_status,
            family_dad_place,
            family_dad_company,
            family_dad_financial_income,
            family_dad_depend,
            family_dad_phone,
            family_dad_no_phone,
            family_dad_time_died,
            family_dad_reason_died,
            family_dad_life,
            family_dad_phone_val,
            family_dad_working_val,

            family_mom_name,
            family_mom_age,
            family_mom_status,
            family_mom_place,
            family_mom_company,
            family_mom_financial_income,
            family_mom_phone,
            family_mom_depend,
            family_mom_no_phone,
            family_mom_time_died,
            family_mom_reason_died,
            family_mom_life,
            family_mom_phone_val,
            family_mom_working_val,

            family_stepfather_name,
            family_stepfather_age,
            family_stepfather_status,
            family_stepfather_place,
            family_stepfather_company,
            family_stepfather_financial_income,
            family_stepfather_phone,
            family_stepfather_depend,
            family_stepfather_no_phone,
            family_stepfather_time_died,
            family_stepfather_reason_died,
            family_stepfather_life,
            family_stepfather_phone_val,
            family_stepfather_working_val,
            family_stepfather_info,
            family_stepfather_noInfo,

            family_stepmother_name,
            family_stepmother_age,
            family_stepmother_status,
            family_stepmother_place,
            family_stepmother_company,
            family_stepmother_financial_income,
            family_stepmother_phone,
            family_stepmother_depend,
            family_stepmother_no_phone,
            family_stepmother_time_died,
            family_stepmother_reason_died,
            family_stepmother_info,
            family_stepmother_life,
            family_stepmother_phone_val,
            family_stepmother_working_val,
            family_stepmother_noInfo


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
                                Datos de los padres
                            </Typography>
                            <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Información general padre"
                                />
                            </Divider>
                            <Grid>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Aún Vive?:
                                    </label>
                                    <SelectField
                                        name={family_dad_life.name}
                                        label={family_dad_life.label}
                                        data={life}
                                        onChange={gettingValue}
                                        fullWidth
                                    />

                                    {values === "Si" ? (
                                        <Grid >
                                            <Grid container style={{ paddingTop: "10px" }}>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Nombre:
                                                    </label>
                                                    <InputField name={family_dad_name.name} label={family_dad_name.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Edad:
                                                    </label>
                                                    <InputField name={family_dad_age.name} label={family_dad_age.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Estado civil:
                                                    </label>
                                                    <SelectField
                                                        name={family_dad_status.name}
                                                        label={family_dad_status.label}
                                                        data={civil}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Tiene teléfono?:
                                                    </label>
                                                    <SelectField
                                                        name={family_dad_phone_val.name}
                                                        label={family_dad_phone_val.label}
                                                        data={validate}
                                                        onChange={gettingPhone}
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesPhone === "Si" ? (
                                                            <Grid style={{ paddingTop: "10px" }}>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Teléfono:
                                                                    </label>
                                                                    <InputField name={family_dad_phone.name} label={family_dad_phone.label} fullWidth />
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}

                                                        {valuesPhone === "No" ? (
                                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ¿Motivo del por qué no tiene teléfono?:
                                                                </label>
                                                                <InputField name={family_dad_no_phone.name} label={family_dad_no_phone.label} fullWidth />
                                                            </Grid>

                                                        ) : (<h1></h1>)}
                                                    </Grid>

                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Labora?:
                                                    </label>
                                                    <SelectField
                                                        name={family_dad_working_val.name}
                                                        label={family_dad_working_val.label}
                                                        data={validate}
                                                        onChange={gettingWorking}
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesWorking === "Si" ? (
                                                            <Grid container style={{ paddingTop: "10px" }}>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Puesto donde labora:
                                                                    </label>
                                                                    <InputField name={family_dad_place.name} label={family_dad_place.label} fullWidth />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Empresa donde labora:
                                                                    </label>
                                                                    <InputField name={family_dad_company.name} label={family_dad_company.label} fullWidth />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Ingresos promedio:
                                                                    </label>
                                                                    <InputField name={family_dad_financial_income.name} label={family_dad_financial_income.label} fullWidth />
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}

                                                        {valuesWorking === "No" ? (
                                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ¿De quién depende económicamente?:
                                                                </label>
                                                                <InputField name={family_dad_depend.name} label={family_dad_depend.label} fullWidth />
                                                            </Grid>

                                                        ) : (<h1></h1>)}
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    ) : (<h1></h1>)}



                                    {values === "No" ? (
                                        <Grid>
                                            <Grid container>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Tiempo fallecido?:
                                                    </label>
                                                    <InputField name={family_dad_time_died.name} label={family_dad_time_died.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Razón de fallecimiento?:
                                                    </label>
                                                    <InputField name={family_dad_reason_died.name} label={family_dad_reason_died.label} fullWidth />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ) : (<h1></h1>)}
                                </Grid>

                            </Grid>

                            <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Información general madre"
                                />
                            </Divider>
                            <Grid>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Aún Vive?:
                                    </label>
                                    <SelectField
                                        name={family_mom_life.name}
                                        label={family_mom_life.label}
                                        data={life}
                                        onChange={gettingValueMom}
                                        fullWidth
                                    />

                                    {valuesMom === "Si" ? (
                                        <Grid >
                                            <Grid container style={{ paddingTop: "10px" }}>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Nombre:
                                                    </label>
                                                    <InputField name={family_mom_name.name} label={family_mom_name.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Edad:
                                                    </label>
                                                    <InputField name={family_mom_age.name} label={family_mom_age.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Estado civil:
                                                    </label>
                                                    <SelectField
                                                        name={family_mom_status.name}
                                                        label={family_mom_status.label}
                                                        data={civil}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Tiene teléfono?:
                                                    </label>
                                                    <SelectField
                                                        name={family_mom_phone_val.name}
                                                        label={family_mom_phone_val.label}
                                                        data={validate}
                                                        onChange={gettingPhoneMom}
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesPhoneMom === "Si" ? (
                                                            <Grid style={{ paddingTop: "10px" }}>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Teléfono:
                                                                    </label>
                                                                    <InputField name={family_mom_phone.name} label={family_mom_phone.label} fullWidth />
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}

                                                        {valuesPhoneMom === "No" ? (
                                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ¿Motivo del por qué no tiene teléfono?:
                                                                </label>
                                                                <InputField name={family_mom_no_phone.name} label={family_mom_no_phone.label} fullWidth />
                                                            </Grid>

                                                        ) : (<h1></h1>)}
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Labora?:
                                                    </label>
                                                    <SelectField
                                                        name={family_mom_working_val.name}
                                                        label={family_mom_working_val.label}
                                                        data={validate}
                                                        onChange={gettingWorkingMom}
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesWorkingMom === "Si" ? (
                                                            <Grid container style={{ paddingTop: "10px" }}>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Puesto donde labora:
                                                                    </label>
                                                                    <InputField name={family_mom_place.name} label={family_mom_place.label} fullWidth />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Empresa donde labora:
                                                                    </label>
                                                                    <InputField name={family_mom_company.name} label={family_mom_company.label} fullWidth />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Ingresos promedio:
                                                                    </label>
                                                                    <InputField name={family_mom_financial_income.name} label={family_mom_financial_income.label} fullWidth />
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}

                                                        {valuesWorkingMom === "No" ? (
                                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ¿De quién depende económicamente?:
                                                                </label>
                                                                <InputField name={family_mom_depend.name} label={family_mom_depend.label} fullWidth />
                                                            </Grid>

                                                        ) : (<h1></h1>)}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    ) : (<h1></h1>)}

                                    {valuesMom === "No" ? (
                                        <Grid>
                                            <Grid container>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Tiempo fallecido?:
                                                    </label>
                                                    <InputField name={family_mom_time_died.name} label={family_mom_time_died.label} fullWidth />
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ¿Razón de fallecimiento?:
                                                    </label>
                                                    <InputField name={family_mom_reason_died.name} label={family_mom_reason_died.label} fullWidth />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ) : (<h1></h1>)}
                                </Grid>
                            </Grid>

                            <Divider style={{ paddingTop: "40px", paddingBottom: "15px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Padrastros"
                                />
                            </Divider>
                            <Grid>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Usted tienes padrastros?:
                                    </label>
                                    <SelectField
                                        id="family_validate_stepparents"
                                        name={family_validate_stepparents.name}
                                        label={family_validate_stepparents.label}
                                        data={validate}
                                        onChange={gettingValidate}
                                        fullWidth
                                    />
                                    {stepParents === "Si" && (<div>
                                        <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                            <Chip
                                                style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                                label="Información general padrastro "
                                            />
                                        </Divider>
                                        <Grid>
                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Posee la información de su padrastro?:
                                                </label>
                                                <SelectField
                                                    id="family_stepfather_info"
                                                    name={family_stepfather_info.name}
                                                    label={family_stepfather_info.label}
                                                    data={validate}
                                                    onChange={gettingInfoStepfather}
                                                    fullWidth
                                                />

                                                {valueInfoStepfather === "Si" ? (
                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                            ¿Aún Vive?:
                                                        </label>
                                                        <SelectField
                                                            name={family_stepfather_life.name}
                                                            label={family_stepfather_life.label}
                                                            data={life}
                                                            onChange={gettingValueStepfather}
                                                            fullWidth
                                                        />

                                                        {valuesStepfather === "Si" ? (
                                                            <Grid >
                                                                <Grid container style={{ paddingTop: "10px" }}>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Nombre:
                                                                        </label>
                                                                        <InputField name={family_stepfather_name.name} label={family_stepfather_name.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Edad:
                                                                        </label>
                                                                        <InputField name={family_stepfather_age.name} label={family_stepfather_age.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Estado civil:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepfather_status.name}
                                                                            label={family_stepfather_status.label}
                                                                            data={civil}
                                                                            fullWidth
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Tiene teléfono?:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepfather_phone_val.name}
                                                                            label={family_stepfather_phone_val.label}
                                                                            data={validate}
                                                                            onChange={gettingPhoneStepfather}
                                                                            fullWidth
                                                                        />
                                                                        <Grid>
                                                                            {valuesPhoneStepfather === "Si" ? (
                                                                                <Grid style={{ paddingTop: "10px" }}>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Teléfono:
                                                                                        </label>
                                                                                        <InputField name={family_stepfather_phone.name} label={family_stepfather_phone.label} fullWidth />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            ) : (<h1></h1>)}

                                                                            {valuesPhoneStepfather === "No" ? (
                                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿Motivo del por qué no tiene teléfono?:
                                                                                    </label>
                                                                                    <InputField name={family_stepfather_no_phone.name} label={family_stepfather_no_phone.label} fullWidth />
                                                                                </Grid>

                                                                            ) : (<h1></h1>)}
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Labora?:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepfather_working_val.name}
                                                                            label={family_stepfather_working_val.label}
                                                                            data={validate}
                                                                            onChange={gettingWorkingStepfather}
                                                                            fullWidth
                                                                        />
                                                                        <Grid>
                                                                            {valuesWorkingStepfather === "Si" ? (
                                                                                <Grid container style={{ paddingTop: "10px" }}>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Puesto donde labora:
                                                                                        </label>
                                                                                        <InputField name={family_stepfather_place.name} label={family_stepfather_place.label} fullWidth />
                                                                                    </Grid>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Empresa donde labora:
                                                                                        </label>
                                                                                        <InputField name={family_stepfather_company.name} label={family_stepfather_company.label} fullWidth />
                                                                                    </Grid>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Ingresos promedio:
                                                                                        </label>
                                                                                        <InputField name={family_stepfather_financial_income.name} label={family_stepfather_financial_income.label} fullWidth />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            ) : (<h1></h1>)}

                                                                            {valuesWorkingStepfather === "No" ? (
                                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿De quién depende económicamente?:
                                                                                    </label>
                                                                                    <InputField name={family_stepfather_depend.name} label={family_stepfather_depend.label} fullWidth />
                                                                                </Grid>

                                                                            ) : (<h1></h1>)}
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>

                                                        ) : (<h1></h1>)}

                                                        {valuesStepfather === "No" ? (
                                                            <Grid>
                                                                <Grid container>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Tiempo fallecido?:
                                                                        </label>
                                                                        <InputField name={family_stepfather_time_died.name} label={family_stepfather_time_died.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Razón de fallecimiento?:
                                                                        </label>
                                                                        <InputField name={family_stepfather_reason_died.name} label={family_stepfather_reason_died.label} fullWidth />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}
                                                    </Grid>
                                                ) : (
                                                    <h1></h1>
                                                )}

                                                {valueInfoStepfather === "No" ? (
                                                    <Grid>
                                                        <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                ¿Razón de poseer la información?:
                                                            </label>
                                                            <InputField name={family_stepfather_noInfo.name} label={family_stepfather_noInfo.label} fullWidth />
                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <h1></h1>
                                                )}
                                            </Grid>
                                        </Grid>
                                        <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                            <Chip
                                                style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                                label="Información general madrastra "
                                            />
                                        </Divider>
                                        <Grid>
                                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "20px" }}>
                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                    ¿Posee la información de su madrastra?:
                                                </label>
                                                <SelectField
                                                    id="family_stepmother_info"
                                                    name={family_stepmother_info.name}
                                                    label={family_stepmother_info.label}
                                                    data={validate}
                                                    onChange={gettingInfoStepmother}
                                                    fullWidth
                                                />

                                                {valueInfoStepmother === "Si" ? (
                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                            ¿Aún Vive?:
                                                        </label>
                                                        <SelectField
                                                            name={family_stepmother_life.name}
                                                            label={family_stepmother_life.label}
                                                            data={life}
                                                            onChange={gettingValueStepmother}
                                                            fullWidth
                                                        />

                                                        {valuesStepmother === "Si" ? (
                                                            <Grid >
                                                                <Grid container style={{ paddingTop: "10px" }}>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Nombre:
                                                                        </label>
                                                                        <InputField name={family_stepmother_name.name} label={family_stepmother_name.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Edad:
                                                                        </label>
                                                                        <InputField name={family_stepmother_age.name} label={family_stepmother_age.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            Estado civil:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepmother_status.name}
                                                                            label={family_stepmother_status.label}
                                                                            data={civil}
                                                                            fullWidth
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Tiene teléfono?:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepmother_phone_val.name}
                                                                            label={family_stepmother_phone_val.label}
                                                                            data={validate}
                                                                            onChange={gettingPhoneStepmother}
                                                                            fullWidth
                                                                        />
                                                                        <Grid>
                                                                            {valuesPhoneStepmother === "Si" ? (
                                                                                <Grid style={{ paddingTop: "10px" }}>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Teléfono:
                                                                                        </label>
                                                                                        <InputField name={family_stepmother_phone.name} label={family_stepmother_phone.label} fullWidth />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            ) : (<h1></h1>)}

                                                                            {valuesPhoneStepmother === "No" ? (
                                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿Motivo del por qué no tiene teléfono?:
                                                                                    </label>
                                                                                    <InputField name={family_stepmother_no_phone.name} label={family_stepmother_no_phone.label} fullWidth />
                                                                                </Grid>

                                                                            ) : (<h1></h1>)}
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Labora?:
                                                                        </label>
                                                                        <SelectField
                                                                            name={family_stepmother_working_val.name}
                                                                            label={family_stepmother_working_val.label}
                                                                            data={validate}
                                                                            onChange={gettingWorkingStepmother}
                                                                            fullWidth
                                                                        />
                                                                        <Grid>
                                                                            {valuesWorkingStepmother === "Si" ? (
                                                                                <Grid container style={{ paddingTop: "10px" }}>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Puesto donde labora:
                                                                                        </label>
                                                                                        <InputField name={family_stepmother_place.name} label={family_stepmother_place.label} fullWidth />
                                                                                    </Grid>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Empresa donde labora:
                                                                                        </label>
                                                                                        <InputField name={family_stepmother_company.name} label={family_stepmother_company.label} fullWidth />
                                                                                    </Grid>
                                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Ingresos promedio:
                                                                                        </label>
                                                                                        <InputField name={family_stepmother_financial_income.name} label={family_stepmother_financial_income.label} fullWidth />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            ) : (<h1></h1>)}

                                                                            {valuesWorkingStepmother === "No" ? (
                                                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿De quién depende económicamente?:
                                                                                    </label>
                                                                                    <InputField name={family_stepmother_depend.name} label={family_stepmother_depend.label} fullWidth />
                                                                                </Grid>

                                                                            ) : (<h1></h1>)}
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>

                                                        ) : (<h1></h1>)}

                                                        {valuesStepmother === "No" ? (
                                                            <Grid>
                                                                <Grid container>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Tiempo fallecido?:
                                                                        </label>
                                                                        <InputField name={family_stepmother_time_died.name} label={family_stepmother_time_died.label} fullWidth />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Razón de fallecimiento?:
                                                                        </label>
                                                                        <InputField name={family_stepmother_reason_died.name} label={family_stepmother_reason_died.label} fullWidth />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        ) : (<h1></h1>)}
                                                    </Grid>
                                                ) : (
                                                    <h1></h1>
                                                )}

                                                {valueInfoStepmother === "No" ? (
                                                    <Grid>
                                                        <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                ¿Razón de poseer la información?:
                                                            </label>
                                                            <InputField name={family_stepmother_noInfo.name} label={family_stepmother_noInfo.label} fullWidth />
                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <h1></h1>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </div>
                                    )}
                                </Grid>
                            </Grid>
                        {/* </Paper>
                    </Box> */}
                </Grid>
            </>
        )
    );
}
