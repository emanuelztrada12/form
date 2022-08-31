import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper, Divider, Chip } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import { Formik, Form } from "formik";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useMutation, useQuery, gql } from "@apollo/client";

import FamilyForm from "./Forms/FamilyForm";
import General from "./Forms/General";
import SonForm from "./Forms/SonForm";
import BrothersForm from "./Forms/BrothersForm";
import StepBrothersForm from "./Forms/StepBrothersForm";
import ConyugueForm from "./Forms/ConyugueForm";
import GrandfatherForm from "./Forms/GrandfatherForm";
import WorkForm from "./Forms/WorkForm";
import EconomicForm from "./Forms/EconomicForm";
import SocialForm from "./Forms/SocialForm";
import CriminalForm from "./Forms/CriminalForm";
import HealForm from "./Forms/HealthForm";
import ObjectivsForm from "./Forms/ObjectivsForm";
import SindicatosForm from "./Forms/SindicatosForm";
import HonestidadForm from "./Forms/HonestidadForm";
import RedSocialForm from "./Forms/RedSocialForm";
import CheckoutSuccess from "./CheckoutSuccess";
import AutorizationForm from "./Forms/AutorizationForm";

import validationSchema from "./FormModel/validationSchema";
import generalFormModel from "./FormModel/generalFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";
import EducacionalForm from "./Forms/EducacionalForm";
import { useRouter } from "next/router";

const QUERY = gql`
  query GetFormularioGolden {
    getFormularioGolden {
      tiene_deudas_economia
    }
  }
`;

const DELETED = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id){
      id
    }
  }
`;

const GET_USERS = gql`
  query getUser {
    getUser {
      id
      nombre
      apellido
      email
      rols
    }
  }
