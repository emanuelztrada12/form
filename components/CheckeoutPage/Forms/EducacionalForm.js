import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const val = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
];

const data_magister = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
]

const data_schedules = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
]

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


export default function EducacionalForm(props) {

    const [magister, setMagister] = useState("");
    const gettinMagister = (e) => {
        let { value } = e.target;
        setMagister(value);
    };

    const [schedules, setSchedules] = useState("");
    const gettinSchedules = (e) => {
        let { value } = e.target;
        setSchedules(value);
    };

    const [valuesUni, setUni] = useState("");
    const gettingUni = (e) => {
        let { value } = e.target;
        setUni(value);
    };

    const [valuesVal, setUniVal] = useState("");
    const gettingVal = (e) => {
        let { value } = e.target;
        setUniVal(value);
    }

    const [valuesValDi, setUniValDi] = useState("");
    const gettingValDi = (e) => {
        let { value } = e.target;
        setUniValDi(value);
    }

    const [valuesValBa, setUniValBa] = useState("");
    const gettingValBa = (e) => {
        let { value } = e.target;
        setUniValBa(value);
    }

    const [valuesValPri, setUniValPri] = useState("");
    const gettingValPri = (e) => {
        let { value } = e.target;
        setUniValPri(value);
    }

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            //University
            estudie_university_sval,
            estudie_university_name,
            estudie_university_uniname,
            estudie_university_semester,
            estudie_university_val,
            estudie_university_title,
            estudie_university_sede,
            estudie_university_year_graduation,
            estudie_university_no_sede,
            estudie_university_hour,
            /* add data information */
            study_magister,
            wich_career,
            select_schedules,
            why_not_schedules,

            //Diversificado
            estudie_diversificado_sval,
            estudie_diversificado_name,
            estudie_diversificado_uniname,
            estudie_diversificado_desde,
            estudie_diversificado_hasta,

            //Nivel basico
            estudie_basic_sval,
            estudie_basic_uniname,
            estudie_basic_desde,
            estudie_basic_hasta,

            //Nivel primario
            estudie_primary_sval,
            estudie_primary_uniname,
            estudie_primary_desde,
            estudie_primary_hasta,
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
                        Información educacional
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
                            icon={<AccountBalanceIcon />}
                            color="primary"
                            label="Universidad"
                        />
                    </Divider>
                    <Grid item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ¿Posee estudios universitarios?:
                        </label>
                        <SelectField
                            name={estudie_university_sval.name}
                            label={estudie_university_sval.label}
                            data={val}
                            onChange={
                                gettingVal
                            }
                            fullWidth
                        />
                        <Grid>
                            {valuesVal === "Si" && (
                                <div>
                                    <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su carrera:
                                            </label>
                                            <InputField
                                                name={estudie_university_name.name}
                                                label={estudie_university_name.label}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su universidad:
                                            </label>
                                            <InputField
                                                name={estudie_university_uniname.name}
                                                label={estudie_university_uniname.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Semestre:
                                            </label>
                                            <InputField
                                                name={estudie_university_semester.name}
                                                label={estudie_university_semester.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                ¿Estudios completos?:
                                            </label>
                                            <SelectField
                                                name={estudie_university_val.name}
                                                label={estudie_university_val.label}
                                                data={val}
                                                onChange={
                                                    gettingUni
                                                }
                                                fullWidth
                                            />
                                            <Grid>
                                                {valuesUni === "Si" && (
                                                    <div style={{ paddingTop: "10px" }}>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Título:
                                                            </label>
                                                            <InputField name={estudie_university_title.name} label={estudie_university_title.label} fullWidth />
                                                        </div>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Sede:
                                                            </label>
                                                            <InputField name={estudie_university_sede.name} label={estudie_university_sede.label} fullWidth />
                                                        </div>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Año graduación:
                                                            </label>
                                                            <InputField name={estudie_university_year_graduation.name} label={estudie_university_year_graduation.label} fullWidth />
                                                        </div>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                ¿Estudia maestria?
                                                            </label>
                                                            <SelectField
                                                                name={study_magister.name}
                                                                label={study_magister.label}
                                                                data={data_magister}
                                                                onChange={gettinMagister}
                                                                fullWidth
                                                            />
                                                            {magister === 'Si' && (
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        ¿Cual?:
                                                                    </label>
                                                                    <InputField name={wich_career.name} label={wich_career.label} fullWidth />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {valuesUni === "No" && (
                                                    <div style={{ paddingTop: "10px" }}>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Sede:
                                                            </label>
                                                            <InputField name={estudie_university_no_sede.name} label={estudie_university_no_sede.label} fullWidth />
                                                        </div>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                Horarios:
                                                            </label>
                                                            <InputField name={estudie_university_hour.name} label={estudie_university_hour.label} fullWidth />
                                                        </div>
                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ¿Está dispuesto a cambiar de horario?
                                                                </label>
                                                                <SelectField
                                                                    name={select_schedules.name}
                                                                    label={select_schedules.label}
                                                                    data={data_schedules}
                                                                    onChange={gettinSchedules}
                                                                    fullWidth
                                                                />
                                                                {schedules === "No" && (
                                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                            ¿Por qué no?
                                                                        </label>
                                                                        <InputField name={why_not_schedules.name} label={why_not_schedules.label} fullWidth />
                                                                    </div>
                                                                )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Grid>
                    </Grid>

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
                            icon={<SchoolIcon />}
                            color="primary"
                            label="Diversificado"
                        />
                    </Divider>
                    <Grid item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ¿Posee estudios de diversificado?:
                        </label>
                        <SelectField
                            name={estudie_diversificado_sval.name}
                            label={estudie_diversificado_sval.label}
                            data={val}
                            onChange={
                                gettingValDi
                            }
                            fullWidth
                        />
                        <Grid>
                            {valuesValDi === "Si" && (
                                <div>
                                    <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su carrera:
                                            </label>
                                            <InputField
                                                name={estudie_diversificado_name.name}
                                                label={estudie_diversificado_name.label}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su escuela:
                                            </label>
                                            <InputField
                                                name={estudie_diversificado_uniname.name}
                                                label={estudie_diversificado_uniname.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año inicio:
                                            </label>
                                            <InputField
                                                name={estudie_diversificado_desde.name}
                                                label={estudie_diversificado_desde.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año fin:
                                            </label>
                                            <InputField
                                                name={estudie_diversificado_hasta.name}
                                                label={estudie_diversificado_hasta.label}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Grid>
                    </Grid>

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
                            icon={<HomeWorkIcon />}
                            color="primary"
                            label="Nivel básico"
                        />
                    </Divider>
                    <Grid item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ¿Posee estudios de nivel básico?:
                        </label>
                        <SelectField
                            name={estudie_basic_sval.name}
                            label={estudie_basic_sval.label}
                            data={val}
                            onChange={
                                gettingValBa
                            }
                            fullWidth
                        />
                        <Grid>
                            {valuesValBa === "Si" && (
                                <div>
                                    <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su escuela:
                                            </label>
                                            <InputField
                                                name={estudie_basic_uniname.name}
                                                label={estudie_basic_uniname.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año inicio:
                                            </label>
                                            <InputField
                                                name={estudie_basic_desde.name}
                                                label={estudie_basic_desde.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año fin:
                                            </label>
                                            <InputField
                                                name={estudie_basic_hasta.name}
                                                label={estudie_basic_hasta.label}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Grid>
                    </Grid>

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
                            icon={<ImportContactsIcon />}
                            color="primary"
                            label="Nivel primario"
                        />
                    </Divider>
                    <Grid item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ¿Posee estudios de nivel primario?:
                        </label>
                        <SelectField
                            name={estudie_primary_sval.name}
                            label={estudie_primary_sval.label}
                            data={val}
                            onChange={
                                gettingValPri
                            }
                            fullWidth
                        />
                        <Grid>
                            {valuesValPri === "Si" && (
                                <div>
                                    <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Nombre de su escuela:
                                            </label>
                                            <InputField
                                                name={estudie_primary_uniname.name}
                                                label={estudie_primary_uniname.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año inicio:
                                            </label>
                                            <InputField
                                                name={estudie_primary_desde.name}
                                                label={estudie_primary_desde.label}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                        >
                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                Año fin:
                                            </label>
                                            <InputField
                                                name={estudie_primary_hasta.name}
                                                label={estudie_primary_hasta.label}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </Grid>
                    </Grid>

                </Grid>
            </>
        )
    );
}
