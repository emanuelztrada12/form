import * as yup from "yup";
import generalFormModel from "./generalFormModel";

const {
  formField: {
    //general
    general_name,
    general_lastname,
    general_age,
    general_birth,
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
    general_license,
    general_license_type,
    general_license_expire,
    general_model,
    general_brand,
    general_email,

    family_validate_stepparents,
    family_validate_son,
    family_validate_brothers,
    family_validate_stepbrother,
    family_validate_conyugue,

    //dad
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

    //stepmother
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

    //son
    family_son_name,
    family_son_age,
    family_son_status,
    family_son_place,
    family_son_company,
    family_son_financial_income,
    family_son_phone,
    family_son_depend,
    family_son_no_phone,
    family_son_time_died,
    family_son_reason_died,
    family_son_life,
    family_son_phone_val,
    family_son_working_val,
    family_son_lookafther,
    family_son_validate_age,

    //brothers
    family_brothers_name,
    family_brothers_age,
    family_brothers_status,
    family_brothers_place,
    family_brothers_company,
    family_brothers_financial_income,
    family_brothers_phone,
    family_brothers_depend,
    family_brothers_no_phone,
    family_brothers_time_died,
    family_brothers_reason_died,
    family_brothers_life,
    family_brothers_phone_val,
    family_brothers_working_val,

    //stepbrother
    family_stepbrother_name,
    family_stepbrother_age,
    family_stepbrother_status,
    family_stepbrother_place,
    family_stepbrother_company,
    family_stepbrother_financial_income,
    family_stepbrother_phone,
    family_stepbrother_depend,
    family_stepbrother_no_phone,
    family_stepbrother_time_died,
    family_stepbrother_reason_died,
    family_stepbrother_life,
    family_stepbrother_phone_val,
    family_stepbrother_working_val,

    //conyugue
    family_conyugue_name,
    family_conyugue_age,
    family_conyugue_status,
    family_conyugue_place,
    family_conyugue_company,
    family_conyugue_financial_income,
    family_conyugue_phone,
    family_conyugue_depend,
    family_conyugue_no_phone,
    family_conyugue_time_died,
    family_conyugue_reason_died,
    family_conyugue_life,
    family_conyugue_phone_val,

    family_conyugue_working_val,
    family_conyugue_married_val,
    family_conyugue_married,
    family_conyugue_partner_val,

    family_conyuguepat_name,
    family_conyuguepat_age,
    family_conyuguepat_status,
    family_conyuguepat_place,
    family_conyuguepat_company,
    family_conyuguepat_financial_income,
    family_conyuguepat_phone,
    family_conyuguepat_depend,
    family_conyuguepat_no_phone,
    family_conyuguepat_life,
    family_conyuguepat_phone_val,
    family_conyuguepat_working_val,

    //grandfather
    family_grandfather_name,
    family_grandfather_age,
    family_grandfather_status,
    family_grandfather_place,
    family_grandfather_company,
    family_grandfather_financial_income,
    family_grandfather_phone,
    family_grandfather_depend,
    family_grandfather_no_phone,
    family_grandfather_time_died,
    family_grandfather_reason_died,
    family_grandfather_life,
    family_grandfather_phone_val,
    family_grandfather_working_val,

    //estudent
    estudie_university_name,
    estudie_university_uniname,
    estudie_university_semester,
    estudie_university_val,
    estudie_university_title,
    estudie_university_sede,
    estudie_university_year_graduation,
    estudie_university_no_sede,
    estudie_university_hour,
    estudie_university_sval,

    //Diversificado
    estudie_diversificado_sval,
    estudie_diversificado_name,
    estudie_diversificado_uniname,
    estudie_diversificado_desde,
    estudie_diversificado_hasta,


    //Basico
    estudie_basic_sval,
    estudie_basic_uniname,
    estudie_basic_desde,
    estudie_basic_hasta,

    //Basico
    estudie_primary_sval,
    estudie_primary_uniname,
    estudie_primary_desde,
    estudie_primary_hasta,

    //work
    work_name,
    work_position,
    work_entry,
    work_withdrawal,
    work_salary,
    work_boss,
    work_chiefposition,
    work_phone,
    work_phone_boss,
    work_withdrawalreason,
    work_phone_val,
    work_phone_reason,
    work_reference,
    work_reference_reason, 
    work_banrural,
    work_valNe,
    work_ne_name,
    work_ne_web, 
    work_ne_dateInit, 
    work_ne_salaryPersonal, 
    work_ne_detail, 
    work_ne_detailIncome,
    work_ne_whatwill,

  },
} = generalFormModel;

