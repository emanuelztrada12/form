import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function RedSocialForm(props) {

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            red_faccebook,
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

                       Redes sociales
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
                            icon={< FacebookIcon />}
                            color="primary"
                            label="Facebook"
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
                                Perfil de Facebook:
                            </label>
                            <InputField
                                name={red_faccebook.name}
                                label={red_faccebook.label}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    );
}
