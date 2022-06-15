import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import FormA from "./components/FormA";
import * as yup from "yup";

import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Home() {
  const theme = useTheme();
  const [isSSR, setIsSSR] = useState(true);
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    formA: { values: null, validated: false },
  }); 

  const formAref = useRef();

  useEffect(() => {
    if(formData.validated && formData.validated){
      alert
    }
  }, [formData]);

  async function handleSubmit() {
    await formAref.current.Submit();
  }

  function handleChangeFormA(data) {
    setFormData({ ...formData, formA: data });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <>
        <h1 className="flex justify-center text-white pt-20" style={{ fontSize: "2.5em" }}>
          Formulario Golden
        </h1>
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 890,
                height: 890,
              },
            }}
            display="flex"
            justifyContent="center"
            paddingTop={20}
          >
            <Paper elevation={24} style={{ maxHeight: 1020, overflow: "auto" }}>
              <>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Información General"
                        {...a11yProps(0)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Datos del Padre"
                        {...a11yProps(1)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Datos de la Madre"
                        {...a11yProps(2)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Datos de los Hermanos"
                        {...a11yProps(3)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Datos de los Hijos"
                        {...a11yProps(4)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Datos conyugue"
                        {...a11yProps(5)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Información Educacional"
                        {...a11yProps(6)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Información laboral"
                        {...a11yProps(7)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Información Economica"
                        {...a11yProps(8)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Información Social"
                        {...a11yProps(9)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Factor Salud"
                        {...a11yProps(10)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Opinión Sindicatos"
                        {...a11yProps(11)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Objetivos"
                        {...a11yProps(12)}
                      />
                      <Tab
                        style={{ fontSize: "14px" }}
                        label="Honestidad"
                        {...a11yProps(13)}
                      />
                    </Tabs>
                  </AppBar>
                </Box>

                <TabPanel value={value} index={0} dir={theme.direction}>
                  <FormA onChange={handleChangeFormA} refId={formAref}/>
                </TabPanel>

              </>
            </Paper>
          </Box>
        </Grid>
      </>
    )
  );
}