export default [
  /*yup.object().shape({
    [general_name.name]: yup.string().required(`${general_name.requiredErrorMsg}`),
    [general_lastname.name]: yup.string().required(`${general_lastname.requiredErrorMsg}`),
    [general_place_birth.name]: yup.string().required(`${general_place_birth.requiredErrorMsg}`),
    [general_civil_status.name]: yup.string().required(`${general_civil_status.requiredErrorMsg}`),
    [general_profession.name]: yup.string().required(`${general_profession.requiredErrorMsg}`),
    [general_direction.name]: yup.string().required(`${general_direction.requiredErrorMsg}`),
    [general_time_reside.name]: yup.string().required(`${general_time_reside.requiredErrorMsg}`),
    [general_emergency_name.name]: yup.string().required(`${general_emergency_name.requiredErrorMsg}`),
    [general_emergency_kinship.name]: yup.string().required(`${general_emergency_kinship.requiredErrorMsg}`),
    [general_previous_direction.name]: yup.string().required(`${general_previous_direction.requiredErrorMsg}`),
    [general_phone.name]: yup.string().required(`${general_phone.requiredErrorMsg}`),
    [general_emergency_phone.name]: yup.string().required(`${general_emergency_phone.requiredErrorMsg}`),
    [general_dpi.name]: yup.string().required(`${general_dpi.requiredErrorMsg}`),
    [general_nit.name]: yup.string().required(`${general_nit.requiredErrorMsg}`),
    [general_email.name]: yup.string().email("El email no es correcto").required(`${general_email.requiredErrorMsg}`),
    [general_age.name]: yup.string(),
    [general_birth.name]: yup.string(),
    vehicle: yup.array({}).of(
      yup.object().shape({
        [general_brand.name]: yup.string().required(`${general_brand.requiredErrorMsg}`),
        [general_model.name]: yup.string().required(`${general_model.requiredErrorMsg}`),
      })
    ),
    license: yup.array({}).of(
      yup.object().shape({
        [general_license.name]: yup.string().required(`${general_license.requiredErrorMsg}`),
        [general_license_type.name]: yup.string().required(`${general_license_type.requiredErrorMsg}`),
        [general_license_expire.name]: yup.string().required(`${general_license_expire.requiredErrorMsg}`),
      })
    ),
  }),*/

  // yup.object().shape({
  //   //dad information general
  //   [family_dad_life.name]: yup.string().required("Este campo es requerido"),
  //   [family_dad_name.name]: yup.string().when("family_dad_life", {
  //     is: "Si",
  //     then: yup.string().required(`${family_dad_name.requiredErrorMsg}`).when("family_dad_life", {
  //       is: "No",
  //       then: yup.string()
  //     }),
  //   }),
  //   [family_dad_age.name]: yup.string()
  //     .when("family_dad_life", {
  //       is: "Si",
  //       then: yup.string().required(`${family_dad_age.requiredErrorMsg}`).when("family_dad_life", {
  //         is: "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_dad_status.name]: yup.string()
  //     .when("family_dad_life", {
  //       is: "Si",
  //       then: yup.string().required(`${family_dad_status.requiredErrorMsg}`).when("family_dad_life", {
  //         is: "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_dad_phone_val.name]: yup.string().when("family_dad_life", {
  //     is: "Si",
  //     then: yup.string().required("Este campo es requerido").when("family_dad_life", {
  //       is: "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [family_dad_no_phone.name]: yup.string()
  //     .when(["family_dad_phone_val", "family_dad_life"], {
  //       is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "No" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_no_phone.requiredErrorMsg}`).when(["family_dad_phone_val", "family_dad_life"], {
  //         is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "No" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_dad_phone.name]: yup.string()
  //     .when(["family_dad_phone_val", "family_dad_life"], {
  //       is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "Si" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_no_phone.requiredErrorMsg}`).when(["family_dad_phone_val", "family_dad_life"], {
  //         is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "Si" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   //dad die
  //   [family_dad_time_died.name]: yup.string()
  //     .when("family_dad_life", {
  //       is: "No",
  //       then: yup.string().required(`${family_dad_time_died.requiredErrorMsg}`).when(["family_dad_life"], {
  //         is: (family_dad_life) => family_dad_life === "Si",
  //         then: yup.string()
  //       }),
  //     }),
  //   [family_dad_reason_died.name]: yup.string()
  //     .when("family_dad_life", {
  //       is: "No",
  //       then: yup.string().required(`${family_dad_reason_died.requiredErrorMsg}`).when(["family_dad_life"], {
  //         is: (family_dad_life) => family_dad_life === "Si",
  //         then: yup.string()
  //       }),
  //     }),

  //   //dad working
  //   [family_dad_working_val.name]: yup.string().when("family_dad_life", {
  //     is: "Si",
  //     then: yup.string().required("El campo es requerido").when("family_dad_life", {
  //       is: "No",
  //       then: yup.string()
  //     })
  //   }),

  //   [family_dad_place.name]: yup.string()
  //     .when(["family_dad_working_val", "family_dad_life"], {
  //       is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_place.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
  //         is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_dad_company.name]: yup.string()
  //     .when(["family_dad_working_val", "family_dad_life"], {
  //       is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_company.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
  //         is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_dad_financial_income.name]: yup.string()
  //     .when(["family_dad_working_val", "family_dad_life"], {
  //       is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_financial_income.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
  //         is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),


  //   [family_dad_depend.name]: yup.string()
  //     .when(["family_dad_working_val", "family_dad_life"], {
  //       is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "No" && family_dad_life === "Si",
  //       then: yup.string().required(`${family_dad_depend.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
  //         is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "No" && family_dad_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   //mom general
  //   [family_mom_life.name]: yup.string().required("Este campo es requerido"),
  //   [family_mom_name.name]: yup.string().when("family_mom_life", {
  //     is: "Si",
  //     then: yup.string().required(`${family_mom_name.requiredErrorMsg}`).when("family_mom_life", {
  //       is: "No",
  //       then: yup.string()
  //     }),
  //   }),
  //   [family_mom_age.name]: yup.string()
  //     .when("family_mom_life", {
  //       is: "Si",
  //       then: yup.string().required(`${family_mom_age.requiredErrorMsg}`).when("family_mom_life", {
  //         is: "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_mom_status.name]: yup.string()
  //     .when("family_mom_life", {
  //       is: "Si",
  //       then: yup.string().required(`${family_mom_status.requiredErrorMsg}`).when("family_mom_life", {
  //         is: "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_mom_phone_val.name]: yup.string().when("family_mom_life", {
  //     is: "Si",
  //     then: yup.string().required("Este campo es requerido").when("family_mom_life", {
  //       is: "No",
  //       then: yup.string()
  //     }),
  //   }),



  //   //die mom
  //   [family_mom_time_died.name]: yup.string()
  //     .when("family_mom_life", {
  //       is: "No",
  //       then: yup.string().required(`${family_mom_time_died.requiredErrorMsg}`),
  //     }),
  //   [family_mom_reason_died.name]: yup.string()
  //     .when("family_mom_life", {
  //       is: "No",
  //       then: yup.string().required(`${family_mom_reason_died.requiredErrorMsg}`),
  //     }),


  //   //phone mom
  //   [family_mom_no_phone.name]: yup.string()
  //     .when(["family_mom_phone_val", "family_mom_life"], {
  //       is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "No" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_no_phone.requiredErrorMsg}`).when(["family_mom_phone_val", "family_mom_life"], {
  //         is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "No" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_mom_phone.name]: yup.string()
  //     .when(["family_mom_phone_val", "family_mom_life"], {
  //       is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "Si" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_no_phone.requiredErrorMsg}`).when(["family_mom_phone_val", "family_mom_life"], {
  //         is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "Si" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   //working mom
  //   [family_mom_working_val.name]: yup.string().when("family_mom_life", {
  //     is: "Si",
  //     then: yup.string().required("El campo es requerido").when("family_mom_life", {
  //       is: "No",
  //       then: yup.string()
  //     })
  //   }),

  //   [family_mom_place.name]: yup.string()
  //     .when(["family_mom_working_val", "family_mom_life"], {
  //       is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_place.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
  //         is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_mom_company.name]: yup.string()
  //     .when(["family_mom_working_val", "family_mom_life"], {
  //       is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_company.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
  //         is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_mom_financial_income.name]: yup.string()
  //     .when(["family_mom_working_val", "family_mom_life"], {
  //       is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_financial_income.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
  //         is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),


  //   [family_mom_depend.name]: yup.string()
  //     .when(["family_mom_working_val", "family_mom_life"], {
  //       is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "No" && family_mom_life === "Si",
  //       then: yup.string().required(`${family_mom_depend.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
  //         is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "No" && family_mom_life === "No",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_validate_stepparents.name]: yup.string().required(`${family_validate_stepparents.requiredErrorMsg}`),

  //   //stepfather general
  //   [family_stepfather_info.name]: yup.string().when(["family_validate_stepparents"], {
  //     is: (family_validate_stepparents) => family_validate_stepparents === "Si",
  //     then: yup.string().required(`${family_validate_stepparents.requiredErrorMsg}`).when(["family_validate_stepparents"], {
  //       is: (family_validate_stepparents) => family_validate_stepparents === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [family_stepfather_life.name]: yup.string().when("family_stepfather_info", {
  //     is: "Si",
  //     then: yup.string().required("Este campo es requerido").when("family_stepfather_info", {
  //       is: "No",
  //       then: yup.string()
  //     })
  //   }),

  //   [family_stepfather_name.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //     is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //     then: yup.string().required(`${family_stepfather_name.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //       then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_stepfather_age.name]: yup.string()
  //     .when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_age.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //         then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepfather_status.name]: yup.string()
  //     .when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_status.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //         then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepfather_phone_val.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //     is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //     then: yup.string().required(`${family_stepfather_phone_val.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //       then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),



  //   //die stepfather
  //   [family_stepfather_time_died.name]: yup.string()
  //     .when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_time_died.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //         then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepfather_reason_died.name]: yup.string()
  //     .when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_reason_died.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //         then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),


  //   //phone stepfather
  //   [family_stepfather_no_phone.name]: yup.string()
  //     .when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_no_phone.requiredErrorMsg}`).when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "No" && family_stepfather_info === "No",
  //         then: yup.string().when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepfather_phone.name]: yup.string()
  //     .when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_phone.requiredErrorMsg}`).when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //         then: yup.string().when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   //working stepfather
  //   [family_stepfather_working_val.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //     is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //     then: yup.string().required(`${family_stepfather_working_val.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
  //       then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_stepfather_place.name]: yup.string()
  //     .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_place.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //         then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepfather_company.name]: yup.string()
  //     .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_company.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //         then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepfather_financial_income.name]: yup.string()
  //     .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_financial_income.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //         then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),


  //   [family_stepfather_depend.name]: yup.string()
  //     .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //       is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
  //       then: yup.string().required(`${family_stepfather_depend.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //         is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "Si",
  //         then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
  //           is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepfather_noInfo.name]: yup.string().when("family_stepfather_info", {
  //     is: "No",
  //     then: yup.string().required(`${family_stepfather_noInfo.requiredErrorMsg}`).when("family_stepfather_info", {
  //       is: "Si",
  //       then: yup.string()
  //     }),
  //   }),


  //   //stepmother general
  //   [family_stepmother_info.name]: yup.string().when(["family_validate_stepparents"], {
  //     is: (family_validate_stepparents) => family_validate_stepparents === "Si",
  //     then: yup.string().required(`${family_validate_stepparents.requiredErrorMsg}`).when(["family_validate_stepparents"], {
  //       is: (family_validate_stepparents) => family_validate_stepparents === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [family_stepmother_life.name]: yup.string().when("family_stepmother_info", {
  //     is: "Si",
  //     then: yup.string().required("Este campo es requerido").when("family_stepmother_info", {
  //       is: "No",
  //       then: yup.string()
  //     })
  //   }),

  //   [family_stepmother_name.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //     is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //     then: yup.string().required(`${family_stepmother_name.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //       then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_stepmother_age.name]: yup.string()
  //     .when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_age.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //         then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepmother_status.name]: yup.string()
  //     .when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_status.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //         then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepmother_phone_val.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //     is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //     then: yup.string().required(`${family_stepmother_phone_val.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //       then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),



  //   //die stepmother
  //   [family_stepmother_time_died.name]: yup.string()
  //     .when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_time_died.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //         then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_stepmother_reason_died.name]: yup.string()
  //     .when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_reason_died.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //         then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),


  //   //phone stepmother
  //   [family_stepmother_no_phone.name]: yup.string()
  //     .when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_no_phone.requiredErrorMsg}`).when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "No" && family_stepmother_info === "No",
  //         then: yup.string().when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepmother_phone.name]: yup.string()
  //     .when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_phone.requiredErrorMsg}`).when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //         then: yup.string().when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   //working stepmother
  //   [family_stepmother_working_val.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //     is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //     then: yup.string().required(`${family_stepmother_working_val.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
  //       then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_stepmother_place.name]: yup.string()
  //     .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_place.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //         then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepmother_company.name]: yup.string()
  //     .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_company.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //         then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepmother_financial_income.name]: yup.string()
  //     .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_financial_income.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //         then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),


  //   [family_stepmother_depend.name]: yup.string()
  //     .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //       is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
  //       then: yup.string().required(`${family_stepmother_depend.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //         is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "Si",
  //         then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
  //           is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "No",
  //           then: yup.string()
  //         })
  //       }),
  //     }),

  //   [family_stepmother_noInfo.name]: yup.string().when("family_stepmother_info", {
  //     is: "No",
  //     then: yup.string().required(`${family_stepmother_noInfo.requiredErrorMsg}`).when("family_stepmother_info", {
  //       is: "Si",
  //       then: yup.string()
  //     }),
  //   })

  // }),

  // yup.object().shape({
  //   [family_validate_son.name]: yup.string().required(`${family_validate_son.requiredErrorMsg}`),
  //   son: yup.array({}).of(
  //     yup.object().shape({
  //       //son general
  //       [family_son_life.name]: yup.string().required("Este campo es requerido"),
  //       [family_son_name.name]: yup.string().when("family_son_life", {
  //         is: "Si",
  //         then: yup.string().required(`${family_son_name.requiredErrorMsg}`).when("family_son_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_son_validate_age.name]: yup.string().when("family_son_life", {
  //         is: "Si",
  //         then: yup.string().required(`${family_son_name.requiredErrorMsg}`).when("family_son_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_son_lookafther.name]: yup.string().when(["family_son_validate_age", "family_son_life"], {
  //         is: (family_son_validate_age, family_son_life) => family_son_validate_age === "Si" && family_son_life === "Si",
  //         then: yup.string().required(`${family_son_lookafther.requiredErrorMsg}`).when(["family_son_validate_age", "family_son_life"], {
  //           is: (family_son_validate_age, family_son_life) => family_son_validate_age === "Si" && family_son_life === "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_son_age.name]: yup.string()
  //         .when("family_son_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_son_age.requiredErrorMsg}`).when("family_son_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_son_status.name]: yup.string()
  //         .when("family_son_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_son_status.requiredErrorMsg}`).when("family_son_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_son_phone_val.name]: yup.string().when("family_son_life", {
  //         is: "Si",
  //         then: yup.string().required("Este campo es requerido").when("family_son_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),



  //       //die son
  //       [family_son_time_died.name]: yup.string()
  //         .when("family_son_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_son_time_died.requiredErrorMsg}`).when(["family_son_life"], {
  //             is: (family_son_life) => family_son_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),
  //       [family_son_reason_died.name]: yup.string()
  //         .when("family_son_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_son_reason_died.requiredErrorMsg}`).when(["family_son_life"], {
  //             is: (family_son_life) => family_son_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),


  //       //phone son
  //       [family_son_no_phone.name]: yup.string()
  //         .when(["family_son_phone_val", "family_son_life"], {
  //           is: (family_son_phone_val, family_son_life) => family_son_phone_val === "No" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_no_phone.requiredErrorMsg}`).when(["family_son_phone_val", "family_son_life"], {
  //             is: (family_son_phone_val, family_son_life) => family_son_phone_val === "No" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_son_phone.name]: yup.string()
  //         .when(["family_son_phone_val", "family_son_life"], {
  //           is: (family_son_phone_val, family_son_life) => family_son_phone_val === "Si" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_no_phone.requiredErrorMsg}`).when(["family_son_phone_val", "family_son_life"], {
  //             is: (family_son_phone_val, family_son_life) => family_son_phone_val === "Si" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //       //working son
  //       [family_son_working_val.name]: yup.string().when("family_son_life", {
  //         is: "Si",
  //         then: yup.string().required("El campo es requerido").when("family_son_life", {
  //           is: "No",
  //           then: yup.string()
  //         })
  //       }),

  //       [family_son_place.name]: yup.string()
  //         .when(["family_son_working_val", "family_son_life"], {
  //           is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_place.requiredErrorMsg}`).when(["family_son_working_val", "family_son_life"], {
  //             is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_son_company.name]: yup.string()
  //         .when(["family_son_working_val", "family_son_life"], {
  //           is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_company.requiredErrorMsg}`).when(["family_son_working_val", "family_son_life"], {
  //             is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_son_financial_income.name]: yup.string()
  //         .when(["family_son_working_val", "family_son_life"], {
  //           is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_financial_income.requiredErrorMsg}`).when(["family_son_working_val", "family_son_life"], {
  //             is: (family_son_working_val, family_son_life) => family_son_working_val === "Si" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),


  //       [family_son_depend.name]: yup.string()
  //         .when(["family_son_working_val", "family_son_life"], {
  //           is: (family_son_working_val, family_son_life) => family_son_working_val === "No" && family_son_life === "Si",
  //           then: yup.string().required(`${family_son_depend.requiredErrorMsg}`).when(["family_son_working_val", "family_son_life"], {
  //             is: (family_son_working_val, family_son_life) => family_son_working_val === "No" && family_son_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //     })
  //   ),
  // }),

  // yup.object().shape({
  //   [family_validate_brothers.name]: yup.string().required(`${family_validate_brothers.requiredErrorMsg}`),
  //   brothers: yup.array({}).of(
  //     yup.object().shape({
  //       //brothers general
  //       [family_brothers_life.name]: yup.string().required("Este campo es requerido"),
  //       [family_brothers_name.name]: yup.string().when("family_brothers_life", {
  //         is: "Si",
  //         then: yup.string().required(`${family_brothers_name.requiredErrorMsg}`).when("family_brothers_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_brothers_age.name]: yup.string()
  //         .when("family_brothers_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_brothers_age.requiredErrorMsg}`).when("family_brothers_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_brothers_status.name]: yup.string()
  //         .when("family_brothers_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_brothers_status.requiredErrorMsg}`).when("family_brothers_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_brothers_phone_val.name]: yup.string().when("family_brothers_life", {
  //         is: "Si",
  //         then: yup.string().required("Este campo es requerido").when("family_brothers_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),



  //       //die brothers
  //       [family_brothers_time_died.name]: yup.string()
  //         .when("family_brothers_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_brothers_time_died.requiredErrorMsg}`).when(["family_brothers_life"], {
  //             is: (family_brothers_life) => family_brothers_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),
  //       [family_brothers_reason_died.name]: yup.string()
  //         .when("family_brothers_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_brothers_reason_died.requiredErrorMsg}`).when(["family_brothers_life"], {
  //             is: (family_brothers_life) => family_brothers_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),


  //       //phone brothers
  //       [family_brothers_no_phone.name]: yup.string()
  //         .when(["family_brothers_phone_val", "family_brothers_life"], {
  //           is: (family_brothers_phone_val, family_brothers_life) => family_brothers_phone_val === "No" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_no_phone.requiredErrorMsg}`).when(["family_brothers_phone_val", "family_brothers_life"], {
  //             is: (family_brothers_phone_val, family_brothers_life) => family_brothers_phone_val === "No" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_brothers_phone.name]: yup.string()
  //         .when(["family_brothers_phone_val", "family_brothers_life"], {
  //           is: (family_brothers_phone_val, family_brothers_life) => family_brothers_phone_val === "Si" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_no_phone.requiredErrorMsg}`).when(["family_brothers_phone_val", "family_brothers_life"], {
  //             is: (family_brothers_phone_val, family_brothers_life) => family_brothers_phone_val === "Si" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //       //working brothers
  //       [family_brothers_working_val.name]: yup.string().when("family_brothers_life", {
  //         is: "Si",
  //         then: yup.string().required("El campo es requerido").when("family_brothers_life", {
  //           is: "No",
  //           then: yup.string()
  //         })
  //       }),

  //       [family_brothers_place.name]: yup.string()
  //         .when(["family_brothers_working_val", "family_brothers_life"], {
  //           is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_place.requiredErrorMsg}`).when(["family_brothers_working_val", "family_brothers_life"], {
  //             is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_brothers_company.name]: yup.string()
  //         .when(["family_brothers_working_val", "family_brothers_life"], {
  //           is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_company.requiredErrorMsg}`).when(["family_brothers_working_val", "family_brothers_life"], {
  //             is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_brothers_financial_income.name]: yup.string()
  //         .when(["family_brothers_working_val", "family_brothers_life"], {
  //           is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_financial_income.requiredErrorMsg}`).when(["family_brothers_working_val", "family_brothers_life"], {
  //             is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "Si" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),


  //       [family_brothers_depend.name]: yup.string()
  //         .when(["family_brothers_working_val", "family_brothers_life"], {
  //           is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "No" && family_brothers_life === "Si",
  //           then: yup.string().required(`${family_brothers_depend.requiredErrorMsg}`).when(["family_brothers_working_val", "family_brothers_life"], {
  //             is: (family_brothers_working_val, family_brothers_life) => family_brothers_working_val === "No" && family_brothers_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //     })
  //   ),
  // }),

  // yup.object().shape({
  //   [family_validate_stepbrother.name]: yup.string().required(`${family_validate_stepbrother.requiredErrorMsg}`),
  //   stepbrother: yup.array({}).of(
  //     yup.object().shape({
  //       //stepbrother general
  //       [family_stepbrother_life.name]: yup.string().required("Este campo es requerido"),
  //       [family_stepbrother_name.name]: yup.string().when("family_stepbrother_life", {
  //         is: "Si",
  //         then: yup.string().required(`${family_stepbrother_name.requiredErrorMsg}`).when("family_stepbrother_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_stepbrother_age.name]: yup.string()
  //         .when("family_stepbrother_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_stepbrother_age.requiredErrorMsg}`).when("family_stepbrother_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_stepbrother_status.name]: yup.string()
  //         .when("family_stepbrother_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_stepbrother_status.requiredErrorMsg}`).when("family_stepbrother_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_stepbrother_phone_val.name]: yup.string().when("family_stepbrother_life", {
  //         is: "Si",
  //         then: yup.string().required("Este campo es requerido").when("family_stepbrother_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),



  //       //die stepbrother
  //       [family_stepbrother_time_died.name]: yup.string()
  //         .when("family_stepbrother_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_stepbrother_time_died.requiredErrorMsg}`).when(["family_stepbrother_life"], {
  //             is: (family_stepbrother_life) => family_stepbrother_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),
  //       [family_stepbrother_reason_died.name]: yup.string()
  //         .when("family_stepbrother_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_stepbrother_reason_died.requiredErrorMsg}`).when(["family_stepbrother_life"], {
  //             is: (family_stepbrother_life) => family_stepbrother_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),


  //       //phone stepbrother
  //       [family_stepbrother_no_phone.name]: yup.string()
  //         .when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_phone_val, family_stepbrother_life) => family_stepbrother_phone_val === "No" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_no_phone.requiredErrorMsg}`).when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_phone_val, family_stepbrother_life) => family_stepbrother_phone_val === "No" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_stepbrother_phone.name]: yup.string()
  //         .when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_phone_val, family_stepbrother_life) => family_stepbrother_phone_val === "Si" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_no_phone.requiredErrorMsg}`).when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_phone_val, family_stepbrother_life) => family_stepbrother_phone_val === "Si" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //       //working stepbrother
  //       [family_stepbrother_working_val.name]: yup.string().when("family_stepbrother_life", {
  //         is: "Si",
  //         then: yup.string().required("El campo es requerido").when("family_stepbrother_life", {
  //           is: "No",
  //           then: yup.string()
  //         })
  //       }),

  //       [family_stepbrother_place.name]: yup.string()
  //         .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_place.requiredErrorMsg}`).when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_stepbrother_company.name]: yup.string()
  //         .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_company.requiredErrorMsg}`).when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_stepbrother_financial_income.name]: yup.string()
  //         .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_financial_income.requiredErrorMsg}`).when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "Si" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),


  //       [family_stepbrother_depend.name]: yup.string()
  //         .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //           is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "No" && family_stepbrother_life === "Si",
  //           then: yup.string().required(`${family_stepbrother_depend.requiredErrorMsg}`).when(["family_stepbrother_working_val", "family_stepbrother_life"], {
  //             is: (family_stepbrother_working_val, family_stepbrother_life) => family_stepbrother_working_val === "No" && family_stepbrother_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //     })
  //   ),
  // }),

  // yup.object().shape({
  //   [family_validate_conyugue.name]: yup.string().required(`${family_validate_conyugue.requiredErrorMsg}`),

  //   //conyugue 
  //   [family_conyugue_life.name]: yup.string().when(["family_validate_conyugue"], {
  //     is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //     then: yup.string().required('Este campo es requerido').when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [family_conyugue_name.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_name.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_age.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_age.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   [family_conyugue_status.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_status.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   [family_conyugue_phone_val.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_phone_val.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   //die conyugue
  //   [family_conyugue_time_died.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_time_died.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_reason_died.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_time_died.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   //phone conyugue
  //   [family_conyugue_no_phone.name]: yup.string()
  //     .when(["family_conyugue_phone_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_phone_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_phone_val === "No" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //       then: yup.string().required(`${family_conyugue_no_phone.requiredErrorMsg}`).when(["family_conyugue_phone_val", "family_conyugue_life"], {
  //         is: (family_conyugue_phone_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_phone_val === "No" && family_conyugue_life === "No" && family_validate_conyugue === "Si",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_conyugue_phone.name]: yup.string()
  //     .when(["family_conyugue_phone_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_phone_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_phone_val === "Si" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //       then: yup.string().required(`${family_conyugue_no_phone.requiredErrorMsg}`).when(["family_conyugue_phone_val", "family_conyugue_life"], {
  //         is: (family_conyugue_phone_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_phone_val === "Si" && family_conyugue_life === "No" && family_validate_conyugue === "Si",
  //         then: yup.string()
  //       }),
  //     }),
  //   //working conyugue
  //   [family_conyugue_working_val.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_working_val.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_place.name]: yup.string()
  //     .when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //       then: yup.string().required(`${family_conyugue_place.requiredErrorMsg}`).when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //           is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "No" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_conyugue_company.name]: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_place.requiredErrorMsg}`).when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "No" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_financial_income.name]: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_place.requiredErrorMsg}`).when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "No" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   [family_conyugue_depend.name]: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "No" && family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_place.requiredErrorMsg}`).when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "Si" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_working_val", "family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_working_val, family_conyugue_life, family_validate_conyugue) => family_conyugue_working_val === "No" && family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_married_val.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //     is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "Si",
  //     then: yup.string().required(`${family_conyugue_name.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue) => family_conyugue_life === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_married.name]: yup.string().when(["family_conyugue_life", "family_validate_conyugue", "family_conyugue_married_val"], {
  //     is: (family_conyugue_life, family_validate_conyugue, family_conyugue_married_val) => family_conyugue_life === "Si" && family_validate_conyugue === "Si" && family_conyugue_married_val === "Si",
  //     then: yup.string().required(`${family_conyugue_name.requiredErrorMsg}`).when(["family_conyugue_life", "family_validate_conyugue"], {
  //       is: (family_conyugue_life, family_validate_conyugue, family_conyugue_married_val) => family_conyugue_life === "Si" && family_validate_conyugue === "No" && family_conyugue_married_val === "Si",
  //       then: yup.string().when(["family_conyugue_life", "family_validate_conyugue"], {
  //         is: (family_conyugue_life, family_validate_conyugue, family_conyugue_married_val) => family_conyugue_life === "No" && family_validate_conyugue === "No" && family_conyugue_married_val === "Si",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyugue_partner_val.name]: yup.string().when(["family_validate_conyugue"], {
  //     is: (family_validate_conyugue) => family_validate_conyugue === "No",
  //     then: yup.string().required(`${family_conyugue_name.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string()
  //     }),
  //   }),


  //   //conyuguepat 

  //   [family_conyuguepat_name.name]: yup.string().when(["family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_validate_conyugue, family_conyugue_partner_val) => family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_name.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string().when(["family_validate_conyugue"], {
  //         is: (family_validate_conyugue, family_conyugue_partner_val) => family_conyugue_partner_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyuguepat_age.name]: yup.string().when(["family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_validate_conyugue, family_conyugue_partner_val) => family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_age.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string().when(["family_validate_conyugue"], {
  //         is: (family_validate_conyugue, family_conyugue_partner_val) => family_conyugue_partner_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   [family_conyuguepat_status.name]: yup.string().when(["family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_validate_conyugue, family_conyugue_partner_val) => family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_status.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string().when(["family_validate_conyugue"], {
  //         is: (family_validate_conyugue, family_conyugue_partner_val) => family_conyugue_partner_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),


  //   [family_conyuguepat_phone_val.name]: yup.string().when(["family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_validate_conyugue, family_conyugue_partner_val) => family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_status.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string().when(["family_validate_conyugue"], {
  //         is: (family_validate_conyugue, family_conyugue_partner_val) => family_conyugue_partner_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   //phone conyuguepat
  //   [family_conyuguepat_no_phone.name]: yup.string()
  //     .when(["family_conyuguepat_phone_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //       is: (family_conyuguepat_phone_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_phone_val === "No" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //       then: yup.string().required(`${family_conyuguepat_no_phone.requiredErrorMsg}`).when(["family_conyuguepat_phone_val", "family_conyuguepat_life"], {
  //         is: (family_conyuguepat_phone_val, family_validate_conyugue) => family_conyuguepat_phone_val === "Si" && family_conyuguepat_life === "No" && family_validate_conyugue === "Si",
  //         then: yup.string()
  //       }),
  //     }),

  //   [family_conyuguepat_phone.name]: yup.string()
  //     .when(["family_conyuguepat_phone_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //       is: (family_conyuguepat_phone_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_phone_val === "Si" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //       then: yup.string().required(`${family_conyuguepat_no_phone.requiredErrorMsg}`).when(["family_conyuguepat_phone_val", "family_conyuguepat_life"], {
  //         is: (family_conyuguepat_phone_val, family_validate_conyugue) => family_conyuguepat_phone_val === "Si" && family_conyuguepat_life === "No" && family_validate_conyugue === "Si",
  //         then: yup.string()
  //       }),
  //     }),

  //   //working conyuguepat
  //   [family_conyuguepat_working_val.name]: yup.string().when(["family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_validate_conyugue, family_conyugue_partner_val) => family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_age.requiredErrorMsg}`).when(["family_validate_conyugue"], {
  //       is: (family_validate_conyugue) => family_validate_conyugue === "Si",
  //       then: yup.string().when(["family_validate_conyugue"], {
  //         is: (family_validate_conyugue, family_conyugue_partner_val) => family_conyugue_partner_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyuguepat_place.name]: yup.string()
  //     .when(["family_conyuguepat_working_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //       is: (family_conyuguepat_working_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //       then: yup.string().required(`${family_conyuguepat_place.requiredErrorMsg}`).when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //         is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No",
  //         then: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //           is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "No" && family_validate_conyugue === "No",
  //           then: yup.string()
  //         }),
  //       }),
  //     }),

  //   [family_conyuguepat_company.name]: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_conyuguepat_working_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_place.requiredErrorMsg}`).when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //       is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //         is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyuguepat_financial_income.name]: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_conyuguepat_working_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_place.requiredErrorMsg}`).when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //       is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //         is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  //   [family_conyuguepat_depend.name]: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue", "family_conyugue_partner_val"], {
  //     is: (family_conyuguepat_working_val, family_validate_conyugue, family_conyugue_partner_val) => family_conyuguepat_working_val === "No" && family_validate_conyugue === "No" && family_conyugue_partner_val === "Si",
  //     then: yup.string().required(`${family_conyuguepat_place.requiredErrorMsg}`).when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //       is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "Si" && family_validate_conyugue === "No",
  //       then: yup.string().when(["family_conyuguepat_working_val", "family_validate_conyugue"], {
  //         is: (family_conyuguepat_working_val, family_validate_conyugue) => family_conyuguepat_working_val === "No" && family_validate_conyugue === "No",
  //         then: yup.string()
  //       }),
  //     }),
  //   }),

  // }),

  // yup.object().shape({
  //   grandfather: yup.array({}).of(
  //     yup.object().shape({
  //       //grandfather general
  //       [family_grandfather_life.name]: yup.string().required("Este campo es requerido"),
  //       [family_grandfather_name.name]: yup.string().when("family_grandfather_life", {
  //         is: "Si",
  //         then: yup.string().required(`${family_grandfather_name.requiredErrorMsg}`).when("family_grandfather_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),

  //       [family_grandfather_age.name]: yup.string()
  //         .when("family_grandfather_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_grandfather_age.requiredErrorMsg}`).when("family_grandfather_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_grandfather_status.name]: yup.string()
  //         .when("family_grandfather_life", {
  //           is: "Si",
  //           then: yup.string().required(`${family_grandfather_status.requiredErrorMsg}`).when("family_grandfather_life", {
  //             is: "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_grandfather_phone_val.name]: yup.string().when("family_grandfather_life", {
  //         is: "Si",
  //         then: yup.string().required("Este campo es requerido").when("family_grandfather_life", {
  //           is: "No",
  //           then: yup.string()
  //         }),
  //       }),



  //       //die grandfather
  //       [family_grandfather_time_died.name]: yup.string()
  //         .when("family_grandfather_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_grandfather_time_died.requiredErrorMsg}`).when(["family_grandfather_life"], {
  //             is: (family_grandfather_life) => family_grandfather_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),
  //       [family_grandfather_reason_died.name]: yup.string()
  //         .when("family_grandfather_life", {
  //           is: "No",
  //           then: yup.string().required(`${family_grandfather_reason_died.requiredErrorMsg}`).when(["family_grandfather_life"], {
  //             is: (family_grandfather_life) => family_grandfather_life === "Si",
  //             then: yup.string()
  //           }),
  //         }),


  //       //phone grandfather
  //       [family_grandfather_no_phone.name]: yup.string()
  //         .when(["family_grandfather_phone_val", "family_grandfather_life"], {
  //           is: (family_grandfather_phone_val, family_grandfather_life) => family_grandfather_phone_val === "No" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_no_phone.requiredErrorMsg}`).when(["family_grandfather_phone_val", "family_grandfather_life"], {
  //             is: (family_grandfather_phone_val, family_grandfather_life) => family_grandfather_phone_val === "No" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_grandfather_phone.name]: yup.string()
  //         .when(["family_grandfather_phone_val", "family_grandfather_life"], {
  //           is: (family_grandfather_phone_val, family_grandfather_life) => family_grandfather_phone_val === "Si" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_no_phone.requiredErrorMsg}`).when(["family_grandfather_phone_val", "family_grandfather_life"], {
  //             is: (family_grandfather_phone_val, family_grandfather_life) => family_grandfather_phone_val === "Si" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //       //working grandfather
  //       [family_grandfather_working_val.name]: yup.string().when("family_grandfather_life", {
  //         is: "Si",
  //         then: yup.string().required("El campo es requerido").when("family_grandfather_life", {
  //           is: "No",
  //           then: yup.string()
  //         })
  //       }),

  //       [family_grandfather_place.name]: yup.string()
  //         .when(["family_grandfather_working_val", "family_grandfather_life"], {
  //           is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_place.requiredErrorMsg}`).when(["family_grandfather_working_val", "family_grandfather_life"], {
  //             is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_grandfather_company.name]: yup.string()
  //         .when(["family_grandfather_working_val", "family_grandfather_life"], {
  //           is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_company.requiredErrorMsg}`).when(["family_grandfather_working_val", "family_grandfather_life"], {
  //             is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),

  //       [family_grandfather_financial_income.name]: yup.string()
  //         .when(["family_grandfather_working_val", "family_grandfather_life"], {
  //           is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_financial_income.requiredErrorMsg}`).when(["family_grandfather_working_val", "family_grandfather_life"], {
  //             is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "Si" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),


  //       [family_grandfather_depend.name]: yup.string()
  //         .when(["family_grandfather_working_val", "family_grandfather_life"], {
  //           is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "No" && family_grandfather_life === "Si",
  //           then: yup.string().required(`${family_grandfather_depend.requiredErrorMsg}`).when(["family_grandfather_working_val", "family_grandfather_life"], {
  //             is: (family_grandfather_working_val, family_grandfather_life) => family_grandfather_working_val === "No" && family_grandfather_life === "No",
  //             then: yup.string()
  //           }),
  //         }),
  //     })
  //   ),
  // }),

  // yup.object().shape({
  //   [estudie_university_sval.name]: yup.string().required(`${estudie_university_sval.requiredErrorMsg}`),
  //   [estudie_university_name.name]: yup.string().when(["estudie_university_sval"], {
  //     is: (estudie_university_sval) => estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_sval.requiredErrorMsg}`).when(["estudie_university_sval"], {
  //       is: (estudie_university_sval) => estudie_university_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_uniname.name]: yup.string().when(["estudie_university_sval"], {
  //     is: (estudie_university_sval) => estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_sval.requiredErrorMsg}`).when(["estudie_university_sval"], {
  //       is: (estudie_university_sval) => estudie_university_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_semester.name]: yup.string().when(["estudie_university_sval"], {
  //     is: (estudie_university_sval) => estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_sval.requiredErrorMsg}`).when(["estudie_university_sval"], {
  //       is: (estudie_university_sval) => estudie_university_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_val.name]: yup.string().when(["estudie_university_sval"], {
  //     is: (estudie_university_sval) => estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_sval.requiredErrorMsg}`).when(["estudie_university_sval"], {
  //       is: (estudie_university_sval) => estudie_university_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_title.name]: yup.string().when(["estudie_university_val", "estudie_university_sval"], {
  //     is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "Si" && estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_title.requiredErrorMsg}`).when(["estudie_university_val"], {
  //       is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "No" && estudie_university_sval === "Si",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_sede.name]: yup.string().when(["estudie_university_val", "estudie_university_sval"], {
  //     is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "Si" && estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_title.requiredErrorMsg}`).when(["estudie_university_val"], {
  //       is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "No" && estudie_university_sval === "Si",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_year_graduation.name]: yup.string().when(["estudie_university_val", "estudie_university_sval"], {
  //     is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "Si" && estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_title.requiredErrorMsg}`).when(["estudie_university_val"], {
  //       is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "No" && estudie_university_sval === "Si",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_no_sede.name]: yup.string().when(["estudie_university_val", "estudie_university_sval"], {
  //     is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "No" && estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_title.requiredErrorMsg}`).when(["estudie_university_val"], {
  //       is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "Si" && estudie_university_sval === "Si",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_university_hour.name]: yup.string().when(["estudie_university_val", "estudie_university_sval"], {
  //     is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "No" && estudie_university_sval === "Si",
  //     then: yup.string().required(`${estudie_university_title.requiredErrorMsg}`).when(["estudie_university_val"], {
  //       is: (estudie_university_val, estudie_university_sval) => estudie_university_val === "Si" && estudie_university_sval === "Si",
  //       then: yup.string()
  //     }),
  //   }),

  //   //diversificado
  //   [estudie_diversificado_sval.name]: yup.string().required(`${estudie_diversificado_sval.requiredErrorMsg}`),

  //   [estudie_diversificado_name.name]: yup.string().when(["estudie_diversificado_sval"], {
  //     is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
  //     then: yup.string().required(`${estudie_diversificado_name.requiredErrorMsg}`).when(["estudie_diversificado_sval"], {
  //       is: (estudie_diversificado_sval) => estudie_diversificado_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_diversificado_uniname.name]: yup.string().when(["estudie_diversificado_sval"], {
  //     is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
  //     then: yup.string().required(`${estudie_diversificado_uniname.requiredErrorMsg}`).when(["estudie_diversificado_sval"], {
  //       is: (estudie_diversificado_sval) => estudie_diversificado_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_diversificado_desde.name]: yup.string().when(["estudie_diversificado_sval"], {
  //     is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
  //     then: yup.string().required(`${estudie_diversificado_desde.requiredErrorMsg}`).when(["estudie_diversificado_sval"], {
  //       is: (estudie_diversificado_sval) => estudie_diversificado_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_diversificado_hasta.name]: yup.string().when(["estudie_diversificado_sval"], {
  //     is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
  //     then: yup.string().required(`${estudie_diversificado_hasta.requiredErrorMsg}`).when(["estudie_diversificado_sval"], {
  //       is: (estudie_diversificado_sval) => estudie_diversificado_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   //Basico
  //   [estudie_basic_sval.name]: yup.string().required(`${estudie_basic_sval.requiredErrorMsg}`),

  //   [estudie_basic_uniname.name]: yup.string().when(["estudie_basic_sval"], {
  //     is: (estudie_basic_sval) => estudie_basic_sval === "Si",
  //     then: yup.string().required(`${estudie_basic_uniname.requiredErrorMsg}`).when(["estudie_basic_sval"], {
  //       is: (estudie_basic_sval) => estudie_basic_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_basic_desde.name]: yup.string().when(["estudie_basic_sval"], {
  //     is: (estudie_basic_sval) => estudie_basic_sval === "Si",
  //     then: yup.string().required(`${estudie_basic_desde.requiredErrorMsg}`).when(["estudie_basic_sval"], {
  //       is: (estudie_basic_sval) => estudie_basic_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_basic_hasta.name]: yup.string().when(["estudie_basic_sval"], {
  //     is: (estudie_basic_sval) => estudie_basic_sval === "Si",
  //     then: yup.string().required(`${estudie_basic_hasta.requiredErrorMsg}`).when(["estudie_basic_sval"], {
  //       is: (estudie_basic_sval) => estudie_basic_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   //Primario
  //   [estudie_primary_sval.name]: yup.string().required(`${estudie_primary_sval.requiredErrorMsg}`),

  //   [estudie_primary_uniname.name]: yup.string().when(["estudie_primary_sval"], {
  //     is: (estudie_primary_sval) => estudie_primary_sval === "Si",
  //     then: yup.string().required(`${estudie_primary_uniname.requiredErrorMsg}`).when(["estudie_primary_sval"], {
  //       is: (estudie_primary_sval) => estudie_primary_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_primary_desde.name]: yup.string().when(["estudie_primary_sval"], {
  //     is: (estudie_primary_sval) => estudie_primary_sval === "Si",
  //     then: yup.string().required(`${estudie_primary_desde.requiredErrorMsg}`).when(["estudie_primary_sval"], {
  //       is: (estudie_primary_sval) => estudie_primary_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  //   [estudie_primary_hasta.name]: yup.string().when(["estudie_primary_sval"], {
  //     is: (estudie_primary_sval) => estudie_primary_sval === "Si",
  //     then: yup.string().required(`${estudie_primary_hasta.requiredErrorMsg}`).when(["estudie_primary_sval"], {
  //       is: (estudie_primary_sval) => estudie_primary_sval === "No",
  //       then: yup.string()
  //     }),
  //   }),

  // }),

  // yup.object().shape({
  //   [work_banrural.name] : yup.string().required(`${work_banrural.requiredErrorMsg}`), 
  //   [work_valNe.name]: yup.string().required(`${work_valNe.requiredErrorMsg}`),
  //   [work_ne_name.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_name.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_web.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_web.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_dateInit.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_dateInit.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_salaryPersonal.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_salaryPersonal.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_detail.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_detail.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_detailIncome.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_detailIncome.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),

  //   [work_ne_whatwill.name]: yup.string().when(["work_valNe"], {
  //     is: (work_valNe) => work_valNe === "Si", 
  //     then: yup.string().required(`${work_ne_whatwill.requiredErrorMsg}`).when(["work_valNe"], {
  //       is: (work_valNe) => work_valNe === "No", 
  //       then: yup.string(), 
  //     }),
  //   }),


  //   work: yup.array({}).of(
  //     yup.object().shape({
  //       [work_name.name]: yup.string().required(`${work_name.requiredErrorMsg}`),
  //       [work_position.name]: yup.string().required(`${work_position.requiredErrorMsg}`),
  //       [work_entry.name]: yup.string().required(`${work_entry.requiredErrorMsg}`),
  //       [work_withdrawal.name]: yup.string(),
  //       [work_salary.name]: yup.string().required(`${work_salary.requiredErrorMsg}`),
  //       [work_boss.name]: yup.string().required(`${work_boss.requiredErrorMsg}`),
  //       [work_chiefposition.name]: yup.string().required(`${work_chiefposition.requiredErrorMsg}`),
  //       [work_phone_boss.name]: yup.string().required(`${work_phone_boss.requiredErrorMsg}`),
  //       [work_withdrawalreason.name]: yup.string(),
  //       [work_phone_val.name]: yup.string().required(`${work_phone_val.requiredErrorMsg}`),
  //       [work_phone_reason.name]: yup.string().when(["work_phone_val"] , {
  //         is: (work_phone_val) => work_phone_val === "No", 
  //         then: yup.string().required(`${work_phone_reason.requiredErrorMsg}`).when(["work_phone_val"] , {
  //           is: (work_phone_val) => work_phone_val === "Si", 
  //           then: yup.string()
  //         }), 
  //       }),

  //       [work_phone.name]: yup.string().when(["work_phone_val"] , {
  //         is: (work_phone_val) => work_phone_val === "Si", 
  //         then: yup.string().required(`${work_phone.requiredErrorMsg}`).when(["work_phone_val"] , {
  //           is: (work_phone_val) => work_phone_val === "No", 
  //           then: yup.string()
  //         }), 
  //       }),



  //       [work_reference.name]: yup.string().required(`${work_reference.requiredErrorMsg}`),

  //       [work_reference_reason.name]: yup.string().when(["work_reference"], {
  //         is: (work_reference) => work_reference === "No", 
  //         then: yup.string() .required(`${work_reference_reason.requiredErrorMsg}`).when(["work_reference"], {
  //           is: (work_reference) => work_reference === "Si", 
  //           then: yup.string(),
  //         }),
  //       }),
       
  //     }), 
  //   ),
  // }),

];


