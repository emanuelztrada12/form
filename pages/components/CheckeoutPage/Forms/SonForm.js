import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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

export default function SonForm(props) {
    let [valuess, setValue] = useState({});
    const gettingValue = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValue(nvalues);
    };

    const [valueAge, setValueAge] = useState({});
    const gettingValueAge = (name, e) => {
        const nvalues = {
            ...valueAge,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValueAge(nvalues)
    }

    const [valuesPhone, setPhone] = useState("");
    const gettingPhone = (name, e) => {
        const nvalues = {
            ...valuesPhone,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setPhone(nvalues);
    };

    const [valuesWorking, setWorking] = useState("");
    const gettingWorking = (name, e) => {
        // let { value } = e.target;
        const nvalues = {
            ...valuesWorking,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setWorking(nvalues);
    };

    const [valueValidate, setValueValidate] = useState("");
    const gettingValidate = (e) => {
        let { value } = e.target;
        setValueValidate(value)
    }

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            family_validate_son,
            family_son_name,
            family_son_age,
            family_son_status,
            family_son_place,
            family_son_company,
            family_son_financial_income,
            family_son_phone,
            family_son_depend,
            family_son_no_phone,
            family_son_time_died,
            family_son_reason_died,
            family_son_life,
            family_son_phone_val,
            family_son_working_val,
            family_son_validate_age,
            family_son_lookafther
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
                                Datos de los hijos
                            </Typography>

                            <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Información hijos"
                                />
                            </Divider>

                            <Grid>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Usted tiene hijos?:
                                    </label>
                                    <SelectField
                                        id="family_validate_son"
                                        name={family_validate_son.name}
                                        label={family_validate_son.label}
                                        data={validate}
                                        onChange={gettingValidate}
                                        fullWidth
                                    />
                                    {valueValidate === "Si" && (
                                        <div>
                                            <Divider style={{ paddingTop: "20px" }}>
                                                <Chip
                                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                                    label="Información hijos"
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
                                                Ingrese la información de sus hijos
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
                                                    name="son"
                                                    render={(arrayHelpers) => (
                                                        <>
                                                            <IconButton
                                                                onClick={() =>
                                                                    arrayHelpers.push({
                                                                        [family_son_name.name]: "",
                                                                        [family_son_age.name]: "",
                                                                        [family_son_status.name]: "",
                                                                        [family_son_place.name]: "",
                                                                        [family_son_company.name]: "",
                                                                        [family_son_financial_income.name]: "",
                                                                        [family_son_phone.name]: "",
                                                                        [family_son_depend.name]: "",
                                                                        [family_son_no_phone.name]: "",
                                                                        [family_son_time_died.name]: "",
                                                                        [family_son_reason_died.name]: "",
                                                                        [family_son_life.name]: "",
                                                                        [family_son_phone_val.name]: "",
                                                                        [family_son_working_val.name]: "",
                                                                        [family_son_validate_age.name]: "",
                                                                    })
                                                                }
                                                            >
                                                                <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                            </IconButton>
                                                            {(values.son || []).map((_, index) => (
                                                                <Grid
                                                                    key={`inputSon_${index}`}
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
                                                                            <label
                                                                                style={{ fontSize: "18px", fontWeight: "bold" }}
                                                                            >
                                                                                ¿Aún Vive?:
                                                                            </label>
                                                                            <SelectField
                                                                                key={`inputSon_${index}`}
                                                                                name={`son.${index}.${family_son_life.name}`}
                                                                                label={family_son_life.label}
                                                                                data={life}
                                                                                onChange={(e) => {
                                                                                    gettingValue(
                                                                                        `son.${index}.${family_son_life.name}`,
                                                                                        e
                                                                                    );
                                                                                }}
                                                                                fullWidth
                                                                            />

                                                                            {valuess[
                                                                                `son.${index}.${family_son_life.name}`
                                                                            ] === "Si" && (
                                                                                    <div>
                                                                                        <div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    Nombre:
                                                                                                </label>
                                                                                                <InputField name={`son.${index}.${family_son_name.name}`} label={family_son_name.label} fullWidth />
                                                                                            </div>
                                                                                            <div>
                                                                                                <label
                                                                                                    style={{ fontSize: "18px", fontWeight: "bold" }}
                                                                                                >
                                                                                                    ¿Es menor de edad?:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    key={`inputSon_${index}`}
                                                                                                    name={`son.${index}.${family_son_validate_age.name}`}
                                                                                                    label={family_son_validate_age.label}
                                                                                                    data={life}
                                                                                                    onChange={(e) => {
                                                                                                        gettingValueAge(
                                                                                                            `son.${index}.${family_son_validate_age.name}`,
                                                                                                            e
                                                                                                        );
                                                                                                    }}
                                                                                                    fullWidth
                                                                                                />

                                                                                                {valueAge[
                                                                                                    `son.${index}.${family_son_validate_age.name}`
                                                                                                ] === "Si" && (

                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Edad:
                                                                                                            </label>
                                                                                                            <InputField name={`son.${index}.${family_son_age.name}`} label={family_son_age.label} fullWidth />

                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                ¿Quién cuidara de el?:
                                                                                                            </label>
                                                                                                            <InputField name={`son.${index}.${family_son_lookafther.name}`} label={family_son_lookafther.label} fullWidth />
                                                                                                        </div>

                                                                                                    )}

                                                                                                {valueAge[
                                                                                                    `son.${index}.${family_son_validate_age.name}`
                                                                                                ] === "No" && (

                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Edad:
                                                                                                            </label>
                                                                                                            <InputField name={`son.${index}.${family_son_age.name}`} label={family_son_age.label} fullWidth />
                                                                                                        </div>

                                                                                                    )}


                                                                                            </div>


                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    Estado civil:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`son.${index}.${family_son_status.name}`}
                                                                                                    label={family_son_status.label}
                                                                                                    data={civil}
                                                                                                    fullWidth
                                                                                                />
                                                                                            </div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    ¿Tiene teléfono?:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`son.${index}.${family_son_phone_val.name}`}
                                                                                                    label={family_son_phone_val.label}
                                                                                                    data={validate}
                                                                                                    onChange={(e) => {
                                                                                                        gettingPhone(
                                                                                                            `son.${index}.${family_son_phone_val.name}`,
                                                                                                            e
                                                                                                        );
                                                                                                    }}
                                                                                                    fullWidth
                                                                                                />
                                                                                                <div>
                                                                                                    {valuesPhone[
                                                                                                        `son.${index}.${family_son_phone_val.name}`
                                                                                                    ] === "Si" && (
                                                                                                            <div style={{ paddingTop: "10px" }}>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Teléfono:
                                                                                                                    </label>
                                                                                                                    <InputField name={`son.${index}.${family_son_phone.name}`} label={family_son_phone.label} fullWidth />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )}

                                                                                                    {valuesPhone[
                                                                                                        `son.${index}.${family_son_phone_val.name}`
                                                                                                    ] === "No" && (
                                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                    ¿Motivo del por qué no tiene teléfono?:
                                                                                                                </label>
                                                                                                                <InputField name={`son.${index}.${family_son_no_phone.name}`} label={family_son_no_phone.label} fullWidth />
                                                                                                            </div>

                                                                                                        )}
                                                                                                </div>
                                                                                            </div>

                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    ¿Labora?:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`son.${index}.${family_son_working_val.name}`}
                                                                                                    label={family_son_working_val.label}
                                                                                                    data={validate}
                                                                                                    onChange={(e) => {
                                                                                                        gettingWorking(
                                                                                                            `son.${index}.${family_son_working_val.name}`,
                                                                                                            e
                                                                                                        )
                                                                                                    }
                                                                                                    }
                                                                                                    fullWidth
                                                                                                />
                                                                                                <div>
                                                                                                    {valuesWorking[
                                                                                                        `son.${index}.${family_son_working_val.name}`
                                                                                                    ] === "Si" && (
                                                                                                            <div style={{ paddingTop: "10px" }}>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Puesto donde labora:
                                                                                                                    </label>
                                                                                                                    <InputField name={`son.${index}.${family_son_place.name}`} label={family_son_place.label} fullWidth />
                                                                                                                </div>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Empresa donde labora:
                                                                                                                    </label>
                                                                                                                    <InputField name={`son.${index}.${family_son_company.name}`} label={family_son_company.label} fullWidth />
                                                                                                                </div>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Ingresos promedio:
                                                                                                                    </label>
                                                                                                                    <InputField name={`son.${index}.${family_son_financial_income.name}`} label={family_son_financial_income.label} fullWidth />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )}

                                                                                                    {valuesWorking[
                                                                                                        `son.${index}.${family_son_working_val.name}`
                                                                                                    ] === "No" && (
                                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                    ¿De quién depende económicamente?:
                                                                                                                </label>
                                                                                                                <InputField name={`son.${index}.${family_son_depend.name}`} label={family_son_depend.label} fullWidth />
                                                                                                            </div>
                                                                                                        )}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}

                                                                            {valuess[
                                                                                `son.${index}.${family_son_life.name}`
                                                                            ] === "No" && (
                                                                                    <div>
                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                ¿Tiempo fallecido?:
                                                                                            </label>
                                                                                            <InputField name={`son.${index}.${family_son_time_died.name}`} label={family_son_time_died.label} fullWidth />
                                                                                        </div>
                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                ¿Razón de fallecimiento?:
                                                                                            </label>
                                                                                            <InputField name={`son.${index}.${family_son_reason_died.name}`} label={family_son_reason_died.label} fullWidth />
                                                                                        </div>
                                                                                    </div>
                                                                                )}
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
