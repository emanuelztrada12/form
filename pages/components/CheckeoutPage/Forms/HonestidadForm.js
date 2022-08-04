import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import MovingIcon from '@mui/icons-material/Moving';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

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

export default function HonestidadForm(props) {
    const [sin, setSin] = useState("");
    const handleChange = (e) => {
        let { value } = e.target;
        setSin(value)
    }

    const [whyIdentity, setWhyIndentiry] = useState("");
    const gettingWhyIdentity = (e) => {
        let { value } = e.target;
        setWhyIndentiry(value)
    };

    const [docInOrder, setDocInOrder] = useState("");
    const gettingDocInOrder = (e) => {
        let { value } = e.target;
        setDocInOrder(value)
    };
    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            honest_p1, 
            honest_p2,
            honest_p3,
            honest_p4,
            whyIdentityHidde,
            documentInOrder
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
                        Honestidad
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
                            icon={< FollowTheSignsIcon />}
                            color="primary"
                            label="Honestidad"
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
                                ¿Ha ocultado su identidad por algún motivo?:
                            </label>
                            <SelectField
                                name={honest_p1.name}
                                label={honest_p1.label}
                                data={value}
                                onChange={ (e) => gettingWhyIdentity(e) }
                                fullWidth
                            />
                            {whyIdentity === "Si" && (
                                <Grid>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Por que?:
                                    </label>
                                    <InputField name={whyIdentityHidde.name} label={whyIdentityHidde.label} fullWidth />
                                </Grid>
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ¿Ha entregado algún documento falso en cualquier etapa de su aplicación o contratación?:
                            </label>
                            <SelectField
                                name={honest_p2.name}
                                label={honest_p2.label}
                                data={value}
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
                                ¿Ha omitido información de manera intencional en etapas previas al proceso de selección, en su solicitud de empleo, o en su Curriculum Vitae?:
                            </label>
                            <SelectField
                                name={honest_p3.name}
                                label={honest_p3.label}
                                data={value}
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
                                ¿Están todos sus documentos en orden?:
                            </label>
                            <SelectField
                                name={honest_p4.name}
                                label={honest_p4.label}
                                data={value}
                                onChange={ (e) => {gettingDocInOrder(e)} }
                                fullWidth
                            />
                            {docInOrder === "No" && (
                                <Grid>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ¿Por que?:
                                    </label>
                                    <InputField name={documentInOrder.name} label={documentInOrder.label} fullWidth />
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Grid>
            </>
        )
    );
}
