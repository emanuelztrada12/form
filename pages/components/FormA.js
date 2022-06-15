import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const validationSchema = yup.object({
    general_name: yup
        .string()
        .required("Los nombres son requeridos"),
    general_lastname: yup
        .string()
        .required("Los apellidos son requeridos"),
    general_age: yup
        .string()
        .required("La edad es obligatoria"),
    general_birth: yup
        .date()
        .required("La fecha es obligatoria"),
    general_place_birth: yup
        .string()
        .required("El lugar de nacimiento es obligatorio"),
    general_profession: yup
        .string()
        .required("El dato es requerido"),
    general_direction: yup
        .string()
        .required("La dirección actual es requerida"),
    general_time_reside: yup
        .string()
        .required("El tiempo de residir en la vivienda es requerido"),
    general_previous_direction: yup
        .string()
        .required("La dirección anterior es obligatoria, si no tiene dirección anterior ingrese (No posee)"),
    general_emergency_name: yup
        .string()
        .required("El nombre de la persona encargada en caso de emergencias es obligatoria"),
    general_emergency_kinship: yup
        .string()
        .required("El parentesco es obligatorio"),
    general_emergency_phone: yup
        .string()
        .required("El teléfono de emergencia es requerido"),
    general_phone: yup
        .string()
        .required("El teléfono celular es requerido"),
    general_dpi: yup
        .string()
        .required("El DPI es requerido"),
    general_nit: yup
        .string()
        .required("El NIT es requerido"),
    general_license: yup
        .string()
        .required("La licencia de conducir es requerido, de no poseer ingrese (No posee)"),
    general_vehicle: yup
        .string()
        .required("El vehiculo es requerido, de no poseer ingrese (No posee) requerido"),
    general_email: yup
        .string()
        .email("El email no es válido")
        .required("El email es requerido"),
    general_position_applies: yup
        .string()
        .required("El puesto que aplica es requerido"),
    general_igss: yup
        .string()
        .required("El puesto que aplica es requerido"),
    general_irtra: yup
        .string()
        .required("El puesto que aplica es requerido"),
    general_brand_vehicle: yup
        .string()
        .required("El puesto que aplica es requerido"),
});


