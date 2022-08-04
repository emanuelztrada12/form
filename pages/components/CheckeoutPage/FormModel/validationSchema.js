import * as yup from "yup";
import generalFormModel from "./generalFormModel";

const {
  formField: {
    //validation
    validation_form,

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
    family_dad_depend,
    family_dad_phone,
    family_dad_no_phone,
    family_dad_time_died,
    family_dad_reason_died,
    family_dad_life,
    family_dad_phone_val,
    family_dad_working_val,
    // add changes 2.0
    family_dad_relation,
    family_dad_information,
    family_dad_reason,
    family_dad_why_negative,
    family_dad_information_negative,
    // add name died
    family_dad_died_first_name,
    family_dad_died_last_name,
    vive_family,

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
    /* add name and lastname */
    family_son_died_name,
    family_son_died_lastname,

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
    /** add name and lastname */
    family_brothers_died_name,
    family_brothers_died_lastname,

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
    /* add name and lastname */
    family_stepbrother_died_name,
    family_stepbrother_died_lastname,

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
    /* add name and lastname */
    family_conyugue_died_name,
    family_conyugue_died_lastname,

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

    //abuelos por parte del papa
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
    family_grandfather_lifeno_name,
    family_grandfather_lifeno_firstname,
    family_grandmother_name,
    family_grandmother_age,
    family_grandmother_status,
    family_grandmother_place,
    family_grandmother_company,
    family_grandmother_financial_income,
    family_grandmother_phone,
    family_grandmother_depend,
    family_grandmother_no_phone,
    family_grandmother_time_died,
    family_grandmother_reason_died,
    family_grandmother_life,
    family_grandmother_phone_val,
    family_grandmother_working_val,
    family_grandmother_lifeno_name,
    family_grandmother_lifeno_firstname,

    //abuelos por parte de la mama
    family_grandfather_nametwo,
    family_grandfather_agetwo,
    family_grandfather_statustwo,
    family_grandfather_placetwo,
    family_grandfather_companytwo,
    family_grandfather_financial_incometwo,
    family_grandfather_phonetwo,
    family_grandfather_dependtwo,
    family_grandfather_no_phonetwo,
    family_grandfather_time_diedtwo,
    family_grandfather_reason_diedtwo,
    family_grandfather_lifetwo,
    family_grandfather_phone_valtwo,
    family_grandfather_working_valtwo,
    family_grandfather_lifeno_nametwo,
    family_grandfather_lifeno_firstnametwo,
    family_grandmother_nametwo,
    family_grandmother_agetwo,
    family_grandmother_statustwo,
    family_grandmother_placetwo,
    family_grandmother_companytwo,
    family_grandmother_financial_incometwo,
    family_grandmother_phonetwo,
    family_grandmother_dependtwo,
    family_grandmother_no_phonetwo,
    family_grandmother_time_diedtwo,
    family_grandmother_reason_diedtwo,
    family_grandmother_lifetwo,
    family_grandmother_phone_valtwo,
    family_grandmother_working_valtwo,
    family_grandmother_lifeno_nametwo,
    family_grandmother_lifeno_firstnametwo,

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

    //economia
    economic_date,
    economic_use,
    economic_plan,
    economic_bill,
    amount,
    economic_balance,
    economic_monthly_payment,
    economic_delinquent_payment,

    economic_vivienda,
    economic_food,
    economic_aporte,
    economic_water,
    economic_phone,
    economic_recreation,
    economic_vestuario,
    economic_gastos,
    economic_trans,
    economic_medic,
    economic_estudy,
    economic_ahorro,
    economic_payment_deuda,
    economic_other,
    economic_total,

    //economic
    social_group,
    social_gtime,
    social_politic,
    social_politic_name,
    social_politic_relacion,
    social_politic_puesto,
    social_fuma,
    social_fuma_time,
    social_alco,
    social_alco_time,
    social_alco_bebida,
    social_drog,
    social_drog_option,
    social_drog_time,
    social_drog_person,

    social_tatto,
    social_tatto_descri,
    social_tatto_sign,
    social_tatto_ubi,
    social_tatto_fot,

    social_fuma_frequency, 
    social_alco_howmuch, 
    social_alco_frequency,

    //delictiva
    criminal_association_option,
    criminal_relacion,
    criminal_name,
    criminal_group_belong,
    criminal_police_option,
    criminal_why_stained,
    criminal_why_clear,
    criminal_family,
    criminal_was_sued,
    criminal_you_demand,

    criminal_family_name,
    criminal_family_lastname,
    criminal_family_age,
    criminal_family_civil_status,
    criminal_family_profession,
    criminal_family_phone,
    criminal_family_reason,
    criminal_was_suedwhy,
    criminal_you_demandwhy,

    //heal
    disease_hipertension_option,
    disease_diabetes_option,
    disease_VIH_option,
    disease_ITS_option,
    disease_gastritis_option,
    disease_cancer_option,
    disease_cardiopatias_option,
    disease_hipertension_observacion,
    disease_diabetes_observacion,
    disease_VIH_observacion,
    disease_ITS_observacion,
    disease_gastritis_observacion,
    disease_cancer_observacion,
    disease_cardiopatias_observacion,

    disease_name,
    disease_observacion,
    accident_option,
    accident_detail,
    accident_suffer,
    covid_option,
    covid_dosis,
    validate_sex,
    validate_gestacion,
    validate_children,
    validate_lactando,
    validate_lac_month,
    validate_lac_age,
    validate_dosis,
    dosis_name,
    dosis_date,
    dosis_dosis,

    objectivs_corto,
    objectivs_mediano,
    objectives_largo,

    sindicatos_favor,
    sindicatos_formar,
    sindicatos_why,

    honest_p1,
    honest_p2,
    honest_p3,
    honest_p4,

    red_faccebook,
    red_faccebookOther,
    red_faccebookval,
    red_faccebookOtherVal,
  },
} = generalFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  /*yup.object().shape({
    [validation_form.name]: yup
      .bool()
      .isTrue(`${validation_form.requiredErrorMsg}`),
  }),

  yup.object().shape({
    [general_name.name]: yup
      .string()
      .required(`${general_name.requiredErrorMsg}`),
    [general_lastname.name]: yup
      .string()
      .required(`${general_lastname.requiredErrorMsg}`),
    [general_place_birth.name]: yup
      .string()
      .required(`${general_place_birth.requiredErrorMsg}`),
    [general_civil_status.name]: yup
      .string()
      .required(`${general_civil_status.requiredErrorMsg}`),
    [general_profession.name]: yup
      .string()
      .required(`${general_profession.requiredErrorMsg}`),
    [general_direction.name]: yup
      .string()
      .required(`${general_direction.requiredErrorMsg}`),
    [general_time_reside.name]: yup
      .string()
      .required(`${general_time_reside.requiredErrorMsg}`),
    [general_emergency_name.name]: yup
      .string()
      .required(`${general_emergency_name.requiredErrorMsg}`),
    [general_emergency_kinship.name]: yup
      .string()
      .required(`${general_emergency_kinship.requiredErrorMsg}`),
    [general_previous_direction.name]: yup
      .string()
      .required(`${general_previous_direction.requiredErrorMsg}`),
    [general_phone.name]: yup
      .string()
      .required(`${general_phone.requiredErrorMsg}`),
    [general_emergency_phone.name]: yup
      .string()
      .required(`${general_emergency_phone.requiredErrorMsg}`),
    [general_dpi.name]: yup
      .string()
      .required(`${general_dpi.requiredErrorMsg}`),
    [general_nit.name]: yup
      .string()
      .required(`${general_nit.requiredErrorMsg}`),
    [general_email.name]: yup
      .string()
      .email("El email no es correcto")
      .required(`${general_email.requiredErrorMsg}`),
    [general_age.name]: yup.string(),
    [general_birth.name]: yup.string(),
    vehicle: yup.array({}).of(
      yup.object().shape({
        [general_brand.name]: yup
          .string()
          .required(`${general_brand.requiredErrorMsg}`),
        [general_model.name]: yup
          .string()
          .required(`${general_model.requiredErrorMsg}`),
      })
    ),
    license: yup.array({}).of(
      yup.object().shape({
        [general_license.name]: yup
          .string()
          .required(`${general_license.requiredErrorMsg}`),
        [general_license_type.name]: yup
          .string()
          .required(`${general_license_type.requiredErrorMsg}`),
        [general_license_expire.name]: yup
          .string()
          .required(`${general_license_expire.requiredErrorMsg}`),
      })
    ),
  }),

  yup.object().shape({
    [vive_family.name]: yup
      .string()
      .required(`${vive_family.requiredErrorMsg}`),
    /////////////////////////////////////dad inicio///////////////////////////////////
    [family_dad_relation.name]: yup
      .string()
      .required(`${family_dad_relation.requiredErrorMsg}`),

    [family_dad_information.name]: yup.string().when(["family_dad_relation"], {
      is: (family_dad_relation) => family_dad_relation === "Si",
      then: yup.string().required(`${family_dad_information.requiredErrorMsg}`),
    }),

    [family_dad_reason.name]: yup
      .string()
      .when(["family_dad_information", "family_dad_relation"], {
        is: (family_dad_information, family_dad_relation) =>
          family_dad_information === "No" && family_dad_relation === "Si",
        then: yup.string().required(`${family_dad_reason.requiredErrorMsg}`),
      }),

    [family_dad_why_negative.name]: yup.string().when(["family_dad_relation"], {
      is: (family_dad_relation) => family_dad_relation === "No",
      then: yup
        .string()
        .required(`${family_dad_why_negative.requiredErrorMsg}`),
    }),

    [family_dad_information_negative.name]: yup
      .string()
      .when(["family_dad_relation"], {
        is: (family_dad_relation) => family_dad_relation === "No",
        then: yup
          .string()
          .required(`${family_dad_information_negative.requiredErrorMsg}`),
      }),

    [family_dad_life.name]: yup
      .string()
      .when(["family_dad_relation", "family_dad_information"], {
        is: (family_dad_relation, family_dad_information) =>
          family_dad_relation === "Si" && family_dad_information === "Si",
        then: yup.string().required(`${family_dad_life.requiredErrorMsg}`),
      }),
    [family_dad_name.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup.string().required(`${family_dad_name.requiredErrorMsg}`),
        }
      ),
    [family_dad_age.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup.string().required(`${family_dad_age.requiredErrorMsg}`),
        }
      ),

    [family_dad_status.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup.string().required(`${family_dad_status.requiredErrorMsg}`),
        }
      ),

    [family_dad_phone_val.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_phone_val.requiredErrorMsg}`),
        }
      ),

    [family_dad_no_phone.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_phone_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_phone_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_phone_val === "No",
          then: yup
            .string()
            .required(`${family_dad_no_phone.requiredErrorMsg}`),
        }
      ),

    [family_dad_phone.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_phone_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_phone_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_phone_val === "Si",
          then: yup.string().required(`${family_dad_phone.requiredErrorMsg}`),
        }
      ),

    //dad die
    [family_dad_time_died.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "No" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_time_died.requiredErrorMsg}`),
        }
      ),

    [family_dad_reason_died.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "No" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_reason_died.requiredErrorMsg}`),
        }
      ),

    // add name died
    [family_dad_died_first_name.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "No" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_died_first_name.requiredErrorMsg}`),
        }
      ),

    [family_dad_died_last_name.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "No" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_died_last_name.requiredErrorMsg}`),
        }
      ),

    //dad working
    [family_dad_working_val.name]: yup
      .string()
      .when(
        ["family_dad_life", "family_dad_relation", "family_dad_information"],
        {
          is: (family_dad_life, family_dad_relation, family_dad_information) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si",
          then: yup
            .string()
            .required(`${family_dad_working_val.requiredErrorMsg}`),
        }
      ),

    [family_dad_place.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_working_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_working_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_working_val === "Si",
          then: yup.string().required(`${family_dad_place.requiredErrorMsg}`),
        }
      ),

    [family_dad_company.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_working_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_working_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_working_val === "Si",
          then: yup.string().required(`${family_dad_company.requiredErrorMsg}`),
        }
      ),

    [family_dad_financial_income.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_working_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_working_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_working_val === "Si",
          then: yup
            .string()
            .required(`${family_dad_financial_income.requiredErrorMsg}`),
        }
      ),

    [family_dad_depend.name]: yup
      .string()
      .when(
        [
          "family_dad_life",
          "family_dad_relation",
          "family_dad_information",
          "family_dad_working_val",
        ],
        {
          is: (
            family_dad_life,
            family_dad_relation,
            family_dad_information,
            family_dad_working_val
          ) =>
            family_dad_life === "Si" &&
            family_dad_relation === "Si" &&
            family_dad_information === "Si" &&
            family_dad_working_val === "No",
          then: yup.string().required(`${family_dad_depend.requiredErrorMsg}`),
        }
      ),

    //two dad
    [family_dad_lifetwo.name]: yup
      .string()
      .when(["family_dad_relation", "family_dad_information_negative"], {
        is: (family_dad_relation, family_dad_information_negative) =>
          family_dad_relation === "No" &&
          family_dad_information_negative === "Si",
        then: yup.string().required(`${family_dad_lifetwo.requiredErrorMsg}`),
      }),

    [family_dad_nametwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup.string().required(`${family_dad_nametwo.requiredErrorMsg}`),
        }
      ),
    [family_dad_agetwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup.string().required(`${family_dad_agetwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_statustwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_statustwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_phone_valtwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_phone_valtwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_no_phonetwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_phone_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_phone_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_phone_valtwo === "No",
          then: yup
            .string()
            .required(`${family_dad_no_phonetwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_phonetwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_phone_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_phone_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_phone_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_dad_phonetwo.requiredErrorMsg}`),
        }
      ),

    //dad die
    [family_dad_time_diedtwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "No" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_time_diedtwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_reason_diedtwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "No" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_reason_diedtwo.requiredErrorMsg}`),
        }
      ),

    // add name died
    [family_dad_died_first_nametwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "No" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_died_first_nametwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_died_last_nametwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "No" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_died_last_nametwo.requiredErrorMsg}`),
        }
      ),

    //dad working
    [family_dad_working_valtwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_dad_working_valtwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_placetwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_working_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_working_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_dad_placetwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_companytwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_working_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_working_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_dad_companytwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_financial_incometwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_working_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_working_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_dad_financial_incometwo.requiredErrorMsg}`),
        }
      ),

    [family_dad_dependtwo.name]: yup
      .string()
      .when(
        [
          "family_dad_lifetwo",
          "family_dad_relation",
          "family_dad_information_negative",
          "family_dad_working_valtwo",
        ],
        {
          is: (
            family_dad_lifetwo,
            family_dad_relation,
            family_dad_information_negative,
            family_dad_working_valtwo
          ) =>
            family_dad_lifetwo === "Si" &&
            family_dad_relation === "No" &&
            family_dad_information_negative === "Si" &&
            family_dad_working_valtwo === "No",
          then: yup
            .string()
            .required(`${family_dad_dependtwo.requiredErrorMsg}`),
        }
      ),

    ////////////////////////////////////////mom /////////////////////////////////////////////////
    [family_mom_relation.name]: yup
      .string()
      .required(`${family_mom_relation.requiredErrorMsg}`),
    [family_mom_information.name]: yup.string().when(["family_mom_relation"], {
      is: (family_mom_relation) => family_mom_relation === "Si",
      then: yup.string().required(`${family_mom_information.requiredErrorMsg}`),
    }),

    [family_mom_reason.name]: yup
      .string()
      .when(["family_mom_information", "family_mom_relation"], {
        is: (family_mom_information, family_mom_relation) =>
          family_mom_information === "No" && family_mom_relation === "Si",
        then: yup.string().required(`${family_mom_reason.requiredErrorMsg}`),
      }),

    [family_mom_why_negative.name]: yup.string().when(["family_mom_relation"], {
      is: (family_mom_relation) => family_mom_relation === "No",
      then: yup
        .string()
        .required(`${family_mom_why_negative.requiredErrorMsg}`),
    }),

    [family_mom_information_negative.name]: yup
      .string()
      .when(["family_mom_relation"], {
        is: (family_mom_relation) => family_mom_relation === "No",
        then: yup
          .string()
          .required(`${family_mom_information_negative.requiredErrorMsg}`),
      }),

    [family_mom_life.name]: yup
      .string()
      .when(["family_mom_relation", "family_mom_information"], {
        is: (family_mom_relation, family_mom_information) =>
          family_mom_relation === "Si" && family_mom_information === "Si",
        then: yup.string().required(`${family_mom_life.requiredErrorMsg}`),
      }),
    [family_mom_name.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup.string().required(`${family_mom_name.requiredErrorMsg}`),
        }
      ),
    [family_mom_age.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup.string().required(`${family_mom_age.requiredErrorMsg}`),
        }
      ),

    [family_mom_status.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup.string().required(`${family_mom_status.requiredErrorMsg}`),
        }
      ),

    [family_mom_phone_val.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_phone_val.requiredErrorMsg}`),
        }
      ),

    [family_mom_no_phone.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_phone_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_phone_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_phone_val === "No",
          then: yup
            .string()
            .required(`${family_mom_no_phone.requiredErrorMsg}`),
        }
      ),

    [family_mom_phone.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_phone_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_phone_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_phone_val === "Si",
          then: yup.string().required(`${family_mom_phone.requiredErrorMsg}`),
        }
      ),

    //mom die
    [family_mom_time_died.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "No" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_time_died.requiredErrorMsg}`),
        }
      ),

    [family_mom_reason_died.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "No" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_reason_died.requiredErrorMsg}`),
        }
      ),

    // add name died
    [family_mom_died_first_name.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "No" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_died_first_name.requiredErrorMsg}`),
        }
      ),

    [family_mom_died_last_name.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "No" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_died_last_name.requiredErrorMsg}`),
        }
      ),

    //mom working
    [family_mom_working_val.name]: yup
      .string()
      .when(
        ["family_mom_life", "family_mom_relation", "family_mom_information"],
        {
          is: (family_mom_life, family_mom_relation, family_mom_information) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si",
          then: yup
            .string()
            .required(`${family_mom_working_val.requiredErrorMsg}`),
        }
      ),

    [family_mom_place.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_working_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_working_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_working_val === "Si",
          then: yup.string().required(`${family_mom_place.requiredErrorMsg}`),
        }
      ),

    [family_mom_company.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_working_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_working_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_working_val === "Si",
          then: yup.string().required(`${family_mom_company.requiredErrorMsg}`),
        }
      ),

    [family_mom_financial_income.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_working_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_working_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_working_val === "Si",
          then: yup
            .string()
            .required(`${family_mom_financial_income.requiredErrorMsg}`),
        }
      ),

    [family_mom_depend.name]: yup
      .string()
      .when(
        [
          "family_mom_life",
          "family_mom_relation",
          "family_mom_information",
          "family_mom_working_val",
        ],
        {
          is: (
            family_mom_life,
            family_mom_relation,
            family_mom_information,
            family_mom_working_val
          ) =>
            family_mom_life === "Si" &&
            family_mom_relation === "Si" &&
            family_mom_information === "Si" &&
            family_mom_working_val === "No",
          then: yup.string().required(`${family_mom_depend.requiredErrorMsg}`),
        }
      ),

    //two mom
    [family_mom_lifetwo.name]: yup
      .string()
      .when(["family_mom_relation", "family_mom_information_negative"], {
        is: (family_mom_relation, family_mom_information_negative) =>
          family_mom_relation === "No" &&
          family_mom_information_negative === "Si",
        then: yup.string().required(`${family_mom_lifetwo.requiredErrorMsg}`),
      }),

    [family_mom_nametwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup.string().required(`${family_mom_nametwo.requiredErrorMsg}`),
        }
      ),
    [family_mom_agetwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup.string().required(`${family_mom_agetwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_statustwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_statustwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_phone_valtwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_phone_valtwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_no_phonetwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_phone_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_phone_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_phone_valtwo === "No",
          then: yup
            .string()
            .required(`${family_mom_no_phonetwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_phonetwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_phone_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_phone_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_phone_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_mom_phonetwo.requiredErrorMsg}`),
        }
      ),

    //mom die
    [family_mom_time_diedtwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "No" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_time_diedtwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_reason_diedtwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "No" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_reason_diedtwo.requiredErrorMsg}`),
        }
      ),

    // add name died
    [family_mom_died_first_nametwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "No" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_died_first_nametwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_died_last_nametwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "No" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_died_last_nametwo.requiredErrorMsg}`),
        }
      ),

    //mom working
    [family_mom_working_valtwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si",
          then: yup
            .string()
            .required(`${family_mom_working_valtwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_placetwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_working_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_working_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_mom_placetwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_companytwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_working_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_working_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_mom_companytwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_financial_incometwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_working_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_working_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_mom_financial_incometwo.requiredErrorMsg}`),
        }
      ),

    [family_mom_dependtwo.name]: yup
      .string()
      .when(
        [
          "family_mom_lifetwo",
          "family_mom_relation",
          "family_mom_information_negative",
          "family_mom_working_valtwo",
        ],
        {
          is: (
            family_mom_lifetwo,
            family_mom_relation,
            family_mom_information_negative,
            family_mom_working_valtwo
          ) =>
            family_mom_lifetwo === "Si" &&
            family_mom_relation === "No" &&
            family_mom_information_negative === "Si" &&
            family_mom_working_valtwo === "No",
          then: yup
            .string()
            .required(`${family_mom_dependtwo.requiredErrorMsg}`),
        }
      ),

    ////////////////////////////////////Inicio de informacion adicional///////////////////////////

    [you_parents_together.name]: yup
      .string()
      .required(`${you_parents_together.requiredErrorMsg}`),

    [has_partner_father.name]: yup.string().when(["you_parents_together"], {
      is: (you_parents_together) => you_parents_together === "No",
      then: yup.string().required(`${has_partner_father.requiredErrorMsg}`),
    }),
    [has_partner_mother.name]: yup.string().when(["you_parents_together"], {
      is: (you_parents_together) => you_parents_together === "No",
      then: yup.string().required(`${has_partner_mother.requiredErrorMsg}`),
    }),

    [mother_partner_name.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_mother"], {
        is: (you_parents_together, has_partner_mother) =>
          you_parents_together === "No" && has_partner_mother === "Si",
        then: yup.string().required(`${mother_partner_name.requiredErrorMsg}`),
      }),
    [mother_partner_lastname.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_mother"], {
        is: (you_parents_together, has_partner_mother) =>
          you_parents_together === "No" && has_partner_mother === "Si",
        then: yup
          .string()
          .required(`${mother_partner_lastname.requiredErrorMsg}`),
      }),
    [mother_relationship.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_mother"], {
        is: (you_parents_together, has_partner_mother) =>
          you_parents_together === "No" && has_partner_mother === "Si",
        then: yup.string().required(`${mother_relationship.requiredErrorMsg}`),
      }),

    [father_partner_name.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_father"], {
        is: (you_parents_together, has_partner_father) =>
          you_parents_together === "No" && has_partner_father === "Si",
        then: yup.string().required(`${father_partner_name.requiredErrorMsg}`),
      }),
    [father_partner_lastname.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_father"], {
        is: (you_parents_together, has_partner_father) =>
          you_parents_together === "No" && has_partner_father === "Si",
        then: yup
          .string()
          .required(`${father_partner_lastname.requiredErrorMsg}`),
      }),
    [father_relationship.name]: yup
      .string()
      .when(["you_parents_together", "has_partner_father"], {
        is: (you_parents_together, has_partner_father) =>
          you_parents_together === "No" && has_partner_father === "Si",
        then: yup.string().required(`${father_relationship.requiredErrorMsg}`),
      }),

    ////////////////////////////////////Inicio stepfather/////////////////////////////////////////

    [family_validate_stepparents.name]: yup
      .string()
      .required(`${family_validate_stepparents.requiredErrorMsg}`),

    //stepfather general
    [family_stepfather_info.name]: yup
      .string()
      .when(["family_validate_stepparents"], {
        is: (family_validate_stepparents) =>
          family_validate_stepparents === "Si",
        then: yup
          .string()
          .required(`${family_validate_stepparents.requiredErrorMsg}`)
          .when(["family_validate_stepparents"], {
            is: (family_validate_stepparents) =>
              family_validate_stepparents === "No",
            then: yup.string(),
          }),
      }),

    [family_stepfather_life.name]: yup.string().when("family_stepfather_info", {
      is: "Si",
      then: yup
        .string()
        .required("Este campo es requerido")
        .when("family_stepfather_info", {
          is: "No",
          then: yup.string(),
        }),
    }),

    [family_stepfather_name.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_name.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepfather_age.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_age.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepfather_status.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_status.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepfather_phone_val.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_phone_val.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    //die stepfather
    [family_stepfather_time_died.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "No" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_time_died.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepfather_reason_died.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "No" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_reason_died.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    //phone stepfather
    [family_stepfather_no_phone.name]: yup
      .string()
      .when(
        [
          "family_stepfather_phone_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_phone_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_phone_val === "No" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_no_phone.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_phone_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_phone_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_phone_val === "No" &&
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_phone_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_phone_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_phone_val === "No" &&
                        family_stepfather_life === "Si" &&
                        family_stepfather_info === "Si",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepfather_phone.name]: yup
      .string()
      .when(
        [
          "family_stepfather_phone_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_phone_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_phone_val === "Si" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_phone.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_phone_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_phone_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_phone_val === "No" &&
                  family_stepfather_life === "Si" &&
                  family_stepfather_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_phone_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_phone_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_phone_val === "Si" &&
                        family_stepfather_life === "No" &&
                        family_stepfather_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    //working stepfather
    [family_stepfather_working_val.name]: yup
      .string()
      .when(["family_stepfather_life", "family_stepfather_info"], {
        is: (family_stepfather_life, family_stepfather_info) =>
          family_stepfather_life === "Si" && family_stepfather_info === "Si",
        then: yup
          .string()
          .required(`${family_stepfather_working_val.requiredErrorMsg}`)
          .when(["family_stepfather_life", "family_stepfather_info"], {
            is: (family_stepfather_life, family_stepfather_info) =>
              family_stepfather_life === "Si" &&
              family_stepfather_info === "No",
            then: yup
              .string()
              .when(["family_stepfather_life", "family_stepfather_info"], {
                is: (family_stepfather_life, family_stepfather_info) =>
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepfather_place.name]: yup
      .string()
      .when(
        [
          "family_stepfather_working_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_working_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_working_val === "Si" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_place.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_working_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_working_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_working_val === "No" &&
                  family_stepfather_life === "Si" &&
                  family_stepfather_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_working_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_working_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_working_val === "Si" &&
                        family_stepfather_life === "No" &&
                        family_stepfather_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepfather_company.name]: yup
      .string()
      .when(
        [
          "family_stepfather_working_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_working_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_working_val === "Si" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_company.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_working_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_working_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_working_val === "No" &&
                  family_stepfather_life === "Si" &&
                  family_stepfather_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_working_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_working_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_working_val === "Si" &&
                        family_stepfather_life === "No" &&
                        family_stepfather_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepfather_financial_income.name]: yup
      .string()
      .when(
        [
          "family_stepfather_working_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_working_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_working_val === "Si" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_financial_income.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_working_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_working_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_working_val === "No" &&
                  family_stepfather_life === "Si" &&
                  family_stepfather_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_working_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_working_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_working_val === "Si" &&
                        family_stepfather_life === "No" &&
                        family_stepfather_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepfather_depend.name]: yup
      .string()
      .when(
        [
          "family_stepfather_working_val",
          "family_stepfather_life",
          "family_stepfather_info",
        ],
        {
          is: (
            family_stepfather_working_val,
            family_stepfather_life,
            family_stepfather_info
          ) =>
            family_stepfather_working_val === "No" &&
            family_stepfather_life === "Si" &&
            family_stepfather_info === "Si",
          then: yup
            .string()
            .required(`${family_stepfather_depend.requiredErrorMsg}`)
            .when(
              [
                "family_stepfather_working_val",
                "family_stepfather_life",
                "family_stepfather_info",
              ],
              {
                is: (
                  family_stepfather_working_val,
                  family_stepfather_life,
                  family_stepfather_info
                ) =>
                  family_stepfather_working_val === "Si" &&
                  family_stepfather_life === "No" &&
                  family_stepfather_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepfather_working_val",
                      "family_stepfather_life",
                      "family_stepfather_info",
                    ],
                    {
                      is: (
                        family_stepfather_working_val,
                        family_stepfather_life,
                        family_stepfather_info
                      ) =>
                        family_stepfather_working_val === "No" &&
                        family_stepfather_life === "Si" &&
                        family_stepfather_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepfather_noInfo.name]: yup
      .string()
      .when("family_stepfather_info", {
        is: "No",
        then: yup
          .string()
          .required(`${family_stepfather_noInfo.requiredErrorMsg}`)
          .when("family_stepfather_info", {
            is: "Si",
            then: yup.string(),
          }),
      }),

    //stepmother general
    [family_stepmother_info.name]: yup
      .string()
      .when(["family_validate_stepparents"], {
        is: (family_validate_stepparents) =>
          family_validate_stepparents === "Si",
        then: yup
          .string()
          .required(`${family_validate_stepparents.requiredErrorMsg}`)
          .when(["family_validate_stepparents"], {
            is: (family_validate_stepparents) =>
              family_validate_stepparents === "No",
            then: yup.string(),
          }),
      }),

    [family_stepmother_life.name]: yup.string().when("family_stepmother_info", {
      is: "Si",
      then: yup
        .string()
        .required("Este campo es requerido")
        .when("family_stepmother_info", {
          is: "No",
          then: yup.string(),
        }),
    }),

    [family_stepmother_name.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_name.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepmother_age.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_age.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepmother_status.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_status.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepmother_phone_val.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_phone_val.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    //die stepmother
    [family_stepmother_time_died.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "No" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_time_died.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepmother_reason_died.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "No" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_reason_died.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    //phone stepmother
    [family_stepmother_no_phone.name]: yup
      .string()
      .when(
        [
          "family_stepmother_phone_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_phone_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_phone_val === "No" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_no_phone.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_phone_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_phone_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_phone_val === "No" &&
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_phone_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_phone_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_phone_val === "No" &&
                        family_stepmother_life === "Si" &&
                        family_stepmother_info === "Si",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepmother_phone.name]: yup
      .string()
      .when(
        [
          "family_stepmother_phone_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_phone_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_phone_val === "Si" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_phone.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_phone_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_phone_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_phone_val === "No" &&
                  family_stepmother_life === "Si" &&
                  family_stepmother_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_phone_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_phone_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_phone_val === "Si" &&
                        family_stepmother_life === "No" &&
                        family_stepmother_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    //working stepmother
    [family_stepmother_working_val.name]: yup
      .string()
      .when(["family_stepmother_life", "family_stepmother_info"], {
        is: (family_stepmother_life, family_stepmother_info) =>
          family_stepmother_life === "Si" && family_stepmother_info === "Si",
        then: yup
          .string()
          .required(`${family_stepmother_working_val.requiredErrorMsg}`)
          .when(["family_stepmother_life", "family_stepmother_info"], {
            is: (family_stepmother_life, family_stepmother_info) =>
              family_stepmother_life === "Si" &&
              family_stepmother_info === "No",
            then: yup
              .string()
              .when(["family_stepmother_life", "family_stepmother_info"], {
                is: (family_stepmother_life, family_stepmother_info) =>
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_stepmother_place.name]: yup
      .string()
      .when(
        [
          "family_stepmother_working_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_working_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_working_val === "Si" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_place.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_working_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_working_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_working_val === "No" &&
                  family_stepmother_life === "Si" &&
                  family_stepmother_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_working_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_working_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_working_val === "Si" &&
                        family_stepmother_life === "No" &&
                        family_stepmother_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepmother_company.name]: yup
      .string()
      .when(
        [
          "family_stepmother_working_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_working_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_working_val === "Si" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_company.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_working_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_working_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_working_val === "No" &&
                  family_stepmother_life === "Si" &&
                  family_stepmother_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_working_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_working_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_working_val === "Si" &&
                        family_stepmother_life === "No" &&
                        family_stepmother_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepmother_financial_income.name]: yup
      .string()
      .when(
        [
          "family_stepmother_working_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_working_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_working_val === "Si" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_financial_income.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_working_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_working_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_working_val === "No" &&
                  family_stepmother_life === "Si" &&
                  family_stepmother_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_working_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_working_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_working_val === "Si" &&
                        family_stepmother_life === "No" &&
                        family_stepmother_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepmother_depend.name]: yup
      .string()
      .when(
        [
          "family_stepmother_working_val",
          "family_stepmother_life",
          "family_stepmother_info",
        ],
        {
          is: (
            family_stepmother_working_val,
            family_stepmother_life,
            family_stepmother_info
          ) =>
            family_stepmother_working_val === "No" &&
            family_stepmother_life === "Si" &&
            family_stepmother_info === "Si",
          then: yup
            .string()
            .required(`${family_stepmother_depend.requiredErrorMsg}`)
            .when(
              [
                "family_stepmother_working_val",
                "family_stepmother_life",
                "family_stepmother_info",
              ],
              {
                is: (
                  family_stepmother_working_val,
                  family_stepmother_life,
                  family_stepmother_info
                ) =>
                  family_stepmother_working_val === "Si" &&
                  family_stepmother_life === "No" &&
                  family_stepmother_info === "Si",
                then: yup
                  .string()
                  .when(
                    [
                      "family_stepmother_working_val",
                      "family_stepmother_life",
                      "family_stepmother_info",
                    ],
                    {
                      is: (
                        family_stepmother_working_val,
                        family_stepmother_life,
                        family_stepmother_info
                      ) =>
                        family_stepmother_working_val === "No" &&
                        family_stepmother_life === "Si" &&
                        family_stepmother_info === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_stepmother_noInfo.name]: yup
      .string()
      .when("family_stepmother_info", {
        is: "No",
        then: yup
          .string()
          .required(`${family_stepmother_noInfo.requiredErrorMsg}`)
          .when("family_stepmother_info", {
            is: "Si",
            then: yup.string(),
          }),
      }),
  }),

  yup.object().shape({
    [family_validate_son.name]: yup
      .string()
      .required(`${family_validate_son.requiredErrorMsg}`),
    son: yup.array({}).of(
      yup.object().shape({
        //son general
        [family_son_life.name]: yup
          .string()
          .required("Este campo es requerido"),
        [family_son_name.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_son_name.requiredErrorMsg}`)
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_son_validate_age.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_son_name.requiredErrorMsg}`)
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_son_lookafther.name]: yup
          .string()
          .when(["family_son_validate_age", "family_son_life"], {
            is: (family_son_validate_age, family_son_life) =>
              family_son_validate_age === "Si" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_lookafther.requiredErrorMsg}`)
              .when(["family_son_validate_age", "family_son_life"], {
                is: (family_son_validate_age, family_son_life) =>
                  family_son_validate_age === "Si" && family_son_life === "No",
                then: yup.string(),
              }),
          }),

        [family_son_age.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_son_age.requiredErrorMsg}`)
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_son_status.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_son_status.requiredErrorMsg}`)
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_son_phone_val.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required("Este campo es requerido")
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        //die son
        [family_son_time_died.name]: yup.string().when("family_son_life", {
          is: "No",
          then: yup
            .string()
            .required(`${family_son_time_died.requiredErrorMsg}`)
            .when(["family_son_life"], {
              is: (family_son_life) => family_son_life === "Si",
              then: yup.string(),
            }),
        }),
        // add name and lastname 
        [family_son_died_name.name]: yup.string().when("family_son_life", {
          is: "No",
          then: yup
            .string()
            .required(`${family_son_died_name.requiredErrorMsg}`)
            .when(["family_son_life"], {
              is: (family_son_life) => family_son_life === "Si",
              then: yup.string(),
            }),
        }),
        [family_son_died_lastname.name]: yup.string().when("family_son_life", {
          is: "No",
          then: yup
            .string()
            .required(`${family_son_died_lastname.requiredErrorMsg}`)
            .when(["family_son_life"], {
              is: (family_son_life) => family_son_life === "Si",
              then: yup.string(),
            }),
        }),
        
        [family_son_reason_died.name]: yup.string().when("family_son_life", {
          is: "No",
          then: yup
            .string()
            .required(`${family_son_reason_died.requiredErrorMsg}`)
            .when(["family_son_life"], {
              is: (family_son_life) => family_son_life === "Si",
              then: yup.string(),
            }),
        }),

        //phone son
        [family_son_no_phone.name]: yup
          .string()
          .when(["family_son_phone_val", "family_son_life"], {
            is: (family_son_phone_val, family_son_life) =>
              family_son_phone_val === "No" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_no_phone.requiredErrorMsg}`)
              .when(["family_son_phone_val", "family_son_life"], {
                is: (family_son_phone_val, family_son_life) =>
                  family_son_phone_val === "No" && family_son_life === "No",
                then: yup.string(),
              }),
          }),

        [family_son_phone.name]: yup
          .string()
          .when(["family_son_phone_val", "family_son_life"], {
            is: (family_son_phone_val, family_son_life) =>
              family_son_phone_val === "Si" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_no_phone.requiredErrorMsg}`)
              .when(["family_son_phone_val", "family_son_life"], {
                is: (family_son_phone_val, family_son_life) =>
                  family_son_phone_val === "Si" && family_son_life === "No",
                then: yup.string(),
              }),
          }),
        //working son
        [family_son_working_val.name]: yup.string().when("family_son_life", {
          is: "Si",
          then: yup
            .string()
            .required("El campo es requerido")
            .when("family_son_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_son_place.name]: yup
          .string()
          .when(["family_son_working_val", "family_son_life"], {
            is: (family_son_working_val, family_son_life) =>
              family_son_working_val === "Si" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_place.requiredErrorMsg}`)
              .when(["family_son_working_val", "family_son_life"], {
                is: (family_son_working_val, family_son_life) =>
                  family_son_working_val === "Si" && family_son_life === "No",
                then: yup.string(),
              }),
          }),

        [family_son_company.name]: yup
          .string()
          .when(["family_son_working_val", "family_son_life"], {
            is: (family_son_working_val, family_son_life) =>
              family_son_working_val === "Si" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_company.requiredErrorMsg}`)
              .when(["family_son_working_val", "family_son_life"], {
                is: (family_son_working_val, family_son_life) =>
                  family_son_working_val === "Si" && family_son_life === "No",
                then: yup.string(),
              }),
          }),

        [family_son_financial_income.name]: yup
          .string()
          .when(["family_son_working_val", "family_son_life"], {
            is: (family_son_working_val, family_son_life) =>
              family_son_working_val === "Si" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_financial_income.requiredErrorMsg}`)
              .when(["family_son_working_val", "family_son_life"], {
                is: (family_son_working_val, family_son_life) =>
                  family_son_working_val === "Si" && family_son_life === "No",
                then: yup.string(),
              }),
          }),

        [family_son_depend.name]: yup
          .string()
          .when(["family_son_working_val", "family_son_life"], {
            is: (family_son_working_val, family_son_life) =>
              family_son_working_val === "No" && family_son_life === "Si",
            then: yup
              .string()
              .required(`${family_son_depend.requiredErrorMsg}`)
              .when(["family_son_working_val", "family_son_life"], {
                is: (family_son_working_val, family_son_life) =>
                  family_son_working_val === "No" && family_son_life === "No",
                then: yup.string(),
              }),
          }),
      })
    ),
  }),

  yup.object().shape({
    [family_validate_brothers.name]: yup
      .string()
      .required(`${family_validate_brothers.requiredErrorMsg}`),
    brothers: yup.array({}).of(
      yup.object().shape({
        //brothers general
        [family_brothers_life.name]: yup
          .string()
          .required("Este campo es requerido"),
        [family_brothers_name.name]: yup.string().when("family_brothers_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_brothers_name.requiredErrorMsg}`)
            .when("family_brothers_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_brothers_age.name]: yup.string().when("family_brothers_life", {
          is: "Si",
          then: yup
            .string()
            .required(`${family_brothers_age.requiredErrorMsg}`)
            .when("family_brothers_life", {
              is: "No",
              then: yup.string(),
            }),
        }),

        [family_brothers_status.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "Si",
            then: yup
              .string()
              .required(`${family_brothers_status.requiredErrorMsg}`)
              .when("family_brothers_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_phone_val.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "Si",
            then: yup
              .string()
              .required("Este campo es requerido")
              .when("family_brothers_life", {
                is: "No",
                then: yup.string(),
              }),
          }),
        [family_brothers_died_name.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_brothers_died_name.requiredErrorMsg}`)
              .when(["family_brothers_life"], {
                is: (family_brothers_life) => family_brothers_life === "Si",
                then: yup.string(),
              }),
          }),

        [family_brothers_died_lastname.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_brothers_died_lastname.requiredErrorMsg}`)
              .when(["family_brothers_life"], {
                is: (family_brothers_life) => family_brothers_life === "Si",
                then: yup.string(),
              }),
          }),
        //die brothers
        [family_brothers_time_died.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_brothers_time_died.requiredErrorMsg}`)
              .when(["family_brothers_life"], {
                is: (family_brothers_life) => family_brothers_life === "Si",
                then: yup.string(),
              }),
          }),
        [family_brothers_reason_died.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_brothers_reason_died.requiredErrorMsg}`)
              .when(["family_brothers_life"], {
                is: (family_brothers_life) => family_brothers_life === "Si",
                then: yup.string(),
              }),
          }),

        //phone brothers
        [family_brothers_no_phone.name]: yup
          .string()
          .when(["family_brothers_phone_val", "family_brothers_life"], {
            is: (family_brothers_phone_val, family_brothers_life) =>
              family_brothers_phone_val === "No" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_no_phone.requiredErrorMsg}`)
              .when(["family_brothers_phone_val", "family_brothers_life"], {
                is: (family_brothers_phone_val, family_brothers_life) =>
                  family_brothers_phone_val === "No" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_phone.name]: yup
          .string()
          .when(["family_brothers_phone_val", "family_brothers_life"], {
            is: (family_brothers_phone_val, family_brothers_life) =>
              family_brothers_phone_val === "Si" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_no_phone.requiredErrorMsg}`)
              .when(["family_brothers_phone_val", "family_brothers_life"], {
                is: (family_brothers_phone_val, family_brothers_life) =>
                  family_brothers_phone_val === "Si" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),
        //working brothers
        [family_brothers_working_val.name]: yup
          .string()
          .when("family_brothers_life", {
            is: "Si",
            then: yup
              .string()
              .required("El campo es requerido")
              .when("family_brothers_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_place.name]: yup
          .string()
          .when(["family_brothers_working_val", "family_brothers_life"], {
            is: (family_brothers_working_val, family_brothers_life) =>
              family_brothers_working_val === "Si" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_place.requiredErrorMsg}`)
              .when(["family_brothers_working_val", "family_brothers_life"], {
                is: (family_brothers_working_val, family_brothers_life) =>
                  family_brothers_working_val === "Si" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_company.name]: yup
          .string()
          .when(["family_brothers_working_val", "family_brothers_life"], {
            is: (family_brothers_working_val, family_brothers_life) =>
              family_brothers_working_val === "Si" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_company.requiredErrorMsg}`)
              .when(["family_brothers_working_val", "family_brothers_life"], {
                is: (family_brothers_working_val, family_brothers_life) =>
                  family_brothers_working_val === "Si" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_financial_income.name]: yup
          .string()
          .when(["family_brothers_working_val", "family_brothers_life"], {
            is: (family_brothers_working_val, family_brothers_life) =>
              family_brothers_working_val === "Si" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_financial_income.requiredErrorMsg}`)
              .when(["family_brothers_working_val", "family_brothers_life"], {
                is: (family_brothers_working_val, family_brothers_life) =>
                  family_brothers_working_val === "Si" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),

        [family_brothers_depend.name]: yup
          .string()
          .when(["family_brothers_working_val", "family_brothers_life"], {
            is: (family_brothers_working_val, family_brothers_life) =>
              family_brothers_working_val === "No" &&
              family_brothers_life === "Si",
            then: yup
              .string()
              .required(`${family_brothers_depend.requiredErrorMsg}`)
              .when(["family_brothers_working_val", "family_brothers_life"], {
                is: (family_brothers_working_val, family_brothers_life) =>
                  family_brothers_working_val === "No" &&
                  family_brothers_life === "No",
                then: yup.string(),
              }),
          }),
      })
    ),
  }),

  yup.object().shape({
    [family_validate_stepbrother.name]: yup
      .string()
      .required(`${family_validate_stepbrother.requiredErrorMsg}`),
    stepbrother: yup.array({}).of(
      yup.object().shape({
        //stepbrother general
        [family_stepbrother_life.name]: yup
          .string()
          .required("Este campo es requerido"),
        [family_stepbrother_name.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_name.requiredErrorMsg}`)
              .when("family_stepbrother_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_age.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_age.requiredErrorMsg}`)
              .when("family_stepbrother_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_status.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_status.requiredErrorMsg}`)
              .when("family_stepbrother_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_phone_val.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "Si",
            then: yup
              .string()
              .required("Este campo es requerido")
              .when("family_stepbrother_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        //die stepbrother
        [family_stepbrother_time_died.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_stepbrother_time_died.requiredErrorMsg}`)
              .when(["family_stepbrother_life"], {
                is: (family_stepbrother_life) =>
                  family_stepbrother_life === "Si",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_died_name.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_stepbrother_died_name.requiredErrorMsg}`)
              .when(["family_stepbrother_life"], {
                is: (family_stepbrother_life) =>
                  family_stepbrother_life === "Si",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_died_lastname.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_stepbrother_died_lastname.requiredErrorMsg}`)
              .when(["family_stepbrother_life"], {
                is: (family_stepbrother_life) =>
                  family_stepbrother_life === "Si",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_reason_died.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "No",
            then: yup
              .string()
              .required(`${family_stepbrother_reason_died.requiredErrorMsg}`)
              .when(["family_stepbrother_life"], {
                is: (family_stepbrother_life) =>
                  family_stepbrother_life === "Si",
                then: yup.string(),
              }),
          }),

        //phone stepbrother
        [family_stepbrother_no_phone.name]: yup
          .string()
          .when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
            is: (family_stepbrother_phone_val, family_stepbrother_life) =>
              family_stepbrother_phone_val === "No" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_no_phone.requiredErrorMsg}`)
              .when(
                ["family_stepbrother_phone_val", "family_stepbrother_life"],
                {
                  is: (family_stepbrother_phone_val, family_stepbrother_life) =>
                    family_stepbrother_phone_val === "No" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),

        [family_stepbrother_phone.name]: yup
          .string()
          .when(["family_stepbrother_phone_val", "family_stepbrother_life"], {
            is: (family_stepbrother_phone_val, family_stepbrother_life) =>
              family_stepbrother_phone_val === "Si" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_no_phone.requiredErrorMsg}`)
              .when(
                ["family_stepbrother_phone_val", "family_stepbrother_life"],
                {
                  is: (family_stepbrother_phone_val, family_stepbrother_life) =>
                    family_stepbrother_phone_val === "Si" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),
        //working stepbrother
        [family_stepbrother_working_val.name]: yup
          .string()
          .when("family_stepbrother_life", {
            is: "Si",
            then: yup
              .string()
              .required("El campo es requerido")
              .when("family_stepbrother_life", {
                is: "No",
                then: yup.string(),
              }),
          }),

        [family_stepbrother_place.name]: yup
          .string()
          .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
            is: (family_stepbrother_working_val, family_stepbrother_life) =>
              family_stepbrother_working_val === "Si" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_place.requiredErrorMsg}`)
              .when(
                ["family_stepbrother_working_val", "family_stepbrother_life"],
                {
                  is: (
                    family_stepbrother_working_val,
                    family_stepbrother_life
                  ) =>
                    family_stepbrother_working_val === "Si" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),

        [family_stepbrother_company.name]: yup
          .string()
          .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
            is: (family_stepbrother_working_val, family_stepbrother_life) =>
              family_stepbrother_working_val === "Si" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_company.requiredErrorMsg}`)
              .when(
                ["family_stepbrother_working_val", "family_stepbrother_life"],
                {
                  is: (
                    family_stepbrother_working_val,
                    family_stepbrother_life
                  ) =>
                    family_stepbrother_working_val === "Si" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),

        [family_stepbrother_financial_income.name]: yup
          .string()
          .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
            is: (family_stepbrother_working_val, family_stepbrother_life) =>
              family_stepbrother_working_val === "Si" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(
                `${family_stepbrother_financial_income.requiredErrorMsg}`
              )
              .when(
                ["family_stepbrother_working_val", "family_stepbrother_life"],
                {
                  is: (
                    family_stepbrother_working_val,
                    family_stepbrother_life
                  ) =>
                    family_stepbrother_working_val === "Si" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),

        [family_stepbrother_depend.name]: yup
          .string()
          .when(["family_stepbrother_working_val", "family_stepbrother_life"], {
            is: (family_stepbrother_working_val, family_stepbrother_life) =>
              family_stepbrother_working_val === "No" &&
              family_stepbrother_life === "Si",
            then: yup
              .string()
              .required(`${family_stepbrother_depend.requiredErrorMsg}`)
              .when(
                ["family_stepbrother_working_val", "family_stepbrother_life"],
                {
                  is: (
                    family_stepbrother_working_val,
                    family_stepbrother_life
                  ) =>
                    family_stepbrother_working_val === "No" &&
                    family_stepbrother_life === "No",
                  then: yup.string(),
                }
              ),
          }),
      })
    ),
  }),

  yup.object().shape({
    [family_validate_conyugue.name]: yup
      .string()
      .required(`${family_validate_conyugue.requiredErrorMsg}`),

    //conyugue
    [family_conyugue_life.name]: yup
      .string()
      .when(["family_validate_conyugue"], {
        is: (family_validate_conyugue) => family_validate_conyugue === "Si",
        then: yup
          .string()
          .required("Este campo es requerido")
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "No",
            then: yup.string(),
          }),
      }),

    [family_conyugue_name.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_name.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_conyugue_age.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_age.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_conyugue_status.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_status.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_conyugue_phone_val.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_phone_val.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    //die conyugue
    [family_conyugue_time_died.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "No" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_time_died.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),
    [family_conyugue_died_name.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "No" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_died_name.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "No" &&
              family_validate_conyugue === "No",
            then: yup.string(),
          }),
      }),

    [family_conyugue_died_lastname.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "No" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_died_lastname.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "No" &&
              family_validate_conyugue === "No",
            then: yup.string(),
          }),
      }),

    [family_conyugue_reason_died.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "No" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_time_died.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    //phone conyugue
    [family_conyugue_no_phone.name]: yup
      .string()
      .when(
        [
          "family_conyugue_phone_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_phone_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_phone_val === "No" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_no_phone.requiredErrorMsg}`)
            .when(["family_conyugue_phone_val", "family_conyugue_life"], {
              is: (
                family_conyugue_phone_val,
                family_conyugue_life,
                family_validate_conyugue
              ) =>
                family_conyugue_phone_val === "No" &&
                family_conyugue_life === "No" &&
                family_validate_conyugue === "Si",
              then: yup.string(),
            }),
        }
      ),

    [family_conyugue_phone.name]: yup
      .string()
      .when(
        [
          "family_conyugue_phone_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_phone_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_phone_val === "Si" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_no_phone.requiredErrorMsg}`)
            .when(["family_conyugue_phone_val", "family_conyugue_life"], {
              is: (
                family_conyugue_phone_val,
                family_conyugue_life,
                family_validate_conyugue
              ) =>
                family_conyugue_phone_val === "Si" &&
                family_conyugue_life === "No" &&
                family_validate_conyugue === "Si",
              then: yup.string(),
            }),
        }
      ),
    //working conyugue
    [family_conyugue_working_val.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_working_val.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_conyugue_place.name]: yup
      .string()
      .when(
        [
          "family_conyugue_working_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_working_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_working_val === "Si" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_place.requiredErrorMsg}`)
            .when(
              [
                "family_conyugue_working_val",
                "family_conyugue_life",
                "family_validate_conyugue",
              ],
              {
                is: (
                  family_conyugue_working_val,
                  family_conyugue_life,
                  family_validate_conyugue
                ) =>
                  family_conyugue_working_val === "Si" &&
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyugue_working_val",
                      "family_conyugue_life",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyugue_working_val,
                        family_conyugue_life,
                        family_validate_conyugue
                      ) =>
                        family_conyugue_working_val === "No" &&
                        family_conyugue_life === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyugue_company.name]: yup
      .string()
      .when(
        [
          "family_conyugue_working_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_working_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_working_val === "Si" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_place.requiredErrorMsg}`)
            .when(
              [
                "family_conyugue_working_val",
                "family_conyugue_life",
                "family_validate_conyugue",
              ],
              {
                is: (
                  family_conyugue_working_val,
                  family_conyugue_life,
                  family_validate_conyugue
                ) =>
                  family_conyugue_working_val === "Si" &&
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyugue_working_val",
                      "family_conyugue_life",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyugue_working_val,
                        family_conyugue_life,
                        family_validate_conyugue
                      ) =>
                        family_conyugue_working_val === "No" &&
                        family_conyugue_life === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyugue_financial_income.name]: yup
      .string()
      .when(
        [
          "family_conyugue_working_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_working_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_working_val === "Si" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_place.requiredErrorMsg}`)
            .when(
              [
                "family_conyugue_working_val",
                "family_conyugue_life",
                "family_validate_conyugue",
              ],
              {
                is: (
                  family_conyugue_working_val,
                  family_conyugue_life,
                  family_validate_conyugue
                ) =>
                  family_conyugue_working_val === "Si" &&
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyugue_working_val",
                      "family_conyugue_life",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyugue_working_val,
                        family_conyugue_life,
                        family_validate_conyugue
                      ) =>
                        family_conyugue_working_val === "No" &&
                        family_conyugue_life === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyugue_depend.name]: yup
      .string()
      .when(
        [
          "family_conyugue_working_val",
          "family_conyugue_life",
          "family_validate_conyugue",
        ],
        {
          is: (
            family_conyugue_working_val,
            family_conyugue_life,
            family_validate_conyugue
          ) =>
            family_conyugue_working_val === "No" &&
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_place.requiredErrorMsg}`)
            .when(
              [
                "family_conyugue_working_val",
                "family_conyugue_life",
                "family_validate_conyugue",
              ],
              {
                is: (
                  family_conyugue_working_val,
                  family_conyugue_life,
                  family_validate_conyugue
                ) =>
                  family_conyugue_working_val === "Si" &&
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyugue_working_val",
                      "family_conyugue_life",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyugue_working_val,
                        family_conyugue_life,
                        family_validate_conyugue
                      ) =>
                        family_conyugue_working_val === "No" &&
                        family_conyugue_life === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyugue_married_val.name]: yup
      .string()
      .when(["family_conyugue_life", "family_validate_conyugue"], {
        is: (family_conyugue_life, family_validate_conyugue) =>
          family_conyugue_life === "Si" && family_validate_conyugue === "Si",
        then: yup
          .string()
          .required(`${family_conyugue_name.requiredErrorMsg}`)
          .when(["family_conyugue_life", "family_validate_conyugue"], {
            is: (family_conyugue_life, family_validate_conyugue) =>
              family_conyugue_life === "Si" &&
              family_validate_conyugue === "No",
            then: yup
              .string()
              .when(["family_conyugue_life", "family_validate_conyugue"], {
                is: (family_conyugue_life, family_validate_conyugue) =>
                  family_conyugue_life === "No" &&
                  family_validate_conyugue === "No",
                then: yup.string(),
              }),
          }),
      }),

    [family_conyugue_married.name]: yup
      .string()
      .when(
        [
          "family_conyugue_life",
          "family_validate_conyugue",
          "family_conyugue_married_val",
        ],
        {
          is: (
            family_conyugue_life,
            family_validate_conyugue,
            family_conyugue_married_val
          ) =>
            family_conyugue_life === "Si" &&
            family_validate_conyugue === "Si" &&
            family_conyugue_married_val === "Si",
          then: yup
            .string()
            .required(`${family_conyugue_name.requiredErrorMsg}`)
            .when(["family_conyugue_life", "family_validate_conyugue"], {
              is: (
                family_conyugue_life,
                family_validate_conyugue,
                family_conyugue_married_val
              ) =>
                family_conyugue_life === "Si" &&
                family_validate_conyugue === "No" &&
                family_conyugue_married_val === "Si",
              then: yup
                .string()
                .when(["family_conyugue_life", "family_validate_conyugue"], {
                  is: (
                    family_conyugue_life,
                    family_validate_conyugue,
                    family_conyugue_married_val
                  ) =>
                    family_conyugue_life === "No" &&
                    family_validate_conyugue === "No" &&
                    family_conyugue_married_val === "Si",
                  then: yup.string(),
                }),
            }),
        }
      ),

    [family_conyugue_partner_val.name]: yup
      .string()
      .when(["family_validate_conyugue"], {
        is: (family_validate_conyugue) => family_validate_conyugue === "No",
        then: yup
          .string()
          .required(`${family_conyugue_name.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string(),
          }),
      }),

    //conyuguepat

    [family_conyuguepat_name.name]: yup
      .string()
      .when(["family_validate_conyugue", "family_conyugue_partner_val"], {
        is: (family_validate_conyugue, family_conyugue_partner_val) =>
          family_validate_conyugue === "No" &&
          family_conyugue_partner_val === "Si",
        then: yup
          .string()
          .required(`${family_conyuguepat_name.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string().when(["family_validate_conyugue"], {
              is: (family_validate_conyugue, family_conyugue_partner_val) =>
                family_conyugue_partner_val === "No" &&
                family_validate_conyugue === "No",
              then: yup.string(),
            }),
          }),
      }),

    [family_conyuguepat_age.name]: yup
      .string()
      .when(["family_validate_conyugue", "family_conyugue_partner_val"], {
        is: (family_validate_conyugue, family_conyugue_partner_val) =>
          family_validate_conyugue === "No" &&
          family_conyugue_partner_val === "Si",
        then: yup
          .string()
          .required(`${family_conyuguepat_age.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string().when(["family_validate_conyugue"], {
              is: (family_validate_conyugue, family_conyugue_partner_val) =>
                family_conyugue_partner_val === "No" &&
                family_validate_conyugue === "No",
              then: yup.string(),
            }),
          }),
      }),

    [family_conyuguepat_status.name]: yup
      .string()
      .when(["family_validate_conyugue", "family_conyugue_partner_val"], {
        is: (family_validate_conyugue, family_conyugue_partner_val) =>
          family_validate_conyugue === "No" &&
          family_conyugue_partner_val === "Si",
        then: yup
          .string()
          .required(`${family_conyuguepat_status.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string().when(["family_validate_conyugue"], {
              is: (family_validate_conyugue, family_conyugue_partner_val) =>
                family_conyugue_partner_val === "No" &&
                family_validate_conyugue === "No",
              then: yup.string(),
            }),
          }),
      }),

    [family_conyuguepat_phone_val.name]: yup
      .string()
      .when(["family_validate_conyugue", "family_conyugue_partner_val"], {
        is: (family_validate_conyugue, family_conyugue_partner_val) =>
          family_validate_conyugue === "No" &&
          family_conyugue_partner_val === "Si",
        then: yup
          .string()
          .required(`${family_conyuguepat_status.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string().when(["family_validate_conyugue"], {
              is: (family_validate_conyugue, family_conyugue_partner_val) =>
                family_conyugue_partner_val === "No" &&
                family_validate_conyugue === "No",
              then: yup.string(),
            }),
          }),
      }),

    //phone conyuguepat
    [family_conyuguepat_no_phone.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_phone_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_phone_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_phone_val === "No" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_no_phone.requiredErrorMsg}`)
            .when(["family_conyuguepat_phone_val", "family_conyuguepat_life"], {
              is: (family_conyuguepat_phone_val, family_validate_conyugue) =>
                family_conyuguepat_phone_val === "Si" &&
                family_conyuguepat_life === "No" &&
                family_validate_conyugue === "Si",
              then: yup.string(),
            }),
        }
      ),

    [family_conyuguepat_phone.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_phone_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_phone_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_phone_val === "Si" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_no_phone.requiredErrorMsg}`)
            .when(["family_conyuguepat_phone_val", "family_conyuguepat_life"], {
              is: (family_conyuguepat_phone_val, family_validate_conyugue) =>
                family_conyuguepat_phone_val === "Si" &&
                family_conyuguepat_life === "No" &&
                family_validate_conyugue === "Si",
              then: yup.string(),
            }),
        }
      ),

    //working conyuguepat
    [family_conyuguepat_working_val.name]: yup
      .string()
      .when(["family_validate_conyugue", "family_conyugue_partner_val"], {
        is: (family_validate_conyugue, family_conyugue_partner_val) =>
          family_validate_conyugue === "No" &&
          family_conyugue_partner_val === "Si",
        then: yup
          .string()
          .required(`${family_conyuguepat_age.requiredErrorMsg}`)
          .when(["family_validate_conyugue"], {
            is: (family_validate_conyugue) => family_validate_conyugue === "Si",
            then: yup.string().when(["family_validate_conyugue"], {
              is: (family_validate_conyugue, family_conyugue_partner_val) =>
                family_conyugue_partner_val === "No" &&
                family_validate_conyugue === "No",
              then: yup.string(),
            }),
          }),
      }),

    [family_conyuguepat_place.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_working_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_working_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_working_val === "Si" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_place.requiredErrorMsg}`)
            .when(
              ["family_conyuguepat_working_val", "family_validate_conyugue"],
              {
                is: (
                  family_conyuguepat_working_val,
                  family_validate_conyugue
                ) =>
                  family_conyuguepat_working_val === "Si" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyuguepat_working_val",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyuguepat_working_val,
                        family_validate_conyugue
                      ) =>
                        family_conyuguepat_working_val === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyuguepat_company.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_working_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_working_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_working_val === "Si" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_place.requiredErrorMsg}`)
            .when(
              ["family_conyuguepat_working_val", "family_validate_conyugue"],
              {
                is: (
                  family_conyuguepat_working_val,
                  family_validate_conyugue
                ) =>
                  family_conyuguepat_working_val === "Si" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyuguepat_working_val",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyuguepat_working_val,
                        family_validate_conyugue
                      ) =>
                        family_conyuguepat_working_val === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyuguepat_financial_income.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_working_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_working_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_working_val === "Si" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_place.requiredErrorMsg}`)
            .when(
              ["family_conyuguepat_working_val", "family_validate_conyugue"],
              {
                is: (
                  family_conyuguepat_working_val,
                  family_validate_conyugue
                ) =>
                  family_conyuguepat_working_val === "Si" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyuguepat_working_val",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyuguepat_working_val,
                        family_validate_conyugue
                      ) =>
                        family_conyuguepat_working_val === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),

    [family_conyuguepat_depend.name]: yup
      .string()
      .when(
        [
          "family_conyuguepat_working_val",
          "family_validate_conyugue",
          "family_conyugue_partner_val",
        ],
        {
          is: (
            family_conyuguepat_working_val,
            family_validate_conyugue,
            family_conyugue_partner_val
          ) =>
            family_conyuguepat_working_val === "No" &&
            family_validate_conyugue === "No" &&
            family_conyugue_partner_val === "Si",
          then: yup
            .string()
            .required(`${family_conyuguepat_place.requiredErrorMsg}`)
            .when(
              ["family_conyuguepat_working_val", "family_validate_conyugue"],
              {
                is: (
                  family_conyuguepat_working_val,
                  family_validate_conyugue
                ) =>
                  family_conyuguepat_working_val === "Si" &&
                  family_validate_conyugue === "No",
                then: yup
                  .string()
                  .when(
                    [
                      "family_conyuguepat_working_val",
                      "family_validate_conyugue",
                    ],
                    {
                      is: (
                        family_conyuguepat_working_val,
                        family_validate_conyugue
                      ) =>
                        family_conyuguepat_working_val === "No" &&
                        family_validate_conyugue === "No",
                      then: yup.string(),
                    }
                  ),
              }
            ),
        }
      ),
  }),

  yup.object().shape({
    //abuelo papa
    [family_grandfather_life.name]: yup
      .string()
      .required(`${family_grandfather_life.requiredErrorMsg}`),
    [family_grandfather_name.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_age.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_status.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_phone_val.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_phone_val.requiredErrorMsg}`),
      }),
    [family_grandfather_phone.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_phone_val"], {
        is: (family_grandfather_life, family_grandfather_phone_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_phone_val === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_no_phone.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_phone_val"], {
        is: (family_grandfather_life, family_grandfather_phone_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_phone_val === "No",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_working_val.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_working_val.requiredErrorMsg}`),
      }),

    [family_grandfather_depend.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_working_val"], {
        is: (family_grandfather_life, family_grandfather_working_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_working_val === "No",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_place.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_working_val"], {
        is: (family_grandfather_life, family_grandfather_working_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_company.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_working_val"], {
        is: (family_grandfather_life, family_grandfather_working_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),
    [family_grandfather_financial_income.name]: yup
      .string()
      .when(["family_grandfather_life", "family_grandfather_working_val"], {
        is: (family_grandfather_life, family_grandfather_working_val) =>
          family_grandfather_life === "Si" &&
          family_grandfather_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_name.requiredErrorMsg}`),
      }),

    [family_grandfather_time_died.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "No",
        then: yup
          .string()
          .required(`${family_grandfather_time_died.requiredErrorMsg}`),
      }),
    [family_grandfather_reason_died.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "No",
        then: yup
          .string()
          .required(`${family_grandfather_reason_died.requiredErrorMsg}`),
      }),

    [family_grandfather_lifeno_name.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "No",
        then: yup
          .string()
          .required(`${family_grandfather_lifeno_name.requiredErrorMsg}`),
      }),
    [family_grandfather_lifeno_firstname.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "No",
        then: yup
          .string()
          .required(`${family_grandfather_lifeno_firstname.requiredErrorMsg}`),
      }),

    //abuela papa
    [family_grandmother_life.name]: yup
      .string()
      .required(`${family_grandmother_life.requiredErrorMsg}`),
    [family_grandmother_name.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_age.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_status.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_phone_val.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_phone_val.requiredErrorMsg}`),
      }),
    [family_grandmother_phone.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_phone_val"], {
        is: (family_grandmother_life, family_grandmother_phone_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_phone_val === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_no_phone.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_phone_val"], {
        is: (family_grandmother_life, family_grandmother_phone_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_phone_val === "No",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_working_val.name]: yup
      .string()
      .when(["family_grandfather_life"], {
        is: (family_grandfather_life) => family_grandfather_life === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_working_val.requiredErrorMsg}`),
      }),
    [family_grandmother_depend.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_working_val"], {
        is: (family_grandmother_life, family_grandmother_working_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_working_val === "No",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_place.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_working_val"], {
        is: (family_grandmother_life, family_grandmother_working_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_company.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_working_val"], {
        is: (family_grandmother_life, family_grandmother_working_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),
    [family_grandmother_financial_income.name]: yup
      .string()
      .when(["family_grandmother_life", "family_grandmother_working_val"], {
        is: (family_grandmother_life, family_grandmother_working_val) =>
          family_grandmother_life === "Si" &&
          family_grandmother_working_val === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_name.requiredErrorMsg}`),
      }),

    [family_grandmother_time_died.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "No",
        then: yup
          .string()
          .required(`${family_grandmother_time_died.requiredErrorMsg}`),
      }),
    [family_grandmother_reason_died.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "No",
        then: yup
          .string()
          .required(`${family_grandmother_reason_died.requiredErrorMsg}`),
      }),

    [family_grandmother_lifeno_name.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "No",
        then: yup
          .string()
          .required(`${family_grandmother_lifeno_name.requiredErrorMsg}`),
      }),
    [family_grandmother_lifeno_firstname.name]: yup
      .string()
      .when(["family_grandmother_life"], {
        is: (family_grandmother_life) => family_grandmother_life === "No",
        then: yup
          .string()
          .required(`${family_grandmother_lifeno_firstname.requiredErrorMsg}`),
      }),
    //abuelo mama
    [family_grandfather_lifetwo.name]: yup
      .string()
      .required(`${family_grandfather_lifetwo.requiredErrorMsg}`),
    [family_grandfather_nametwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_nametwo.requiredErrorMsg}`),
      }),
    [family_grandfather_agetwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_agetwo.requiredErrorMsg}`),
      }),
    [family_grandfather_statustwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_statustwo.requiredErrorMsg}`),
      }),
    [family_grandfather_phone_valtwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_phone_valtwo.requiredErrorMsg}`),
      }),
    [family_grandfather_phonetwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo", "family_grandfather_phone_valtwo"], {
        is: (family_grandfather_lifetwo, family_grandfather_phone_valtwo) =>
          family_grandfather_lifetwo === "Si" &&
          family_grandfather_phone_valtwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_phonetwo.requiredErrorMsg}`),
      }),
    [family_grandfather_no_phonetwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo", "family_grandfather_phone_valtwo"], {
        is: (family_grandfather_lifetwo, family_grandfather_phone_valtwo) =>
          family_grandfather_lifetwo === "Si" &&
          family_grandfather_phone_valtwo === "No",
        then: yup
          .string()
          .required(`${family_grandfather_no_phonetwo.requiredErrorMsg}`),
      }),
    [family_grandfather_working_valtwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandfather_working_valtwo.requiredErrorMsg}`),
      }),
    [family_grandfather_dependtwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo", "family_grandfather_working_val"], {
        is: (family_grandfather_lifetwo, family_grandfather_working_val) =>
          family_grandfather_lifetwo === "Si" &&
          family_grandfather_working_val === "No",
        then: yup
          .string()
          .required(`${family_grandfather_dependtwo.requiredErrorMsg}`),
      }),
    [family_grandfather_placetwo.name]: yup
      .string()
      .when(
        ["family_grandfather_lifetwo", "family_grandfather_working_valtwo"],
        {
          is: (family_grandfather_lifetwo, family_grandfather_working_valtwo) =>
            family_grandfather_lifetwo === "Si" &&
            family_grandfather_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_grandfather_placetwo.requiredErrorMsg}`),
        }
      ),
    [family_grandfather_companytwo.name]: yup
      .string()
      .when(
        ["family_grandfather_lifetwo", "family_grandfather_working_valtwo"],
        {
          is: (family_grandfather_lifetwo, family_grandfather_working_valtwo) =>
            family_grandfather_lifetwo === "Si" &&
            family_grandfather_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_grandfather_companytwo.requiredErrorMsg}`),
        }
      ),
    [family_grandfather_financial_incometwo.name]: yup
      .string()
      .when(
        ["family_grandfather_lifetwo", "family_grandfather_working_valtwo"],
        {
          is: (family_grandfather_lifetwo, family_grandfather_working_valtwo) =>
            family_grandfather_lifetwo === "Si" &&
            family_grandfather_working_valtwo === "Si",
          then: yup
            .string()
            .required(
              `${family_grandfather_financial_incometwo.requiredErrorMsg}`
            ),
        }
      ),

    [family_grandfather_time_diedtwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandfather_time_diedtwo.requiredErrorMsg}`),
      }),
    [family_grandfather_reason_diedtwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandfather_reason_diedtwo.requiredErrorMsg}`),
      }),

    [family_grandfather_lifeno_nametwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandfather_lifeno_nametwo.requiredErrorMsg}`),
      }),
    [family_grandfather_lifeno_firstnametwo.name]: yup
      .string()
      .when(["family_grandfather_lifetwo"], {
        is: (family_grandfather_lifetwo) => family_grandfather_lifetwo === "No",
        then: yup
          .string()
          .required(
            `${family_grandfather_lifeno_firstnametwo.requiredErrorMsg}`
          ),
      }),
    //abuela mama

    [family_grandmother_lifetwo.name]: yup
      .string()
      .required(`${family_grandmother_lifetwo.requiredErrorMsg}`),
    [family_grandmother_nametwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_nametwo.requiredErrorMsg}`),
      }),
    [family_grandmother_agetwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_agetwo.requiredErrorMsg}`),
      }),
    [family_grandmother_statustwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_statustwo.requiredErrorMsg}`),
      }),
    [family_grandmother_phone_valtwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_phone_valtwo.requiredErrorMsg}`),
      }),
    [family_grandmother_phonetwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo", "family_grandmother_phone_valtwo"], {
        is: (family_grandmother_lifetwo, family_grandmother_phone_valtwo) =>
          family_grandmother_lifetwo === "Si" &&
          family_grandmother_phone_valtwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_phonetwo.requiredErrorMsg}`),
      }),
    [family_grandmother_no_phonetwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo", "family_grandmother_phone_valtwo"], {
        is: (family_grandmother_lifetwo, family_grandmother_phone_valtwo) =>
          family_grandmother_lifetwo === "Si" &&
          family_grandmother_phone_valtwo === "No",
        then: yup
          .string()
          .required(`${family_grandmother_no_phonetwo.requiredErrorMsg}`),
      }),
    [family_grandmother_working_valtwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "Si",
        then: yup
          .string()
          .required(`${family_grandmother_working_valtwo.requiredErrorMsg}`),
      }),
    [family_grandmother_dependtwo.name]: yup
      .string()
      .when(
        ["family_grandmother_lifetwo", "family_grandmother_working_valtwo"],
        {
          is: (family_grandmother_lifetwo, family_grandmother_working_valtwo) =>
            family_grandmother_lifetwo === "Si" &&
            family_grandmother_working_valtwo === "No",
          then: yup
            .string()
            .required(`${family_grandmother_dependtwo.requiredErrorMsg}`),
        }
      ),
    [family_grandmother_placetwo.name]: yup
      .string()
      .when(
        ["family_grandmother_lifetwo", "family_grandmother_working_valtwo"],
        {
          is: (family_grandmother_lifetwo, family_grandmother_working_valtwo) =>
            family_grandmother_lifetwo === "Si" &&
            family_grandmother_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_grandmother_placetwo.requiredErrorMsg}`),
        }
      ),
    [family_grandmother_companytwo.name]: yup
      .string()
      .when(
        ["family_grandmother_lifetwo", "family_grandmother_working_valtwo"],
        {
          is: (family_grandmother_lifetwo, family_grandmother_working_valtwo) =>
            family_grandmother_lifetwo === "Si" &&
            family_grandmother_working_valtwo === "Si",
          then: yup
            .string()
            .required(`${family_grandmother_companytwo.requiredErrorMsg}`),
        }
      ),
    [family_grandmother_financial_incometwo.name]: yup
      .string()
      .when(
        ["family_grandmother_lifetwo", "family_grandmother_working_valtwo"],
        {
          is: (family_grandmother_lifetwo, family_grandmother_working_valtwo) =>
            family_grandmother_lifetwo === "Si" &&
            family_grandmother_working_valtwo === "Si",
          then: yup
            .string()
            .required(
              `${family_grandmother_financial_incometwo.requiredErrorMsg}`
            ),
        }
      ),

    [family_grandmother_time_diedtwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandmother_time_diedtwo.requiredErrorMsg}`),
      }),
    [family_grandmother_reason_diedtwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandmother_reason_diedtwo.requiredErrorMsg}`),
      }),

    [family_grandmother_lifeno_nametwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "No",
        then: yup
          .string()
          .required(`${family_grandmother_lifeno_nametwo.requiredErrorMsg}`),
      }),
    [family_grandmother_lifeno_firstnametwo.name]: yup
      .string()
      .when(["family_grandmother_lifetwo"], {
        is: (family_grandmother_lifetwo) => family_grandmother_lifetwo === "No",
        then: yup
          .string()
          .required(
            `${family_grandmother_lifeno_firstnametwo.requiredErrorMsg}`
          ),
      }),
  }),

  yup.object().shape({
    [estudie_university_sval.name]: yup
      .string()
      .required(`${estudie_university_sval.requiredErrorMsg}`),
    [estudie_university_name.name]: yup
      .string()
      .when(["estudie_university_sval"], {
        is: (estudie_university_sval) => estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_sval.requiredErrorMsg}`)
          .when(["estudie_university_sval"], {
            is: (estudie_university_sval) => estudie_university_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_university_uniname.name]: yup
      .string()
      .when(["estudie_university_sval"], {
        is: (estudie_university_sval) => estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_sval.requiredErrorMsg}`)
          .when(["estudie_university_sval"], {
            is: (estudie_university_sval) => estudie_university_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_university_semester.name]: yup
      .string()
      .when(["estudie_university_sval"], {
        is: (estudie_university_sval) => estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_sval.requiredErrorMsg}`)
          .when(["estudie_university_sval"], {
            is: (estudie_university_sval) => estudie_university_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_university_val.name]: yup
      .string()
      .when(["estudie_university_sval"], {
        is: (estudie_university_sval) => estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_sval.requiredErrorMsg}`)
          .when(["estudie_university_sval"], {
            is: (estudie_university_sval) => estudie_university_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_university_title.name]: yup
      .string()
      .when(["estudie_university_val", "estudie_university_sval"], {
        is: (estudie_university_val, estudie_university_sval) =>
          estudie_university_val === "Si" && estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_title.requiredErrorMsg}`)
          .when(["estudie_university_val"], {
            is: (estudie_university_val, estudie_university_sval) =>
              estudie_university_val === "No" &&
              estudie_university_sval === "Si",
            then: yup.string(),
          }),
      }),

    [estudie_university_sede.name]: yup
      .string()
      .when(["estudie_university_val", "estudie_university_sval"], {
        is: (estudie_university_val, estudie_university_sval) =>
          estudie_university_val === "Si" && estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_title.requiredErrorMsg}`)
          .when(["estudie_university_val"], {
            is: (estudie_university_val, estudie_university_sval) =>
              estudie_university_val === "No" &&
              estudie_university_sval === "Si",
            then: yup.string(),
          }),
      }),

    [estudie_university_year_graduation.name]: yup
      .string()
      .when(["estudie_university_val", "estudie_university_sval"], {
        is: (estudie_university_val, estudie_university_sval) =>
          estudie_university_val === "Si" && estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_title.requiredErrorMsg}`)
          .when(["estudie_university_val"], {
            is: (estudie_university_val, estudie_university_sval) =>
              estudie_university_val === "No" &&
              estudie_university_sval === "Si",
            then: yup.string(),
          }),
      }),

    [estudie_university_no_sede.name]: yup
      .string()
      .when(["estudie_university_val", "estudie_university_sval"], {
        is: (estudie_university_val, estudie_university_sval) =>
          estudie_university_val === "No" && estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_title.requiredErrorMsg}`)
          .when(["estudie_university_val"], {
            is: (estudie_university_val, estudie_university_sval) =>
              estudie_university_val === "Si" &&
              estudie_university_sval === "Si",
            then: yup.string(),
          }),
      }),

    [estudie_university_hour.name]: yup
      .string()
      .when(["estudie_university_val", "estudie_university_sval"], {
        is: (estudie_university_val, estudie_university_sval) =>
          estudie_university_val === "No" && estudie_university_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_university_title.requiredErrorMsg}`)
          .when(["estudie_university_val"], {
            is: (estudie_university_val, estudie_university_sval) =>
              estudie_university_val === "Si" &&
              estudie_university_sval === "Si",
            then: yup.string(),
          }),
      }),

    //diversificado
    [estudie_diversificado_sval.name]: yup
      .string()
      .required(`${estudie_diversificado_sval.requiredErrorMsg}`),

    [estudie_diversificado_name.name]: yup
      .string()
      .when(["estudie_diversificado_sval"], {
        is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_diversificado_name.requiredErrorMsg}`)
          .when(["estudie_diversificado_sval"], {
            is: (estudie_diversificado_sval) =>
              estudie_diversificado_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_diversificado_uniname.name]: yup
      .string()
      .when(["estudie_diversificado_sval"], {
        is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_diversificado_uniname.requiredErrorMsg}`)
          .when(["estudie_diversificado_sval"], {
            is: (estudie_diversificado_sval) =>
              estudie_diversificado_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_diversificado_desde.name]: yup
      .string()
      .when(["estudie_diversificado_sval"], {
        is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_diversificado_desde.requiredErrorMsg}`)
          .when(["estudie_diversificado_sval"], {
            is: (estudie_diversificado_sval) =>
              estudie_diversificado_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_diversificado_hasta.name]: yup
      .string()
      .when(["estudie_diversificado_sval"], {
        is: (estudie_diversificado_sval) => estudie_diversificado_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_diversificado_hasta.requiredErrorMsg}`)
          .when(["estudie_diversificado_sval"], {
            is: (estudie_diversificado_sval) =>
              estudie_diversificado_sval === "No",
            then: yup.string(),
          }),
      }),

    //Basico
    [estudie_basic_sval.name]: yup
      .string()
      .required(`${estudie_basic_sval.requiredErrorMsg}`),

    [estudie_basic_uniname.name]: yup.string().when(["estudie_basic_sval"], {
      is: (estudie_basic_sval) => estudie_basic_sval === "Si",
      then: yup
        .string()
        .required(`${estudie_basic_uniname.requiredErrorMsg}`)
        .when(["estudie_basic_sval"], {
          is: (estudie_basic_sval) => estudie_basic_sval === "No",
          then: yup.string(),
        }),
    }),

    [estudie_basic_desde.name]: yup.string().when(["estudie_basic_sval"], {
      is: (estudie_basic_sval) => estudie_basic_sval === "Si",
      then: yup
        .string()
        .required(`${estudie_basic_desde.requiredErrorMsg}`)
        .when(["estudie_basic_sval"], {
          is: (estudie_basic_sval) => estudie_basic_sval === "No",
          then: yup.string(),
        }),
    }),

    [estudie_basic_hasta.name]: yup.string().when(["estudie_basic_sval"], {
      is: (estudie_basic_sval) => estudie_basic_sval === "Si",
      then: yup
        .string()
        .required(`${estudie_basic_hasta.requiredErrorMsg}`)
        .when(["estudie_basic_sval"], {
          is: (estudie_basic_sval) => estudie_basic_sval === "No",
          then: yup.string(),
        }),
    }),

    //Primario
    [estudie_primary_sval.name]: yup
      .string()
      .required(`${estudie_primary_sval.requiredErrorMsg}`),

    [estudie_primary_uniname.name]: yup
      .string()
      .when(["estudie_primary_sval"], {
        is: (estudie_primary_sval) => estudie_primary_sval === "Si",
        then: yup
          .string()
          .required(`${estudie_primary_uniname.requiredErrorMsg}`)
          .when(["estudie_primary_sval"], {
            is: (estudie_primary_sval) => estudie_primary_sval === "No",
            then: yup.string(),
          }),
      }),

    [estudie_primary_desde.name]: yup.string().when(["estudie_primary_sval"], {
      is: (estudie_primary_sval) => estudie_primary_sval === "Si",
      then: yup
        .string()
        .required(`${estudie_primary_desde.requiredErrorMsg}`)
        .when(["estudie_primary_sval"], {
          is: (estudie_primary_sval) => estudie_primary_sval === "No",
          then: yup.string(),
        }),
    }),

    [estudie_primary_hasta.name]: yup.string().when(["estudie_primary_sval"], {
      is: (estudie_primary_sval) => estudie_primary_sval === "Si",
      then: yup
        .string()
        .required(`${estudie_primary_hasta.requiredErrorMsg}`)
        .when(["estudie_primary_sval"], {
          is: (estudie_primary_sval) => estudie_primary_sval === "No",
          then: yup.string(),
        }),
    }),
  }),

  yup.object().shape({
    [work_banrural.name]: yup
      .string()
      .required(`${work_banrural.requiredErrorMsg}`),
    [work_valNe.name]: yup.string().required(`${work_valNe.requiredErrorMsg}`),
    [work_ne_name.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_name.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_web.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_web.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_dateInit.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_dateInit.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_salaryPersonal.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_salaryPersonal.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_detail.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_detail.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_detailIncome.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_detailIncome.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    [work_ne_whatwill.name]: yup.string().when(["work_valNe"], {
      is: (work_valNe) => work_valNe === "Si",
      then: yup
        .string()
        .required(`${work_ne_whatwill.requiredErrorMsg}`)
        .when(["work_valNe"], {
          is: (work_valNe) => work_valNe === "No",
          then: yup.string(),
        }),
    }),

    work: yup.array({}).of(
      yup.object().shape({
        [work_name.name]: yup
          .string()
          .required(`${work_name.requiredErrorMsg}`),
        [work_position.name]: yup
          .string()
          .required(`${work_position.requiredErrorMsg}`),
        [work_entry.name]: yup
          .string()
          .required(`${work_entry.requiredErrorMsg}`),
        [work_withdrawal.name]: yup.string(),
        [work_salary.name]: yup
          .string()
          .required(`${work_salary.requiredErrorMsg}`),
        [work_boss.name]: yup
          .string()
          .required(`${work_boss.requiredErrorMsg}`),
        [work_chiefposition.name]: yup
          .string()
          .required(`${work_chiefposition.requiredErrorMsg}`),
        [work_phone_boss.name]: yup
          .string()
          .required(`${work_phone_boss.requiredErrorMsg}`),
        [work_withdrawalreason.name]: yup.string(),
        [work_phone_val.name]: yup
          .string()
          .required(`${work_phone_val.requiredErrorMsg}`),
        [work_phone_reason.name]: yup.string().when(["work_phone_val"], {
          is: (work_phone_val) => work_phone_val === "No",
          then: yup
            .string()
            .required(`${work_phone_reason.requiredErrorMsg}`)
            .when(["work_phone_val"], {
              is: (work_phone_val) => work_phone_val === "Si",
              then: yup.string(),
            }),
        }),

        [work_phone.name]: yup.string().when(["work_phone_val"], {
          is: (work_phone_val) => work_phone_val === "Si",
          then: yup
            .string()
            .required(`${work_phone.requiredErrorMsg}`)
            .when(["work_phone_val"], {
              is: (work_phone_val) => work_phone_val === "No",
              then: yup.string(),
            }),
        }),

        [work_reference.name]: yup
          .string()
          .required(`${work_reference.requiredErrorMsg}`),

        [work_reference_reason.name]: yup.string().when(["work_reference"], {
          is: (work_reference) => work_reference === "No",
          then: yup
            .string()
            .required(`${work_reference_reason.requiredErrorMsg}`)
            .when(["work_reference"], {
              is: (work_reference) => work_reference === "Si",
              then: yup.string(),
            }),
        }),
      })
    ),
  }),

  yup.object().shape({
    [economic_vivienda.name]: yup
      .string()
      .required(`${economic_vivienda.requiredErrorMsg}`),
    [economic_food.name]: yup
      .string()
      .required(`${economic_food.requiredErrorMsg}`),
    [economic_aporte.name]: yup
      .string()
      .required(`${economic_aporte.requiredErrorMsg}`),
    [economic_water.name]: yup
      .string()
      .required(`${economic_water.requiredErrorMsg}`),
    [economic_phone.name]: yup
      .string()
      .required(`${economic_phone.requiredErrorMsg}`),
    [economic_recreation.name]: yup
      .string()
      .required(`${economic_recreation.requiredErrorMsg}`),
    [economic_vestuario.name]: yup
      .string()
      .required(`${economic_vestuario.requiredErrorMsg}`),
    [economic_gastos.name]: yup
      .string()
      .required(`${economic_gastos.requiredErrorMsg}`),
    [economic_trans.name]: yup
      .string()
      .required(`${economic_trans.requiredErrorMsg}`),
    [economic_medic.name]: yup
      .string()
      .required(`${economic_medic.requiredErrorMsg}`),
    [economic_estudy.name]: yup
      .string()
      .required(`${economic_estudy.requiredErrorMsg}`),
    [economic_ahorro.name]: yup
      .string()
      .required(`${economic_ahorro.requiredErrorMsg}`),
    [economic_payment_deuda.name]: yup
      .string()
      .required(`${economic_payment_deuda.requiredErrorMsg}`),
    [economic_other.name]: yup
      .string()
      .required(`${economic_other.requiredErrorMsg}`),
    [economic_total.name]: yup.string(),
    economic: yup.array({}).of(
      yup.object().shape({
        [economic_date.name]: yup
          .string()
          .required(`${economic_date.requiredErrorMsg}`),
        [economic_use.name]: yup
          .string()
          .required(`${economic_use.requiredErrorMsg}`),
        [economic_plan.name]: yup
          .string()
          .required(`${economic_plan.requiredErrorMsg}`),
        [economic_bill.name]: yup
          .string()
          .required(`${economic_bill.requiredErrorMsg}`),
        [amount.name]: yup.string().required(`${amount.requiredErrorMsg}`),
        [economic_balance.name]: yup
          .string()
          .required(`${economic_balance.requiredErrorMsg}`),
        [economic_monthly_payment.name]: yup
          .string()
          .required(`${economic_monthly_payment.requiredErrorMsg}`),
        [economic_delinquent_payment.name]: yup
          .string()
          .required(`${economic_delinquent_payment.requiredErrorMsg}`),
      })
    ),
  }),

  yup.object().shape({
    [social_group.name]: yup
      .string()
      .required(`${social_group.requiredErrorMsg}`),
    [social_gtime.name]: yup.string().when(["social_group"], {
      is: (social_group) => social_group === "Si",
      then: yup.string().required(`${social_gtime.requiredErrorMsg}`),
    }),

    [social_politic.name]: yup
      .string()
      .required(`${social_politic.requiredErrorMsg}`),
    [social_politic_name.name]: yup.string().when(["social_politic"], {
      is: (social_politic) => social_politic === "Si",
      then: yup.string().required(`${social_politic_name.requiredErrorMsg}`),
    }),
    [social_politic_relacion.name]: yup.string().when(["social_politic"], {
      is: (social_politic) => social_politic === "Si",
      then: yup
        .string()
        .required(`${social_politic_relacion.requiredErrorMsg}`),
    }),
    [social_politic_puesto.name]: yup.string().when(["social_politic"], {
      is: (social_politic) => social_politic === "Si",
      then: yup.string().required(`${social_politic_puesto.requiredErrorMsg}`),
    }),

    [social_fuma.name]: yup
      .string()
      .required(`${social_fuma.requiredErrorMsg}`),
    [social_fuma_time.name]: yup.string().when(["social_fuma"], {
      is: (social_fuma) => social_fuma === "Si",
      then: yup.string().required(`${social_fuma_time.requiredErrorMsg}`),
    }),

    [social_fuma_frequency.name]: yup
    .string().when(["social_fuma"], {
      is: (social_fuma) => social_fuma === "Si",
      then: yup.string().required(`${social_fuma_time.requiredErrorMsg}`),
    }), 

    [social_alco.name]: yup
      .string()
      .required(`${social_alco.requiredErrorMsg}`),
    [social_alco_time.name]: yup.string().when(["social_alco"], {
      is: (social_alco) => social_alco === "Si",
      then: yup.string().required(`${social_alco_time.requiredErrorMsg}`),
    }),
    [social_alco_bebida.name]: yup.string().when(["social_alco"], {
      is: (social_alco) => social_alco === "Si",
      then: yup.string().required(`${social_alco_bebida.requiredErrorMsg}`),
    }),

    [social_alco_howmuch.name]: yup.string().when(["social_alco"], {
      is: (social_alco) => social_alco === "Si",
      then: yup.string().required(`${social_alco_bebida.requiredErrorMsg}`),
    }),
    [social_alco_frequency.name] : yup.string().when(["social_alco"], {
      is: (social_alco) => social_alco === "Si",
      then: yup.string().required(`${social_alco_bebida.requiredErrorMsg}`),
    }),


    [social_drog.name]: yup
      .string()
      .required(`${social_drog.requiredErrorMsg}`),
    [social_drog_option.name]: yup.string().when(["social_drog"], {
      is: (social_drog) => social_drog === "Si",
      then: yup.string().required(`${social_drog_option.requiredErrorMsg}`),
    }),
    [social_drog_time.name]: yup.string().when(["social_drog"], {
      is: (social_drog) => social_drog === "Si",
      then: yup.string().required(`${social_drog_time.requiredErrorMsg}`),
    }),

    [social_drog_person.name]: yup
      .string()
      .required(`${social_drog_person.requiredErrorMsg}`),

    [social_tatto.name]: yup
      .string()
      .required(`${social_tatto.requiredErrorMsg}`),
    social: yup.array({}).of(
      yup.object().shape({
        [social_tatto_descri.name]: yup
          .string()
          .required(`${social_tatto_descri.requiredErrorMsg}`),
        [social_tatto_sign.name]: yup
          .string()
          .required(`${social_tatto_sign.requiredErrorMsg}`),
        [social_tatto_ubi.name]: yup
          .string()
          .required(`${social_tatto_ubi.requiredErrorMsg}`),
        [social_tatto_fot.name]: yup.string(),
      })
    ),
  }),

  yup.object().shape({
    [criminal_association_option.name]: yup
      .string()
      .required(`${criminal_association_option.requiredErrorMsg}`),
    [criminal_relacion.name]: yup
      .string()
      .when(["criminal_association_option"], {
        is: (criminal_association_option) =>
          criminal_association_option === "Si",
        then: yup.string().required(`${criminal_relacion.requiredErrorMsg}`),
      }),

    [criminal_name.name]: yup.string().when(["criminal_association_option"], {
      is: (criminal_association_option) => criminal_association_option === "Si",
      then: yup.string().required(`${criminal_relacion.requiredErrorMsg}`),
    }),
    [criminal_group_belong.name]: yup
      .string()
      .when(["criminal_association_option"], {
        is: (criminal_association_option) =>
          criminal_association_option === "Si",
        then: yup.string().required(`${criminal_relacion.requiredErrorMsg}`),
      }),

    [criminal_police_option.name]: yup
      .string()
      .required(`${criminal_police_option.requiredErrorMsg}`),

    [criminal_why_stained.name]: yup.string().when(["criminal_police_option"], {
      is: (criminal_police_option) => criminal_police_option === "Si",
      then: yup.string().required(`${criminal_why_stained.requiredErrorMsg}`),
    }),

    [criminal_why_clear.name]: yup.string().when(["criminal_police_option"], {
      is: (criminal_police_option) => criminal_police_option === "Si",
      then: yup.string().required(`${criminal_why_clear.requiredErrorMsg}`),
    }),

    [criminal_was_sued.name]: yup
      .string()
      .required(`${criminal_was_sued.requiredErrorMsg}`),
    [criminal_you_demand.name]: yup
      .string()
      .required(`${criminal_you_demand.requiredErrorMsg}`),
    [criminal_family.name]: yup
      .string()
      .required(`${criminal_family.requiredErrorMsg}`),
    
    [criminal_was_suedwhy.name]: yup.string().when(["criminal_you_demand"], {
      is: (criminal_you_demand) => criminal_you_demand === "Si", 
      then: yup.string().required(`${criminal_was_suedwhy.requiredErrorMsg}`)
    }),
    
    [criminal_you_demandwhy.name]: yup.string().when(["criminal_was_sued"], {
      is: (criminal_was_sued) => criminal_was_sued === "Si", 
      then: yup.string().required(`${criminal_you_demandwhy.requiredErrorMsg}`)
    }),

    criminal: yup.array({}).of(
      yup.object().shape({
        [criminal_family_name.name]: yup
          .string()
          .required(`${criminal_family_name.requiredErrorMsg}`),
        [criminal_family_lastname.name]: yup
          .string()
          .required(`${criminal_family_lastname.requiredErrorMsg}`),
        [criminal_family_age.name]: yup
          .string()
          .required(`${criminal_family_age.requiredErrorMsg}`),
        [criminal_family_civil_status.name]: yup
          .string()
          .required(`${criminal_family_civil_status.requiredErrorMsg}`),
        [criminal_family_profession.name]: yup
          .string()
          .required(`${criminal_family_profession.requiredErrorMsg}`),
        [criminal_family_phone.name]: yup
          .string()
          .required(`${criminal_family_phone.requiredErrorMsg}`),
        [criminal_family_reason.name]: yup
          .string()
          .required(`${criminal_family_reason.requiredErrorMsg}`),
      })
    ),
  }),

  yup.object().shape({
    [disease_hipertension_option.name]: yup
      .string()
      .required(`${disease_hipertension_option.requiredErrorMsg}`),
    [disease_diabetes_option.name]: yup
      .string()
      .required(`${disease_diabetes_option.requiredErrorMsg}`),
    [disease_VIH_option.name]: yup
      .string()
      .required(`${disease_VIH_option.requiredErrorMsg}`),
    [disease_ITS_option.name]: yup
      .string()
      .required(`${disease_ITS_option.requiredErrorMsg}`),
    [disease_gastritis_option.name]: yup
      .string()
      .required(`${disease_gastritis_option.requiredErrorMsg}`),
    [disease_cancer_option.name]: yup
      .string()
      .required(`${disease_cancer_option.requiredErrorMsg}`),
    [disease_cardiopatias_option.name]: yup
      .string()
      .required(`${disease_cardiopatias_option.requiredErrorMsg}`),

    [disease_hipertension_observacion.name]: yup.string(),
    [disease_diabetes_observacion.name]: yup.string(),
    [disease_VIH_observacion.name]: yup.string(),
    [disease_ITS_observacion.name]: yup.string(),
    [disease_gastritis_observacion.name]: yup.string(),
    [disease_cancer_observacion.name]: yup.string(),
    [disease_cardiopatias_observacion.name]: yup.string(),

    [accident_option.name]: yup
      .string()
      .required(`${accident_option.requiredErrorMsg}`),
    [accident_detail.name]: yup.string().when(["accident_option"], {
      is: (accident_option) => accident_option === "Si",
      then: yup.string().required(`${accident_detail.requiredErrorMsg}`),
    }),
    [accident_suffer.name]: yup.string().when(["accident_option"], {
      is: (accident_option) => accident_option === "Si",
      then: yup.string().required(`${accident_suffer.requiredErrorMsg}`),
    }),

    [covid_option.name]: yup
      .string()
      .required(`${covid_option.requiredErrorMsg}`),
    [covid_dosis.name]: yup.string().when(["covid_option"], {
      is: (covid_option) => covid_option === "Si",
      then: yup.string().required(`${covid_dosis.requiredErrorMsg}`),
    }),

    [validate_sex.name]: yup
      .string()
      .required(`${validate_sex.requiredErrorMsg}`),
    [validate_gestacion.name]: yup.string().when(["validate_sex"], {
      is: (validate_sex) => validate_sex === "M",
      then: yup.string().required(`${validate_gestacion.requiredErrorMsg}`),
    }),

    [validate_children.name]: yup
      .string()
      .when(["validate_gestacion", "validate_sex"], {
        is: (validate_gestacion, validate_sex) =>
          validate_sex === "Si" && validate_gestacion === "Si",
        then: yup.string().required(`${validate_children.requiredErrorMsg}`),
      }),

    [validate_lactando.name]: yup.string().when(["validate_sex"], {
      is: (validate_sex) => validate_sex === "M",
      then: yup.string().required(`${validate_gestacion.requiredErrorMsg}`),
    }),

    [validate_lac_month.name]: yup
      .string()
      .when(["validate_lactando", "validate_sex"], {
        is: (validate_lactando, validate_sex) =>
          validate_sex === "M" && validate_lactando === "Si",
        then: yup.string().required(`${validate_lac_month.requiredErrorMsg}`),
      }),

    [validate_lac_age.name]: yup
      .string()
      .when(["validate_lactando", "validate_sex"], {
        is: (validate_lactando, validate_sex) =>
          validate_sex === "M" && validate_lactando === "Si",
        then: yup.string().required(`${validate_lac_age.requiredErrorMsg}`),
      }),
    [validate_dosis.name]: yup
      .string()
      .required(`${validate_dosis.requiredErrorMsg}`),

    disease: yup.array({}).of(
      yup.object().shape({
        [disease_name.name]: yup
          .string()
          .required(`${disease_name.requiredErrorMsg}`),
        [disease_observacion.name]: yup
          .string()
          .required(`${disease_observacion.requiredErrorMsg}`),
      })
    ),

    dosis: yup.array({}).of(
      yup.object().shape({
        [dosis_name.name]: yup
          .string()
          .required(`${dosis_name.requiredErrorMsg}`),
        [dosis_date.name]: yup
          .string()
          .required(`${dosis_date.requiredErrorMsg}`),
        [dosis_dosis.name]: yup
          .string()
          .required(`${dosis_dosis.requiredErrorMsg}`),
      })
    ),
  }),

  yup.object().shape({
    [sindicatos_favor.name]: yup
      .string()
      .required(`${sindicatos_favor.requiredErrorMsg}`),
    [sindicatos_formar.name]: yup
      .string()
      .required(`${sindicatos_formar.requiredErrorMsg}`),
    [sindicatos_why.name]: yup.string().when(["sindicatos_formar"], {
      is: (sindicatos_formar) => sindicatos_formar === "Si",
      then: yup.string().required(`${sindicatos_why.requiredErrorMsg}`),
    }),
  }),

  yup.object().shape({
    [objectivs_corto.name]: yup
      .string()
      .required(`${objectivs_corto.requiredErrorMsg}`),
    [objectivs_mediano.name]: yup
      .string()
      .required(`${objectivs_mediano.requiredErrorMsg}`),
    [objectives_largo.name]: yup
      .string()
      .required(`${objectives_largo.requiredErrorMsg}`),
  }),

  yup.object().shape({
    [honest_p1.name]: yup.string().required(`${honest_p1.requiredErrorMsg}`),
    [honest_p2.name]: yup.string().required(`${honest_p2.requiredErrorMsg}`),
    [honest_p3.name]: yup.string().required(`${honest_p3.requiredErrorMsg}`),
    [honest_p4.name]: yup.string().required(`${honest_p4.requiredErrorMsg}`),
  }),

  yup.object().shape({

   

    [red_faccebookval.name]: yup.string().required(`${red_faccebookval.requiredErrorMsg}`),
    [red_faccebookOtherVal.name]: yup.string().required(`${red_faccebookOtherVal.requiredErrorMsg}`),

     [red_faccebookOther.name]: yup.string().when(["red_faccebookOtherVal"], {
        is: (red_faccebookOtherVal) => red_faccebookOtherVal === "Si", 
        then: yup.string().required(`${red_faccebookOther.requiredErrorMsg}`)
      }),

    [red_faccebook.name]: yup
      .string().when(["red_faccebookval"], {
        is: (red_faccebookval) => red_faccebookval === "Si", 
        then: yup.string().required(`${red_faccebook.requiredErrorMsg}`)
      }),
      
  }),*/
];
