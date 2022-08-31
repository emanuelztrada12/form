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
    general_email,
    /* add new condition */
    general_nit_select,
    general_afilacion_select,
    general_irtra,
    general_igss,
    general_lastname_married,
    general_married_name,

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
    // add name
    family_dad_died_first_name,
    family_dad_died_last_name,

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

    // changes 2.1
    family_dad_resident,
    family_dad_no_resident,
    family_dad_condition_resident,
    family_dad_residenttwo,
    family_dad_no_residenttwo,
    family_dad_condition_residenttwo,


    // changes
    family_dad_relation,
    // yes
    family_dad_information,
    family_dad_reason,
    // no
    family_dad_why_negative,
    family_dad_information_negative,

    family_validate_stepparents,
    family_validate_son,
    family_validate_brothers,
    family_validate_stepbrother,
    family_validate_conyugue,
    family_validate_grandfather,

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
    // add name
    family_mom_died_first_name,
    family_mom_died_last_name,
    family_mom_reason_died,
    family_mom_life,
    family_mom_phone_val,
    family_mom_working_val,
    // changes
    family_mom_relation,
    // yes
    family_mom_information,
    family_mom_reason,
    // no
    family_mom_why_negative,
    family_mom_information_negative,

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

    //changes 2.1
    family_mom_resident,
    family_mom_no_resident,
    family_mom_condition_resident,
    family_mom_residenttwo,
    family_mom_no_residenttwo,
    family_mom_condition_residenttwo,

    /* for two parents */
    you_parents_together,
    has_partner_father,
    has_partner_mother,

    /* --- INFORMATION COUPLES MOTHER --- */
    mother_partner_name,
    mother_partner_lastname,
    mother_relationship,

    /* --- INFORMATION COUPLES MOTHER --- */
    father_partner_name,
    father_partner_lastname,
    father_relationship,

    vive_family,

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
    family_conyuguepat_time_died,
    family_conyuguepat_reason_died,
    family_conyuguepat_life,
    family_conyuguepat_phone_val,
    /* add name */
    family_conyugue_died_name,
    family_conyugue_died_lastname,

    //parte del padre (abuelos)
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

    //parte de la madre (abuelos)
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
    /* add studies */
    study_magister,
    wich_career,
    select_schedules,
    why_not_schedules,

    //Diversificado
    estudie_diversificado_sval,
    estudie_diversificado_name,
    estudie_diversificado_uniname,
    estudie_diversificado_desde,
    estudie_diversificado_hasta,

    //basico
    estudie_basic_sval,
    estudie_basic_uniname,
    estudie_basic_desde,
    estudie_basic_hasta,

    //primary
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
    work_had_page,
    work_ne_dateInit,
    work_ne_salaryPersonal,
    work_ne_detail,
    work_ne_detailIncome,
    work_ne_whatwill,
    /* add data */
    work_select_entity,
    work_name_entity,
    work_lsname_entity,
    work_bank,
    work_relation,
    //ecomomic

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

    //social
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
    criminal_was_suedwhy,
    criminal_you_demandwhy,

    //HEAL
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
    accident_option,
    accident_detail,
    accident_suffer,
    covid_option,
    gave_covid,
    covid_dosis,
    validate_sex,
    validate_gestacion,
    validate_children,
    validate_lactando,
    validate_lac_month,
    validate_lac_age,
    validate_dosis,

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
    whyIdentityHidde,
    documentInOrder,

    //facebook
    red_faccebook,
    red_faccebookOther,
    red_faccebookval,
    red_faccebookOtherVal,
    validation_form,
  },
} = generalFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //validation form
  [validation_form.name]: false,

  //general
  [general_name.name]: "",
  [general_lastname.name]: "",
  [general_place_birth.name]: "",
  [general_age.name]: "",
  [general_civil_status.name]: "",
  [general_profession.name]: "",
  [general_direction.name]: "",
  [general_time_reside.name]: "",
  [general_emergency_name.name]: "",
  [general_emergency_kinship.name]: "",
  [general_previous_direction.name]: "",
  [general_phone.name]: "",
  [general_emergency_phone.name]: "",
  [general_dpi.name]: "",
  [general_nit.name]: "",
  [general_email.name]: "",
  // you need to keep the default value
  general_birth: new Date().toISOString().split("T")[0],
  vehicle: [],
  license: [],

    // add new variables
  [general_nit_select.name]: "",
  [general_afilacion_select.name]: "",
  [general_irtra.name]: "",
  [general_igss.name]: "",
  [general_lastname_married.name]: "",
  [general_married_name.name]: "",
  biker: [],


  //validate the inputs
  [family_validate_stepparents.name]: "",
  [family_validate_son.name]: "",
  [family_validate_brothers.name]: "",
  [family_validate_stepbrother.name]: "",
  [family_validate_conyugue.name]: "",
  [family_validate_grandfather.name]: "",

  //dad
  [family_dad_name.name]: "",
  [family_dad_age.name]: "",
  [family_dad_status.name]: "",
  [family_dad_place.name]: "",
  [family_dad_company.name]: "",
  [family_dad_financial_income.name]: "",
  [family_dad_phone.name]: "",
  [family_dad_depend.name]: "",
  [family_dad_no_phone.name]: "",
  [family_dad_time_died.name]: "",
  // add name father died
  [family_dad_died_first_name.name]: "",
  [family_dad_died_last_name.name]: "",
  /* -- */
  [family_dad_reason_died.name]: "",
  [family_dad_phone.name]: "",
  [family_dad_life.name]: "",
  [family_dad_phone_val.name]: "",
  [family_dad_working_val.name]: "",
  // changes
  [family_dad_relation.name]: "",
  [family_dad_information.name]: "",
  [family_dad_reason.name]: "",
  [family_dad_why_negative.name]: "",
  [family_dad_information_negative.name]: "",

  // changes dad 2.1
  [family_dad_resident.name]: "",
  [family_dad_no_resident.name]: "",
  [family_dad_condition_resident.name]: "",

  // changestwo dad 2.1
  [family_dad_residenttwo.name]: "",
  [family_dad_no_residenttwo.name]: "",
  [family_dad_condition_residenttwo.name]: "",

  [family_dad_lifetwo.name]: "",
  [family_dad_nametwo.name]: "",
  [family_dad_agetwo.name]: "",
  [family_dad_statustwo.name]: "",
  [family_dad_working_valtwo.name]: "",
  [family_dad_placetwo.name]: "",
  [family_dad_companytwo.name]: "",
  [family_dad_financial_incometwo.name]: "",
  [family_dad_dependtwo.name]: "",
  [family_dad_phone_valtwo.name]: "",
  [family_dad_phonetwo.name]: "",
  [family_dad_no_phonetwo.name]: "",
  // add name died two
  [family_dad_died_first_nametwo.name]: "",
  [family_dad_died_last_nametwo.name]: "",
  [family_dad_time_diedtwo.name]: "",
  [family_dad_reason_diedtwo.name]: "",

  //mom
  [family_mom_name.name]: "",
  [family_mom_age.name]: "",
  [family_mom_status.name]: "",
  [family_mom_place.name]: "",
  [family_mom_company.name]: "",
  [family_mom_financial_income.name]: "",
  [family_mom_phone.name]: "",
  [family_mom_depend.name]: "",
  [family_mom_no_phone.name]: "",
  [family_mom_time_died.name]: "",
  // add name mom died
  [family_mom_died_first_name.name]: "",
  [family_mom_died_last_name.name]: "",
  /* -- */
  [family_mom_life.name]: "",
  [family_mom_phone_val.name]: "",
  [family_mom_working_val.name]: "",
  [family_mom_reason_died.name]: "",
  // changes 2.0
  [family_mom_relation.name]: "",
  [family_mom_information.name]: "",
  [family_mom_reason.name]: "",
  [family_mom_why_negative.name]: "",
  [family_mom_information_negative.name]: "",

  [family_mom_lifetwo.name]: "",
  [family_mom_nametwo.name]: "",
  [family_mom_agetwo.name]: "",
  [family_mom_statustwo.name]: "",
  [family_mom_working_valtwo.name]: "",
  [family_mom_placetwo.name]: "",
  [family_mom_companytwo.name]: "",
  [family_mom_financial_incometwo.name]: "",
  [family_mom_dependtwo.name]: "",
  [family_mom_phone_valtwo.name]: "",
  [family_mom_phonetwo.name]: "",
  [family_mom_no_phonetwo.name]: "",
  // add name died two
  [family_mom_died_first_nametwo.name]: "",
  [family_mom_died_last_nametwo.name]: "",
  [family_mom_time_diedtwo.name]: "",
  [family_mom_reason_diedtwo.name]: "",
  [vive_family.name]: "",

  // changes 2.1
  [family_mom_resident.name]: "",
  [family_mom_no_resident.name]: "",
  [family_mom_condition_resident.name]: "",
  [family_mom_residenttwo.name]: "",
  [family_mom_no_residenttwo.name]: "",
  [family_mom_condition_residenttwo.name]: "",


  //stepfather
  [family_stepfather_name.name]: "",
  [family_stepfather_age.name]: "",
  [family_stepfather_status.name]: "",
  [family_stepfather_place.name]: "",
  [family_stepfather_company.name]: "",
  [family_stepfather_financial_income.name]: "",
  [family_stepfather_phone.name]: "",
  [family_stepfather_depend.name]: "",
  [family_stepfather_no_phone.name]: "",
  [family_stepfather_time_died.name]: "",
  [family_stepfather_reason_died.name]: "",
  [family_stepfather_info.name]: "",
  [family_stepfather_life.name]: "",
  [family_stepfather_phone_val.name]: "",
  [family_stepfather_working_val.name]: "",
  [family_stepfather_noInfo.name]: "",

  //stepmother
  [family_stepmother_name.name]: "",
  [family_stepmother_age.name]: "",
  [family_stepmother_status.name]: "",
  [family_stepmother_place.name]: "",
  [family_stepmother_company.name]: "",
  [family_stepmother_financial_income.name]: "",
  [family_stepmother_phone.name]: "",
  [family_stepmother_depend.name]: "",
  [family_stepmother_no_phone.name]: "",
  [family_stepmother_time_died.name]: "",
  [family_stepmother_reason_died.name]: "",
  [family_stepmother_info.name]: "",
  [family_stepmother_life.name]: "",
  [family_stepmother_phone_val.name]: "",
  [family_stepmother_working_val.name]: "",
  [family_stepmother_noInfo.name]: "",

  //son
  son: [],
  //brothers
  brothers: [],
  //stepbrother
  stepbrother: [],
  //grandfather
  grandfather: [],

  /* INFORMATION EXCATLY */
  [you_parents_together.name]: "",
  [mother_partner_name.name]: "",
  [mother_partner_lastname.name]: "",
  [mother_relationship.name]: "",
  [father_partner_name.name]: "",
  [father_partner_lastname.name]: "",
  [father_relationship.name]: "",
  [has_partner_father.name]: "",
  [has_partner_mother.name]: "",

  //conyugue
  [family_conyugue_name.name]: "",
  [family_conyugue_age.name]: "",
  [family_conyugue_status.name]: "",
  [family_conyugue_place.name]: "",
  [family_conyugue_company.name]: "",
  [family_conyugue_financial_income.name]: "",
  [family_conyugue_phone.name]: "",
  [family_conyugue_depend.name]: "",
  [family_conyugue_no_phone.name]: "",
  [family_conyugue_time_died.name]: "",
  [family_conyugue_reason_died.name]: "",
  [family_conyugue_life.name]: "",
  [family_conyugue_phone_val.name]: "",
  [family_conyugue_working_val.name]: "",
  [family_conyugue_married_val.name]: "",
  [family_conyugue_married.name]: "",
  [family_conyugue_partner_val.name]: "",
  /* add name and lastname */
  [family_conyugue_died_name.name]: "",
  [family_conyugue_died_lastname.name]: "",

  //conyuguepat
  [family_conyuguepat_name.name]: "",
  [family_conyuguepat_age.name]: "",
  [family_conyuguepat_status.name]: "",
  [family_conyuguepat_place.name]: "",
  [family_conyuguepat_company.name]: "",
  [family_conyuguepat_financial_income.name]: "",
  [family_conyuguepat_phone.name]: "",
  [family_conyuguepat_depend.name]: "",
  [family_conyuguepat_no_phone.name]: "",
  [family_conyuguepat_time_died.name]: "",
  [family_conyuguepat_reason_died.name]: "",
  [family_conyuguepat_life.name]: "",
  [family_conyuguepat_phone_val.name]: "",

  //abuelos parte del papa
  [family_grandfather_name.name]: "",
  [family_grandfather_age.name]: "",
  [family_grandfather_status.name]: "",
  [family_grandfather_place.name]: "",
  [family_grandfather_company.name]: "",
  [family_grandfather_financial_income.name]: "",
  [family_grandfather_phone.name]: "",
  [family_grandfather_depend.name]: "",
  [family_grandfather_no_phone.name]: "",
  [family_grandfather_time_died.name]: "",
  [family_grandfather_reason_died.name]: "",
  [family_grandfather_life.name]: "",
  [family_grandfather_phone_val.name]: "",
  [family_grandfather_working_val.name]: "",
  [family_grandfather_lifeno_name.name]: "",
  [family_grandfather_lifeno_firstname.name]: "",
  [family_grandmother_name.name]: "",
  [family_grandmother_age.name]: "",
  [family_grandmother_status.name]: "",
  [family_grandmother_place.name]: "",
  [family_grandmother_company.name]: "",
  [family_grandmother_financial_income.name]: "",
  [family_grandmother_phone.name]: "",
  [family_grandmother_depend.name]: "",
  [family_grandmother_no_phone.name]: "",
  [family_grandmother_time_died.name]: "",
  [family_grandmother_reason_died.name]: "",
  [family_grandmother_life.name]: "",
  [family_grandmother_phone_val.name]: "",
  [family_grandmother_working_val.name]: "",
  [family_grandmother_lifeno_name.name]: "",
  [family_grandmother_lifeno_firstname.name]: "",

  //abuelos por parte de la mama
  [family_grandfather_nametwo.name]: "",
  [family_grandfather_agetwo.name]: "",
  [family_grandfather_statustwo.name]: "",
  [family_grandfather_placetwo.name]: "",
  [family_grandfather_companytwo.name]: "",
  [family_grandfather_financial_incometwo.name]: "",
  [family_grandfather_phonetwo.name]: "",
  [family_grandfather_dependtwo.name]: "",
  [family_grandfather_no_phonetwo.name]: "",
  [family_grandfather_time_diedtwo.name]: "",
  [family_grandfather_reason_diedtwo.name]: "",
  [family_grandfather_lifetwo.name]: "",
  [family_grandfather_phone_valtwo.name]: "",
  [family_grandfather_working_valtwo.name]: "",
  [family_grandfather_lifeno_nametwo.name]: "",
  [family_grandfather_lifeno_firstnametwo.name]: "",
  [family_grandmother_nametwo.name]: "",
  [family_grandmother_agetwo.name]: "",
  [family_grandmother_statustwo.name]: "",
  [family_grandmother_placetwo.name]: "",
  [family_grandmother_companytwo.name]: "",
  [family_grandmother_financial_incometwo.name]: "",
  [family_grandmother_phonetwo.name]: "",
  [family_grandmother_dependtwo.name]: "",
  [family_grandmother_no_phonetwo.name]: "",
  [family_grandmother_time_diedtwo.name]: "",
  [family_grandmother_reason_diedtwo.name]: "",
  [family_grandmother_lifetwo.name]: "",
  [family_grandmother_phone_valtwo.name]: "",
  [family_grandmother_working_valtwo.name]: "",
  [family_grandmother_lifeno_nametwo.name]: "",
  [family_grandmother_lifeno_firstnametwo.name]: "",

  //estudent
  [estudie_university_name.name]: "",
  [estudie_university_uniname.name]: "",
  [estudie_university_semester.name]: "",
  [estudie_university_val.name]: "",
  [estudie_university_title.name]: "",
  [estudie_university_sede.name]: "",
  [estudie_university_year_graduation.name]: "",
  [estudie_university_no_sede.name]: "",
  [estudie_university_hour.name]: "",
  [estudie_university_sval.name]: "",
  /* add data */
  [study_magister.name]: "",
  [wich_career.name]: "",
  [select_schedules.name]: "",
  [why_not_schedules.name]: "",

  //Diversificado
  [estudie_diversificado_sval.name]: "",
  [estudie_diversificado_name.name]: "",
  [estudie_diversificado_uniname.name]: "",
  [estudie_diversificado_desde.name]: "",
  [estudie_diversificado_hasta.name]: "",

  //Basico
  [estudie_basic_sval.name]: "",
  [estudie_basic_uniname.name]: "",
  [estudie_basic_desde.name]: "",
  [estudie_basic_hasta.name]: "",

  //primary
  [estudie_primary_sval.name]: "",
  [estudie_primary_uniname.name]: "",
  [estudie_primary_desde.name]: "",
  [estudie_primary_hasta.name]: "",

  //work
  [work_name.name]: "",
  [work_position.name]: "",
  [work_entry.name]: "",
  [work_withdrawal.name]: "",
  [work_salary.name]: "",
  [work_boss.name]: "",
  [work_chiefposition.name]: "",
  [work_phone.name]: "",
  [work_phone_boss.name]: "",
  [work_withdrawalreason.name]: "",
  [work_phone_val.name]: "",
  [work_phone_reason.name]: "",
  [work_reference.name]: "",
  [work_reference_reason.name]: "",
  [work_banrural.name]: "",

  [work_valNe.name]: "",
  [work_ne_name.name]: "",
  [work_ne_web.name]: "",
  [work_had_page.name]: "",
  [work_ne_dateInit.name]: "",
  [work_ne_salaryPersonal.name]: "",
  [work_ne_detail.name]: "",
  [work_ne_detailIncome.name]: "",
  [work_ne_whatwill.name]: "",
  /* add data work */
  [work_select_entity.name]: "",
  [work_name_entity.name]: "",
  [work_lsname_entity.name]: "",
  [work_bank.name]: "",
  [work_relation.name]: "",

  //Economic
  economic: [],
  economicother: [], 
  [economic_vivienda.name]: "",
  [economic_food.name]: "",
  [economic_aporte.name]: "",
  [economic_water.name]: "",
  [economic_phone.name]: "",
  [economic_recreation.name]: "",
  [economic_vestuario.name]: "",
  [economic_gastos.name]: "",
  [economic_trans.name]: "",
  [economic_medic.name]: "",
  [economic_estudy.name]: "",
  [economic_ahorro.name]: "",
  [economic_payment_deuda.name]: "",
  [economic_other.name]: "",
  [economic_total.name]: "",

  social: [],
  [social_group.name]: "",
  [social_gtime.name]: "",
  [social_politic.name]: "",
  [social_politic_name.name]: "",
  [social_politic_relacion.name]: "",
  [social_politic_puesto.name]: "",
  [social_fuma.name]: "",
  [social_fuma_time.name]: "",
  [social_alco.name]: "",
  [social_alco_time.name]: "",
  [social_alco_bebida.name]: "",
  [social_drog.name]: "",
  [social_drog_option.name]: "",
  [social_drog_time.name]: "",
  [social_drog_person.name]: "",
  [social_tatto.name]: "",
  [social_fuma_frequency.name]: "", 
  [social_alco_howmuch.name]: "", 
  [social_alco_frequency.name]: "",

  criminal: [],
  [criminal_association_option.name]: "",
  [criminal_relacion.name]: "",
  [criminal_name.name]: "",
  [criminal_group_belong.name]: "",
  [criminal_police_option.name]: "",
  [criminal_why_stained.name]: "",
  [criminal_why_clear.name]: "",
  [criminal_family.name]: "",
  [criminal_was_sued.name]: "",
  [criminal_you_demand.name]: "",
  [criminal_was_suedwhy.name]: "",
  [criminal_you_demandwhy.name]: "",

  //heal
  [disease_hipertension_option.name]: "",
  [disease_diabetes_option.name]: "",
  [disease_VIH_option.name]: "",
  [disease_ITS_option.name]: "",
  [disease_gastritis_option.name]: "",
  [disease_cancer_option.name]: "",
  [disease_cardiopatias_option.name]: "",
  [disease_hipertension_observacion.name]: "",
  [disease_diabetes_observacion.name]: "",
  [disease_VIH_observacion.name]: "",
  [disease_ITS_observacion.name]: "",
  [disease_gastritis_observacion.name]: "",
  [disease_cancer_observacion.name]: "",
  [disease_cardiopatias_observacion.name]: "",
  [accident_option.name]: "",
  [accident_detail.name]: "",
  [accident_suffer.name]: "",
  [covid_option.name]: "",
  [gave_covid.name]: "",
  [covid_dosis.name]: "",
  [validate_sex.name]: "",
  [validate_gestacion.name]: "",
  [validate_children.name]: "",
  [validate_lactando.name]: "",
  [validate_lac_month.name]: "",
  [validate_lac_age.name]: "",
  [validate_dosis.name]: "",
  dosis: [],
  disease: [],

  //objectivs
  [objectivs_corto.name]: "",
  [objectivs_mediano.name]: "",
  [objectives_largo.name]: "",

  [sindicatos_favor.name]: "",
  [sindicatos_formar.name]: "",
  [sindicatos_why.name]: "",

  [honest_p1.name]: "",
  [honest_p2.name]: "",
  [honest_p3.name]: "",
  [honest_p4.name]: "",
  [whyIdentityHidde.name]: "",
  [documentInOrder.name]: "",

  [red_faccebook.name]: "",
  [red_faccebookOther.name]: "",
  [red_faccebookval.name]: "",
  [red_faccebookOtherVal.name]: "",
};
