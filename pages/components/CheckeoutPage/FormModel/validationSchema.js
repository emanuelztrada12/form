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
  },
} = generalFormModel;

const buildRequiredForDiffAddress = requiredText => ({
  is: false,
  then: yup.string().required(requiredText)
});

export default [
  yup.object().shape({
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
  }),

  yup.object().shape({
    //dad information general
    [family_dad_life.name]: yup.string().required("Este campo es requerido"),
    [family_dad_name.name]: yup.string().when("family_dad_life", {
      is: "Si",
      then: yup.string().required(`${family_dad_name.requiredErrorMsg}`).when("family_dad_life", {
        is: "No",
        then: yup.string()
      }),
    }),
    [family_dad_age.name]: yup.string()
      .when("family_dad_life", {
        is: "Si",
        then: yup.string().required(`${family_dad_age.requiredErrorMsg}`).when("family_dad_life", {
          is: "No",
          then: yup.string()
        }),
      }),

    [family_dad_status.name]: yup.string()
      .when("family_dad_life", {
        is: "Si",
        then: yup.string().required(`${family_dad_status.requiredErrorMsg}`).when("family_dad_life", {
          is: "No",
          then: yup.string()
        }),
      }),

    [family_dad_phone_val.name]: yup.string().when("family_dad_life", {
      is: "Si",
      then: yup.string().required("Este campo es requerido").when("family_dad_life", {
        is: "No",
        then: yup.string()
      }),
    }),

    [family_dad_no_phone.name]: yup.string()
      .when(["family_dad_phone_val", "family_dad_life"], {
        is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "No" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_no_phone.requiredErrorMsg}`).when(["family_dad_phone_val", "family_dad_life"], {
          is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "No" && family_dad_life === "No",
          then: yup.string()
        }),
      }),

    [family_dad_phone.name]: yup.string()
      .when(["family_dad_phone_val", "family_dad_life"], {
        is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "Si" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_no_phone.requiredErrorMsg}`).when(["family_dad_phone_val", "family_dad_life"], {
          is: (family_dad_phone_val, family_dad_life) => family_dad_phone_val === "Si" && family_dad_life === "No",
          then: yup.string()
        }),
      }),

    //dad die
    [family_dad_time_died.name]: yup.string()
      .when("family_dad_life", {
        is: "No",
        then: yup.string().required(`${family_dad_time_died.requiredErrorMsg}`),
      }),
    [family_dad_reason_died.name]: yup.string()
      .when("family_dad_life", {
        is: "No",
        then: yup.string().required(`${family_dad_reason_died.requiredErrorMsg}`),
      }),

    //dad working
    [family_dad_working_val.name]: yup.string().when("family_dad_life", {
      is: "Si",
      then: yup.string().required("El campo es requerido").when("family_dad_life", {
        is: "No",
        then: yup.string()
      })
    }),

    [family_dad_place.name]: yup.string()
      .when(["family_dad_working_val", "family_dad_life"], {
        is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_place.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
          is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
          then: yup.string()
        }),
      }),

    [family_dad_company.name]: yup.string()
      .when(["family_dad_working_val", "family_dad_life"], {
        is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_company.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
          is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
          then: yup.string()
        }),
      }),

    [family_dad_financial_income.name]: yup.string()
      .when(["family_dad_working_val", "family_dad_life"], {
        is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_financial_income.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
          is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "Si" && family_dad_life === "No",
          then: yup.string()
        }),
      }),


    [family_dad_depend.name]: yup.string()
      .when(["family_dad_working_val", "family_dad_life"], {
        is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "No" && family_dad_life === "Si",
        then: yup.string().required(`${family_dad_depend.requiredErrorMsg}`).when(["family_dad_working_val", "family_dad_life"], {
          is: (family_dad_working_val, family_dad_life) => family_dad_working_val === "No" && family_dad_life === "No",
          then: yup.string()
        }),
      }),

    //mom general
    [family_mom_life.name]: yup.string().required("Este campo es requerido"),
    [family_mom_name.name]: yup.string().when("family_mom_life", {
      is: "Si",
      then: yup.string().required(`${family_mom_name.requiredErrorMsg}`).when("family_mom_life", {
        is: "No",
        then: yup.string()
      }),
    }),
    [family_mom_age.name]: yup.string()
      .when("family_mom_life", {
        is: "Si",
        then: yup.string().required(`${family_mom_age.requiredErrorMsg}`).when("family_mom_life", {
          is: "No",
          then: yup.string()
        }),
      }),

    [family_mom_status.name]: yup.string()
      .when("family_mom_life", {
        is: "Si",
        then: yup.string().required(`${family_mom_status.requiredErrorMsg}`).when("family_mom_life", {
          is: "No",
          then: yup.string()
        }),
      }),

    [family_mom_phone_val.name]: yup.string().when("family_mom_life", {
      is: "Si",
      then: yup.string().required("Este campo es requerido").when("family_mom_life", {
        is: "No",
        then: yup.string()
      }),
    }),



    //die mom
    [family_mom_time_died.name]: yup.string()
      .when("family_mom_life", {
        is: "No",
        then: yup.string().required(`${family_mom_time_died.requiredErrorMsg}`),
      }),
    [family_mom_reason_died.name]: yup.string()
      .when("family_mom_life", {
        is: "No",
        then: yup.string().required(`${family_mom_reason_died.requiredErrorMsg}`),
      }),


    //phone mom
    [family_mom_no_phone.name]: yup.string()
      .when(["family_mom_phone_val", "family_mom_life"], {
        is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "No" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_no_phone.requiredErrorMsg}`).when(["family_mom_phone_val", "family_mom_life"], {
          is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "No" && family_mom_life === "No",
          then: yup.string()
        }),
      }),

    [family_mom_phone.name]: yup.string()
      .when(["family_mom_phone_val", "family_mom_life"], {
        is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "Si" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_no_phone.requiredErrorMsg}`).when(["family_mom_phone_val", "family_mom_life"], {
          is: (family_mom_phone_val, family_mom_life) => family_mom_phone_val === "Si" && family_mom_life === "No",
          then: yup.string()
        }),
      }),
    //working mom
    [family_mom_working_val.name]: yup.string().when("family_mom_life", {
      is: "Si",
      then: yup.string().required("El campo es requerido").when("family_mom_life", {
        is: "No",
        then: yup.string()
      })
    }),

    [family_mom_place.name]: yup.string()
      .when(["family_mom_working_val", "family_mom_life"], {
        is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_place.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
          is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
          then: yup.string()
        }),
      }),

    [family_mom_company.name]: yup.string()
      .when(["family_mom_working_val", "family_mom_life"], {
        is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_company.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
          is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
          then: yup.string()
        }),
      }),

    [family_mom_financial_income.name]: yup.string()
      .when(["family_mom_working_val", "family_mom_life"], {
        is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_financial_income.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
          is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "Si" && family_mom_life === "No",
          then: yup.string()
        }),
      }),


    [family_mom_depend.name]: yup.string()
      .when(["family_mom_working_val", "family_mom_life"], {
        is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "No" && family_mom_life === "Si",
        then: yup.string().required(`${family_mom_depend.requiredErrorMsg}`).when(["family_mom_working_val", "family_mom_life"], {
          is: (family_mom_working_val, family_mom_life) => family_mom_working_val === "No" && family_mom_life === "No",
          then: yup.string()
        }),
      }),

    //stepfather general
    [family_stepfather_info.name]: yup.string().required("Este campo es requerido"),
    [family_stepfather_life.name]: yup.string().when("family_stepfather_info", {
      is: "Si",
      then: yup.string().required("Este campo es requerido").when("family_stepfather_info", {
        is: "No",
        then: yup.string()
      })
    }),

    [family_stepfather_name.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
      is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
      then: yup.string().required(`${family_stepfather_name.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
        then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
          then: yup.string()
        }),
      }),
    }),

    [family_stepfather_age.name]: yup.string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_age.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
          then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepfather_status.name]: yup.string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_status.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
          then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepfather_phone_val.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
      is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
      then: yup.string().required(`${family_stepfather_phone_val.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
        then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
          then: yup.string()
        }),
      }),
    }),



    //die stepfather
    [family_stepfather_time_died.name]: yup.string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_time_died.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
          then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepfather_reason_died.name]: yup.string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_reason_died.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
          then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          }),
        }),
      }),


    //phone stepfather
    [family_stepfather_no_phone.name]: yup.string()
      .when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_no_phone.requiredErrorMsg}`).when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "No" && family_stepfather_info === "No",
          then: yup.string().when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
            then: yup.string()
          })
        }),
      }),

    [family_stepfather_phone.name]: yup.string()
      .when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_phone.requiredErrorMsg}`).when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
          then: yup.string().when(["family_stepfather_phone_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_phone_val, family_stepfather_life, family_stepfather_info) => family_stepfather_phone_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          })
        }),
      }),

    //working stepfather
    [family_stepfather_working_val.name]: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
      is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "Si",
      then: yup.string().required(`${family_stepfather_working_val.requiredErrorMsg}`).when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "Si" && family_stepfather_info === "No",
        then: yup.string().when(["family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_life, family_stepfather_info) => family_stepfather_life === "No" && family_stepfather_info === "No",
          then: yup.string()
        }),
      }),
    }),

    [family_stepfather_place.name]: yup.string()
      .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_place.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
          then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepfather_company.name]: yup.string()
      .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_company.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
          then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepfather_financial_income.name]: yup.string()
      .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_financial_income.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
          then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "No",
            then: yup.string()
          })
        }),
      }),


    [family_stepfather_depend.name]: yup.string()
      .when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup.string().required(`${family_stepfather_depend.requiredErrorMsg}`).when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
          is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "Si" && family_stepfather_life === "No" && family_stepfather_info === "Si",
          then: yup.string().when(["family_stepfather_working_val", "family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_working_val, family_stepfather_life, family_stepfather_info) => family_stepfather_working_val === "No" && family_stepfather_life === "Si" && family_stepfather_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepfather_noInfo.name]: yup.string().when("family_stepfather_info", {
      is: "No",
      then: yup.string().required(`${family_stepfather_noInfo.requiredErrorMsg}`).when("family_stepfather_info", {
        is: "Si",
        then: yup.string()
      }),
    }),


    //stepmother general
    [family_stepmother_info.name]: yup.string().required("Este campo es requerido"),
    [family_stepmother_life.name]: yup.string().when("family_stepmother_info", {
      is: "Si",
      then: yup.string().required("Este campo es requerido").when("family_stepmother_info", {
        is: "No",
        then: yup.string()
      })
    }),

    [family_stepmother_name.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
      is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
      then: yup.string().required(`${family_stepmother_name.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
        then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
          then: yup.string()
        }),
      }),
    }),

    [family_stepmother_age.name]: yup.string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_age.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
          then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepmother_status.name]: yup.string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_status.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
          then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepmother_phone_val.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
      is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
      then: yup.string().required(`${family_stepmother_phone_val.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
        then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
          then: yup.string()
        }),
      }),
    }),



    //die stepmother
    [family_stepmother_time_died.name]: yup.string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_time_died.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
          then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          }),
        }),
      }),

    [family_stepmother_reason_died.name]: yup.string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_reason_died.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
          then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          }),
        }),
      }),


    //phone stepmother
    [family_stepmother_no_phone.name]: yup.string()
      .when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_no_phone.requiredErrorMsg}`).when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "No" && family_stepmother_info === "No",
          then: yup.string().when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
            then: yup.string()
          })
        }),
      }),

    [family_stepmother_phone.name]: yup.string()
      .when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_phone.requiredErrorMsg}`).when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
          then: yup.string().when(["family_stepmother_phone_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_phone_val, family_stepmother_life, family_stepmother_info) => family_stepmother_phone_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          })
        }),
      }),

    //working stepmother
    [family_stepmother_working_val.name]: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
      is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "Si",
      then: yup.string().required(`${family_stepmother_working_val.requiredErrorMsg}`).when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "Si" && family_stepmother_info === "No",
        then: yup.string().when(["family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_life, family_stepmother_info) => family_stepmother_life === "No" && family_stepmother_info === "No",
          then: yup.string()
        }),
      }),
    }),

    [family_stepmother_place.name]: yup.string()
      .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_place.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
          then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepmother_company.name]: yup.string()
      .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_company.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
          then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepmother_financial_income.name]: yup.string()
      .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_financial_income.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
          then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "No",
            then: yup.string()
          })
        }),
      }),


    [family_stepmother_depend.name]: yup.string()
      .when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup.string().required(`${family_stepmother_depend.requiredErrorMsg}`).when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
          is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "Si" && family_stepmother_life === "No" && family_stepmother_info === "Si",
          then: yup.string().when(["family_stepmother_working_val", "family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_working_val, family_stepmother_life, family_stepmother_info) => family_stepmother_working_val === "No" && family_stepmother_life === "Si" && family_stepmother_info === "No",
            then: yup.string()
          })
        }),
      }),

    [family_stepmother_noInfo.name]: yup.string().when("family_stepmother_info", {
      is: "No",
      then: yup.string().required(`${family_stepmother_noInfo.requiredErrorMsg}`).when("family_stepmother_info", {
        is: "Si",
        then: yup.string()
      }),
    })


  }),

  yup.object().shape({
    son: yup.array({}).of(
      yup.object().shape({
        // [family_son_name.name]: yup.string().required(`${family_son_name.requiredErrorMsg}`),
        // [family_son_age.name]: yup.string().required(`${family_son_age.requiredErrorMsg}`),
        // [family_son_status.name]: yup.string().required(`${family_son_status.requiredErrorMsg}`),
        // [family_son_place.name]: yup.string().required(`${family_son_place.requiredErrorMsg}`),
        // [family_son_company.name]: yup.string().required(`${family_son_company.requiredErrorMsg}`),
        // [family_son_financial_income.name]: yup.string().required(`${family_son_financial_income.requiredErrorMsg}`),
        // [family_son_phone.name]: yup.string().required(`${family_son_phone.requiredErrorMsg}`),
        // [family_son_depend.name]: yup.string().required(`${family_son_depend.requiredErrorMsg}`),
        // [family_son_no_phone.name]: yup.string().required(`${family_son_no_phone.requiredErrorMsg}`),
        // [family_son_time_died.name]: yup.string().required(`${family_son_time_died.requiredErrorMsg}`),
        // [family_son_reason_died.name]: yup.string().required(`${family_son_reason_died.requiredErrorMsg}`),
        // [family_son_life.name]: yup.string().required('El campo es requerido'),
        // [family_son_phone_val.name]: yup.string().required('El campo es requerido'),
        // [family_son_working_val.name]: yup.string().required('El campo es requerido'),
      })
    ),
  })
];