`;


const FORMULARIO = gql`
  mutation newform_golden_input($input: form_golden_input) {
    newform_golden_input(input: $input) {
      general_name
      general_lastname
      general_lastname_married # apellido de casada
      general_married_name # select de apellido de casada
      general_birth
      general_place_birth
      general_age
      general_civil_status
      general_profession
      general_direction
      general_time_reside
      general_previous_direction
      general_phone
      general_nit
      general_nit_select # select nit 
      general_dpi
      general_email
      general_emergency_phone
      general_emergency_name
      general_afilacion_select # select de afilacion
      general_irtra
      general_igss
      vehicle {
        general_brand
        general_model
        general_model_propetary
      }
      # array biker
      biker {
        general_model_biker
        general_brand_biker
        general_model_propetary_biker
      }
      license {
        general_license
        general_license_expire
        general_license_type
      }
      family_validate_stepparents
      family_validate_son
      family_validate_brothers
      family_validate_stepbrother
      #dad
      family_dad_life
      family_dad_name
      family_dad_age
      family_dad_status
      family_dad_working_val
      family_dad_place
      family_dad_company
      family_dad_financial_income
      family_dad_depend
      family_dad_phone_val
      family_dad_phone
      family_dad_no_phone
      #// add changes 2.0
      family_dad_relation
      family_dad_information
      family_dad_reason
      family_dad_why_negative
      family_dad_information_negative
      #// add name died
      family_dad_died_first_name
      family_dad_died_last_name
      family_dad_time_died
      family_dad_reason_died
      family_dad_resident
      family_dad_no_resident
      family_dad_condition_resident
      
      #/validation two
      family_dad_lifetwo
      family_dad_nametwo
      family_dad_agetwo
      family_dad_statustwo
      family_dad_working_valtwo
      family_dad_placetwo
      family_dad_companytwo
      family_dad_financial_incometwo
      family_dad_dependtwo
      family_dad_phone_valtwo
      family_dad_phonetwo
      family_dad_no_phonetwo
      #/ add name died two
      family_dad_died_first_nametwo
      family_dad_died_last_nametwo
      family_dad_time_diedtwo
      family_dad_reason_diedtwo
      family_dad_residenttwo
      family_dad_no_residenttwo
      family_dad_condition_residenttwo
      
      #mom
      family_mom_name
      family_mom_age
      family_mom_status
      family_mom_place
      family_mom_company
      family_mom_financial_income
      family_mom_phone
      family_mom_depend
      family_mom_no_phone
      family_mom_time_died
      family_mom_reason_died
      family_mom_life
      family_mom_phone_val
      family_mom_working_val
      family_mom_relation
      family_mom_information
      family_mom_reason
      family_mom_why_negative
      family_mom_information_negative
      family_mom_resident
      family_mom_no_resident
      family_mom_condition_resident

      #// add mother name died
      family_mom_died_first_name
      family_mom_died_last_name
      vive_family
       #//validation two
       family_mom_lifetwo
       family_mom_nametwo
       family_mom_agetwo
       family_mom_statustwo
       family_mom_working_valtwo
       family_mom_placetwo
       family_mom_companytwo
       family_mom_financial_incometwo
       family_mom_dependtwo
       family_mom_phone_valtwo
       family_mom_phonetwo
       family_mom_no_phonetwo
       #// add name died two
       family_mom_died_first_nametwo
       family_mom_died_last_nametwo
       family_mom_time_diedtwo
       family_mom_reason_diedtwo
       family_mom_residenttwo
       family_mom_no_residenttwo
       family_mom_condition_residenttwo

      #aditional information
      you_parents_together
      mother_partner_name
      mother_partner_lastname
      mother_relationship
      father_partner_name
      father_partner_lastname
      father_relationship
      has_partner_father
      has_partner_mother

      #stepfather
      family_stepfather_name
      family_stepfather_age
      family_stepfather_status
      family_stepfather_place
      family_stepfather_company
      family_stepfather_financial_income
      family_stepfather_phone
      family_stepfather_depend
      family_stepfather_no_phone
      family_stepfather_time_died
      family_stepfather_reason_died
      family_stepfather_life
      family_stepfather_phone_val
      family_stepfather_working_val
      family_stepfather_info
      family_stepfather_noInfo

      #stepmother
      family_stepmother_name
      family_stepmother_age
      family_stepmother_status
      family_stepmother_place
      family_stepmother_company
      family_stepmother_financial_income
      family_stepmother_phone
      family_stepmother_depend
      family_stepmother_no_phone
      family_stepmother_time_died
      family_stepmother_reason_died
      family_stepmother_info
      family_stepmother_life
      family_stepmother_phone_val
      family_stepmother_working_val
      family_stepmother_noInfo

      #conyugue
      family_validate_conyugue
      family_conyugue_name
      family_conyugue_age
      family_conyugue_status
      family_conyugue_place
      family_conyugue_company
      family_conyugue_financial_income
      family_conyugue_phone
      family_conyugue_depend
      family_conyugue_no_phone
      family_conyugue_time_died
      family_conyugue_reason_died
      family_conyugue_life
      family_conyugue_phone_val
      family_conyugue_working_val
      family_conyugue_married_val
      family_conyugue_married
      family_conyugue_partner_val
      family_conyuguepat_name
      family_conyuguepat_age
      family_conyuguepat_status
      family_conyuguepat_place
      family_conyuguepat_company
      family_conyuguepat_financial_income
      family_conyuguepat_phone
      family_conyuguepat_depend
      family_conyuguepat_no_phone
      family_conyuguepat_phone_val
      family_conyuguepat_working_val

      # add name and lastname
      family_conyugue_died_name
      family_conyugue_died_lastname

      #son
      son {
        family_son_name
        family_son_age
        family_son_status
        family_son_place
        family_son_company
        family_son_financial_income
        family_son_phone
        family_son_depend
        family_son_no_phone
        family_son_time_died
        family_son_reason_died
        family_son_life
        family_son_phone_val
        family_son_working_val
        family_son_lookafther
        family_son_validate_age
        # name and lastname
        family_son_died_name
        family_son_died_lastname
      }
      #brothers
      brothers {
        family_brothers_name
        family_brothers_age
        family_brothers_status
        family_brothers_place
        family_brothers_company
        family_brothers_financial_income
        family_brothers_phone
        family_brothers_depend
        family_brothers_no_phone
        family_brothers_time_died
        family_brothers_reason_died
        family_brothers_life
        family_brothers_phone_val
        family_brothers_working_val
        # name and lastname
        family_brothers_died_name
        family_brothers_died_lastname
      }
      #stepbrother
      stepbrother {
        family_stepbrother_name
        family_stepbrother_age
        family_stepbrother_status
        family_stepbrother_place
        family_stepbrother_company
        family_stepbrother_financial_income
        family_stepbrother_phone
        family_stepbrother_depend
        family_stepbrother_no_phone
        family_stepbrother_time_died
        family_stepbrother_reason_died
        family_stepbrother_life
        family_stepbrother_phone_val
        family_stepbrother_working_val
        # add name and lastname
        family_stepbrother_died_name
        family_stepbrother_died_lastname
      }
      family_grandfather_name
      family_grandfather_age
      family_grandfather_status
      family_grandfather_place
      family_grandfather_company
      family_grandfather_financial_income
      family_grandfather_phone
      family_grandfather_depend
      family_grandfather_no_phone
      family_grandfather_time_died
      family_grandfather_reason_died
      family_grandfather_life
      family_grandfather_phone_val
      family_grandfather_working_val
      family_grandfather_lifeno_name
      family_grandfather_lifeno_firstname
      family_grandmother_name
      family_grandmother_age
      family_grandmother_status
      family_grandmother_place
      family_grandmother_company
      family_grandmother_financial_income
      family_grandmother_phone
      family_grandmother_depend
      family_grandmother_no_phone
      family_grandmother_time_died
      family_grandmother_reason_died
      family_grandmother_life
      family_grandmother_phone_val
      family_grandmother_working_val
      family_grandmother_lifeno_name
      family_grandmother_lifeno_firstname
      family_grandfather_nametwo
      family_grandfather_agetwo
      family_grandfather_statustwo
      family_grandfather_placetwo
      family_grandfather_companytwo
      family_grandfather_financial_incometwo
      family_grandfather_phonetwo
      family_grandfather_dependtwo
      family_grandfather_no_phonetwo
      family_grandfather_time_diedtwo
      family_grandfather_reason_diedtwo
      family_grandfather_lifetwo
      family_grandfather_phone_valtwo
      family_grandfather_working_valtwo
      family_grandfather_lifeno_nametwo
      family_grandfather_lifeno_firstnametwo
      family_grandmother_nametwo
      family_grandmother_agetwo
      family_grandmother_statustwo
      family_grandmother_placetwo
      family_grandmother_companytwo
      family_grandmother_financial_incometwo
      family_grandmother_phonetwo
      family_grandmother_dependtwo
      family_grandmother_no_phonetwo
      family_grandmother_time_diedtwo
      family_grandmother_reason_diedtwo
      family_grandmother_lifetwo
      family_grandmother_phone_valtwo
      family_grandmother_working_valtwo
      family_grandmother_lifeno_nametwo
      family_grandmother_lifeno_firstnametwo
      #estudent
      estudie_university_name
      estudie_university_uniname
      estudie_university_semester
      estudie_university_val
      estudie_university_title
      estudie_university_sede
      estudie_university_year_graduation
      estudie_university_no_sede
      estudie_university_hour
      # add
      study_magister
      wich_career
      select_schedules
      why_not_schedules
      #diversificado
      estudie_diversificado_sval
      estudie_diversificado_name
      estudie_diversificado_uniname
      estudie_diversificado_desde
      estudie_diversificado_hasta
      #basic
      estudie_basic_sval
      estudie_basic_uniname
      estudie_basic_desde
      estudie_basic_hasta
      #primary
      estudie_primary_sval
      estudie_primary_uniname
      estudie_primary_desde
      estudie_primary_hasta
      work {
        work_name
        work_position
        work_entry
        work_withdrawal
        work_salary
        work_boss
        work_chiefposition
        work_phone
        work_phone_boss
        work_withdrawalreason
        work_phone_val
        work_phone_reason
        work_reference
        work_reference_reason
      }
      work_valNe
      work_ne_name
      work_ne_web
      work_ne_dateInit
      work_ne_salaryPersonal
      work_ne_detail
      work_ne_detailIncome
      work_ne_whatwill
      economic {
        economic_date
        economic_plan
        economic_use
        economic_bill
        amount
        economic_balance
        economic_monthly_payment
        economic_delinquent_payment
      }
      economicother {
        economic_dateother
        economic_planother
        economic_useother
        economic_billother
        amountother
        economic_balanceother
        economic_monthly_paymentother
        economic_delinquent_paymentother
        econmic_observaciones
      }
      economic_vivienda
      economic_food
      economic_aporte
      economic_water
      economic_phone
      economic_recreation
      economic_vestuario
      economic_gastos
      economic_trans
      economic_medic
      economic_estudy
      economic_ahorro
      economic_payment_deuda
      economic_other
      economic_total
      #social
      social_group
      social_gtime
      social_politic
      social_politic_name
      social_politic_relacion
      social_politic_puesto
      social_fuma
      social_fuma_time
      social_alco
      social_alco_time
      social_alco_bebida
      social_drog
      social_drog_option
      social_drog_time
      social_drog_person
      social_tatto
      social_fuma_frequency 
      social_alco_howmuch 
      social_alco_frequency
      social {
        social_tatto_descri
        social_tatto_sign
        social_tatto_ubi
        social_tatto_fot
      }
      criminal_association_option
      criminal_relacion
      criminal_name
      criminal_group_belong
      criminal_police_option
      criminal_why_stained
      criminal_why_clear
      criminal_family
      criminal_was_sued
      criminal_you_demand
      criminal {
        criminal_family_name
        criminal_family_lastname
        criminal_family_age
        criminal_family_civil_status
        criminal_family_profession
        criminal_family_phone
        criminal_family_reason
      }
      dosis {
        dosis_name
        dosis_date
        dosis_dosis
      }
      disease {
        disease_name
        disease_observacion
      }
      disease_hipertension_option
      disease_diabetes_option
      disease_VIH_option
      disease_ITS_option
      disease_gastritis_option
      disease_cancer_option
      disease_cardiopatias_option
      disease_hipertension_observacion
      disease_diabetes_observacion
      disease_VIH_observacion
      disease_ITS_observacion
      disease_gastritis_observacion
      disease_cancer_observacion
      disease_cardiopatias_observacion
      accident_option
      accident_detail
      accident_suffer
      covid_option
      covid_dosis
      validate_sex
      validate_gestacion
      validate_children
      validate_lactando
      validate_lac_month
      validate_lac_age
      validate_dosis
      #objetives
      objectivs_corto
      objectivs_mediano
      objectives_largo
      #sindicatos
      sindicatos_favor
      sindicatos_formar
      sindicatos_why
      #honestidad
      honest_p1
      honest_p2
      honest_p3
      honest_p4
      whyIdentityHidde
      documentInOrder
      red_faccebook
      red_faccebookOther
      red_faccebookval
      red_faccebookOtherVal
      validation_form
    }
  }
