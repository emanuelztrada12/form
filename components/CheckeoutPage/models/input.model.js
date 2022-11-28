import { useMutation } from "@apollo/client";
import { FORMULARIO } from "./query_graphql.model";

export default function modelForm() {
    const [newFormulario] = useMutation(FORMULARIO);
    const inputValues = async (values) => {
        // console.info(`\n\n==> { _submitForm }\n`, values, `\n`, ``);
        let years = new Date(new Date() - new Date(values.general_birth)).getFullYear() - 1970;
        let year = years.toString();

        let suma = parseFloat(values.economic_total) + parseFloat(values.economic_payment_card) + parseFloat(values.economic_payment_deuda);
        let total = suma;

        const { data } = await newFormulario({
            variables: {
                input: {
                    //Informacion general
                    general_name: values.general_name,
                    general_lastname: values.general_lastname,
                    general_married_name: values.general_married_name, // input select
                    general_lastname_married: values.general_lastname_married, // add lastname married
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
                    general_nit_select: values.general_nit_select, // input select
                    general_dpi: values.general_dpi,
                    general_email: values.general_email,
                    general_emergency_phone: values.general_emergency_phone,
                    general_emergency_name: values.general_emergency_name,
                    general_afilacion_select: values.general_afilacion_select, // input select
                    general_irtra: values.general_irtra,
                    general_igss: values.general_igss,
                    vehicle: values.vehicle,
                    biker: values.biker, // biker array
                    license: values.license,

                    family_validate_stepparents: values.family_validate_stepparents,
                    family_validate_son: values.family_validate_son,
                    family_validate_brothers: values.family_validate_brothers,
                    family_validate_stepbrother: values.family_validate_stepbrother,
                    family_validate_conyugue: values.family_validate_conyugue,

                    // #dad
                    family_dad_life: values.family_dad_life,
                    family_dad_name: values.family_dad_name,
                    family_dad_age: values.family_dad_age,
                    family_dad_status: values.family_dad_status,
                    family_dad_working_val: values.family_dad_working_val,
                    family_dad_place: values.family_dad_place,
                    family_dad_company: values.family_dad_company,
                    family_dad_financial_income: values.family_dad_financial_income,
                    family_dad_depend: values.family_dad_depend,
                    family_dad_phone_val: values.family_dad_phone_val,
                    family_dad_phone: values.family_dad_phone,
                    family_dad_no_phone: values.family_dad_no_phone,
                    // #// add changes 2.0
                    family_dad_relation: values.family_dad_relation,
                    family_dad_information: values.family_dad_information,
                    family_dad_reason: values.family_dad_reason,
                    family_dad_why_negative: values.family_dad_why_negative,
                    family_dad_information_negative:
                        values.family_dad_information_negative,
                    // #// add name died
                    family_dad_died_first_name: values.family_dad_died_first_name,
                    family_dad_died_last_name: values.family_dad_died_last_name,
                    family_dad_time_died: values.family_dad_time_died,
                    family_dad_reason_died: values.family_dad_reason_died,
                    family_dad_resident: values.family_dad_resident,
                    family_dad_no_resident: values.family_dad_no_resident,
                    family_dad_condition_resident: values.family_dad_condition_resident,

                    //validation two
                    family_dad_lifetwo: values.family_dad_lifetwo,
                    family_dad_nametwo: values.family_dad_nametwo,
                    family_dad_agetwo: values.family_dad_agetwo,
                    family_dad_statustwo: values.family_dad_statustwo,
                    family_dad_working_valtwo: values.family_dad_working_valtwo,
                    family_dad_placetwo: values.family_dad_placetwo,
                    family_dad_companytwo: values.family_dad_companytwo,
                    family_dad_financial_incometwo:
                        values.family_dad_financial_incometwo,
                    family_dad_dependtwo: values.family_dad_dependtwo,
                    family_dad_phone_valtwo: values.family_dad_phone_valtwo,
                    family_dad_phonetwo: values.family_dad_phonetwo,
                    family_dad_no_phonetwo: values.family_dad_no_phonetwo,
                    // add name died two
                    family_dad_died_first_nametwo: values.family_dad_died_first_nametwo,
                    family_dad_died_last_nametwo: values.family_dad_died_last_nametwo,
                    family_dad_time_diedtwo: values.family_dad_time_diedtwo,
                    family_dad_reason_diedtwo: values.family_dad_reason_diedtwo,
                    family_dad_residenttwo: values.family_dad_residenttwo,
                    family_dad_no_residenttwo: values.family_dad_no_residenttwo,

                    family_dad_condition_residenttwo:
                        values.family_dad_condition_residenttwo,

                    //#mom
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
                    family_mom_relation: values.family_mom_relation,
                    family_mom_information: values.family_mom_information,
                    family_mom_reason: values.family_mom_reason,
                    family_mom_why_negative: values.family_mom_why_negative,
                    family_mom_information_negative:
                        values.family_mom_information_negative,
                    // #// add mother name died
                    family_mom_died_first_name: values.family_mom_died_first_name,
                    family_mom_died_last_name: values.family_mom_died_last_name,
                    vive_family: values.vive_family,

                    family_mom_resident: values.family_mom_resident,
                    family_mom_no_resident: values.family_mom_no_resident,
                    family_mom_condition_resident: values.family_mom_condition_resident,

                    //  #//validation two
                    family_mom_lifetwo: values.family_mom_lifetwo,
                    family_mom_nametwo: values.family_mom_nametwo,
                    family_mom_agetwo: values.family_mom_agetwo,
                    family_mom_statustwo: values.family_mom_statustwo,
                    family_mom_working_valtwo: values.family_mom_working_valtwo,
                    family_mom_placetwo: values.family_mom_placetwo,
                    family_mom_companytwo: values.family_mom_companytwo,

                    family_mom_financial_incometwo:
                        values.family_mom_financial_incometwo,
                    family_mom_dependtwo: values.family_mom_dependtwo,
                    family_mom_phone_valtwo: values.family_mom_phone_valtwo,
                    family_mom_phonetwo: values.family_mom_phonetwo,
                    family_mom_no_phonetwo: values.family_mom_no_phonetwo,
                    //  #// add name died two
                    family_mom_died_first_nametwo: values.family_mom_died_first_nametwo,
                    family_mom_died_last_nametwo: values.family_mom_died_last_nametwo,
                    family_mom_time_diedtwo: values.family_mom_time_diedtwo,
                    family_mom_reason_diedtwo: values.family_mom_reason_diedtwo,
                    family_mom_residenttwo: values.family_mom_residenttwo,
                    family_mom_no_residenttwo: values.family_mom_no_residenttwo,
                    family_mom_condition_residenttwo:
                        values.family_mom_condition_residenttwo,

                    // aditional information
                    you_parents_together: values.you_parents_together,
                    mother_partner_name: values.mother_partner_name,
                    mother_partner_lastname: values.mother_partner_lastname,
                    mother_relationship: values.mother_relationship,
                    father_partner_name: values.father_partner_name,
                    father_partner_lastname: values.father_partner_lastname,
                    father_relationship: values.father_relationship,
                    has_partner_father: values.has_partner_father,
                    has_partner_mother: values.has_partner_mother,

                    // #stepfather
                    family_stepfather_name: values.family_stepfather_name,
                    family_stepfather_age: values.family_stepfather_age,
                    family_stepfather_status: values.family_stepfather_status,
                    family_stepfather_place: values.family_stepfather_place,
                    family_stepfather_company: values.family_stepfather_company,
                    family_stepfather_financial_income:
                        values.family_stepfather_financial_income,
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
                    family_stepfather_val: values.family_stepfather_val,
                    family_stepfather_nametwo: values.family_stepfather_nametwo,
                    family_stepfather_surnametwo: values.family_stepfather_surnametwo,

                    // #stepmother
                    family_stepmother_name: values.family_stepmother_name,
                    family_stepmother_age: values.family_stepmother_age,
                    family_stepmother_status: values.family_stepmother_status,
                    family_stepmother_place: values.family_stepmother_place,
                    family_stepmother_company: values.family_stepmother_company,
                    family_stepmother_financial_income:
                        values.family_stepmother_financial_income,
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
                    family_stepmother_val: values.family_stepmother_val,
                    family_stepmother_nametwo: values.family_stepmother_nametwo,
                    family_stepmother_surnametwo: values.family_stepmother_surnametwo,
                    son: values.son,
                    brothers: values.brothers,
                    stepbrother: values.stepbrother,
                    // conyugue
                    family_conyugue_name: values.family_conyugue_name,
                    family_conyugue_age: values.family_conyugue_age,
                    family_conyugue_status: values.family_conyugue_status,
                    family_conyugue_place: values.family_conyugue_place,
                    family_conyugue_company: values.family_conyugue_company,
                    family_conyugue_financial_income:
                        values.family_conyugue_financial_income,
                    family_conyugue_phone: values.family_conyugue_phone,
                    family_conyugue_depend: values.family_conyugue_depend,
                    family_conyugue_no_phone: values.family_conyugue_no_phone,
                    family_conyugue_time_died: values.family_conyugue_time_died,
                    family_conyugue_reason_died: values.family_conyugue_reason_died,
                    family_conyugue_life: values.family_conyugue_life,
                    family_conyugue_phone_val: values.family_conyugue_phone_val,
                    family_conyugue_working_val: values.family_conyugue_working_val,
                    /* add name and lastname */
                    family_conyugue_died_name: values.family_conyugue_died_name,
                    family_conyugue_died_lastname: values.family_conyugue_died_lastname,
                    family_conyugue_married_val: values.family_conyugue_married_val,
                    family_conyugue_married: values.family_conyugue_married,
                    family_conyugue_partner_val: values.family_conyugue_partner_val,
                    family_conyuguepat_name: values.family_conyuguepat_name,
                    family_conyuguepat_age: values.family_conyuguepat_age,
                    family_conyuguepat_status: values.family_conyuguepat_status,
                    family_conyuguepat_place: values.family_conyuguepat_place,
                    family_conyuguepat_company: values.family_conyuguepat_company,
                    family_conyuguepat_financial_income:
                        values.family_conyuguepat_financial_income,
                    family_conyuguepat_phone: values.family_conyuguepat_phone,
                    family_conyuguepat_depend: values.family_conyuguepat_depend,
                    family_conyuguepat_no_phone: values.family_conyuguepat_no_phone,
                    family_conyuguepat_phone_val: values.family_conyuguepat_phone_val,
                    family_conyuguepat_working_val:
                        values.family_conyuguepat_working_val,
                    //Changes 2.1
                    family_conyugue_relation: values.family_conyugue_relation,
                    //changes 2.2
                    family_conyugue_time_relation: values.family_conyugue_time_relation,
                    family_conyugue_marriage_val: values.family_conyugue_marriage_val,
                    family_conyugue_time_marriage: values.family_conyugue_time_marriage,
                    //abuelo papa y mama
                    family_grandfather_name: values.family_grandfather_name,
                    family_grandfather_age: values.family_grandfather_age,
                    family_grandfather_status: values.family_grandfather_status,
                    family_grandfather_place: values.family_grandfather_place,
                    family_grandfather_company: values.family_grandfather_company,
                    family_grandfather_financial_income:
                        values.family_grandfather_financial_income,
                    family_grandfather_phone: values.family_grandfather_phone,
                    family_grandfather_depend: values.family_grandfather_depend,
                    family_grandfather_no_phone: values.family_grandfather_no_phone,
                    family_grandfather_time_died: values.family_grandfather_time_died,
                    family_grandfather_reason_died:
                        values.family_grandfather_reason_died,
                    family_grandfather_life: values.family_grandfather_life,
                    family_grandfather_phone_val: values.family_grandfather_phone_val,
                    family_grandfather_working_val:
                        values.family_grandfather_working_val,
                    family_grandfather_lifeno_name:
                        values.family_grandfather_lifeno_name,
                    family_grandfather_lifeno_firstname:
                        values.family_grandfather_lifeno_firstname,
                    family_grandmother_name: values.family_grandmother_name,
                    family_grandmother_age: values.family_grandmother_age,
                    family_grandmother_status: values.family_grandmother_status,
                    family_grandmother_place: values.family_grandmother_place,
                    family_grandmother_company: values.family_grandmother_company,
                    family_grandmother_financial_income:
                        values.family_grandmother_financial_income,
                    family_grandmother_phone: values.family_grandmother_phone,
                    family_grandmother_depend: values.family_grandmother_depend,
                    family_grandmother_no_phone: values.family_grandmother_no_phone,
                    family_grandmother_time_died: values.family_grandmother_time_died,
                    family_grandmother_reason_died:
                        values.family_grandmother_reason_died,
                    family_grandmother_life: values.family_grandmother_life,
                    family_grandmother_phone_val: values.family_grandmother_phone_val,
                    family_grandmother_working_val:
                        values.family_grandmother_working_val,
                    family_grandmother_lifeno_name:
                        values.family_grandmother_lifeno_name,
                    family_grandmother_lifeno_firstname:
                        values.family_grandmother_lifeno_firstname,
                    //madre
                    family_grandfather_nametwo: values.family_grandfather_nametwo,
                    family_grandfather_agetwo: values.family_grandfather_agetwo,
                    family_grandfather_placetwo: values.family_grandfather_placetwo,
                    family_grandfather_companytwo: values.family_grandfather_companytwo,
                    family_grandfather_financial_incometwo:
                        values.family_grandfather_financial_incometwo,
                    family_grandfather_phonetwo: values.family_grandfather_phonetwo,
                    family_grandfather_dependtwo: values.family_grandfather_dependtwo,
                    family_grandfather_no_phonetwo:
                        values.family_grandfather_no_phonetwo,
                    family_grandfather_time_diedtwo:
                        values.family_grandfather_time_diedtwo,
                    family_grandfather_reason_diedtwo:
                        values.family_grandfather_reason_diedtwo,
                    family_grandfather_lifetwo: values.family_grandfather_lifetwo,
                    family_grandfather_phone_valtwo:
                        values.family_grandfather_phone_valtwo,
                    family_grandfather_working_valtwo:
                        values.family_grandfather_working_valtwo,
                    family_grandfather_lifeno_nametwo:
                        values.family_grandfather_lifeno_nametwo,
                    family_grandfather_lifeno_firstnametwo:
                        values.family_grandfather_lifeno_firstnametwo,
                    family_grandmother_nametwo: values.family_grandmother_nametwo,
                    family_grandmother_agetwo: values.family_grandmother_agetwo,
                    family_grandmother_statustwo: values.family_grandmother_statustwo,
                    family_grandmother_placetwo: values.family_grandmother_placetwo,
                    family_grandmother_companytwo: values.family_grandmother_companytwo,
                    family_grandmother_financial_incometwo:
                        values.family_grandmother_financial_incometwo,
                    family_grandmother_phonetwo: values.family_grandmother_phonetwo,
                    family_grandmother_dependtwo: values.family_grandmother_dependtwo,
                    family_grandmother_no_phonetwo:
                        values.family_grandmother_no_phonetwo,
                    family_grandmother_time_diedtwo:
                        values.family_grandmother_time_diedtwo,
                    family_grandmother_reason_diedtwo:
                        values.family_grandmother_reason_diedtwo,
                    family_grandmother_lifetwo: values.family_grandmother_lifetwo,
                    family_grandmother_phone_valtwo:
                        values.family_grandmother_phone_valtwo,
                    family_grandmother_working_valtwo:
                        values.family_grandmother_working_valtwo,
                    family_grandmother_lifeno_nametwo:
                        values.family_grandmother_lifeno_nametwo,
                    family_grandmother_lifeno_firstnametwo:
                        values.family_grandmother_lifeno_firstnametwo,

                    estudie_university_name: values.estudie_university_name,
                    estudie_university_uniname: values.estudie_university_uniname,
                    estudie_university_semester: values.estudie_university_semester,
                    estudie_university_val: values.estudie_university_val,
                    estudie_university_title: values.estudie_university_title,
                    estudie_university_sede: values.estudie_university_sede,
                    estudie_university_year_graduation:
                        values.estudie_university_year_graduation,
                    estudie_university_no_sede: values.estudie_university_no_sede,
                    estudie_university_hour: values.estudie_university_hour,
                    /* add */
                    study_magister: values.study_magister,
                    wich_career: values.wich_career,
                    select_schedules: values.select_schedules,
                    why_not_schedules: values.why_not_schedules,
                    /* add master data */
                    magister: values.magister,
                    //changes 2.2
                    study_magistertwo: values.study_magistertwo,
                    magistertwo: values.magistertwo,
                    study_currently: values.study_currently,

                    estudie_diversificado_sval: values.estudie_diversificado_sval,
                    estudie_diversificado_name: values.estudie_diversificado_name,
                    estudie_diversificado_uniname: values.estudie_diversificado_uniname,
                    estudie_diversificado_desde: values.estudie_diversificado_desde,
                    estudie_diversificado_hasta: values.estudie_diversificado_hasta,
                    //finisher diversificado
                    estudie_diversificado_place: values.estudie_diversificado_place,
                    diversificado: values.diversificado,

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

                    //#changes 2.2
                    estudie_primary_department: values.estudie_primary_department,
                    estudie_basic_department: values.estudie_basic_department,
                    estudie_diversificado_department: values.estudie_diversificado_department,
                    estudie_university_department: values.estudie_university_department,
                    //study_master_semester: values.study_master_semester,
                    // repeate year
                    estudies_year_condition: values.estudies_year_condition,
                    estudies_year_conditiontwo: values.estudies_year_conditiontwo,

                    // changes 2.4
                    estudie_select_basic: values.estudie_select_basic,
                    estudie: values.estudie,

                    // changes 2.5
                    estudie_select_curso: values.estudie_select_curso,
                    curso: values.curso,

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
                    /* add data */
                    work_select_entity: values.work_select_entity,

                    // Changes 2.3

                    workFamilyBanck: values.workFamilyBanck,

                    //economic
                    economic: values.economic,
                    economicother: values.economicother,
                    // changes 2.2
                    economicthree: values.economicthree,
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
                    economic_total: total,

                    //changes 2.2
                    economic_payment_card: values.economic_payment_card,

                    //social
                    social_group: values.social_group,
                    social_gtime: values.social_gtime,
                    social_politic: values.social_politic,
                    social_politic_name: values.social_politic_name,
                    social_politic_relacion: values.social_politic_relacion,
                    social_politic_puesto: values.social_politic_puesto,
                    social_fuma: values.social_fuma,
                    social_fuma_time: values.social_fuma_time,
                    social_alco: values.social_alco,
                    social_alco_time: values.social_alco_time,
                    social_alco_bebida: values.social_alco_bebida,
                    social_drog: values.social_drog,
                    social_drog_option: values.social_drog_option,
                    social_drog_time: values.social_drog_time,
                    social_drog_person: values.social_drog_person,
                    social_tatto: values.social_tatto,
                    social: values.social,
                    social_fuma_frequency: values.social_fuma_frequency,
                    social_alco_howmuch: values.social_alco_howmuch,
                    social_alco_frequency: values.social_alco_frequency,
                    // changes 2.1
                    social_drug: values.social_drug,
                    social_drug_relation: values.social_drug_relation,
                    social_drug_position: values.social_drug_position,

                    // changes 2.2
                    social_value_gather: values.social_value_gather,
                    social_value_howOften: values.social_value_howOften,
                    social_value_time: values.social_value_time,
                    social_value_conditionWork: values.social_value_conditionWork,
                    social_value_amount: values.social_value_amount,

                    criminal_association_option: values.criminal_association_option,
                    criminal_relacion: values.criminal_relacion,
                    criminal_name: values.criminal_name,
                    criminal_group_belong: values.criminal_group_belong,
                    criminal_police_option: values.criminal_police_option,
                    criminal_why_stained: values.criminal_why_stained,
                    criminal_why_clear: values.criminal_why_clear,
                    criminal_family: values.criminal_family,
                    criminal_was_sued: values.criminal_was_sued,
                    criminal_you_demand: values.criminal_you_demand,
                    criminal: values.criminal,

                    //changes 2.2
                    criminal_validation_background: values.criminal_validation_background,
                    criminal_because_record: values.criminal_because_record,
                    criminal_because_clear: values.criminal_because_clear,
                    criminal_becauseTwo_record: values.criminal_becauseTwo_record,
                    criminal_becauseTwo_clear: values.criminal_becauseTwo_clear,
                    criminal_whyTwo_stained: values.criminal_whyTwo_stained,
                    criminal_whyTwo_clear: values.criminal_whyTwo_clear,
                    criminal_you_demandwhom: values.criminal_you_demandwhom,

                    dosis: values.dosis,
                    disease: values.disease,

                    disease_hipertension_option: values.disease_hipertension_option,
                    disease_diabetes_option: values.disease_diabetes_option,
                    disease_VIH_option: values.disease_VIH_option,
                    disease_ITS_option: values.disease_ITS_option,
                    disease_gastritis_option: values.disease_gastritis_option,
                    disease_cancer_option: values.disease_cancer_option,
                    disease_cardiopatias_option: values.disease_cardiopatias_option,
                    disease_hipertension_observacion:
                        values.disease_hipertension_observacion,
                    disease_diabetes_observacion: values.disease_diabetes_observacion,
                    disease_VIH_observacion: values.disease_VIH_observacion,
                    disease_ITS_observacion: values.disease_ITS_observacion,
                    disease_gastritis_observacion: values.disease_gastritis_observacion,
                    disease_cancer_observacion: values.disease_cancer_observacion,
                    disease_cardiopatias_observacion:
                        values.disease_cardiopatias_observacion,
                    accident_option: values.accident_option,
                    accident_detail: values.accident_detail,
                    accident_suffer: values.accident_suffer,
                    covid_option: values.covid_option,
                    covid_dosis: values.covid_dosis,
                    gave_covid: values.gave_covid,
                    /* add covid information */
                    reason_no_vaccines_covid: values.reason_no_vaccines_covid,
                    need_vacinnes: values.need_vacinnes,
                    reason_no_true: values.reason_no_true,
                    validate_sex: values.validate_sex,
                    validate_gestacion: values.validate_gestacion,
                    validate_children: values.validate_children,
                    validate_lactando: values.validate_lactando,
                    validate_lac_month: values.validate_lac_month,
                    validate_lac_age: values.validate_lac_age,
                    validate_dosis: values.validate_dosis,

                    objectivs_corto: values.objectivs_corto,
                    objectivs_mediano: values.objectivs_mediano,
                    objectives_largo: values.objectives_largo,

                    sindicatos_favor: values.sindicatos_favor,
                    sindicatos_formar: values.sindicatos_formar,
                    sindicatos_why: values.sindicatos_why,
                    //changes 2.1
                    sindicatos_why_two: values.sindicatos_why_two,

                    honest_p1: values.honest_p1,
                    honest_p2: values.honest_p2,
                    honest_p3: values.honest_p3,
                    honest_p4: values.honest_p4,
                    whyIdentityHidde: values.whyIdentityHidde,
                    documentInOrder: values.documentInOrder,

                    red_faccebook: values.red_faccebook,
                    red_faccebookOther: values.red_faccebookOther,
                    red_faccebookval: values.red_faccebookval,
                    red_faccebookOtherVal: values.red_faccebookOtherVal,
                    validation_form: values.validation_form,
                    red_faccebookval_two: values.red_faccebookval_two,
                },
            },
        });
        console.log(data); 
    }

    return inputValues;
}

