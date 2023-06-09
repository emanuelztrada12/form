import React, { useState, useEffect } from "react";
import { InputField, SelectField } from "../../FormFields";

import { Grid, Typography, Divider, Chip } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FaceIcon from "@mui/icons-material/Face";
import WomanIcon from "@mui/icons-material/Woman";
import BoyIcon from "@mui/icons-material/Boy";
import InputAdornment from "@mui/material/InputAdornment";

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

const selectValue = [
  {
    value: "Si",
    label: "Si",
  },
  {
    value: "No",
    label: "No",
  },
];

const condition_resident = [
  {
    value: "Legal",
    label: "Legal",
  },
  {
    value: "Ilegal",
    label: "Ilegal",
  },
];

const relationship = [
  {
    value: "Casado ",
    label: "Casado",
  },
  {
    value: "Unido ",
    label: "Unido",
  },
  {
    value: "Noviazgo",
    label: "Noviazgo",
  },
];

export default function FamilyForm(props) {
  const [values, setValue] = useState("");
  const gettingValue = (e) => {
    let { value } = e.target;
    setValue(value);
  };

  const [valuesTwo, setValuesTwo] = useState("");
  const gettingValuesTwo = (e) => {
    let { value } = e.target;
    setValuesTwo(value);
  };

  /* ADD INFORMATION DAD */
  const [relation, setRelation] = useState("");
  const gettingRelation = (e) => {
    let { value } = e.target;
    setRelation(value);
  };

  const [resident, setResident] = useState("");
  const gettingResident = (e) => {
    let { value } = e.target;
    setResident(value);
  };

  const [residentTwo, setResidentTwo] = useState("");
  const gettingResidentTwo = (e) => {
    let { value } = e.target;
    setResidentTwo(value);
  };

  const [residentMom, setResidentMom] = useState("");
  const gettingResidentMom = (e) => {
    let { value } = e.target;
    setResidentMom(value);
  };

  const [residentMomTwo, setResidentMomTwo] = useState("");
  const gettingResidentMomTwo = (e) => {
    let { value } = e.target;
    setResidentMomTwo(value);
  };

  const [reason, setReason] = useState("");
  const gettingReason = (e) => {
    let { value } = e.target;
    setReason(value);
  };

  const [reasonNegative, setReasonNegative] = useState("");
  const gettingReasonNegative = (e) => {
    let { value } = e.target;
    setReasonNegative(value);
  };

  /* END THE DATA*/

  /* ADD INFORMATION MOM */
  const [relationMom, setRelationMom] = useState("");
  const gettingRelationMom = (e) => {
    let { value } = e.target;
    setRelationMom(value);
  };

  const [reasonMom, setReasonMom] = useState("");
  const gettingReasonMom = (e) => {
    let { value } = e.target;
    setReasonMom(value);
  };

  const [reasonNegativeMom, setReasonNegativeMom] = useState("");
  const gettingReasonNegativeMom = (e) => {
    let { value } = e.target;
    setReasonNegativeMom(value);
  };
  /* END THE DATA*/

  /* has a partners */

  const [togetherParents, setTogetherParents] = useState("");
  const gettingTogetherParents = (e) => {
    let { value } = e.target;
    setTogetherParents(value);
  };

  const [partnerMom, setPartnerMom] = useState("");
  const gettingPartnerMom = (e) => {
    let { value } = e.target;
    setPartnerMom(value);
  };

  const [partnerFather, setPartnerFather] = useState("");
  const gettingPartnerFather = (e) => {
    let { value } = e.target;
    setPartnerFather(value);
  };

  /* ---- END DATA ---- */

  const [valuesPhone, setPhone] = useState("");
  const gettingPhone = (e) => {
    let { value } = e.target;
    setPhone(value);
  };

  const [valuesWorking, setWorking] = useState("");
  const gettingWorking = (e) => {
    let { value } = e.target;
    setWorking(value);
  };

  const [valuesMom, setValueMom] = useState("");
  const gettingValueMom = (e) => {
    let { value } = e.target;
    setValueMom(value);
  };

  const [valuesMomTwo, setValueMomTwo] = useState("");
  const gettingValueMomTwo = (e) => {
    let { value } = e.target;
    setValueMomTwo(value);
  };

  const [valuesPhoneMom, setPhoneMom] = useState("");
  const gettingPhoneMom = (e) => {
    let { value } = e.target;
    setPhoneMom(value);
  };

  const [valuesWorkingMom, setWorkingMom] = useState("");
  const gettingWorkingMom = (e) => {
    let { value } = e.target;
    setWorkingMom(value);
  };

  const [valuesStepfather, setValueStepfather] = useState("");
  const gettingValueStepfather = (e) => {
    let { value } = e.target;
    setValueStepfather(value);
  };

  const [valuesPhoneStepfather, setPhoneStepfather] = useState("");
  const gettingPhoneStepfather = (e) => {
    let { value } = e.target;
    setPhoneStepfather(value);
  };

  const [valuesWorkingStepfather, setWorkingStepfather] = useState("");
  const gettingWorkingStepfather = (e) => {
    let { value } = e.target;
    setWorkingStepfather(value);
  };

  const [valueInfoStepfather, setInfoStepfather] = useState("");
  const gettingInfoStepfather = (e) => {
    let { value } = e.target;
    setInfoStepfather(value);
  };

  const [valueValStepfather, setValStepfather] = useState("");
  const gettingValStepfather = (e) => {
    let { value } = e.target;
    setValStepfather(value);
  };

  const [valueValStepmother, setValStepmother] = useState("");
  const gettingValStepmother = (e) => {
    let { value } = e.target;
    setValStepmother(value);
  };

  const [valuesStepmother, setValueStepmother] = useState("");
  const gettingValueStepmother = (e) => {
    let { value } = e.target;
    setValueStepmother(value);
  };

  const [valuesPhoneStepmother, setPhoneStepmother] = useState("");
  const gettingPhoneStepmother = (e) => {
    let { value } = e.target;
    setPhoneStepmother(value);
  };

  const [valuesWorkingStepmother, setWorkingStepmother] = useState("");
  const gettingWorkingStepmother = (e) => {
    let { value } = e.target;
    setWorkingStepmother(value);
  };

  const [valueInfoStepmother, setInfoStepmother] = useState("");
  const gettingInfoStepmother = (e) => {
    let { value } = e.target;
    setInfoStepmother(value);
  };

  const [stepParents, setStepParents] = useState("");
  const gettingValidate = (e) => {
    let { value } = e.target;
    setStepParents(value);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    formField: {
      family_validate_stepparents,

      //dad
      family_dad_life,
      family_dad_name,
      family_dad_age,
      family_dad_status,
      family_dad_working_val,
      family_dad_place,
      family_dad_company,
      family_dad_financial_income,
      family_dad_depend,
      family_dad_phone_val,
      family_dad_phone,
      family_dad_no_phone,
      // add changes 2.0
      family_dad_relation,
      family_dad_information,
      family_dad_reason,
      family_dad_why_negative,
      family_dad_information_negative,

      // add changes 2.1
      family_dad_resident,
      family_dad_no_resident,
      family_dad_condition_resident,
      family_dad_residenttwo,
      family_dad_no_residenttwo,
      family_dad_condition_residenttwo,

      // add name died
      family_dad_died_first_name,
      family_dad_died_last_name,
      family_dad_time_died,
      family_dad_reason_died,

      //validation two
      family_dad_lifetwo,
      family_dad_nametwo,
      family_dad_agetwo,
      family_dad_statustwo,
      family_dad_working_valtwo,
      family_dad_placetwo,
      family_dad_companytwo,
      family_dad_financial_incometwo,
      family_dad_dependtwo,
      family_dad_phone_valtwo,
      family_dad_phonetwo,
      family_dad_no_phonetwo,
      // add name died two
      family_dad_died_first_nametwo,
      family_dad_died_last_nametwo,
      family_dad_time_diedtwo,
      family_dad_reason_diedtwo,

      //mom
      family_mom_name,
      family_mom_age,
      family_mom_status,
      family_mom_place,
      family_mom_company,
      family_mom_financial_income,
      family_mom_phone,
      family_mom_depend,
      family_mom_no_phone,
      family_mom_time_died,
      family_mom_reason_died,
      family_mom_life,
      family_mom_phone_val,
      family_mom_working_val,
      family_mom_relation,
      family_mom_information,
      family_mom_reason,
      family_mom_why_negative,
      family_mom_information_negative,
      // add mother name died
      family_mom_died_first_name,
      family_mom_died_last_name,

      //validation two
      family_mom_lifetwo,
      family_mom_nametwo,
      family_mom_agetwo,
      family_mom_statustwo,
      family_mom_working_valtwo,
      family_mom_placetwo,
      family_mom_companytwo,
      family_mom_financial_incometwo,
      family_mom_dependtwo,
      family_mom_phone_valtwo,
      family_mom_phonetwo,
      family_mom_no_phonetwo,
      // add name died two
      family_mom_died_first_nametwo,
      family_mom_died_last_nametwo,
      family_mom_time_diedtwo,
      family_mom_reason_diedtwo,

      // add changes 2.1
      family_mom_resident,
      family_mom_no_resident,
      family_mom_condition_resident,
      family_mom_residenttwo,
      family_mom_no_residenttwo,
      family_mom_condition_residenttwo,

      // aditional information
      you_parents_together,
      mother_partner_name,
      mother_partner_lastname,
      mother_relationship,
      father_partner_name,
      father_partner_lastname,
      father_relationship,
      has_partner_father,
      has_partner_mother,
      vive_family,

      //stepfather
      family_stepfather_name,
      family_stepfather_age,
      family_stepfather_status,
      family_stepfather_place,
      family_stepfather_company,
      family_stepfather_financial_income,
      family_stepfather_phone,
      family_stepfather_depend,
      family_stepfather_no_phone,
      family_stepfather_time_died,
      family_stepfather_reason_died,
      family_stepfather_life,
      family_stepfather_phone_val,
      family_stepfather_working_val,
      family_stepfather_info,
      family_stepfather_noInfo,

      family_stepmother_name,
      family_stepmother_age,
      family_stepmother_status,
      family_stepmother_place,
      family_stepmother_company,
      family_stepmother_financial_income,
      family_stepmother_phone,
      family_stepmother_depend,
      family_stepmother_no_phone,
      family_stepmother_time_died,
      family_stepmother_reason_died,
      family_stepmother_info,
      family_stepmother_life,
      family_stepmother_phone_val,
      family_stepmother_working_val,
      family_stepmother_noInfo,

      // changes 2.2
      family_stepfather_val,
      family_stepfather_nametwo,
      family_stepfather_surnametwo,

      // changes stepmother
      family_stepmother_val,
      family_stepmother_nametwo,
      family_stepmother_surnametwo,
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
              paddingLeft: "10px",
            }}
          >
            Datos de los padres
          </Typography>

          {/* INFORMACION DEL PADRE */}
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
              icon={<BoyIcon />}
              color="primary"
              label="Información general padre"
            />
          </Divider>
          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Tiene relación con su padre?
              </label>
              <SelectField
                name={family_dad_relation.name}
                label={family_dad_relation.label}
                data={selectValue}
                onChange={gettingRelation}
                fullWidth
              />
              {relation === "Si" && (
                <Grid>
                  <div style={{ paddingTop: "10px" }}>
                    <label
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        paddingTop: "10px",
                      }}
                    >
                      ¿Posee información de su padre?
                    </label>
                    <SelectField
                      name={family_dad_information.name}
                      label={family_dad_information.label}
                      data={selectValue}
                      onChange={gettingReason}
                      fullWidth
                    />
                  </div>

                  {reason === "No" && (
                    <Grid>
                      <div style={{ paddingTop: "10px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Razón de no poseer la información?:
                        </label>
                        <InputField
                          name={family_dad_reason.name}
                          label={family_dad_reason.label}
                          fullWidth
                        />
                      </div>
                    </Grid>
                  )}
                  {reason == "Si" && (
                    <>
                      <div style={{ paddingTop: "10px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Aún vive?:
                        </label>
                        <SelectField
                          name={family_dad_life.name}
                          label={family_dad_life.label}
                          data={selectValue}
                          onChange={gettingValue}
                          fullWidth
                        />
                      </div>

                      {values === "Si" ? (
                        <Grid>
                          <Grid container style={{ paddingTop: "10px" }}>
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Nombre completo del padre:
                              </label>
                              <InputField
                                name={family_dad_name.name}
                                label={family_dad_name.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Edad:
                              </label>
                              <InputField
                                name={family_dad_age.name}
                                label={family_dad_age.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
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
                                Estado civil:
                              </label>
                              <SelectField
                                name={family_dad_status.name}
                                label={family_dad_status.label}
                                data={civil}
                                fullWidth
                              />
                            </Grid>

                            <Grid
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
                                ¿Tiene teléfono?:
                              </label>
                              <SelectField
                                name={family_dad_phone_val.name}
                                label={family_dad_phone_val.label}
                                data={selectValue}
                                onChange={gettingPhone}
                                fullWidth
                              />
                              <Grid>
                                {valuesPhone === "Si" && (
                                  <Grid style={{ paddingTop: "10px" }}>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Teléfono:
                                      </label>
                                      <InputField
                                        name={family_dad_phone.name}
                                        label={family_dad_phone.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                )}

                                {valuesPhone === "No" && (
                                  <Grid
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
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ¿Motivo del por qué no tiene teléfono?:
                                    </label>
                                    <InputField
                                      name={family_dad_no_phone.name}
                                      label={family_dad_no_phone.label}
                                      fullWidth
                                    />
                                  </Grid>
                                )}
                              </Grid>
                            </Grid>

                            <Grid
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
                                ¿Labora?:
                              </label>
                              <SelectField
                                name={family_dad_working_val.name}
                                label={family_dad_working_val.label}
                                data={selectValue}
                                onChange={gettingWorking}
                                fullWidth
                              />
                              <Grid>
                                {valuesWorking === "Si" && (
                                  <Grid
                                    container
                                    style={{ paddingTop: "10px" }}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Puesto donde labora:
                                      </label>
                                      <InputField
                                        name={family_dad_place.name}
                                        label={family_dad_place.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Empresa donde labora:
                                      </label>
                                      <InputField
                                        name={family_dad_company.name}
                                        label={family_dad_company.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingresos promedio:
                                      </label>
                                      <InputField
                                        name={family_dad_financial_income.name}
                                        label={
                                          family_dad_financial_income.label
                                        }
                                        InputProps={{
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              Q.
                                            </InputAdornment>
                                          ),
                                        }}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                )}

                                {valuesWorking === "No" && (
                                  <Grid
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
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ¿De quién depende económicamente?:
                                    </label>
                                    <InputField
                                      name={family_dad_depend.name}
                                      label={family_dad_depend.label}
                                      fullWidth
                                    />
                                  </Grid>
                                )}
                              </Grid>
                            </Grid>

                            <Grid
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
                                ¿Reside en Guatemala?:
                              </label>
                              <SelectField
                                name={family_dad_resident.name}
                                label={family_dad_resident.label}
                                data={selectValue}
                                onChange={gettingResident}
                                fullWidth
                              />
                              <Grid>
                                {resident === "No" ? (
                                  <Grid container>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿De qué país es residente?:
                                      </label>
                                      <InputField
                                        name={family_dad_no_resident.name}
                                        label={family_dad_no_resident.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingTop: "10px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Reside legal o ilegal?
                                      </label>
                                      <SelectField
                                        id="dad_conditiontwo"
                                        name={
                                          family_dad_condition_resident.name
                                        }
                                        label={
                                          family_dad_condition_resident.label
                                        }
                                        data={condition_resident}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <h1></h1>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ) : (
                        <h1></h1>
                      )}
                      {values === "No" && (
                        <Grid>
                          <Grid container>
                            <Grid
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
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                Nombres del padre:
                              </label>
                              <InputField
                                name={family_dad_died_first_name.name}
                                label={family_dad_died_first_name.label}
                                fullWidth
                              />
                              <label
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                ¿Tiempo fallecido?:
                                <span
                                  style={{
                                    paddingLeft: "15px",
                                    paddingRight: "6px",
                                    color: "red",
                                  }}
                                >
                                  Nota:
                                </span>
                                Indicarlo en años, meses o días
                              </label>
                              <InputField
                                name={family_dad_time_died.name}
                                label={family_dad_time_died.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
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
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                Apellidos del padre:
                              </label>
                              <InputField
                                name={family_dad_died_last_name.name}
                                label={family_dad_died_last_name.label}
                                fullWidth
                              />

                              <label
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                ¿Razón de fallecimiento?:
                              </label>
                              <InputField
                                name={family_dad_reason_died.name}
                                label={family_dad_reason_died.label}
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    </>
                  )}
                </Grid>
              )}

              {relation === "No" && (
                <Grid>
                  <div style={{ paddingTop: "10px" }}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Por qué?
                    </label>
                    <InputField
                      name={family_dad_why_negative.name}
                      label={family_dad_why_negative.label}
                      fullWidth
                    />
                  </div>

                  <div style={{ paddingTop: "10px" }}>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Posee información de su padre?
                    </label>
                    <SelectField
                      name={family_dad_information_negative.name}
                      label={family_dad_information_negative.label}
                      data={selectValue}
                      onChange={gettingReasonNegative}
                      fullWidth
                    />
                  </div>

                  {reasonNegative === "Si" && (
                    <>
                      <div style={{ paddingTop: "10px" }}>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Aún vive?:
                        </label>
                        <SelectField
                          name={family_dad_lifetwo.name}
                          label={family_dad_lifetwo.label}
                          data={selectValue}
                          onChange={gettingValuesTwo}
                          fullWidth
                        />
                      </div>

                      {valuesTwo === "Si" && (
                        <Grid>
                          <Grid container style={{ paddingTop: "10px" }}>
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Nombre completo del padre:
                              </label>
                              <InputField
                                name={family_dad_nametwo.name}
                                label={family_dad_nametwo.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Edad:
                              </label>
                              <InputField
                                name={family_dad_agetwo.name}
                                label={family_dad_agetwo.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
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
                                Estado civil:
                              </label>
                              <SelectField
                                name={family_dad_statustwo.name}
                                label={family_dad_statustwo.label}
                                data={civil}
                                fullWidth
                              />
                            </Grid>

                            <Grid
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
                                ¿Tiene teléfono?:
                              </label>
                              <SelectField
                                name={family_dad_phone_valtwo.name}
                                label={family_dad_phone_valtwo.label}
                                data={selectValue}
                                onChange={gettingPhone}
                                fullWidth
                              />
                              <Grid>
                                {valuesPhone === "Si" ? (
                                  <Grid style={{ paddingTop: "10px" }}>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Teléfonos:
                                      </label>
                                      <InputField
                                        name={family_dad_phonetwo.name}
                                        label={family_dad_phonetwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <h1></h1>
                                )}

                                {valuesPhone === "No" && (
                                  <Grid
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
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ¿Motivo del por qué no tiene teléfono?:
                                    </label>
                                    <InputField
                                      name={family_dad_no_phonetwo.name}
                                      label={family_dad_no_phonetwo.label}
                                      fullWidth
                                    />
                                  </Grid>
                                )}
                              </Grid>
                            </Grid>
                            <Grid
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
                                ¿Labora?:
                              </label>
                              <SelectField
                                name={family_dad_working_valtwo.name}
                                label={family_dad_working_valtwo.label}
                                data={selectValue}
                                onChange={gettingWorking}
                                fullWidth
                              />
                              <Grid>
                                {valuesWorking === "Si" ? (
                                  <Grid
                                    container
                                    style={{ paddingTop: "10px" }}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Puesto donde labora:
                                      </label>
                                      <InputField
                                        name={family_dad_placetwo.name}
                                        label={family_dad_placetwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Empresa donde labora:
                                      </label>
                                      <InputField
                                        name={family_dad_companytwo.name}
                                        label={family_dad_companytwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingresos promedio:
                                      </label>
                                      <InputField
                                        name={
                                          family_dad_financial_incometwo.name
                                        }
                                        label={
                                          family_dad_financial_incometwo.label
                                        }
                                        InputProps={{
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              Q.
                                            </InputAdornment>
                                          ),
                                        }}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <h1></h1>
                                )}

                                {valuesWorking === "No" ? (
                                  <Grid
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
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ¿De quién depende económicamente?:
                                    </label>
                                    <InputField
                                      name={family_dad_dependtwo.name}
                                      label={family_dad_dependtwo.label}
                                      fullWidth
                                    />
                                  </Grid>
                                ) : (
                                  <h1></h1>
                                )}
                              </Grid>
                            </Grid>

                            <Grid
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
                                ¿Reside en Guatemala?:
                              </label>
                              <SelectField
                                name={family_dad_residenttwo.name}
                                label={family_dad_residenttwo.label}
                                data={selectValue}
                                onChange={gettingResidentTwo}
                                fullWidth
                              />
                              <Grid>
                                {residentTwo === "No" ? (
                                  <Grid container>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingTop: "10px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿De qué país es residente?:
                                      </label>
                                      <InputField
                                        name={family_dad_no_residenttwo.name}
                                        label={family_dad_no_residenttwo.label}
                                        fullWidth
                                      />
                                    </Grid>

                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingTop: "10px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Reside legal o ilegal?
                                      </label>
                                      <SelectField
                                        id="dad_condition"
                                        name={
                                          family_dad_condition_residenttwo.name
                                        }
                                        label={
                                          family_dad_condition_residenttwo.label
                                        }
                                        data={condition_resident}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <h1></h1>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                      {valuesTwo === "No" && (
                        <Grid>
                          <Grid container>
                            <Grid
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
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                Nombres del padre:
                              </label>
                              <InputField
                                name={family_dad_died_first_nametwo.name}
                                label={family_dad_died_first_nametwo.label}
                                fullWidth
                              />
                              <label
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                ¿Tiempo fallecido?:
                                <span
                                  style={{
                                    paddingLeft: "15px",
                                    paddingRight: "6px",
                                    color: "red",
                                  }}
                                >
                                  Nota:
                                </span>
                                Indicarlo en años, meses o días
                              </label>
                              <InputField
                                name={family_dad_time_diedtwo.name}
                                label={family_dad_time_diedtwo.label}
                                fullWidth
                              />
                            </Grid>
                            <Grid
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
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                Apellidos del padre:
                              </label>
                              <InputField
                                name={family_dad_died_last_nametwo.name}
                                label={family_dad_died_last_nametwo.label}
                                fullWidth
                              />

                              <label
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                ¿Razón de fallecimiento?:
                              </label>
                              <InputField
                                name={family_dad_reason_diedtwo.name}
                                label={family_dad_reason_diedtwo.label}
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    </>
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>

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
              icon={<WomanIcon />}
              color="primary"
              label="Información general madre"
            />
          </Divider>
          {/* INFORMACION DE LA MADRE */}
          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
            >
              <Grid>
                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                  ¿Tiene relación con su madre?
                </label>
                <SelectField
                  name={family_mom_relation.name}
                  label={family_mom_relation.label}
                  data={selectValue}
                  onChange={gettingRelationMom}
                  fullWidth
                />
                {relationMom === "Si" && (
                  <Grid>
                    <div style={{ paddingTop: "10px" }}>
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Posee información de su madre?
                      </label>
                      <SelectField
                        name={family_mom_information.name}
                        label={family_mom_information.label}
                        data={selectValue}
                        onChange={gettingReasonMom}
                        fullWidth
                      />
                    </div>

                    {reasonMom === "No" && (
                      <Grid>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Razón de no poseer la información?:
                        </label>
                        <InputField
                          name={family_mom_reason.name}
                          label={family_mom_reason.label}
                          fullWidth
                        />
                      </Grid>
                    )}

                    {reasonMom === "Si" && (
                      <>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Aún vive?:
                        </label>
                        <SelectField
                          name={family_mom_life.name}
                          label={family_mom_life.label}
                          data={selectValue}
                          onChange={gettingValueMom}
                          fullWidth
                        />

                        {valuesMom === "Si" && (
                          <Grid>
                            <Grid container style={{ paddingTop: "10px" }}>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                }}
                              >
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Nombre completo de la madre:
                                </label>
                                <InputField
                                  name={family_mom_name.name}
                                  label={family_mom_name.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                }}
                              >
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Edad:
                                </label>
                                <InputField
                                  name={family_mom_age.name}
                                  label={family_mom_age.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Estado civil:
                                </label>
                                <SelectField
                                  name={family_mom_status.name}
                                  label={family_mom_status.label}
                                  data={civil}
                                  fullWidth
                                />
                              </Grid>

                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Tiene teléfono?:
                                </label>
                                <SelectField
                                  name={family_mom_phone_val.name}
                                  label={family_mom_phone_val.label}
                                  data={selectValue}
                                  onChange={gettingPhoneMom}
                                  fullWidth
                                />
                                <Grid>
                                  {valuesPhoneMom === "Si" && (
                                    <Grid style={{ paddingTop: "10px" }}>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Teléfono:
                                        </label>
                                        <InputField
                                          name={family_mom_phone.name}
                                          label={family_mom_phone.label}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  )}

                                  {valuesPhoneMom === "No" && (
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Motivo del por qué no tiene teléfono?:
                                      </label>
                                      <InputField
                                        name={family_mom_no_phone.name}
                                        label={family_mom_no_phone.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  )}
                                </Grid>
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Labora?:
                                </label>
                                <SelectField
                                  name={family_mom_working_val.name}
                                  label={family_mom_working_val.label}
                                  data={selectValue}
                                  onChange={gettingWorkingMom}
                                  fullWidth
                                />
                                <Grid>
                                  {valuesWorkingMom === "Si" && (
                                    <Grid
                                      container
                                      style={{ paddingTop: "10px" }}
                                    >
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Puesto donde labora:
                                        </label>
                                        <InputField
                                          name={family_mom_place.name}
                                          label={family_mom_place.label}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Empresa donde labora:
                                        </label>
                                        <InputField
                                          name={family_mom_company.name}
                                          label={family_mom_company.label}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid
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
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Ingresos promedio:
                                        </label>
                                        <InputField
                                          name={
                                            family_mom_financial_income.name
                                          }
                                          label={
                                            family_mom_financial_income.label
                                          }
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                Q.
                                              </InputAdornment>
                                            ),
                                          }}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  )}

                                  {valuesWorkingMom === "No" && (
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿De quién depende económicamente?:
                                      </label>
                                      <InputField
                                        name={family_mom_depend.name}
                                        label={family_mom_depend.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  )}
                                </Grid>
                              </Grid>

                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Reside en Guatemala?:
                                </label>
                                <SelectField
                                  name={family_mom_resident.name}
                                  label={family_mom_resident.label}
                                  data={selectValue}
                                  onChange={gettingResidentMom}
                                  fullWidth
                                />
                                <Grid>
                                  {residentMom === "No" ? (
                                    <Grid container>
                                      <Grid
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
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          ¿De qué país es residente?:
                                        </label>
                                        <InputField
                                          name={family_mom_no_resident.name}
                                          label={family_mom_no_resident.label}
                                          fullWidth
                                        />
                                      </Grid>

                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingTop: "10px",
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          ¿Reside legal o ilegal?
                                        </label>
                                        <SelectField
                                          id="mom_condition"
                                          name={
                                            family_mom_condition_resident.name
                                          }
                                          label={
                                            family_mom_condition_resident.label
                                          }
                                          data={condition_resident}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  ) : (
                                    <h1></h1>
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}

                        {valuesMom === "No" && (
                          <Grid>
                            <Grid container>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Nombres de la madre:
                                </label>
                                <InputField
                                  name={family_mom_died_first_name.name}
                                  label={family_mom_died_first_name.label}
                                  fullWidth
                                />
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Tiempo fallecido?:
                                  <span
                                    style={{
                                      paddingLeft: "15px",
                                      paddingRight: "6px",
                                      color: "red",
                                    }}
                                  >
                                    Nota:
                                  </span>
                                  Indicarlo en años, meses o días
                                </label>
                                <InputField
                                  name={family_mom_time_died.name}
                                  label={family_mom_time_died.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Apellidos de la madre:
                                </label>
                                <InputField
                                  name={family_mom_died_last_name.name}
                                  label={family_mom_died_last_name.label}
                                  fullWidth
                                />
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Razón de fallecimiento?:
                                </label>
                                <InputField
                                  name={family_mom_reason_died.name}
                                  label={family_mom_reason_died.label}
                                  fullWidth
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </>
                    )}
                  </Grid>
                )}

                {relationMom === "No" && (
                  <Grid>
                    <div style={{ paddingTop: "10px" }}>
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Por qué?
                      </label>
                      <InputField
                        name={family_mom_why_negative.name}
                        label={family_mom_why_negative.label}
                        fullWidth
                      />
                    </div>

                    <div style={{ paddingTop: "10px" }}>
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Posee información de su madre?
                      </label>
                      <SelectField
                        name={family_mom_information_negative.name}
                        label={family_mom_information_negative.label}
                        data={selectValue}
                        onChange={gettingReasonNegativeMom}
                        fullWidth
                      />
                    </div>

                    {reasonNegativeMom === "Si" && (
                      <>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          ¿Aún vive?:
                        </label>
                        <SelectField
                          name={family_mom_lifetwo.name}
                          label={family_mom_lifetwo.label}
                          data={selectValue}
                          onChange={gettingValueMomTwo}
                          fullWidth
                        />

                        {valuesMomTwo === "Si" && (
                          <Grid>
                            <Grid container style={{ paddingTop: "10px" }}>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                }}
                              >
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Nombre completo de la madre:
                                </label>
                                <InputField
                                  name={family_mom_nametwo.name}
                                  label={family_mom_nametwo.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                }}
                              >
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Edad:
                                </label>
                                <InputField
                                  name={family_mom_agetwo.name}
                                  label={family_mom_agetwo.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Estado civil:
                                </label>
                                <SelectField
                                  name={family_mom_statustwo.name}
                                  label={family_mom_statustwo.label}
                                  data={civil}
                                  fullWidth
                                />
                              </Grid>

                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Tiene teléfono?:
                                </label>
                                <SelectField
                                  name={family_mom_phone_valtwo.name}
                                  label={family_mom_phone_valtwo.label}
                                  data={selectValue}
                                  onChange={gettingPhoneMom}
                                  fullWidth
                                />
                                <Grid>
                                  {valuesPhoneMom === "Si" && (
                                    <Grid style={{ paddingTop: "10px" }}>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Teléfono:
                                        </label>
                                        <InputField
                                          name={family_mom_phonetwo.name}
                                          label={family_mom_phonetwo.label}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  )}

                                  {valuesPhoneMom === "No" && (
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Motivo del por qué no tiene teléfono?:
                                      </label>
                                      <InputField
                                        name={family_mom_no_phonetwo.name}
                                        label={family_mom_no_phonetwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  )}
                                </Grid>
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Labora?:
                                </label>
                                <SelectField
                                  name={family_mom_working_valtwo.name}
                                  label={family_mom_working_valtwo.label}
                                  data={selectValue}
                                  onChange={gettingWorkingMom}
                                  fullWidth
                                />
                                <Grid>
                                  {valuesWorkingMom === "Si" ? (
                                    <Grid
                                      container
                                      style={{ paddingTop: "10px" }}
                                    >
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Puesto donde labora:
                                        </label>
                                        <InputField
                                          name={family_mom_placetwo.name}
                                          label={family_mom_placetwo.label}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Empresa donde labora:
                                        </label>
                                        <InputField
                                          name={family_mom_companytwo.name}
                                          label={family_mom_companytwo.label}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid
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
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Ingresos promedio:
                                        </label>
                                        <InputField
                                          name={
                                            family_mom_financial_incometwo.name
                                          }
                                          label={
                                            family_mom_financial_incometwo.label
                                          }
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                Q.
                                              </InputAdornment>
                                            ),
                                          }}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  ) : (
                                    <h1></h1>
                                  )}

                                  {valuesWorkingMom === "No" ? (
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿De quién depende económicamente?:
                                      </label>
                                      <InputField
                                        name={family_mom_dependtwo.name}
                                        label={family_mom_dependtwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                  ) : (
                                    <h1></h1>
                                  )}
                                </Grid>
                              </Grid>

                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Reside en Guatemala?:
                                </label>
                                <SelectField
                                  name={family_mom_residenttwo.name}
                                  label={family_mom_residenttwo.label}
                                  data={selectValue}
                                  onChange={gettingResidentMomTwo}
                                  fullWidth
                                />
                                <Grid>
                                  {residentMomTwo === "No" ? (
                                    <Grid container>
                                      <Grid
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
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          ¿De qué país es residente?:
                                        </label>
                                        <InputField
                                          name={family_mom_no_residenttwo.name}
                                          label={
                                            family_mom_no_residenttwo.label
                                          }
                                          fullWidth
                                        />
                                      </Grid>

                                      <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                          paddingTop: "10px",
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          ¿Reside legal o ilegal?
                                        </label>
                                        <SelectField
                                          id="mom_conditiontwo"
                                          name={
                                            family_mom_condition_residenttwo.name
                                          }
                                          label={
                                            family_mom_condition_residenttwo.label
                                          }
                                          data={condition_resident}
                                          fullWidth
                                        />
                                      </Grid>
                                    </Grid>
                                  ) : (
                                    <h1></h1>
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}

                        {valuesMomTwo === "No" && (
                          <Grid>
                            <Grid container>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Nombres de la madre:
                                </label>
                                <InputField
                                  name={family_mom_died_first_nametwo.name}
                                  label={family_mom_died_first_nametwo.label}
                                  fullWidth
                                />
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Tiempo fallecido?:
                                  <span
                                    style={{
                                      paddingLeft: "15px",
                                      paddingRight: "6px",
                                      color: "red",
                                    }}
                                  >
                                    Nota:
                                  </span>
                                  Indicarlo en años, meses o días
                                </label>
                                <InputField
                                  name={family_mom_time_diedtwo.name}
                                  label={family_mom_time_diedtwo.label}
                                  fullWidth
                                />
                              </Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Apellidos de la madre:
                                </label>
                                <InputField
                                  name={family_mom_died_last_nametwo.name}
                                  label={family_mom_died_last_nametwo.label}
                                  fullWidth
                                />
                                <label
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Razón de fallecimiento?:
                                </label>
                                <InputField
                                  name={family_mom_reason_diedtwo.name}
                                  label={family_mom_reason_diedtwo.label}
                                  fullWidth
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </>
                    )}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Informacion adicional */}

          <Grid>
            {((values === "Si" && valuesMom === "Si") ||
              (values === "Si" && valuesMomTwo === "Si") ||
              (valuesTwo === "Si" && valuesMom === "Si") ||
              (valuesTwo === "Si" && valuesMomTwo === "Si")) && (
              <>
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
                    color="primary"
                    label="Relación de sus padres"
                  />
                </Divider>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <div>
                    {" "}
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                      ¿Siguen juntos sus papás?:
                    </label>
                    <SelectField
                      id="you_parents_together"
                      name={you_parents_together.name}
                      label={you_parents_together.label}
                      data={selectValue}
                      onChange={gettingTogetherParents}
                      fullWidth
                    />
                    {togetherParents === "No" && (
                      <>
                        <div style={{ paddingTop: "10px" }}>
                          {/* CONDITION FATHER */}

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
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                              color="info"
                              label="Pareja del padre"
                            />
                          </Divider>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Su papá tiene pareja?:
                          </label>
                          <SelectField
                            id="has_partner_father"
                            name={has_partner_father.name}
                            label={has_partner_father.label}
                            data={selectValue}
                            onChange={gettingPartnerFather}
                            fullWidth
                          />
                          {partnerFather === "Si" && (
                            <>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                  <div style={{ paddingTop: "10px" }}>
                                    <label
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Nombre:
                                    </label>
                                    <InputField
                                      name={father_partner_name.name}
                                      label={father_partner_name.label}
                                      fullWidth
                                    />
                                  </div>

                                  <div style={{ paddingTop: "10px" }}>
                                    <label
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Relación:
                                    </label>
                                    <SelectField
                                      id="father_relationship"
                                      name={father_relationship.name}
                                      label={father_relationship.label}
                                      data={relationship}
                                      fullWidth
                                    />
                                  </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <div style={{ paddingTop: "10px" }}>
                                    <label
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Apellido:
                                    </label>
                                    <InputField
                                      name={father_partner_lastname.name}
                                      label={father_partner_lastname.label}
                                      fullWidth
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </div>

                        {/* CONDITION MOTHER */}
                        <div style={{ paddingTop: "10px" }}>
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
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                              color="info"
                              label="Pareja de la madre"
                            />
                          </Divider>
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Su mamá tiene pareja?:
                          </label>
                          <SelectField
                            id="has_partner_mother"
                            name={has_partner_mother.name}
                            label={has_partner_mother.label}
                            data={selectValue}
                            onChange={gettingPartnerMom}
                            fullWidth
                          />
                          {partnerMom === "Si" && (
                            <>
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Nombre:
                              </label>
                              <InputField
                                name={mother_partner_name.name}
                                label={mother_partner_name.label}
                                fullWidth
                              />
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Apellido:
                              </label>
                              <InputField
                                name={mother_partner_lastname.name}
                                label={mother_partner_lastname.label}
                                fullWidth
                              />
                              <label
                                style={{ fontSize: "18px", fontWeight: "bold" }}
                              >
                                Relación:
                              </label>
                              <SelectField
                                id="mother_relationship"
                                name={mother_relationship.name}
                                label={mother_relationship.label}
                                data={relationship}
                                fullWidth
                              />
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </Grid>
              </>
            )}
          </Grid>
          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
            >
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
                  // color="success"
                  color="info"
                  label="Información adicional"
                />
              </Divider>
              <div style={{ paddingTop: "10px" }}>
                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                  ¿Con quién vive?:
                </label>
                <InputField
                  name={vive_family.name}
                  label={vive_family.label}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>

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
              icon={<PeopleOutlineIcon />}
              color="primary"
              label="Padrastros"
            />
          </Divider>
          <Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
            >
              <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                ¿Usted tiene padrastros?:
              </label>
              <SelectField
                id="family_validate_stepparents"
                name={family_validate_stepparents.name}
                label={family_validate_stepparents.label}
                data={selectValue}
                onChange={gettingValidate}
                fullWidth
              />
              {stepParents === "Si" && (
                <div>
                  <Divider
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                      icon={<FaceIcon />}
                      color="primary"
                      label="Información general padrastro"
                    />
                  </Divider>
                  <Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Tiene padrastro?:
                      </label>
                      <SelectField
                        id="family_stepfather_val"
                        name={family_stepfather_val.name}
                        label={family_stepfather_val.label}
                        data={selectValue}
                        onChange={gettingValStepfather}
                        fullWidth
                      />

                      {valueValStepfather === "Si" && (
                        <Grid
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
                            ¿Posee la información de su padrastro?:
                          </label>
                          <SelectField
                            id="family_stepfather_info"
                            name={family_stepfather_info.name}
                            label={family_stepfather_info.label}
                            data={selectValue}
                            onChange={gettingInfoStepfather}
                            fullWidth
                          />

                          {valueInfoStepfather === "Si" ? (
                            <Grid
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
                                ¿Aún vive?:
                              </label>
                              <SelectField
                                name={family_stepfather_life.name}
                                label={family_stepfather_life.label}
                                data={selectValue}
                                onChange={gettingValueStepfather}
                                fullWidth
                              />

                              {valuesStepfather === "Si" ? (
                                <Grid>
                                  <Grid
                                    container
                                    style={{ paddingTop: "10px" }}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Nombre completo de su padrastro:
                                      </label>
                                      <InputField
                                        name={family_stepfather_name.name}
                                        label={family_stepfather_name.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Edad:
                                      </label>
                                      <InputField
                                        name={family_stepfather_age.name}
                                        label={family_stepfather_age.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Estado civil:
                                      </label>
                                      <SelectField
                                        name={family_stepfather_status.name}
                                        label={family_stepfather_status.label}
                                        data={civil}
                                        fullWidth
                                      />
                                    </Grid>

                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Tiene teléfono?:
                                      </label>
                                      <SelectField
                                        name={family_stepfather_phone_val.name}
                                        label={
                                          family_stepfather_phone_val.label
                                        }
                                        data={selectValue}
                                        onChange={gettingPhoneStepfather}
                                        fullWidth
                                      />
                                      {valuesPhoneStepfather === "Si" && (
                                        <Grid style={{ paddingTop: "10px" }}>
                                          <label
                                            style={{
                                              fontSize: "18px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            Teléfono:
                                          </label>
                                          <InputField
                                            name={family_stepfather_phone.name}
                                            label={
                                              family_stepfather_phone.label
                                            }
                                            fullWidth
                                          />
                                        </Grid>
                                      )}

                                      {valuesPhoneStepfather === "No" && (
                                        <Grid>
                                          <label
                                            style={{
                                              fontSize: "18px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            ¿Motivo del por qué no tiene
                                            teléfono?:
                                          </label>
                                          <InputField
                                            name={
                                              family_stepfather_no_phone.name
                                            }
                                            label={
                                              family_stepfather_no_phone.label
                                            }
                                            fullWidth
                                          />
                                        </Grid>
                                      )}
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Labora?:
                                      </label>
                                      <SelectField
                                        name={
                                          family_stepfather_working_val.name
                                        }
                                        label={
                                          family_stepfather_working_val.label
                                        }
                                        data={selectValue}
                                        onChange={gettingWorkingStepfather}
                                        fullWidth
                                      />
                                      <Grid>
                                        {valuesWorkingStepfather === "Si" ? (
                                          <Grid
                                            container
                                            style={{ paddingTop: "10px" }}
                                          >
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Puesto donde labora fa:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepfather_place.name
                                                }
                                                label={
                                                  family_stepfather_place.label
                                                }
                                                fullWidth
                                              />
                                            </Grid>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Empresa donde labora:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepfather_company.name
                                                }
                                                label={
                                                  family_stepfather_company.label
                                                }
                                                fullWidth
                                              />
                                            </Grid>
                                            <Grid
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
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Ingresos promedio:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepfather_financial_income.name
                                                }
                                                label={
                                                  family_stepfather_financial_income.label
                                                }
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      Q.
                                                    </InputAdornment>
                                                  ),
                                                }}
                                                fullWidth
                                              />
                                            </Grid>
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}

                                        {valuesWorkingStepfather === "No" ? (
                                          <Grid
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
                                              style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              ¿De quién depende económicamente?:
                                            </label>
                                            <InputField
                                              name={
                                                family_stepfather_depend.name
                                              }
                                              label={
                                                family_stepfather_depend.label
                                              }
                                              fullWidth
                                            />
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ) : (
                                <h1></h1>
                              )}

                              {valuesStepfather === "No" ? (
                                <Grid>
                                  <Grid container>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingrese el nombre de su padrastro:
                                      </label>
                                      <InputField
                                        name={family_stepfather_nametwo.name}
                                        label={family_stepfather_nametwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingrese los apellidos de su padrastro:
                                      </label>
                                      <InputField
                                        name={family_stepfather_surnametwo.name}
                                        label={
                                          family_stepfather_surnametwo.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Tiempo fallecido?:
                                      </label>
                                      <InputField
                                        name={family_stepfather_time_died.name}
                                        label={
                                          family_stepfather_time_died.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Razón de fallecimiento?:
                                      </label>
                                      <InputField
                                        name={
                                          family_stepfather_reason_died.name
                                        }
                                        label={
                                          family_stepfather_reason_died.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ) : (
                                <h1></h1>
                              )}
                            </Grid>
                          ) : (
                            <h1></h1>
                          )}

                          {valueInfoStepfather === "No" ? (
                            <Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Razón de no poseer la información?:
                                </label>
                                <InputField
                                  name={family_stepfather_noInfo.name}
                                  label={family_stepfather_noInfo.label}
                                  fullWidth
                                />
                              </Grid>
                            </Grid>
                          ) : (
                            <h1></h1>
                          )}
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  <Divider
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                      icon={<WomanIcon />}
                      color="primary"
                      label="Información general madrastra"
                    />
                  </Divider>
                  <Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                        ¿Tiene madrastra?:
                      </label>
                      <SelectField
                        id="family_stepmother_val"
                        name={family_stepmother_val.name}
                        label={family_stepmother_val.label}
                        data={selectValue}
                        onChange={gettingValStepmother}
                        fullWidth
                      />
                      {valueValStepmother === "Si" && (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            paddingTop: "10px",
                            paddingBottom: "20px",
                          }}
                        >
                          <label
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            ¿Posee la información de su madrastra?:
                          </label>
                          <SelectField
                            id="family_stepmother_info"
                            name={family_stepmother_info.name}
                            label={family_stepmother_info.label}
                            data={selectValue}
                            onChange={gettingInfoStepmother}
                            fullWidth
                          />

                          {valueInfoStepmother === "Si" ? (
                            <Grid
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
                                ¿Aún vive?:
                              </label>
                              <SelectField
                                name={family_stepmother_life.name}
                                label={family_stepmother_life.label}
                                data={selectValue}
                                onChange={gettingValueStepmother}
                                fullWidth
                              />

                              {valuesStepmother === "Si" ? (
                                <Grid>
                                  <Grid
                                    container
                                    style={{ paddingTop: "10px" }}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Nombre completo de su madrastra:
                                      </label>
                                      <InputField
                                        name={family_stepmother_name.name}
                                        label={family_stepmother_name.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Edad:
                                      </label>
                                      <InputField
                                        name={family_stepmother_age.name}
                                        label={family_stepmother_age.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Estado civil:
                                      </label>
                                      <SelectField
                                        name={family_stepmother_status.name}
                                        label={family_stepmother_status.label}
                                        data={civil}
                                        fullWidth
                                      />
                                    </Grid>

                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Tiene teléfono?:
                                      </label>
                                      <SelectField
                                        name={family_stepmother_phone_val.name}
                                        label={
                                          family_stepmother_phone_val.label
                                        }
                                        data={selectValue}
                                        onChange={gettingPhoneStepmother}
                                        fullWidth
                                      />
                                      <Grid>
                                        {valuesPhoneStepmother === "Si" ? (
                                          <Grid style={{ paddingTop: "10px" }}>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Teléfono:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepmother_phone.name
                                                }
                                                label={
                                                  family_stepmother_phone.label
                                                }
                                                fullWidth
                                              />
                                            </Grid>
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}

                                        {valuesPhoneStepmother === "No" ? (
                                          <Grid
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
                                              style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              ¿Motivo del por qué no tiene
                                              teléfono?:
                                            </label>
                                            <InputField
                                              name={
                                                family_stepmother_no_phone.name
                                              }
                                              label={
                                                family_stepmother_no_phone.label
                                              }
                                              fullWidth
                                            />
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",
                                      }}
                                    >
                                      <label
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Labora?:
                                      </label>
                                      <SelectField
                                        name={
                                          family_stepmother_working_val.name
                                        }
                                        label={
                                          family_stepmother_working_val.label
                                        }
                                        data={selectValue}
                                        onChange={gettingWorkingStepmother}
                                        fullWidth
                                      />
                                      <Grid>
                                        {valuesWorkingStepmother === "Si" ? (
                                          <Grid
                                            container
                                            style={{ paddingTop: "10px" }}
                                          >
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Puesto donde labora:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepmother_place.name
                                                }
                                                label={
                                                  family_stepmother_place.label
                                                }
                                                fullWidth
                                              />
                                            </Grid>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Empresa donde labora:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepmother_company.name
                                                }
                                                label={
                                                  family_stepmother_company.label
                                                }
                                                fullWidth
                                              />
                                            </Grid>
                                            <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                paddingTop: "10px",
                                                paddingBottom: "10px",
                                              }}
                                            >
                                              <label
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                Ingresos promedio:
                                              </label>
                                              <InputField
                                                name={
                                                  family_stepmother_financial_income.name
                                                }
                                                label={
                                                  family_stepmother_financial_income.label
                                                }
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment position="start">
                                                      Q.
                                                    </InputAdornment>
                                                  ),
                                                }}
                                                fullWidth
                                              />
                                            </Grid>
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}

                                        {valuesWorkingStepmother === "No" ? (
                                          <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            style={{
                                              paddingLeft: "10px",
                                              paddingRight: "10px",
                                              paddingTop: "10px",
                                              paddingBottom: "10px",
                                            }}
                                          >
                                            <label
                                              style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              ¿De quién depende económicamente?:
                                            </label>
                                            <InputField
                                              name={
                                                family_stepmother_depend.name
                                              }
                                              label={
                                                family_stepmother_depend.label
                                              }
                                              fullWidth
                                            />
                                          </Grid>
                                        ) : (
                                          <h1></h1>
                                        )}
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ) : (
                                <h1></h1>
                              )}

                              {valuesStepmother === "No" ? (
                                <Grid>
                                  <Grid container>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingrese el nombre de su madrastra:
                                      </label>
                                      <InputField
                                        name={family_stepmother_nametwo.name}
                                        label={family_stepmother_nametwo.label}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Ingrese los apellidos de su madrastra:
                                      </label>
                                      <InputField
                                        name={family_stepmother_surnametwo.name}
                                        label={
                                          family_stepmother_surnametwo.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Tiempo fallecido?:
                                      </label>
                                      <InputField
                                        name={family_stepmother_time_died.name}
                                        label={
                                          family_stepmother_time_died.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid
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
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        ¿Razón de fallecimiento?:
                                      </label>
                                      <InputField
                                        name={
                                          family_stepmother_reason_died.name
                                        }
                                        label={
                                          family_stepmother_reason_died.label
                                        }
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ) : (
                                <h1></h1>
                              )}
                            </Grid>
                          ) : (
                            <h1></h1>
                          )}

                          {valueInfoStepmother === "No" ? (
                            <Grid>
                              <Grid
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
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ¿Razón de no poseer la información?:
                                </label>
                                <InputField
                                  name={family_stepmother_noInfo.name}
                                  label={family_stepmother_noInfo.label}
                                  fullWidth
                                />
                              </Grid>
                            </Grid>
                          ) : (
                            <h1></h1>
                          )}
                        </Grid>
                      )}
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