`;

const steps = [
  "Autorización",
  "Información general",
  "Información padres",
  "Información hijos",
  "Información hermanos",
  "Información hermanastros",
  "Información cónyuge",
  "Información abuelos",
  "Información educacional",
  "Información laboral",
  "Información económica",
  "Información social",
  "Actividades Delictivas",
  "Factor Salud",
  "Sindicatos",
  "Objetivos",
  "Honestidad",
  "Redes sociales",
];
const { formId, formField } = generalFormModel;

function _renderStepContent(step, values) {
  switch (step) {
    case 0:
      return <AutorizationForm formField={formField} values={values} />;
    case 1:
      return <General formField={formField} values={values} />;
    case 2:
      return <FamilyForm formField={formField} />;
    case 3:
      return <SonForm formField={formField} values={values} />;
    case 4:
      return <BrothersForm formField={formField} values={values} />;
    case 5:
      return <StepBrothersForm formField={formField} values={values} />;
    case 6:
      return <ConyugueForm formField={formField} />;
    case 7:
      return <GrandfatherForm formField={formField} values={values} />;
    case 8:
      return <EducacionalForm formField={formField} />;
    case 9:
      return <WorkForm formField={formField} values={values} />;
    case 10:
      return <EconomicForm formField={formField} values={values} />;
    case 11:
      return <SocialForm formField={formField} values={values} />;
    case 12:
      return <CriminalForm formField={formField} values={values} />;
    case 13:
      return <HealForm formField={formField} values={values} />;
    case 14:
      return <SindicatosForm formField={formField} values={values} />;
    case 15:
      return <ObjectivsForm formField={formField} values={values} />;
    case 16:
      return <HonestidadForm formField={formField} values={values} />;
    case 17:
      return <RedSocialForm formField={formField} values={values} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const [newFormulario] = useMutation(FORMULARIO);
  const [deleteUser] = useMutation(DELETED);
  const { data, loading, error } = useQuery(GET_USERS);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1400,
    })
  );

  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    console.info(`\n\n==> { _submitForm }\n`, values, `\n`, ``);
    var years =
      new Date(new Date() - new Date(values.general_birth)).getFullYear() -
      1970;
    console.log(`years ${years}`);
    var year = years.toString();
    try {
      const { data } = await newFormulario({
        variables: {
          input: {
            //Informacion general
            general_name: values.general_name,
            general_lastname: values.general_lastname,
            general_married_name: values.general_married_name, // input select
            general_lastname_married: values.general_lastname_married, // add lastname married
            general_birth: values.general_birth,
            general_place_birth: values.general_place_birth,
            general_age: year,
            general_civil_status: values.general_civil_status,
            general_profession: values.general_profession,
            general_direction: values.general_direction,
            general_time_reside: values.general_time_reside,
            general_previous_direction: values.general_previous_direction,
            general_phone: values.general_phone,
            general_nit: values.general_nit,
            general_nit_select: values.general_nit_select, // input select
            general_dpi: values.general_dpi,
            general_email: values.general_email,
            general_emergency_phone: values.general_emergency_phone,
            general_emergency_name: values.general_emergency_name,
            general_afilacion_select: values.general_afilacion_select, // input select
            general_irtra: values.general_irtra,
            general_igss: values.general_igss,
            vehicle: values.vehicle,
            biker: values.biker, // biker array
            license: values.license,

            family_validate_stepparents: values.family_validate_stepparents,
            family_validate_son: values.family_validate_son,
            family_validate_brothers: values.family_validate_brothers,
            family_validate_stepbrother: values.family_validate_stepbrother,
            family_validate_conyugue: values.family_validate_conyugue,

            // #dad
            family_dad_life: values.family_dad_life,
            family_dad_name: values.family_dad_name,
            family_dad_age: values.family_dad_age,
            family_dad_status: values.family_dad_status,
            family_dad_working_val: values.family_dad_working_val,
            family_dad_place: values.family_dad_place,
            family_dad_company: values.family_dad_company,
            family_dad_financial_income: values.family_dad_financial_income,
            family_dad_depend: values.family_dad_depend,
            family_dad_phone_val: values.family_dad_phone_val,
            family_dad_phone: values.family_dad_phone,
            family_dad_no_phone: values.family_dad_no_phone,
            // #// add changes 2.0
            family_dad_relation: values.family_dad_relation,
            family_dad_information: values.family_dad_information,
            family_dad_reason: values.family_dad_reason,
            family_dad_why_negative: values.family_dad_why_negative,
            family_dad_information_negative: values.family_dad_information_negative,
            // #// add name died
            family_dad_died_first_name: values.family_dad_died_first_name,
            family_dad_died_last_name: values.family_dad_died_last_name,
            family_dad_time_died: values.family_dad_time_died,
            family_dad_reason_died: values.family_dad_reason_died,
            family_dad_resident: values.family_dad_resident,
            family_dad_no_resident: values.family_dad_no_resident,
            family_dad_condition_resident: values.family_dad_condition_resident,

            //validation two
            family_dad_lifetwo: values.family_dad_lifetwo,
            family_dad_nametwo: values.family_dad_nametwo,
            family_dad_agetwo: values.family_dad_agetwo,
            family_dad_statustwo: values.family_dad_statustwo,
            family_dad_working_valtwo: values.family_dad_working_valtwo,
            family_dad_placetwo: values.family_dad_placetwo,
            family_dad_companytwo: values.family_dad_companytwo,
            family_dad_financial_incometwo: values.family_dad_financial_incometwo,
            family_dad_dependtwo: values.family_dad_dependtwo,
            family_dad_phone_valtwo: values.family_dad_phone_valtwo,
            family_dad_phonetwo: values.family_dad_phonetwo,
            family_dad_no_phonetwo: values.family_dad_no_phonetwo,
            // add name died two
            family_dad_died_first_nametwo: values.family_dad_died_first_nametwo,
            family_dad_died_last_nametwo: values.family_dad_died_last_nametwo,
            family_dad_time_diedtwo: values.family_dad_time_diedtwo,
            family_dad_reason_diedtwo: values.family_dad_reason_diedtwo,
            family_dad_residenttwo: values.family_dad_residenttwo,
            family_dad_no_residenttwo: values.family_dad_no_residenttwo,
            family_dad_condition_residenttwo: values.family_dad_condition_residenttwo,

            //#mom
            family_mom_name: values.family_mom_name,
            family_mom_age: values.family_mom_age,
            family_mom_status: values.family_mom_status,
            family_mom_place: values.family_mom_place,
            family_mom_company: values.family_mom_company,
            family_mom_financial_income: values.family_mom_financial_income,
            family_mom_phone: values.family_mom_phone,
            family_mom_depend: values.family_mom_depend,
            family_mom_no_phone: values.family_mom_no_phone,
            family_mom_time_died: values.family_mom_time_died,
            family_mom_reason_died: values.family_mom_reason_died,
            family_mom_life: values.family_mom_life,
            family_mom_phone_val: values.family_mom_phone_val,
            family_mom_working_val: values.family_mom_working_val,
            family_mom_relation: values.family_mom_relation,
            family_mom_information: values.family_mom_information,
            family_mom_reason: values.family_mom_reason,
            family_mom_why_negative: values.family_mom_why_negative,
            family_mom_information_negative: values.family_mom_information_negative,
            // #// add mother name died
            family_mom_died_first_name: values.family_mom_died_first_name,
            family_mom_died_last_name: values.family_mom_died_last_name,
            vive_family: values.vive_family,
            
            family_mom_resident: values.family_mom_resident,
            family_mom_no_resident: values.family_mom_no_resident,
            family_mom_condition_resident: values.family_mom_condition_resident,

            //  #//validation two
            family_mom_lifetwo: values.family_mom_lifetwo,
            family_mom_nametwo: values.family_mom_nametwo,
            family_mom_agetwo: values.family_mom_agetwo,
            family_mom_statustwo: values.family_mom_statustwo,
            family_mom_working_valtwo: values.family_mom_working_valtwo,
            family_mom_placetwo: values.family_mom_placetwo,
            family_mom_companytwo: values.family_mom_companytwo,
            family_mom_financial_incometwo: values.family_mom_financial_incometwo,
            family_mom_dependtwo: values.family_mom_dependtwo,
            family_mom_phone_valtwo: values.family_mom_phone_valtwo,
            family_mom_phonetwo: values.family_mom_phonetwo,
            family_mom_no_phonetwo: values.family_mom_no_phonetwo,
            //  #// add name died two
            family_mom_died_first_nametwo: values.family_mom_died_first_nametwo,
            family_mom_died_last_nametwo: values.family_mom_died_last_nametwo,
            family_mom_time_diedtwo: values.family_mom_time_diedtwo,
            family_mom_reason_diedtwo: values.family_mom_reason_diedtwo,
            family_mom_residenttwo: values.family_mom_residenttwo,
            family_mom_no_residenttwo: values.family_mom_no_residenttwo,
            family_mom_condition_residenttwo: values.family_mom_condition_residenttwo,

            // aditional information 
            you_parents_together: values.you_parents_together,
            mother_partner_name: values.mother_partner_name,
            mother_partner_lastname: values.mother_partner_lastname,
            mother_relationship: values.mother_relationship,
            father_partner_name: values.father_partner_name,
            father_partner_lastname: values.father_partner_lastname,
            father_relationship: values.father_relationship,
            has_partner_father: values.has_partner_father,
            has_partner_mother: values.has_partner_mother,

            // #stepfather
            family_stepfather_name: values.family_stepfather_name,
            family_stepfather_age: values.family_stepfather_age,
            family_stepfather_status: values.family_stepfather_status,
            family_stepfather_place: values.family_stepfather_place,
            family_stepfather_company: values.family_stepfather_company,
            family_stepfather_financial_income:
              values.family_stepfather_financial_income,
            family_stepfather_phone: values.family_stepfather_phone,
            family_stepfather_depend: values.family_stepfather_depend,
            family_stepfather_no_phone: values.family_stepfather_no_phone,
            family_stepfather_time_died: values.family_stepfather_time_died,
            family_stepfather_reason_died: values.family_stepfather_reason_died,
            family_stepfather_life: values.family_stepfather_life,
            family_stepfather_phone_val: values.family_stepfather_phone_val,
            family_stepfather_working_val: values.family_stepfather_working_val,
            family_stepfather_info: values.family_stepfather_info,
            family_stepfather_noInfo: values.family_stepfather_noInfo,

            // #stepmother
            family_stepmother_name: values.family_stepmother_name,
            family_stepmother_age: values.family_stepmother_age,
            family_stepmother_status: values.family_stepmother_status,
            family_stepmother_place: values.family_stepmother_place,
            family_stepmother_company: values.family_stepmother_company,
            family_stepmother_financial_income:
              values.family_stepmother_financial_income,
            family_stepmother_phone: values.family_stepmother_phone,
            family_stepmother_depend: values.family_stepmother_depend,
            family_stepmother_no_phone: values.family_stepmother_no_phone,
            family_stepmother_time_died: values.family_stepmother_time_died,
            family_stepmother_reason_died: values.family_stepmother_reason_died,
            family_stepmother_info: values.family_stepmother_info,
            family_stepmother_life: values.family_stepmother_life,
            family_stepmother_phone_val: values.family_stepmother_phone_val,
            family_stepmother_working_val: values.family_stepmother_working_val,
            family_stepmother_noInfo: values.family_stepmother_noInfo,
            son: values.son,
            brothers: values.brothers,
            stepbrother: values.stepbrother,

            // conyugue
            family_conyugue_name: values.family_conyugue_name,
            family_conyugue_age: values.family_conyugue_age,
            family_conyugue_status: values.family_conyugue_status,
            family_conyugue_place: values.family_conyugue_place,
            family_conyugue_company: values.family_conyugue_company,
            family_conyugue_financial_income:
              values.family_conyugue_financial_income,
            family_conyugue_phone: values.family_conyugue_phone,
            family_conyugue_depend: values.family_conyugue_depend,
            family_conyugue_no_phone: values.family_conyugue_no_phone,
            family_conyugue_time_died: values.family_conyugue_time_died,
            family_conyugue_reason_died: values.family_conyugue_reason_died,
            family_conyugue_life: values.family_conyugue_life,
            family_conyugue_phone_val: values.family_conyugue_phone_val,
            family_conyugue_working_val: values.family_conyugue_working_val,
            /* add name and lastname */
            family_conyugue_died_name: values.family_conyugue_died_name,
            family_conyugue_died_lastname: values.family_conyugue_died_lastname,

            family_conyugue_married_val: values.family_conyugue_married_val,
            family_conyugue_married: values.family_conyugue_married,
            family_conyugue_partner_val: values.family_conyugue_partner_val,
            family_conyuguepat_name: values.family_conyuguepat_name,
            family_conyuguepat_age: values.family_conyuguepat_age,
            family_conyuguepat_status: values.family_conyuguepat_status,
            family_conyuguepat_place: values.family_conyuguepat_place,
            family_conyuguepat_company: values.family_conyuguepat_company,
            family_conyuguepat_financial_income:
              values.family_conyuguepat_financial_income,
            family_conyuguepat_phone: values.family_conyuguepat_phone,
            family_conyuguepat_depend: values.family_conyuguepat_depend,
            family_conyuguepat_no_phone: values.family_conyuguepat_no_phone,
            family_conyuguepat_phone_val: values.family_conyuguepat_phone_val,
            family_conyuguepat_working_val:
              values.family_conyuguepat_working_val,

            //abuelo papa y mama
            family_grandfather_name: values.family_grandfather_name,
            family_grandfather_age: values.family_grandfather_age,
            family_grandfather_status: values.family_grandfather_status,
            family_grandfather_place: values.family_grandfather_place,
            family_grandfather_company: values.family_grandfather_company,
            family_grandfather_financial_income:
              values.family_grandfather_financial_income,
            family_grandfather_phone: values.family_grandfather_phone,
            family_grandfather_depend: values.family_grandfather_depend,
            family_grandfather_no_phone: values.family_grandfather_no_phone,
            family_grandfather_time_died: values.family_grandfather_time_died,
            family_grandfather_reason_died:
              values.family_grandfather_reason_died,
            family_grandfather_life: values.family_grandfather_life,
            family_grandfather_phone_val: values.family_grandfather_phone_val,
            family_grandfather_working_val:
              values.family_grandfather_working_val,
            family_grandfather_lifeno_name:
              values.family_grandfather_lifeno_name,
            family_grandfather_lifeno_firstname:
              values.family_grandfather_lifeno_firstname,
            family_grandmother_name: values.family_grandmother_name,
            family_grandmother_age: values.family_grandmother_age,
            family_grandmother_status: values.family_grandmother_status,
            family_grandmother_place: values.family_grandmother_place,
            family_grandmother_company: values.family_grandmother_company,
            family_grandmother_financial_income:
              values.family_grandmother_financial_income,
            family_grandmother_phone: values.family_grandmother_phone,
            family_grandmother_depend: values.family_grandmother_depend,
            family_grandmother_no_phone: values.family_grandmother_no_phone,
            family_grandmother_time_died: values.family_grandmother_time_died,
            family_grandmother_reason_died:
              values.family_grandmother_reason_died,
            family_grandmother_life: values.family_grandmother_life,
            family_grandmother_phone_val: values.family_grandmother_phone_val,
            family_grandmother_working_val:
              values.family_grandmother_working_val,
            family_grandmother_lifeno_name:
              values.family_grandmother_lifeno_name,
            family_grandmother_lifeno_firstname:
              values.family_grandmother_lifeno_firstname,

            //madre
            family_grandfather_nametwo: values.family_grandfather_nametwo,
            family_grandfather_agetwo: values.family_grandfather_agetwo,
            family_grandfather_placetwo: values.family_grandfather_placetwo,
            family_grandfather_companytwo: values.family_grandfather_companytwo,
            family_grandfather_financial_incometwo:
              values.family_grandfather_financial_incometwo,
            family_grandfather_phonetwo: values.family_grandfather_phonetwo,
            family_grandfather_dependtwo: values.family_grandfather_dependtwo,
            family_grandfather_no_phonetwo:
              values.family_grandfather_no_phonetwo,
            family_grandfather_time_diedtwo:
              values.family_grandfather_time_diedtwo,
            family_grandfather_reason_diedtwo:
              values.family_grandfather_reason_diedtwo,
            family_grandfather_lifetwo: values.family_grandfather_lifetwo,
            family_grandfather_phone_valtwo:
              values.family_grandfather_phone_valtwo,
            family_grandfather_working_valtwo:
              values.family_grandfather_working_valtwo,
            family_grandfather_lifeno_nametwo:
              values.family_grandfather_lifeno_nametwo,
            family_grandfather_lifeno_firstnametwo:
              values.family_grandfather_lifeno_firstnametwo,
            family_grandmother_nametwo: values.family_grandmother_nametwo,
            family_grandmother_agetwo: values.family_grandmother_agetwo,
            family_grandmother_statustwo: values.family_grandmother_statustwo,
            family_grandmother_placetwo: values.family_grandmother_placetwo,
            family_grandmother_companytwo: values.family_grandmother_companytwo,
            family_grandmother_financial_incometwo:
              values.family_grandmother_financial_incometwo,
            family_grandmother_phonetwo: values.family_grandmother_phonetwo,
            family_grandmother_dependtwo: values.family_grandmother_dependtwo,
            family_grandmother_no_phonetwo:
              values.family_grandmother_no_phonetwo,
            family_grandmother_time_diedtwo:
              values.family_grandmother_time_diedtwo,
            family_grandmother_reason_diedtwo:
              values.family_grandmother_reason_diedtwo,
            family_grandmother_lifetwo: values.family_grandmother_lifetwo,
            family_grandmother_phone_valtwo:
              values.family_grandmother_phone_valtwo,
            family_grandmother_working_valtwo:
              values.family_grandmother_working_valtwo,
            family_grandmother_lifeno_nametwo:
              values.family_grandmother_lifeno_nametwo,
            family_grandmother_lifeno_firstnametwo:
              values.family_grandmother_lifeno_firstnametwo,

            estudie_university_name: values.estudie_university_name,
            estudie_university_uniname: values.estudie_university_uniname,
            estudie_university_semester: values.estudie_university_semester,
            estudie_university_val: values.estudie_university_val,
            estudie_university_title: values.estudie_university_title,
            estudie_university_sede: values.estudie_university_sede,
            estudie_university_year_graduation:
              values.estudie_university_year_graduation,
            estudie_university_no_sede: values.estudie_university_no_sede,
            estudie_university_hour: values.estudie_university_hour,
            /* add */
            study_magister: values.study_magister,
            wich_career: values.wich_career,
            select_schedules: values.select_schedules,
            why_not_schedules: values.why_not_schedules,

            estudie_diversificado_sval: values.estudie_diversificado_sval,
            estudie_diversificado_name: values.estudie_diversificado_name,
            estudie_diversificado_uniname: values.estudie_diversificado_uniname,
            estudie_diversificado_desde: values.estudie_diversificado_desde,
            estudie_diversificado_hasta: values.estudie_diversificado_hasta,

            //#basic
            estudie_basic_sval: values.estudie_basic_sval,
            estudie_basic_uniname: values.estudie_basic_uniname,
            estudie_basic_desde: values.estudie_basic_desde,
            estudie_basic_hasta: values.estudie_basic_hasta,

            //#primary
            estudie_primary_sval: values.estudie_primary_sval,
            estudie_primary_uniname: values.estudie_primary_uniname,
            estudie_primary_desde: values.estudie_primary_desde,
            estudie_primary_hasta: values.estudie_primary_hasta,

            //work
            work: values.work,
            work_banrural: values.work_banrural,
            work_valNe: values.work_valNe,
            work_ne_name: values.work_ne_name,
            work_ne_web: values.work_ne_web,
            work_ne_dateInit: values.work_ne_dateInit,
            work_ne_salaryPersonal: values.work_ne_salaryPersonal,
            work_ne_detail: values.work_ne_detail,
            work_ne_detailIncome: values.work_ne_detailIncome,
            work_ne_whatwill: values.work_ne_whatwill,
            /* add data */
            work_select_entity: values.work_select_entity,
            work_name_entity: values.work_name_entity,
            work_lsname_entity: values.work_lsname_entity,
            work_bank: values.work_bank,
            work_relation: values.work_relation,

            //economic
            economic: values.economic,
            economicother: values.economicother,
            economic_vivienda: values.economic_vivienda,
            economic_food: values.economic_food,
            economic_aporte: values.economic_aporte,
            economic_water: values.economic_water,
            economic_phone: values.economic_phone,
            economic_recreation: values.economic_recreation,
            economic_vestuario: values.economic_vestuario,
            economic_gastos: values.economic_gastos,
            economic_trans: values.economic_trans,
            economic_medic: values.economic_medic,
            economic_estudy: values.economic_estudy,
            economic_ahorro: values.economic_ahorro,
            economic_payment_deuda: values.economic_payment_deuda,
            economic_other: values.economic_other,
            economic_total: values.economic_total,

            //social
            social_group: values.social_group,
            social_gtime: values.social_gtime,
            social_politic: values.social_politic,
            social_politic_name: values.social_politic_name,
            social_politic_relacion: values.social_politic_relacion,
            social_politic_puesto: values.social_politic_puesto,
            social_fuma: values.social_fuma,
            social_fuma_time: values.social_fuma_time,
            social_alco: values.social_alco,
            social_alco_time: values.social_alco_time,
            social_alco_bebida: values.social_alco_bebida,
            social_drog: values.social_drog,
            social_drog_option: values.social_drog_option,
            social_drog_time: values.social_drog_time,
            social_drog_person: values.social_drog_person,
            social_tatto: values.social_tatto,
            social: values.social,
            social_fuma_frequency: values.social_fuma_frequency,
            social_alco_howmuch: values.social_alco_howmuch,
            social_alco_frequency: values.social_alco_frequency,

            criminal_association_option: values.criminal_association_option,
            criminal_relacion: values.criminal_relacion,
            criminal_name: values.criminal_name,
            criminal_group_belong: values.criminal_group_belong,
            criminal_police_option: values.criminal_police_option,
            criminal_why_stained: values.criminal_why_stained,
            criminal_why_clear: values.criminal_why_clear,
            criminal_family: values.criminal_family,
            criminal_was_sued: values.criminal_was_sued,
            criminal_you_demand: values.criminal_you_demand,
            criminal: values.criminal,

            dosis: values.dosis,
            disease: values.disease,

            disease_hipertension_option: values.disease_hipertension_option,
            disease_diabetes_option: values.disease_diabetes_option,
            disease_VIH_option: values.disease_VIH_option,
            disease_ITS_option: values.disease_ITS_option,
            disease_gastritis_option: values.disease_gastritis_option,
            disease_cancer_option: values.disease_cancer_option,
            disease_cardiopatias_option: values.disease_cardiopatias_option,
            disease_hipertension_observacion:
              values.disease_hipertension_observacion,
            disease_diabetes_observacion: values.disease_diabetes_observacion,
            disease_VIH_observacion: values.disease_VIH_observacion,
            disease_ITS_observacion: values.disease_ITS_observacion,
            disease_gastritis_observacion: values.disease_gastritis_observacion,
            disease_cancer_observacion: values.disease_cancer_observacion,
            disease_cardiopatias_observacion:
              values.disease_cardiopatias_observacion,
            accident_option: values.accident_option,
            accident_detail: values.accident_detail,
            accident_suffer: values.accident_suffer,
            covid_option: values.covid_option,
            covid_dosis: values.covid_dosis,
            validate_sex: values.validate_sex,
            validate_gestacion: values.validate_gestacion,
            validate_children: values.validate_children,
            validate_lactando: values.validate_lactando,
            validate_lac_month: values.validate_lac_month,
            validate_lac_age: values.validate_lac_age,
            validate_dosis: values.validate_dosis,

            objectivs_corto: values.objectivs_corto,
            objectivs_mediano: values.objectivs_mediano,
            objectives_largo: values.objectives_largo,

            sindicatos_favor: values.sindicatos_favor,
            sindicatos_formar: values.sindicatos_formar,
            sindicatos_why: values.sindicatos_why,

            honest_p1: values.honest_p1,
            honest_p2: values.honest_p2,
            honest_p3: values.honest_p3,
            honest_p4: values.honest_p4,
            whyIdentityHidde: values.whyIdentityHidde,
            documentInOrder: values.documentInOrder,

            red_faccebook: values.red_faccebook,
            red_faccebookOther: values.red_faccebookOther,
            red_faccebookval: values.red_faccebookval,
            red_faccebookOtherVal: values.red_faccebookOtherVal,
            validation_form: values.validation_form,
          },
        },
      });
      console.log(`data ${data}`);
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  if (loading) return null;

  const { id } = data.getUser || {};

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
      // const { data } = deleteUser({
      //   variables: {
      //     id
      //   },
      // });
      // settime out tiempo 
      // eliminar storage
      // mandar al login 
      // setTimeout(() => {
      //   localStorage.clear()
      //   router.push("/LoginPage");
      // }, 8000);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        style={{ paddingTop: '20px', paddingBottom: "20px", fontSize: "35px", fontWeight: "bold" }}
      >
        Socioeconómico
      </Typography>

      {matches == true && (
        <Stepper
          xs={12}
          sm={6} matchestwo
          activeStep={activeStep}
          className={classes.stepper}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      {matches == false && (
        <MobileStepper
          style={{ display: "flex", justifyContent: "center" }}
          steps={18}
          position="static"
          xs={12}
          sm={6}
          activeStep={activeStep}
          className={classes.stepper}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MobileStepper>
      )}

      <MobileStepper
        variant="progress"
        steps={19}
        position="static"
        activeStep={activeStep}
        xs={12}
        sm={6}
        className={classes.stepper}
        alternativeLabel
        style={{ display: "flex", justifyContent: "center" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MobileStepper>
      <>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep, values)}

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '30px', paddingBottom: '15px', paddingTop: '10px' }}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Anterior
                    </Button>
                  )}
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Enviar" : "Siguiente"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
}
