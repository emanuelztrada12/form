import { gql } from "@apollo/client";

export const QUERY = gql`
  query GetFormularioGolden {
    getFormularioGolden {
      tiene_deudas_economia
    }
  }
`;

export const DELETED = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const GET_USERS = gql`
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

export const FORMULARIO = gql`
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
      #changes stepfather 2.2
      family_stepfather_val
      family_stepfather_nametwo
      family_stepfather_surnametwo
      #changes stepmother 2.2
      family_stepmother_val
      family_stepmother_nametwo
      family_stepmother_surnametwo
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
      #add name and lastname
      family_conyugue_died_name
      family_conyugue_died_lastname
      #conyugue changes 2.1
      family_conyugue_relation
      #changes 2.2 conyugue
      family_conyugue_time_relation
      family_conyugue_marriage_val
      family_conyugue_time_marriage
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
        # select and input information
        family_stepbrother_has_information
        family_stepbrother_reason_dont_has
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
      # add information extra
      magister {
        study_master_name
        study_master_place
        study_master_complete
        study_master_schedule
        study_master_semester
      }
      magistertwo {
        study_master_nametwo
        study_master_placetwo
        study_master_completetwo
        study_master_scheduletwo
        study_master_semestertwo
      }
      
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
      #finish diversificado
      estudie_diversificado_place
      diversificado {
        estudies_diversificado_finish_place
        estudies_diversificado_finish_grade
      }
      #changes 2.2
      estudie_primary_department
      estudie_basic_department
      estudie_diversificado_department
      estudie_university_department
      study_magistertwo
      study_currently
      estudies_year_conditiontwo
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
      #condition year study
      estudies_year_condition
      # changes 2.4
      estudie_select_basic
      estudie {
        estudie_select_name
        estudie_select_department
        estudie_select_grade
      }
      # changes 2.5
      estudie_select_curso
      curso {
        estudie_name_curso
        estudie_place_curso
        estudie_department_curso
        estudie_year_curso
      }
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
      economicthree {
        economic_usethree
        economic_billthree
        amountthree
        economic_balancethree
        economic_monthly_paymentthree
        economic_delinquent_paymentthree
        econmic_observacionesthree
      }
      workFamilyBanck {
        work_name_entity
        work_lsname_entity
        work_bank
        work_relation
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
      #changes 2.2
      economic_payment_card
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
      #social changes 2.1
      social_drug
      social_drug_relation
      social_drug_position
      #changes 2.2
      social_value_gather
      social_value_howOften
      social_value_time
      social_value_conditionWork
      social_value_amount
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
      #changes 2.2
      criminal_validation_background
    criminal_because_record
    criminal_because_clear
    criminal_becauseTwo_record
    criminal_becauseTwo_clear
    criminal_whyTwo_stained
    criminal_whyTwo_clear
    criminal_you_demandwhom
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
      gave_covid
      # add data covid
      reason_no_vaccines_covid
      need_vacinnes
      reason_no_true
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
      #sindicatos changes 2.1
      sindicatos_why_two
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
      red_faccebookval_two
    }
  }
`;

