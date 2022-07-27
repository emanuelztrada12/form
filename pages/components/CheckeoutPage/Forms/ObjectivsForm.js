import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import MovingIcon from '@mui/icons-material/Moving';

export default function ObjectivsForm(props) {

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            objectivs_corto,
            objectivs_mediano,
            objectives_largo,
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

                        Objetivos a corto, mediano y largo plazo
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
                            icon={< MovingIcon />}
                            color="primary"
                            label="Objetivos"
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
                                Objetivos a corto plazo:
                            </label>
                            <InputField
                                name={objectivs_corto.name}
                                label={objectivs_corto.label}
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
                                Objetivos a mediano plazo:
                            </label>
                            <InputField
                                name={objectivs_mediano.name}
                                label={objectivs_mediano.label}
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
                                Objetivos a largo plazo:
                            </label>
                            <InputField
                                name={objectives_largo.name}
                                label={objectives_largo.label}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    );
}