const FormA = ({ onChange, refId }) => {

    const [dateYear, setDateYear] = useState("");
    const gettingDateYear = (e) => {
        var years = new Date(new Date() - new Date(e.target.value)).getFullYear() - 1970;
        setDateYear(years);
    }

    const [valores, setValores] = useState("soltero");
    const handleChanges = (event) => {
        setValores(event.target.value);
    };


    const [valoresVehiculo, setVehiculo] = useState("Si");
    const handleChangesVehiculo = (event) => {
        setVehiculo(event.target.value); 
    }

    const formik = useFormik({
        initialValues: {
            general_name: "",
            general_lastname: "",
            general_age: "",
            general_birth: "",
            general_place_birth: "",
            general_profession: "",
            general_direction: "",
            general_time_reside: "",
            general_previous_direction: "",
            general_emergency_name: "",
            general_emergency_kinship: "",
            general_phone: "",
            general_emergency_phone: "",
            general_dpi: "",
            general_nit: "",
            general_igss: "",
            general_irtra: "",
            general_license: "",
            general_vehicle: "",
            general_email: "",
            general_position_applies: "",
            general_brand_vehicle: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            watchForm();
            try {
                const { data } = await newFormulario({
                    variables: {
                        input: {
                            //Informacion general
                            general_name,
                            general_lastname,
                            general_age,
                            general_birth,
                            general_place_birth,
                            general_material_status: valores,
                            general_profession,
                            general_direction,
                            general_time_reside,
                            general_emergency_name,
                            general_emergency_kinship,
                            general_previous_direction,
                            reciboluz_general,
                            general_phone,
                            general_emergency_phone,
                            general_dpi,
                            general_nit,
                            general_igss,
                            general_irtra,
                            general_license,
                            general_vehicle,
                            general_email,
                            general_position_applies,
                            general_brand_vehicle,
                        },
                    },
                });

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    });

    React.useImperativeHandle(refId, () => ({
        Submit: async () => {
            await formik.submitForm();
        }
    }));

    function watchForm() {
        if (onChange) {
            onChange({
                values: formik.values,
                validated: formik.isSubmitting
                    ? Object.keys(formik.errors).length === 0
                    : false
            });
        }
    }

    return (
        <form ref={refId}>
            <div className="form">
                <h1
                    style={{
                        fontSize: "30px",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "bold",
                    }}
                >
                    INFORMACIÓN GENERAL
                </h1>
                <Divider style={{ paddingTop: "2px" }} />
                <Box
                    sx={{
                        width: 900,
                        maxWidth: "100%",
                    }}
                >
                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Nombres:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_name"
                                name="general_name"
                                label="Ingrese sus nombre"
                                value={formik.values.general_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_name &&
                        formik.errors.general_name ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_name}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Apellidos:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_lastname"
                                name="general_lastname"
                                type="text"
                                label="Ingrese sus apellido"
                                defaultValue={formik.values.general_lastname}
                                value={formik.values.general_lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    {formik.touched.general_lastname &&
                        formik.errors.general_lastname ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_lastname}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Fecha de Nacimiento:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_birth"
                                type="date"
                                value={formik.values.general_birth}
                                onChange={(e) => { formik.handleChange(e); gettingDateYear(e) }}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_birth &&
                        formik.errors.general_birth ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_birth}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}


                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Edad:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                disabled
                                id="general_age"
                                label="Ingrese su edad"
                                value={dateYear}
                                defaultValue={dateYear}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_age &&
                        formik.errors.general_age ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_age}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Lugar de Nacimiento:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_place_birth"
                                label="Ingrese el lugar de nacimiento"
                                value={formik.values.general_place_birth}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_place_birth &&
                        formik.errors.general_place_birth ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_place_birth}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Estado Civil:
                        </label>
                        <div style={{ paddingLeft: "20px" }}>
                            <FormControl>
                                <FormLabel
                                    style={{ paddingBottom: "10px" }}
                                    id="grupo"
                                ></FormLabel>
                                <RadioGroup
                                    name="grupo"
                                    value={valores}
                                    onChange={handleChanges}
                                >
                                    <FormControlLabel
                                        value="soltero"
                                        control={<Radio />}
                                        label="Soltero"
                                    />
                                    <FormControlLabel
                                        value="casado"
                                        control={<Radio />}
                                        label="Casado"
                                    />

                                    <FormControlLabel
                                        value="divorciado"
                                        control={<Radio />}
                                        label="Divorciado"
                                    />

                                    <FormControlLabel
                                        value="viudo"
                                        control={<Radio />}
                                        label="Viudo"
                                    />

                                    <FormControlLabel
                                        value="unido"
                                        control={<Radio />}
                                        label="Unido"
                                    />

                                    <FormControlLabel
                                        value="otra"
                                        control={<Radio />}
                                        label="Otra..."
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Profesión u Oficio:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_profession"
                                type="text"
                                label="Ingrese su profesión u oficio"
                                value={formik.values.general_profession}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_profession &&
                        formik.errors.general_profession ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_profession}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Dirección de la vivienda:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_direction"
                                type="text"
                                label="Ingrese su dirección actual"
                                value={formik.values.general_direction}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_direction &&
                        formik.errors.general_direction ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_direction}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Teimpo de residir en la vivienda:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_time_reside"
                                type="text"
                                label="Ingrese su tiempo de residir en la vivienda"
                                value={formik.values.general_time_reside}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_time_reside &&
                        formik.errors.general_time_reside ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_time_reside}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Dirección Anterior:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_previous_direction"
                                type="text"
                                label="Ingrese su dirección anterior si tiene menos de 07 meses en su residencia actual"
                                value={formik.values.general_previous_direction}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_previous_direction &&
                        formik.errors.general_previous_direction ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_previous_direction}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Teléfono Celular:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_phone"
                                type="text"
                                label="Ingrese su teléfono celular"
                                value={formik.values.general_phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_phone &&
                        formik.errors.general_phone ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_phone}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Teléfono de Emergencia:
                        </label>
                        <div style={{ paddingTop: "2px", }}>
                            <TextField
                                fullWidth
                                id="general_emergency_phone"
                                label="Ingrese su teléfono de emergencia"
                                value={formik.values.general_emergency_phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_emergency_phone &&
                        formik.errors.general_emergency_phone ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_emergency_phone}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Nombre del encargado:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_emergency_name"
                                label="Ingrese su teléfono de emergencia"
                                value={formik.values.general_emergency_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_emergency_name &&
                        formik.errors.general_emergency_name ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_emergency_name}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Parentesco:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_emergency_kinship"
                                label="Ingrese su teléfono de emergencia"
                                value={formik.values.general_emergency_kinship}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_emergency_kinship &&
                        formik.errors.general_emergency_kinship ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_emergency_kinship}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            DPI:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_dpi"
                                type="text"
                                label="Ingrese su DPI"
                                value={formik.values.general_dpi}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_dpi &&
                        formik.errors.general_dpi ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_dpi}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            NIT :
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_nit"
                                type="text"
                                label="Ingrese su NIT"
                                value={formik.values.general_nit}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_nit &&
                        formik.errors.general_nit ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_nit}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Afiliación de IGSS:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_igss"
                                type="text"
                                label="Ingrese su afiliación de IGSS"
                                value={formik.values.general_igss}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>


                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Afiliación de IRTRA:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_irtra"
                                type="text"
                                label="Ingrese su afiliación de IRTRA"
                                value={formik.values.general_irtra}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Licencia de conducir:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="general_license"
                                type="text"
                                label="Ingrese su licencia de conducir"
                                value={formik.values.general_license}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.general_license &&
                        formik.errors.general_license ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.general_license}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            ¿Posee vehículo?:
                        </label>
                        <div style={{ paddingLeft: "20px" }}>
                            <FormControl>
                                <FormLabel
                                    style={{ paddingBottom: "10px" }}
                                    id="grupo"
                                ></FormLabel>
                                <RadioGroup
                                    name="grupo"
                                    value={valoresVehiculo}
                                    onChange={handleChangesVehiculo}
                                >
                                    <FormControlLabel
                                        value="Si"
                                        control={<Radio />}
                                        label="Si"
                                    />
                                    <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>


                    {valoresVehiculo === "Si" ? (
                        <div style={{ paddingTop: "15px" }}>
                            <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                                Ingresa cuantos vehículos tienes:
                            </label>
                            <div style={{ paddingTop: "2px" }}>
                                <TextField
                                    fullWidth
                                    id="general_brand_vehicle"
                                    type="text"
                                    label="Ingrese la marca de su vehiculo"
                                    value={formik.values.general_brand_vehicle}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                    ) : (<h1>no hay nada</h1>)}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Vehiculo:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="vehiculo_general"
                                type="text"
                                label="Ingrese su vehiculo_general"
                                value={formik.values.vehiculo_general}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.vehiculo_general &&
                        formik.errors.vehiculo_general ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.vehiculo_general}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Correo electrónico:
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="email_general"
                                type="text"
                                label="Ingrese su correo electrónico"
                                value={formik.values.email_general}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.email_general &&
                        formik.errors.email_general ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.email_general}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div style={{ paddingTop: "15px" }}>
                        <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            Puesto que aplica (ocupa):
                        </label>
                        <div style={{ paddingTop: "2px" }}>
                            <TextField
                                fullWidth
                                id="puesto_aplica_general"
                                type="text"
                                label="Ingrese al puesto que aplica"
                                value={formik.values.puesto_aplica_general}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    {formik.touched.puesto_aplica_general &&
                        formik.errors.puesto_aplica_general ? (
                        <div>
                            <div className="w-full my-1 bg-orange-200 border-l-4 border-orange-500 text-red-700 p-4 ">
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="warning"><p>{formik.errors.puesto_aplica_general}</p></Alert>
                                </Stack>
                            </div>
                        </div>
                    ) : null}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            paddingTop: "20px",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "blue",
                                borderRadius: "4px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                color: "white",
                                minHeight: "35px",
                                minWidth: "100px",
                            }}
                            onClick={() => setValue(1)}
                        >
                            Siguiente
                        </button>
                    </div>
                </Box>
            </div>
        </form>
    );
};

export default FormA; 