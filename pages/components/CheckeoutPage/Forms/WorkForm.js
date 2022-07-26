import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InputAdornment from '@mui/material/InputAdornment';
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

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

export default function WorkForm(props) {
    let [valuess, setValue] = useState({});
    const gettingValue = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value,
        };
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValue(nvalues);
    };


    const [valueValidate, setValueValidate] = useState({});
    const gettingValidate = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value,
        };
        // console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValueValidate(nvalues);
    }

    const [valueNe, setValueNe] = useState({});
    const gettingValueNe = (e) => {
        const { value } = e.target;
        setValueNe(value);
    }

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

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
            work_ne_salaryPersonal,
            work_ne_detail,
            work_ne_detailIncome,
            work_ne_whatwill
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
                        paddingLeft: "10px"
                    }}
                >
                    Información laboral
                </Typography>
                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                                ¿Ha laborado alguna vez en el Grupo financiero Banrural?:
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
                            <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                                ¿Posee algún negocio?:
                            </label>
                            <SelectField
                                // key={`inputwork_${index}`}
                                name={work_valNe.name}
                                label={work_valNe.label}
                                data={validate}
                                onChange={(e) => { gettingValueNe(e) }}
                                fullWidth
                                style={{ paddingBottom: "40px"}}
                            />
                            {valueNe === "Si" && (
                            <Grid container>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Nombre del negocio:
                                    </label>
                                    <InputField name={work_ne_name.name} label={work_ne_name.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Página del negocio:
                                    </label>
                                    <InputField name={work_ne_web.name} label={work_ne_web.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Fecha de inicio:
                                    </label>
                                    <DatePickerField name={work_ne_dateInit.name} label={work_ne_dateInit.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Salarios:
                                    </label>
                                    <InputField name={work_ne_salaryPersonal.name} label={work_ne_salaryPersonal.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Detallar de que trata el negocio:
                                    </label>
                                    <InputField name={work_ne_detail.name} label={work_ne_detail.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        Detallar ingresos:
                                    </label>
                                    <InputField name={work_ne_detailIncome.name} label={work_ne_detailIncome.label} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "40px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Qué hara con el negocio si es contratado?:
                                    </label>
                                    <InputField name={work_ne_whatwill.name} label={work_ne_whatwill.label} fullWidth />
                                </Grid>
                            </Grid>
                        )}
                        </Grid>

                        
                    </Grid>

                </Grid>

                <Grid>
                    <Grid>
                        <div>
                            <p
                                style={{
                                    paddingLeft: "15px",
                                    paddingTop: "10px",
                                    fontSize: "15px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Tener presente que tiene que colocar todos sus trabajos ya sea, vacacionista, temporal, informal, por facturación o planilla
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
                                                            <Divider style={{ paddingTop: "20px" }}>
                                                                <Chip
                                                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                                                    label={`Laboral ${index + 1}`}
                                                                />
                                                            </Divider>

                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Nombre de la empresa:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_name.name}`} label={work_name.label} fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Cargo que desempeño:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_position.name}`} label={work_position.label} fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Fecha de ingreso:
                                                                </label>
                                                                <DatePickerField name={`work.${index}.${work_entry.name}`} label={work_entry.label} fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Fecha de egreso:
                                                                </label>
                                                                <DatePickerField name={`work.${index}.${work_withdrawal.name}`} label={work_withdrawal.label} fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Salario devengado:
                                                                </label>
                                                                <InputField
                                                                    name={`work.${index}.${work_salary.name}`} label={work_salary.label}
                                                                    InputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                Q.
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Nombre del jefe inmediato:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_boss.name}`} label={work_boss.label} fullWidth />
                                                            </div>
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Puesto del jefe inmediato:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_chiefposition.name}`} label={work_chiefposition.label} fullWidth />
                                                            </div>

                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Número del jefe inmediato:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_phone_boss.name}`} label={work_phone_boss.label} fullWidth />
                                                            </div>
                                                            <div>

                                                            </div>
                                                            <div style={{ paddingTop: "10px" }}>

                                                                <label
                                                                    style={{ fontSize: "18px", fontWeight: "bold" }}
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

                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                Número de la empresa:
                                                                            </label>
                                                                            <InputField name={`work.${index}.${work_phone.name}`} label={work_phone.label} fullWidth />
                                                                        </div>
                                                                    )}

                                                                {valuess[
                                                                    `work.${index}.${work_phone_val.name}`
                                                                ] === "No" && (

                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                ¿Motivo de no poseer el teléfono?:
                                                                            </label>
                                                                            <InputField name={`work.${index}.${work_phone_reason.name}`} label={work_phone_reason.label} fullWidth />
                                                                        </div>
                                                                    )}
                                                            </div>

                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    Motivo de su retiro:
                                                                </label>
                                                                <InputField name={`work.${index}.${work_withdrawalreason.name}`} label={work_withdrawalreason.label} fullWidth />
                                                            </div>

                                                            <div style={{ paddingTop: "10px" }}>

                                                                <label
                                                                    style={{ fontSize: "18px", fontWeight: "bold" }}
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

                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                ¿Por qué?:
                                                                            </label>
                                                                            <InputField name={`work.${index}.${work_reference_reason.name}`} label={work_reference_reason.label} fullWidth />
                                                                        </div>
                                                                    )}

                                                            </div>

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
