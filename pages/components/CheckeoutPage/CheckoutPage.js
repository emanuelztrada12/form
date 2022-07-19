import React, { useState, useEffect } from "react";
import {
  CircularProgress, Grid,
} from "@mui/material";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Paper, Divider, Chip } from "@mui/material";
import { Formik, Form } from "formik";

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

import validationSchema from "./FormModel/validationSchema";
import generalFormModel from "./FormModel/generalFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";
import EducacionalForm from "./Forms/EducacionalForm";

const QUERY = gql`
  query GetFormularioGolden {
    getFormularioGolden {
      tiene_deudas_economia
    }
  }
`;

const FORMULARIO = gql`
 mutation newform_golden_input($input: form_golden_input) {
  newform_golden_input(input: $input) {
    general_name
    general_lastname
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
    general_dpi
    general_email
    general_emergency_phone
    general_emergency_name
    general_irtra
    general_igss
    vehicle {
      general_brand
      general_model
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
    family_dad_name
    family_dad_age
    family_dad_status
    family_dad_place
    family_dad_company
    family_dad_financial_income
    family_dad_phone
    family_dad_depend
    family_dad_no_phone
    family_dad_time_died
    family_dad_reason_died
    family_dad_life
    family_dad_phone_val
    family_dad_working_val

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
    }

    #grandfather
    grandfather {
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
    }

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
  }
}
`;


const steps = ['Info. general', 'Datos padres', 'Datos hijos', 'Datos hermanos', 'Datos hermanastros', 'Datos conygue',
  'Datos abuelos', 'Información educacional', 'Información laboral', 'Información economica', 'Información social'
];
const { formId, formField } = generalFormModel;

function _renderStepContent(step, values) {
  switch (step) {
    case 0:
      return <General formField={formField} values={values} />;
    case 1:
      return <FamilyForm formField={formField} />;
    case 2:
      return <SonForm formField={formField} values={values} />;
    case 3:
      return <BrothersForm formField={formField} values={values} />;
    case 4:
      return <StepBrothersForm formField={formField} values={values} />;
    case 5:
      return <ConyugueForm formField={formField} />
    case 6:
      return <GrandfatherForm formField={formField} values={values} />;
    case 7:
      return <EducacionalForm formField={formField} />
    case 8:
      return <WorkForm formField={formField} values={values} />
    case 9:
      return <EconomicForm formField={formField} values={values} />
    case 10: 
      return <SocialForm formField={formField} values={values}/>
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {


  const [newFormulario] = useMutation(FORMULARIO);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async function _submitForm(values, actions) {
    console.info(`\n\n==> { _submitForm }\n`, values, `\n`, ``);
    var years = new Date(new Date() - new Date(values.general_birth)).getFullYear() - 1970;
    console.log(`years ${years}`)
    var year = years.toString();
    try {
      const { data } = await newFormulario({
        variables: {
          input: {
            //Informacion general
            general_name: values.general_name,
            general_lastname: values.general_lastname,
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
            general_dpi: values.general_dpi,
            general_email: values.general_email,
            general_emergency_phone: values.general_emergency_phone,
            general_emergency_name: values.general_emergency_name,
            general_irtra: values.general_irtra,
            general_igss: values.general_igss,
            vehicle: values.vehicle,
            license: values.license,

            family_validate_stepparents: values.family_validate_stepparents,
            family_validate_son: values.family_validate_son,
            family_validate_brothers: values.family_validate_brothers,
            family_validate_stepbrother: values.family_validate_stepbrother,
            family_validate_conyugue: values.family_validate_conyugue,

            // #dad
            family_dad_name: values.family_dad_name,
            family_dad_age: values.family_dad_age,
            family_dad_status: values.family_dad_status,
            family_dad_place: values.family_dad_place,
            family_dad_company: values.family_dad_company,
            family_dad_financial_income: values.family_dad_financial_income,
            family_dad_phone: values.family_dad_phone,
            family_dad_depend: values.family_dad_depend,
            family_dad_no_phone: values.family_dad_no_phone,
            family_dad_time_died: values.family_dad_time_died,
            family_dad_reason_died: values.family_dad_reason_died,
            family_dad_life: values.family_dad_life,
            family_dad_phone_val: values.family_dad_phone_val,
            family_dad_working_val: values.family_dad_working_val,

            // #mom
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

            // #stepfather
            family_stepfather_name: values.family_stepfather_name,
            family_stepfather_age: values.family_stepfather_age,
            family_stepfather_status: values.family_stepfather_status,
            family_stepfather_place: values.family_stepfather_place,
            family_stepfather_company: values.family_stepfather_company,
            family_stepfather_financial_income: values.family_stepfather_financial_income,
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
            family_stepmother_financial_income: values.family_stepmother_financial_income,
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
            family_conyugue_financial_income: values.family_conyugue_financial_income,
            family_conyugue_phone: values.family_conyugue_phone,
            family_conyugue_depend: values.family_conyugue_depend,
            family_conyugue_no_phone: values.family_conyugue_no_phone,
            family_conyugue_time_died: values.family_conyugue_time_died,
            family_conyugue_reason_died: values.family_conyugue_reason_died,
            family_conyugue_life: values.family_conyugue_life,
            family_conyugue_phone_val: values.family_conyugue_phone_val,
            family_conyugue_working_val: values.family_conyugue_working_val,

            family_conyugue_married_val: values.family_conyugue_married_val,
            family_conyugue_married: values.family_conyugue_married,
            family_conyugue_partner_val: values.family_conyugue_partner_val,
            family_conyuguepat_name: values.family_conyuguepat_name,
            family_conyuguepat_age: values.family_conyuguepat_age,
            family_conyuguepat_status: values.family_conyuguepat_status,
            family_conyuguepat_place: values.family_conyuguepat_place,
            family_conyuguepat_company: values.family_conyuguepat_company,
            family_conyuguepat_financial_income: values.family_conyuguepat_financial_income,
            family_conyuguepat_phone: values.family_conyuguepat_phone,
            family_conyuguepat_depend: values.family_conyuguepat_depend,
            family_conyuguepat_no_phone: values.family_conyuguepat_no_phone,
            family_conyuguepat_phone_val: values.family_conyuguepat_phone_val,
            family_conyuguepat_working_val: values.family_conyuguepat_working_val,

            grandfather: values.grandfather,
            estudie_university_name: values.estudie_university_name,
            estudie_university_uniname: values.estudie_university_uniname,
            estudie_university_semester: values.estudie_university_semester,
            estudie_university_val: values.estudie_university_val,
            estudie_university_title: values.estudie_university_title,
            estudie_university_sede: values.estudie_university_sede,
            estudie_university_year_graduation: values.estudie_university_year_graduation,
            estudie_university_no_sede: values.estudie_university_no_sede,
            estudie_university_hour: values.estudie_university_hour,

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

            //economic 
            economic: values.economic, 
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

          }
        }
      });
      console.log(`data ${data}`)
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
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
      <Typography component="h1" variant="h4" align="center" style={{ paddingBottom: "20px", fontSize: "35px", fontWeight: "bold" }}>
        Socioeconómico
      </Typography>

      <Stepper xs={12} sm={6} activeStep={activeStep} className={classes.stepper} alternativeLabel >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          // <CheckoutSuccess />
          <h1>hola</h1>
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep, values)}

                <div className={classes.buttons} style={{ paddingTop: "20px" }}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper} >
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}

                    >
                      {isLastStep ? 'Place order' : 'Next'}
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
