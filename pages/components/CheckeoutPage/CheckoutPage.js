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
      family_son_lookafther,
      family_son_validate_age,
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
  }
}
`;


const steps = ['Info. general', 'Datos padres', 'Datos hijos', 'Datos hermanos', 'Datos hermanastros', 'Datos conyugue',
  'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue', 'Datos conyugue'];
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
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {


  const [newFormulario] = useMutation(FORMULARIO);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    console.log('changed step scrolling to top of window');
    window.scrollTo(0, 0)
  }, [activeStep])

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1700,
            height: 70,
          },
        }}
        display="flex"
        justifyContent="center"
        paddingTop={5}
      >
        <Paper elevation={24} style={{ maxHeight: 1020, overflow: "auto" }}>
          <Grid container>
            <Grid item>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
        </Paper>

      </Box>



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
