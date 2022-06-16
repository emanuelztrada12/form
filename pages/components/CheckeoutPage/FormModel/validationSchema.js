import * as yup from "yup";
import generalFormModel from "./generalFormModel";

const {
  formField: {
    general_name,
    general_lastname,
    general_age,
    general_place_birth,
    general_civil_status,
    general_profession,
    general_direction,
    general_time_reside,
    general_emergency_name,
    general_emergency_kinship,
    general_previous_direction,
    general_phone,
    general_emergency_phone,
    general_dpi,
    general_nit,
    general_vehicle,
    general_count_vehicle,
    general_license,
    general_license_type,
    general_license_expire,
    general_model,
    general_brand,
    general_email,
  },
} = generalFormModel;

export default [
  yup.object().shape({
    [general_name.name]: yup
      .string()
      .required(`${general_name.requiredErrorMsg}`),
    // [general_lastname.name]: yup.string().required(`${general_lastname.requiredErrorMsg}`),
    // [general_place_birth.name]: yup.string().required(`${general_place_birth.requiredErrorMsg}`),
    // [general_civil_status.name]: yup.string().required(`${general_civil_status.requiredErrorMsg}`),
    // [general_profession.name]: yup.string().required(`${general_profession.requiredErrorMsg}`),
    // [general_direction.name]: yup.string().required(`${general_direction.requiredErrorMsg}`),
    // [general_time_reside.name]: yup.string().required(`${general_time_reside.requiredErrorMsg}`),
    // [general_emergency_name.name]: yup.string().required(`${general_emergency_name.requiredErrorMsg}`),
    // [general_emergency_kinship.name]: yup.string().required(`${general_emergency_kinship.requiredErrorMsg}`),
    // [general_previous_direction.name]: yup.string().required(`${general_previous_direction.requiredErrorMsg}`),
    // [general_phone.name]: yup.string().required(`${general_phone.requiredErrorMsg}`),
    // [general_emergency_phone.name]: yup.string().required(`${general_emergency_phone.requiredErrorMsg}`),
    // [general_dpi.name]: yup.string().required(`${general_dpi.requiredErrorMsg}`),
    // [general_nit.name]: yup.string().required(`${general_nit.requiredErrorMsg}`),
    // [general_email.name]: yup.string().required(`${general_email.requiredErrorMsg}`),
    // [general_vehicle.name]: yup.string(),
    // [general_count_vehicle.name]: yup.string(),
    // [general_license.name]: yup.string(),
    // [general_license_type.name]: yup.string(),
    // [general_license_expire.name]: yup.string(),
    // [general_model.name]: yup.string(),
    // [general_brand.name]: yup.string(),
    // [general_age.name]: yup.string(),
    vehicle: yup.array({
      type: yup.object().shape({
        [general_model.name]: yup.string(),
        [general_brand.name]: yup.string(),
      }),
    })
  }),
];
