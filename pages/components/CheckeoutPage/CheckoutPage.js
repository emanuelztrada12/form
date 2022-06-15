import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';
import { useMutation, useQuery, gql } from "@apollo/client";
import StatusCivilForm from "./Forms/StatusCivilForm";
import validationSchema from './FormModel/validationSchema';
import generalFormModel from './FormModel/generalFormModel';
import formInitialValues from './FormModel/formInitialValues';
import useStyles from './styles';

const QUERY = gql`
query GetFormularioGolden {
  getFormularioGolden {
    tiene_deudas_economia
  }
}
`;

const FORMULARIO = gql`
mutation newForm($input: FormInput) {
  newForm(input: $input) {
    general_name
    # general_lastname
    # general_birth
    # general_place_birth
    # general_age
    # general_civil_status
    # general_profession
    # general_direction
    # general_time_reside
    # general_previous_direction
    # general_phone
    # general_nit
    # general_dpi
    # general_email
    # general_emergency_phone
    # general_emergency_name
    # general_irtra
    # general_igss
    vehicle {
      general_brand
      general_model
    }
    license {
      general_license
      general_license_expire
      general_license_type
    }
  }
}
`;

const steps = ['Informacion'];
const { formId, formField } = generalFormModel;
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <StatusCivilForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  // const { data } = useQuery(QUERY);
  // console.log(data); 
  const [newFormulario] = useMutation(FORMULARIO)

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  // console.log(`isLastStep ${isLastStep}`);
  // console.log(`currentValidationSchema ${Object.values(currentValidationSchema)}`) 

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    console.log(values)
    // try {
    //   const { data } = await newFormulario({
    //     variables: {
    //       input: {
    //         //Informacion general
    //         general_name: values.general_name,
    //         // general_lastname: values.general_lastname,
    //         // general_birth: values.general_birth,
    //         // general_place_birth: values.general_place_birth,
    //         // general_age: values.general_age,
    //         // general_civil_status: values.general_civil_status,
    //         // general_profession: values.general_profession,
    //         // general_direction: values.general_direction,
    //         // general_time_reside: values.general_time_reside,
    //         // general_previous_direction: values.general_previous_direction, 
    //         // general_phone: values.general_phone,
    //         // general_nit: values.general_nit, 
    //         // general_dpi:  values.general_dpi,
    //         // general_email: values.general_email,
    //         // general_emergency_phone: values.general_emergency_phone,
    //         // general_emergency_name: values.general_emergency_name,
    //         // general_irtra: values.general_irtra,
    //         // general_igss: values.general_igss,
    //         vehicle: [{general_brand: values.general_brand}],
    //         license: [{ general_license: values.general_license,
    //         general_license_expire: values.general_license_expire,
    //         general_license_type: values.general_license_type}]
           
    //       }
    //     }
    //   });
    //   console.log(`data ${data}`)
    // } catch (error) {
    //   console.log(error);
    // }

    // await _sleep(1000);
    // alert(JSON.stringify(`values ${values.general_birth}`, null, 2));
    // actions.setSubmitting(false);
    // setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
      // console.log(`values ${Object.values(values)}`)
      // console.log(`values ${Object.values(values)} actions ${Object.values(actions)}`)
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

        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId}>
              {_renderStepContent(activeStep)}
              

              <input
                type="submit"
                className="bg-gray-800 w-full mt-5 p-4 text-white uppercase hover:bg-gray-900"
                value="Enviar Formulario" />

              {/* <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )} */}
              {/* <div className={classes.wrapper}> */}
              {/* <Button
                      // disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    > */}
              {/* {isLastStep ? 'Place order' : 'Next'} */}
              {/* </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )} */}
              {/* </div> */}
              {/* </div> */}
            </Form>
          )}
        </Formik>
      </>
    </>
  );
}