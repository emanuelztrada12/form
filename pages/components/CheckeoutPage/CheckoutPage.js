import React, { useState, useEffect } from "react";
import {
  CircularProgress,
} from "@mui/material";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form } from "formik";

import { useMutation, useQuery, gql } from "@apollo/client";

import FamilyForm from "./Forms/FamilyForm";
import General from "./Forms/General";
import SonForm from "./Forms/SonForm";

import validationSchema from "./FormModel/validationSchema";
import generalFormModel from "./FormModel/generalFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";

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
    #dad
    family_dad_name,
    family_dad_age,
    family_dad_status,
    family_dad_place,
    family_dad_company,
    family_dad_financial_income,
    family_dad_phone,
    family_dad_depend,
    family_dad_no_phone,
    family_dad_time_died,
    family_dad_reason_died,
    family_dad_life,
    family_dad_phone_val,
    family_dad_working_val,

    #mom
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

    #stepfather
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

    #stepmother
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
  }
}
`;


const steps = ['Información General', 'Datos de los padres', 'Datos de los hijos'];
const { formId, formField } = generalFormModel;

function _renderStepContent(step, values) {
  switch (step) {
    case 0:
      return <General formField={formField} values={values} />;
    case 1:
      return <FamilyForm formField={formField} />;
    case 2: 
      return <SonForm formField={formField} values={values}/>
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
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
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

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
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
