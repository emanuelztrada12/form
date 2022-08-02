import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import MovingIcon from '@mui/icons-material/Moving';
import GroupsIcon from '@mui/icons-material/Groups';

const value = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    }
];

export default function SindicatosForm(props) {
    const [sin, setSin] = useState("");
    const handleChange = (e) => {
        let { value } = e.target;
        setSin(value)
    }

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            sindicatos_favor,
            sindicatos_formar,
            sindicatos_why
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
                        Sindicatos
                    </Typography>
                    <p style={{ textAlign: "center", fontSize: "18px" }}>
                        Los sindicatos son grupos de trabajadores de una misma empresa
                        que se organizan de manera no autorizada por el patrono, para
                        aparentemente velar por los derechos de los trabajadores,
                        se crean para ver el beneficio de los integrantes del grupo
                        solicitando cosas que no estaban establecidas en su contrato
                        de trabajo, y esto detiene el crecimiento de las empresas,
                        pues no les permiten desarrollarse, ni trabajar en equipo para que
                        exista un equilibrio entre ambas partes, ya que en ocasiones expresan
                        sus inconformidades por medio de paros, huelgas o manifestaciones.
                    </p>
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
                            icon={< GroupsIcon />}
                            color="primary"
                            label="Sindicatos"
                        />
                    </Divider>
                    <Grid >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ¿Esta a favor de los sindicatos?:

                            </label>
                            <InputField
                                name={sindicatos_favor.name}
                                label={sindicatos_favor.label}
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
                                ¿Formaría parte de un sindicato?:
                            </label>
                            <SelectField
                                name={sindicatos_formar.name}
                                label={sindicatos_formar.label}
                                onChange={handleChange}
                                data={value}
                                fullWidth
                            />
                            {sin === "Si" && (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                                >
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿porque?:

                                    </label>
                                    <InputField
                                        name={sindicatos_why.name}
                                        label={sindicatos_why.label}
                                        fullWidth
                                    />
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Grid>
            </>
        )
    );
}
