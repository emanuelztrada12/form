import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";
import BoyIcon from '@mui/icons-material/Boy';

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

export default function GrandfatherForm(props) {
    let [valuess, setValue] = useState({});
    const gettingValue = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value,
        };
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValue(nvalues);
    };

    const [valuesPhone, setPhone] = useState({});
    const gettingPhone = (name, e) => {
        const nvalues = {
            ...valuesPhone,
            [name]: e.target.value,
        };
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setPhone(nvalues);
    };

    const [valuesWorking, setWorking] = useState({});
    const gettingWorking = (name, e) => {
        // let { value } = e.target;
        const nvalues = {
            ...valuesWorking,
            [name]: e.target.value,
        };
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
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
            family_validate_grandfather,
            family_grandfather_name,
            family_grandfather_age,
            family_grandfather_status,
            family_grandfather_place,
            family_grandfather_company,
            family_grandfather_financial_income,
            family_grandfather_phone,
            family_grandfather_depend,
            family_grandfather_no_phone,
            family_grandfather_time_died,
            family_grandfather_reason_died,
            family_grandfather_life,
            family_grandfather_phone_val,
            family_grandfather_working_val,
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
                            paddingLeft: "10px"
                        }}
                    >
                        Datos de los Abuelos
                    </Typography>
                    <Grid>
                        <div>
                            <Divider style={{ paddingTop: "20px" }}>
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
                                Ingrese la información de sus abuelos maternos y paternos
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
                                    name="grandfather"
                                    render={(arrayHelpers) => (
                                        <>
                                            <IconButton
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        [family_grandfather_name.name]: "",
                                                        [family_grandfather_age.name]: "",
                                                        [family_grandfather_status.name]: "",
                                                        [family_grandfather_place.name]: "",
                                                        [family_grandfather_company.name]: "",
                                                        [family_grandfather_financial_income.name]: "",
                                                        [family_grandfather_phone.name]: "",
                                                        [family_grandfather_depend.name]: "",
                                                        [family_grandfather_no_phone.name]: "",
                                                        [family_grandfather_time_died.name]: "",
                                                        [family_grandfather_reason_died.name]: "",
                                                        [family_grandfather_life.name]: "",
                                                        [family_grandfather_phone_val.name]: "",
                                                        [family_grandfather_working_val.name]: "",
                                                    })
                                                }
                                            >
                                                <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                            </IconButton>
                                            {(values.grandfather || []).map((_, index) => (
                                                <Grid
                                                    key={`inputgrandfather_${index}`}
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
                                                                    icon={<BoyIcon />}
                                                                    color="primary"
                                                                    label={`Abuelo ${index + 1}`}
                                                                />
                                                            </Divider>
                                                            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                                                                <Paper elevation={3}>
                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "10px", paddingTop: "10px" }}>
                                                                        <label
                                                                            style={{ fontSize: "18px", fontWeight: "bold" }}
                                                                        >
                                                                            ¿Aún Vive?:
                                                                        </label>
                                                                        <SelectField
                                                                            key={`inputgrandfather_${index}`}
                                                                            name={`grandfather.${index}.${family_grandfather_life.name}`}
                                                                            label={family_grandfather_life.label}
                                                                            data={life}
                                                                            onChange={(e) => {
                                                                                gettingValue(
                                                                                    `grandfather.${index}.${family_grandfather_life.name}`,
                                                                                    e
                                                                                );
                                                                            }}
                                                                            fullWidth
                                                                        />
                                                                    </div>
                                                                    {valuess[
                                                                        `grandfather.${index}.${family_grandfather_life.name}`
                                                                    ] === "Si" && (
                                                                            <div>
                                                                                <div>
                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Nombre:
                                                                                        </label>
                                                                                        <InputField name={`grandfather.${index}.${family_grandfather_name.name}`} label={family_grandfather_name.label} fullWidth />
                                                                                    </div>
                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Edad:
                                                                                        </label>
                                                                                        <InputField name={`grandfather.${index}.${family_grandfather_age.name}`} label={family_grandfather_age.label} fullWidth />
                                                                                    </div>
                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            Estado civil:
                                                                                        </label>
                                                                                        <SelectField
                                                                                            name={`grandfather.${index}.${family_grandfather_status.name}`}
                                                                                            label={family_grandfather_status.label}
                                                                                            data={civil}
                                                                                            fullWidth
                                                                                        />
                                                                                    </div>
                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            ¿Tiene teléfono?:
                                                                                        </label>
                                                                                        <SelectField
                                                                                            name={`grandfather.${index}.${family_grandfather_phone_val.name}`}
                                                                                            label={family_grandfather_phone_val.label}
                                                                                            data={validate}
                                                                                            onChange={(e) => {
                                                                                                gettingPhone(
                                                                                                    `grandfather.${index}.${family_grandfather_phone_val.name}`,
                                                                                                    e
                                                                                                );
                                                                                            }}
                                                                                            fullWidth
                                                                                        />
                                                                                        <div>
                                                                                            {valuesPhone[
                                                                                                `grandfather.${index}.${family_grandfather_phone_val.name}`
                                                                                            ] === "Si" && (
                                                                                                    <div style={{ paddingTop: "10px" }}>
                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Teléfono:
                                                                                                            </label>
                                                                                                            <InputField name={`grandfather.${index}.${family_grandfather_phone.name}`} label={family_grandfather_phone.label} fullWidth />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}

                                                                                            {valuesPhone[
                                                                                                `grandfather.${index}.${family_grandfather_phone_val.name}`
                                                                                            ] === "No" && (
                                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                            ¿Motivo del por qué no tiene teléfono?:
                                                                                                        </label>
                                                                                                        <InputField name={`grandfather.${index}.${family_grandfather_no_phone.name}`} label={family_grandfather_no_phone.label} fullWidth />
                                                                                                    </div>

                                                                                                )}
                                                                                        </div>
                                                                                    </div>

                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                            ¿Labora?:
                                                                                        </label>
                                                                                        <SelectField
                                                                                            name={`grandfather.${index}.${family_grandfather_working_val.name}`}
                                                                                            label={family_grandfather_working_val.label}
                                                                                            data={validate}
                                                                                            onChange={(e) => {
                                                                                                gettingWorking(
                                                                                                    `grandfather.${index}.${family_grandfather_working_val.name}`,
                                                                                                    e
                                                                                                )
                                                                                            }
                                                                                            }
                                                                                            fullWidth
                                                                                        />
                                                                                        <div>
                                                                                            {valuesWorking[
                                                                                                `grandfather.${index}.${family_grandfather_working_val.name}`
                                                                                            ] === "Si" && (
                                                                                                    <div style={{ paddingTop: "10px" }}>
                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Puesto donde labora:
                                                                                                            </label>
                                                                                                            <InputField name={`grandfather.${index}.${family_grandfather_place.name}`} label={family_grandfather_place.label} fullWidth />
                                                                                                        </div>
                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Empresa donde labora:
                                                                                                            </label>
                                                                                                            <InputField name={`grandfather.${index}.${family_grandfather_company.name}`} label={family_grandfather_company.label} fullWidth />
                                                                                                        </div>
                                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                Ingresos promedio:
                                                                                                            </label>
                                                                                                            <InputField name={`grandfather.${index}.${family_grandfather_financial_income.name}`} label={family_grandfather_financial_income.label} fullWidth />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}

                                                                                            {valuesWorking[
                                                                                                `grandfather.${index}.${family_grandfather_working_val.name}`
                                                                                            ] === "No" && (
                                                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                            ¿De quién depende económicamente?:
                                                                                                        </label>
                                                                                                        <InputField name={`grandfather.${index}.${family_grandfather_depend.name}`} label={family_grandfather_depend.label} fullWidth />
                                                                                                    </div>
                                                                                                )}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                    {valuess[
                                                                        `grandfather.${index}.${family_grandfather_life.name}`
                                                                    ] === "No" && (
                                                                            <div>
                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿Tiempo fallecido?:
                                                                                    </label>
                                                                                    <InputField name={`grandfather.${index}.${family_grandfather_time_died.name}`} label={family_grandfather_time_died.label} fullWidth />
                                                                                </div>
                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                        ¿Razón de fallecimiento?:
                                                                                    </label>
                                                                                    <InputField name={`grandfather.${index}.${family_grandfather_reason_died.name}`} label={family_grandfather_reason_died.label} fullWidth />
                                                                                </div>
                                                                            </div>
                                                                        )}
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
                </Grid>
            </>
        )
    );
}
