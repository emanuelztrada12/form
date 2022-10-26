// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: "generalForm",
  formField: {
    //general
    general_name: {
      name: "general_name",
      label: "Ingrese sus nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    general_lastname: {
      name: "general_lastname",
      label: "Ingrese sus apellidos*",
      requiredErrorMsg: "La información es requerida",
    },
    general_age: {
      name: "general_age",
      label: "Ingrese su edad*",
      requiredErrorMsg: "La información es requerida",
    },
    general_birth: {
      name: "general_birth",
      requiredErrorMsg: "La información es requerida",
    },
    general_place_birth: {
      name: "general_place_birth",
      label: "Ingrese su lugar de nacimiento*",
      requiredErrorMsg: "La información es requerida",
    },
    general_civil_status: {
      name: "general_civil_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    general_profession: {
      name: "general_profession",
      label: "Ingrese su profesión u oficio*",
      requiredErrorMsg: "La información es requerida",
    },
    general_direction: {
      name: "general_direction",
      label: "Ingrese su dirección*",
      requiredErrorMsg: "La información es requerida",
    },
    general_time_reside: {
      name: "general_time_reside",
      label: "Ingrese el tiempo de residir en la vivienda*",
      requiredErrorMsg: "La información es requerida",
    },
    general_emergency_name: {
      name: "general_emergency_name",
      label: "Ingrese el nombre de la persona encargada en caso de emergencias*",
      requiredErrorMsg: "La información es requerida",
    },
    general_emergency_kinship: {
      name: "general_emergency_kinship",
      label: "Ingrese el parentesco que tiene con esta persona*",
      requiredErrorMsg: "La información es requerida",
    },
    general_previous_direction: {
      name: "general_previous_direction",
      label: "Ingrese la dirección anterior de su vivienda*",
      requiredErrorMsg: "La información es requerida",
    },
    general_phone: {
      name: "general_phone",
      label: "Ingrese su número de teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    general_emergency_phone: {
      name: "general_emergency_phone",
      label: "Ingrese el teléfono de emergencia*",
      requiredErrorMsg: "La información es requerida",
    },
    general_dpi: {
      name: "general_dpi",
      label: "Ingrese su DPI*",
      requiredErrorMsg: "La información es requerida",
    },
    general_nit: {
      name: "general_nit",
      label: "Ingrese su NIT*",
      requiredErrorMsg: "La información es requerida",
    },
    general_igss: {
      name: "general_igss",
      label: "Ingrese la afiliación IGSS*",
    },
    general_irtra: {
      name: "general_irtra",
      label: "Ingrese la afiliación IRTRA*",
    },
    general_vehicle: {
      name: "general_vehicle",
      label: "¿Posee vehículo?*",
    },
    general_count_vehicle: {
      name: "general_count_vehicle",
      label: "¿Cuántos vehículos posee?*",
      requiredErrorMsg: "La información es requerida",
    },
    general_license: {
      name: "general_license",
      label: "Ingrese la licencia de conducir*",
      requiredErrorMsg: "La información es requerida",
    },
    general_license_type: {
      name: "general_license_type",
      label: "Ingrese el tipo de licencia*",
      requiredErrorMsg: "La información es requerida",
    },
    general_license_expire: {
      name: "general_license_expire",
      requiredErrorMsg: "La información es requerida",
    },
    general_model: {
      name: "general_model",
      label: "Ingrese el modelo*",
      requiredErrorMsg: "La información es requerida",
    },
    general_brand: {
      name: "general_brand",
      label: "Ingrese la marca*",
      requiredErrorMsg: "La información es requerida",
    },
    general_email: {
      name: "general_email",
      label: "Ingrese su Email*",
      requiredErrorMsg: "La información es requerida",
    },

    //new variables 
    general_lastname_married: {
      name: "general_lastname_married",
      label: "Ingrese su apellido de casada*",
      requiredErrorMsg: "El apellido son requeridos",
    },
    general_married_name: {
      name: "general_married_name",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "El estado civil es requerido",
    },
    general_nit_select: {
      name: "general_nit_select",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "Debe de seleccionar una de las opciones",
    },
    general_afilacion_select: {
      name: "general_afilacion_select",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "Debe de seleccionar una de las opciones",
    },
    general_model_propetary: {
      name: "general_model_propetary",
      label: "Ingrese la informacion*",
      requiredErrorMsg: "La informacion es requerida",
    },
    general_model_biker: {
      name: "general_model_biker",
      label: "Ingrese el Modelo*",
      requiredErrorMsg: "El modelo es requerido",
    },
    general_brand_biker: {
      name: "general_brand_biker",
      label: "Ingrese la Marca*",
      requiredErrorMsg: "La marca es requerida",
    },
    general_model_propetary_biker: {
      name: "general_model_propetary_biker",
      label: "Ingrese la informacion*",
      requiredErrorMsg: "La informacion es requerida",
    },


    //dad
    family_dad_name: {
      name: "family_dad_name",
      label: "Ingrese el nombre completo del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_age: {
      name: "family_dad_age",
      label: "Ingrese la edad del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_status: {
      name: "family_dad_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_place: {
      name: "family_dad_place",
      label: "Ingrese el puesto del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_company: {
      name: "family_dad_company",
      label: "Ingrese la empresa en que labora el padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_financial_income: {
      name: "family_dad_financial_income",
      label: "Ingresos promedio del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_phone: {
      name: "family_dad_phone",
      label: "Ingrese el teléfono del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_no_phone: {
      name: "family_dad_no_phone",
      label: "Ingrese el por qué no tiene teléfono el padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_depend: {
      name: "family_dad_depend",
      label: "¿De quién depende económicamente el padre?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_time_died: {
      name: "family_dad_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció su padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_reason_died: {
      name: "family_dad_reason_died",
      label: "Ingrese la razón por la cual falleció su padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_life: {
      name: "family_dad_life",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_phone_val: {
      name: "family_dad_phone_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_working_val: {
      name: "family_dad_working_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    
    
    // changes dad 2.1

    family_dad_resident: {
      name: "family_dad_resident",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    family_dad_no_resident: {
      name: "family_dad_no_resident",
      label: "Ingrese el país en el que reside*",
      requiredErrorMsg: "La información es requerida"
    },
    
    family_dad_condition_resident: {
      name: "family_dad_condition_resident",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    // changes dadtwo 2.1

    family_dad_residenttwo: {
      name: "family_dad_residenttwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    family_dad_no_residenttwo: {
      name: "family_dad_no_residenttwo",
      label: "Ingrese el país en el que reside*",
      requiredErrorMsg: "La información es requerida"
    },
    
    family_dad_condition_residenttwo: {
      name: "family_dad_condition_residenttwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },


    // changes dad

    family_dad_relation: {
      name: "family_dad_relation",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_information: {
      name: "family_dad_information",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_reason: {
      name: "family_dad_reason",
      label: "Ingrese la razón de no poseer dicha información*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_why_negative: {
      name: "family_dad_why_negative",
      label: "Ingrese el motivo por el cual no tiene relación con su padre*",
      requiredErrorMsg: "La información es requerida"
    },
    family_dad_information_negative: {
      name: "family_dad_information_negative",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    // add names father
    family_dad_died_first_name: {
      name: "family_dad_died_first_name",
      label: "Ingrese los nombres del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_died_last_name: {
      name: "family_dad_died_last_name",
      label: "Ingrese los apellidos del padre*",
      requiredErrorMsg: "La información es requerida",
    },

    //papa
    //validation two
    family_dad_lifetwo: {
      name: "family_dad_lifetwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_nametwo: {
      name: "family_dad_nametwo",
      label:"Ingrese el nombre completo del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_agetwo: {
      name: "family_dad_agetwo",
      label:"Ingrese la edad del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_statustwo: {
      name: "family_dad_statustwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_working_valtwo: {
      name: "family_dad_working_valtwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_placetwo: {
      name: "family_dad_placetwo",
      label:"Ingrese el puesto del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_companytwo: {
      name: "family_dad_companytwo",
      label:"Ingrese la empresa en que labora el padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_financial_incometwo: {
      name: "family_dad_financial_incometwo",
      label:"Ingresos promedio del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_dependtwo: {
      name: "family_dad_dependtwo",
      label:"¿De quién depende económicamente el padre?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_phone_valtwo: {
      name: "family_dad_phone_valtwo",
      label:"Ingrese el teléfono del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_phonetwo: {
      name: "family_dad_phonetwo",
      label:"Ingrese el teléfono del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_no_phonetwo: {
      name: "family_dad_no_phonetwo",
      label:"Ingrese el por qué no tiene teléfono el padre*",
      requiredErrorMsg: "La información es requerida",
    },
    // add name died two
    family_dad_died_first_nametwo: {
      name: "family_dad_died_first_nametwo",
      label:"Ingrese los nombres del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_died_last_nametwo: {
      name: "family_dad_died_last_nametwo",
      label:"Ingrese los apellidos del padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_time_diedtwo: {
      name: "family_dad_time_diedtwo",
      label:"Ingrese desde hace cuanto tiempo falleció su padre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_dad_reason_diedtwo: {
      name: "family_dad_reason_diedtwo",
      label:"Ingrese la razón por la cual falleció su padre*",
      requiredErrorMsg: "La información es requerida",
    },

    vive_family: {
      name: "vive_family",
      label:"Ingrese con quien vive*",
      requiredErrorMsg: "La información es requerida",
    }, 

    // changes mom 2.1

    family_mom_resident: {
      name: "family_mom_resident",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    family_mom_no_resident: {
      name: "family_mom_no_resident",
      label: "Ingrese el país en el que reside*",
      requiredErrorMsg: "La información es requerida"
    },
    
    family_mom_condition_resident: {
      name: "family_mom_condition_resident",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    // changes momtwo 2.1

    family_mom_residenttwo: {
      name: "family_mom_residenttwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    family_mom_no_residenttwo: {
      name: "family_mom_no_residenttwo",
      label: "Ingrese el país en el que reside*",
      requiredErrorMsg: "La información es requerida"
    },
    
    family_mom_condition_residenttwo: {
      name: "family_mom_condition_residenttwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },


    //mom
    family_mom_name: {
      name: "family_mom_name",
      label: "Ingrese el nombre completo de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_age: {
      name: "family_mom_age",
      label: "Ingrese la edad de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_status: {
      name: "family_mom_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_place: {
      name: "family_mom_place",
      label: "Ingrese el puesto de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_company: {
      name: "family_mom_company",
      label: "Ingrese la empresa en que labora la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_financial_income: {
      name: "family_mom_financial_income",
      label: "Ingresos promedio de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_phone: {
      name: "family_mom_phone",
      label: "Ingrese el teléfono de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_depend: {
      name: "family_mom_depend",
      label: "¿De quién depende económicamente la madre?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_no_phone: {
      name: "family_mom_no_phone",
      label: "Ingrese el por qué no tiene teléfono la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_time_died: {
      name: "family_mom_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    // add names mom
    family_mom_died_first_name: {
      name: "family_mom_died_first_name",
      label: "Ingrese los nombres de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_died_last_name: {
      name: "family_mom_died_last_name",
      label: "Ingrese los apellidos de la madre*",
      requiredErrorMsg: "La información es requerida",
    },

    family_mom_reason_died: {
      name: "family_mom_reason_died",
      label: "Ingrese la razón por la cual falleció la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_life: {
      name: "family_mom_life",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_phone_val: {
      name: "family_mom_phone_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_working_val: {
      name: "family_mom_working_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    //validation two mom
    family_mom_lifetwo: {
      name: "family_mom_lifetwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_nametwo: {
      name: "family_mom_nametwo",
      label:"Ingrese el nombre completo de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_agetwo: {
      name: "family_mom_agetwo",
      label:"Ingrese la edad de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_statustwo: {
      name: "family_mom_statustwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_working_valtwo: {
      name: "family_mom_working_valtwo",
      label:"Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_placetwo: {
      name: "family_mom_placetwo",
      label:"Ingrese el puesto de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_companytwo: {
      name: "family_mom_companytwo",
      label:"Ingrese la empresa en que labora la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_financial_incometwo: {
      name: "family_mom_financial_incometwo",
      label:"Ingresos promedio de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_dependtwo: {
      name: "family_mom_dependtwo",
      label:"De quién depende económicamente la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_phone_valtwo: {
      name: "family_mom_phone_valtwo",
      label:"Ingrese el teléfono de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_phonetwo: {
      name: "family_mom_phonetwo",
      label:"Ingrese el teléfono de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_no_phonetwo: {
      name: "family_mom_no_phonetwo",
      label:"Ingrese el por qué no tiene teléfono la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    // add name died two
    family_mom_died_first_nametwo: {
      name: "family_mom_died_first_nametwo",
      label:"Ingrese los nombres de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_died_last_nametwo: {
      name: "family_mom_died_last_nametwo",
      label:"Ingrese los apellidos de la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_time_diedtwo: {
      name: "family_mom_time_diedtwo",
      label:"Ingrese desde hace cuanto tiempo falleció la madre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_mom_reason_diedtwo: {
      name: "family_mom_reason_diedtwo",
      label:"Ingrese la razón por la cual falleció la madre*",
      requiredErrorMsg: "La información es requerida",
    },


    // changes dad
    family_mom_relation: {
      name: "family_mom_relation",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_information: {
      name: "family_mom_information",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_reason: {
      name: "family_mom_reason",
      label: "Ingrese la razón de no posser dicha información*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_why_negative: {
      name: "family_mom_why_negative",
      label: "Ingrese el motivo por el cual no tiene relación con su padre*",
      requiredErrorMsg: "La información es requerida"
    },
    family_mom_information_negative: {
      name: "family_mom_information_negative",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida"
    },

    // add information couples
    you_parents_together: {
        name: "you_parents_together",
        label: "Seleccione una de las opciones*",
        requiredErrorMsg: "La información es requerida"
      },
      has_partner_father: {
        name: "has_partner_father",
        label: "Seleccione una de las opciones*",
        requiredErrorMsg: "La información es requerida"
      },
      has_partner_mother: {
        name: "has_partner_mother",
        label: "Seleccione una de las opciones*",
        requiredErrorMsg: "La información es requerida"
      },
      mother_partner_name: {
        name: "mother_partner_name",
        label: "Ingrese el nombre*",
        requiredErrorMsg: "La información es requerida"
      },
      mother_partner_lastname: {
        name: "mother_partner_lastname",
        label: "Ingrese el apellido*",
        requiredErrorMsg: "La información es requerida"
      },
      mother_relationship: {
        name: "mother_relationship",
        label: "Seleccione una de las opciones*",
        requiredErrorMsg: "La información es requerida"
      },
      father_partner_name: {
        name: "father_partner_name",
        label: "Ingrese el nombre*",
        requiredErrorMsg: "La información es requerida"
      },
      father_partner_lastname: {
        name: "father_partner_lastname",
        label: "Ingrese el apellido*",
        requiredErrorMsg: "La información es requerida"
      },
      father_relationship: {
        name: "father_relationship",
        label: "Seleccione una de las opciones*",
        requiredErrorMsg: "La información es requerida"
      },

    //validate the inputs
    family_validate_stepparents: {
      name: "family_validate_stepparents",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_validate_son: {
      name: "family_validate_son",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_validate_brothers: {
      name: "family_validate_brothers",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_validate_grandfather: {
      name: "family_validate_grandfather",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_validate_stepbrother: {
      name: "family_validate_stepbrother",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_validate_conyugue: {
      name: "family_validate_conyugue",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    //validate conyugue
    family_conyugue_married_val: {
      name: "family_conyugue_married_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_married: {
      name: "family_conyugue_married",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_partner_val: {
      name: "family_conyugue_partner_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    //changes 2.1
    family_conyugue_relation: {
      name: "family_conyugue_relation",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    //stepFather
    family_stepfather_name: {
      name: "family_stepfather_name",
      label: "Ingrese el nombre completo de su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_age: {
      name: "family_stepfather_age",
      label: "Ingrese la edad de su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_status: {
      name: "family_stepfather_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_place: {
      name: "family_stepfather_place",
      label: "Ingrese el puesto del padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_company: {
      name: "family_stepfather_company",
      label: "Ingrese la empresa en que labora el padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_financial_income: {
      name: "family_stepfather_financial_income",
      label: "Ingresos promedio del padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_phone: {
      name: "family_stepfather_phone",
      label: "Ingrese el teléfono del padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_depend: {
      name: "family_stepfather_depend",
      label: "¿De quién depende económicamente el padrastro?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_no_phone: {
      name: "family_stepfather_no_phone",
      label: "Ingrese el por qué no tiene teléfono el padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_time_died: {
      name: "family_stepfather_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_reason_died: {
      name: "family_stepfather_reason_died",
      label: "Ingrese la razón por la cual falleció su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_info: {
      name: "family_stepfather_info",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_life: {
      name: "family_stepfather_life",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_phone_val: {
      name: "family_stepfather_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_stepfather_working_val: {
      name: "family_stepfather_working_val",
      label: "Seleccione una de las opciones*",
    },
    family_stepfather_noInfo: {
      name: "family_stepfather_noInfo",
      label: "Ingrese la razón de no poseer dicha información*",
      requiredErrorMsg: "La información es requerida",
    },

    //changes 2.2 
    family_stepfather_val: {
      name: "family_stepfather_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_nametwo: {
      name: "family_stepfather_nametwo",
      label: "Ingrese el nombre de su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepfather_surnametwo: {
      name: "family_stepfather_surnametwo",
      label: "Ingrese los apellidos de su padrastro*",
      requiredErrorMsg: "La información es requerida",
    },

    //changes stepmother 2.2 
    family_stepmother_val: {
      name: "family_stepmother_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",

    },
    family_stepmother_nametwo: {
      name: "family_stepmother_nametwo",
      label: "Ingrese el nombre de su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_surnametwo: {
      name: "family_stepmother_surnametwo",
      label: "Ingrese los apellidos de su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },

    //stepMother
    family_stepmother_name: {
      name: "family_stepmother_name",
      label: "Ingrese el nombre completo de su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_age: {
      name: "family_stepmother_age",
      label: "Ingrese la edad de su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_status: {
      name: "family_stepmother_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_place: {
      name: "family_stepmother_place",
      label: "Ingrese el puesto de la madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_company: {
      name: "family_stepmother_company",
      label: "Ingrese la empresa en que labora la madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_financial_income: {
      name: "family_stepmother_financial_income",
      label: "Ingresos promedio de la madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_phone: {
      name: "family_stepmother_phone",
      label: "Ingrese el teléfono de la madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_depend: {
      name: "family_stepmother_depend",
      label: "¿De quién depende económicamente la madrastra?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_no_phone: {
      name: "family_stepmother_no_phone",
      label: "Ingrese el por qué no tiene teléfono la madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_time_died: {
      name: "family_stepmother_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_reason_died: {
      name: "family_stepmother_reason_died",
      label: "Ingrese la razón por la cual falleció su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_info: {
      name: "family_stepmother_info",
      label: "Ingrese la razón por la cual no tiene la información de su madrastra*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepmother_life: {
      name: "family_stepmother_life",
      label: "Seleccione una de las opciones*",
    },
    family_stepmother_phone_val: {
      name: "family_stepmother_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_stepmother_working_val: {
      name: "family_stepmother_working_val",
      label: "Seleccione una de las opciones*",
    },
    family_stepmother_noInfo: {
      name: "family_stepmother_noInfo",
      label: "Ingrese el motivo de no poseer dicha información*",
      requiredErrorMsg: "La información es requerida",
    },

    //son
    family_son_name: {
      name: "family_son_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_age: {
      name: "family_son_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_status: {
      name: "family_son_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_place: {
      name: "family_son_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_company: {
      name: "family_son_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_financial_income: {
      name: "family_son_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_phone: {
      name: "family_son_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_no_phone: {
      name: "family_son_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_depend: {
      name: "family_son_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_died_name: {
      name: "family_son_died_name",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_died_lastname: {
      name: "family_son_died_lastname",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_time_died: {
      name: "family_son_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_reason_died: {
      name: "family_son_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_life: {
      name: "family_son_life",
      label: "Seleccione una de las opciones*",
    },
    family_son_phone_val: {
      name: "family_son_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_son_working_val: {
      name: "family_son_working_val",
      label: "Seleccione una de las opciones*",
    },
    family_son_validate_age: {
      name: "family_son_validate_age",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_son_lookafther: {
      name: "family_son_lookafther",
      label: "¿Quién cuidara del menor?*",
      requiredErrorMsg: "La información es requerida",
    },

    //Brothers
    family_brothers_name: {
      name: "family_brothers_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_age: {
      name: "family_brothers_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_status: {
      name: "family_brothers_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_place: {
      name: "family_brothers_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_company: {
      name: "family_brothers_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_financial_income: {
      name: "family_brothers_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_phone: {
      name: "family_brothers_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_no_phone: {
      name: "family_brothers_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_depend: {
      name: "family_brothers_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_time_died: {
      name: "family_brothers_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_died_name: {
      name: "family_brothers_died_name",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_died_lastname: {
      name: "family_brothers_died_lastname",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_reason_died: {
      name: "family_brothers_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_brothers_life: {
      name: "family_brothers_life",
      label: "Seleccione una de las opciones*",
    },
    family_brothers_phone_val: {
      name: "family_brothers_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_brothers_working_val: {
      name: "family_brothers_working_val",
      label: "Seleccione una de las opciones*",
    },

    //stepBrother
    family_stepbrother_name: {
      name: "family_stepbrother_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_age: {
      name: "family_stepbrother_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_status: {
      name: "family_stepbrother_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_place: {
      name: "family_stepbrother_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_company: {
      name: "family_stepbrother_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_financial_income: {
      name: "family_stepbrother_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_phone: {
      name: "family_stepbrother_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_no_phone: {
      name: "family_stepbrother_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_depend: {
      name: "family_stepbrother_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_time_died: {
      name: "family_stepbrother_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_died_name: {
      name: "family_stepbrother_died_name",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_died_lastname: {
      name: "family_stepbrother_died_lastname",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_reason_died: {
      name: "family_stepbrother_reason_died",
      label: "Ingrese la razón por la cual falleció* ",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_life: {
      name: "family_stepbrother_life",
      label: "Seleccione una de las opciones*",
    },
    family_stepbrother_phone_val: {
      name: "family_stepbrother_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_stepbrother_working_val: {
      name: "family_stepbrother_working_val",
      label: "Seleccione una de las opciones*",
    },
    /* select and input information */
    family_stepbrother_has_information: {
      name: "family_stepbrother_has_information",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_stepbrother_reason_dont_has: {
      name: "family_stepbrother_reason_dont_has",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    //conyugue
    family_conyugue_name: {
      name: "family_conyugue_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_age: {
      name: "family_conyugue_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_status: {
      name: "family_conyugue_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_place: {
      name: "family_conyugue_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_company: {
      name: "family_conyugue_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_financial_income: {
      name: "family_conyugue_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_phone: {
      name: "family_conyugue_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_no_phone: {
      name: "family_conyugue_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_depend: {
      name: "family_conyugue_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_time_died: {
      name: "family_conyugue_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_died_name: {
      name: "family_conyugue_died_name",
      label: "Ingrese el nombre*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_died_lastname: {
      name: "family_conyugue_died_lastname",
      label: "Ingrese el apellido*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_reason_died: {
      name: "family_conyugue_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_life: {
      name: "family_conyugue_life",
      label: "Seleccione una de las opciones*",
    },
    family_conyugue_phone_val: {
      name: "family_conyugue_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_conyugue_working_val: {
      name: "family_conyugue_working_val",
      label: "Seleccione una de las opciones*",
    },
    //conyugue pather
    family_conyuguepat_name: {
      name: "family_conyuguepat_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_age: {
      name: "family_conyuguepat_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_status: {
      name: "family_conyuguepat_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_place: {
      name: "family_conyuguepat_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_company: {
      name: "family_conyuguepat_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_financial_income: {
      name: "family_conyuguepat_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_phone: {
      name: "family_conyuguepat_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_no_phone: {
      name: "family_conyuguepat_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_depend: {
      name: "family_conyuguepat_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_time_died: {
      name: "family_conyuguepat_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_reason_died: {
      name: "family_conyuguepat_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyuguepat_life: {
      name: "family_conyuguepat_life",
      label: "Seleccione una de las opciones*",
    },
    family_conyuguepat_phone_val: {
      name: "family_conyuguepat_phone_val",
      label: "Seleccione una de las opciones*",
    },
    family_conyuguepat_working_val: {
      name: "family_conyuguepat_working_val",
      label: "Seleccione una de las opciones*",
    },

    // changes 2.2
    family_conyugue_marriage_val: {
      name: "family_conyugue_marriage_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_time_relation: {
      name: "family_conyugue_time_relation",
      label: "Ingrese hace cuanto posee la relación*",
      requiredErrorMsg: "La información es requerida",
    },
    family_conyugue_time_marriage: {
      name: "family_conyugue_time_marriage",
      label: "Ingrese el tiempo en que pretende contraer matrimonio*",
      requiredErrorMsg: "La información es requerida",
    },

    //grandfather
    family_grandfather_name: {
      name: "family_grandfather_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_age: {
      name: "family_grandfather_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_status: {
      name: "family_grandfather_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_place: {
      name: "family_grandfather_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_company: {
      name: "family_grandfather_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_financial_income: {
      name: "family_grandfather_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_phone: {
      name: "family_grandfather_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_no_phone: {
      name: "family_grandfather_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_depend: {
      name: "family_grandfather_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_time_died: {
      name: "family_grandfather_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_reason_died: {
      name: "family_grandfather_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_life: {
      name: "family_grandfather_life",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_phone_val: {
      name: "family_grandfather_phone_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_working_val: {
      name: "family_grandfather_working_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_lifeno_name: {
      name: "family_grandfather_lifeno_name",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_lifeno_firstname: {
      name: "family_grandfather_lifeno_firstname",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },

    //grandMother
    family_grandmother_name: {
      name: "family_grandmother_name",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_age: {
      name: "family_grandmother_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_status: {
      name: "family_grandmother_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_place: {
      name: "family_grandmother_place",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_company: {
      name: "family_grandmother_company",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_financial_income: {
      name: "family_grandmother_financial_income",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_phone: {
      name: "family_grandmother_phone",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_no_phone: {
      name: "family_grandmother_no_phone",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_depend: {
      name: "family_grandmother_depend",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_time_died: {
      name: "family_grandmother_time_died",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_reason_died: {
      name: "family_grandmother_reason_died",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_life: {
      name: "family_grandmother_life",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_phone_val: {
      name: "family_grandmother_phone_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_working_val: {
      name: "family_grandmother_working_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_lifeno_name: {
      name: "family_grandmother_lifeno_name",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_lifeno_firstname: {
      name: "family_grandmother_lifeno_firstname",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },

    //parte de madre
    //grandfather
    family_grandfather_nametwo: {
      name: "family_grandfather_nametwo",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_agetwo: {
      name: "family_grandfather_agetwo",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_statustwo: {
      name: "family_grandfather_statustwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_placetwo: {
      name: "family_grandfather_placetwo",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_companytwo: {
      name: "family_grandfather_companytwo",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_financial_incometwo: {
      name: "family_grandfather_financial_incometwo",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_phonetwo: {
      name: "family_grandfather_phonetwo",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_no_phonetwo: {
      name: "family_grandfather_no_phonetwo",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_dependtwo: {
      name: "family_grandfather_dependtwo",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_time_diedtwo: {
      name: "family_grandfather_time_diedtwo",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_reason_diedtwo: {
      name: "family_grandfather_reason_diedtwo",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_lifetwo: {
      name: "family_grandfather_lifetwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_phone_valtwo: {
      name: "family_grandfather_phone_valtwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_working_valtwo: {
      name: "family_grandfather_working_valtwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_lifeno_nametwo: {
      name: "family_grandfather_lifeno_nametwo",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandfather_lifeno_firstnametwo: {
      name: "family_grandfather_lifeno_firstnametwo",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },

    //grandMother
    family_grandmother_nametwo: {
      name: "family_grandmother_nametwo",
      label: "Ingrese el nombre completo*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_agetwo: {
      name: "family_grandmother_agetwo",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_statustwo: {
      name: "family_grandmother_statustwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_placetwo: {
      name: "family_grandmother_placetwo",
      label: "Ingrese el puesto*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_companytwo: {
      name: "family_grandmother_companytwo",
      label: "Ingrese la empresa en que labora*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_financial_incometwo: {
      name: "family_grandmother_financial_incometwo",
      label: "Ingresos promedio*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_phonetwo: {
      name: "family_grandmother_phonetwo",
      label: "Ingrese el teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_no_phonetwo: {
      name: "family_grandmother_no_phonetwo",
      label: "Ingrese el por qué no tiene teléfono*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_dependtwo: {
      name: "family_grandmother_dependtwo",
      label: "¿De quién depende económicamente?*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_time_diedtwo: {
      name: "family_grandmother_time_diedtwo",
      label: "Ingrese desde hace cuanto tiempo falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_reason_diedtwo: {
      name: "family_grandmother_reason_diedtwo",
      label: "Ingrese la razón por la cual falleció*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_lifetwo: {
      name: "family_grandmother_lifetwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_phone_valtwo: {
      name: "family_grandmother_phone_valtwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_working_valtwo: {
      name: "family_grandmother_working_valtwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_lifeno_nametwo: {
      name: "family_grandmother_lifeno_nametwo",
      label: "Ingrese los nombres*",
      requiredErrorMsg: "La información es requerida",
    },
    family_grandmother_lifeno_firstnametwo: {
      name: "family_grandmother_lifeno_firstnametwo",
      label: "Ingrese los apellidos*",
      requiredErrorMsg: "La información es requerida",
    },

    //University
    estudie_university_name: {
      name: "estudie_university_name",
      label: "Ingrese el nombre de su carrera*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_uniname: {
      name: "estudie_university_uniname",
      label: "Ingrese el nombre de su universidad*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_semester: {
      name: "estudie_university_semester",
      label: "Ingrese el semestre que está cursando*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_val: {
      name: "estudie_university_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    study_magister: {
      name: "study_magister",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    wich_career: {
      name: "wich_career",
      label: "Ingrese la carrera que estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    select_schedules: {
      name: "select_schedules",
      label: "Ingrese la carrera que estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    why_not_schedules: {
      name: "why_not_schedules",
      label: "Indique por qué no está dispuesto a cambiar*",
      requiredErrorMsg: "La información es requerida",
    },
    /* add information master */
    study_master_name: {
      name: "study_master_name",
      label: "Ingrese la maestria que estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_place: {
      name: "study_master_place",
      label: "Ingrese la sede donde estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_complete: {
      name: "study_master_complete",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_schedule: {
      name: "study_master_schedule",
      label: "Ingrese sus horarios de estudio*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_title: {
      name: "estudie_university_title",
      label: "Ingrese su título*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_sede: {
      name: "estudie_university_sede",
      label: "Ingrese la sede donde estudio*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_year_graduation: {
      name: "estudie_university_year_graduation*",
      label: "Ingrese su año de graduación*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_no_sede: {
      name: "estudie_university_no_sede",
      label: "Ingrese la sede donde estudio*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_hour: {
      name: "estudie_university_hour",
      label: "Ingrese sus horarios de estudio*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_sval: {
      name: "estudie_university_sval",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    //Diversificado
    estudie_diversificado_sval: {
      name: "estudie_diversificado_sval",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_name: {
      name: "estudie_diversificado_name",
      label: "Ingrese el nombre de su carrera*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_uniname: {
      name: "estudie_diversificado_uniname",
      label: "Ingrese el nombre de su escuela*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_desde: {
      name: "estudie_diversificado_desde",
      label: "Desde*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_hasta: {
      name: "estudie_diversificado_hasta",
      label: "Hasta*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_place: {
      name: "estudie_diversificado_place",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    /* add information finish diver */
    estudies_diversificado_finish_place: {
      name: "estudies_diversificado_finish_place",
      label: "Ingrese donde culminó sus estudios*",
      requiredErrorMsg: "La información es requerida",
    },
    estudies_diversificado_finish_grade: {
      name: "estudies_diversificado_finish_grade",
      label: "Ingrese el grado que estudió*",
      requiredErrorMsg: "La información es requerida",
    },

    //basico
    estudie_basic_sval: {
      name: "estudie_basic_sval",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_basic_uniname: {
      name: "estudie_basic_uniname",
      label: "Ingrese el nombre de su escuela*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_basic_desde: {
      name: "estudie_basic_desde",
      label: "Desde*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_basic_hasta: {
      name: "estudie_basic_hasta",
      label: "Hasta*",
      requiredErrorMsg: "La información es requerida",
    },
    

    //primario
    estudie_primary_sval: {
      name: "estudie_primary_sval",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_primary_uniname: {
      name: "estudie_primary_uniname",
      label: "Ingrese el nombre de su escuela*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_primary_desde: {
      name: "estudie_primary_desde",
      label: "Desde*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_primary_hasta: {
      name: "estudie_primary_hasta",
      label: "Hasta*",
      requiredErrorMsg: "La información es requerida",
    },
    /* add year condition */
    estudies_year_condition: {
      name: "estudies_year_condition",
      label: "Ingrese el año que perdio*",
      requiredErrorMsg: "La información es requerida",
    },

    //changes 2.2
    estudie_primary_department: {
      name: "estudie_primary_department",
      label: "Ingrese el departamento donde se encuentra el establecimiento*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_basic_department: {
      name: "estudie_basic_department",
      label: "Ingrese el departamento donde se encuentra el establecimiento*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_diversificado_department: {
      name: "estudie_diversificado_department",
      label: "Ingrese el departamento donde se encuentra el establecimiento*",
      requiredErrorMsg: "La información es requerida",
    },
    estudie_university_department: {
      name: "estudie_university_department",
      label: "Ingrese el departamento donde se encuentra la universidad*",
      requiredErrorMsg: "La información es requerida",
    },

    study_master_semester: {
      name: "study_master_semester",
      label: "Ingrese el semestre que esta cursando*",
      requiredErrorMsg: "La información es requerida",
    },

    //
    study_master_nametwo: {
      name: "study_master_nametwo",
      label: "Ingrese la maestria que estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_placetwo: {
      name: "study_master_placetwo",
      label: "Ingrese la sede donde estudia*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_completetwo: {
      name: "study_master_completetwo",
      label: "seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_scheduletwo: {
      name: "study_master_scheduletwo",
      label: "Ingrese sus horarios de estudio*",
      requiredErrorMsg: "La información es requerida",
    },
    study_master_semestertwo: {
      name: "study_master_semestertwo",
      label: "Ingrese el semestre que esta cursando*",
      requiredErrorMsg: "La información es requerida",
    },

    study_magistertwo: {
      name: "study_magistertwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    study_currently: {
      name: "study_currently",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    estudies_year_conditiontwo: {
      name: "estudies_year_conditiontwo",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    

    //working
    work_name: {
      name: "work_name",
      label: "Ingrese el nombre de la empresa*",
      requiredErrorMsg: "La información es requerida",
    },
    work_position: {
      name: "work_position",
      label: "Ingrese el que cargo que desempeño*",
      requiredErrorMsg: "La información es requerida",
    },
    work_entry: {
      name: "work_entry",
      requiredErrorMsg: "La información es requerida",
    },
    work_withdrawal: {
      name: "work_withdrawal",
    },
    work_salary: {
      name: "work_salary",
      label: "Ingrese el salario devengado*",
      requiredErrorMsg: "La información es requerida",
    },
    work_boss: {
      name: "work_boss",
      label: "Ingrese el nombre completo de su jefe inmediato*",
      requiredErrorMsg: "La información es requerida",
    },
    work_chiefposition: {
      name: "work_chiefposition",
      label: "Ingrese el puesto de su jefe*",
      requiredErrorMsg: "La información es requerida",
    },
    work_phone: {
      name: "work_phone",
      label: "Ingrese el número de la empresa*",
      requiredErrorMsg: "La información es requerida",
    },
    work_phone_boss: {
      name: "work_phone_boss",
      label: "Ingrese el número de su jefe inmediato*",
      requiredErrorMsg: "La información es requerida",
    },
    work_withdrawalreason: {
      name: "work_withdrawalreason",
      label: "Ingrese el motivo de su retiro*",
    },
    work_phone_val: {
      name: "work_phone_val",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    work_phone_reason: {
      name: "work_phone_reason",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    work_reference: {
      name: "work_reference",
      label: "Ingrese si posee constancia laboral*",
      requiredErrorMsg: "La información es requerida",
    },
    work_reference_reason: {
      name: "work_reference_reason",
      label: "Ingrese la razón del porqué no posee la constancia*",
      requiredErrorMsg: "La información es requerida",
    },
    work_banrural: {
      name: "work_banrural",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    work_valNe: {
      name: "work_valNe",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_name: {
      name: "work_ne_name",
      label: "Ingrese el nombre de su negocio*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_web: {
      name: "work_ne_web",
      label: "Ingrese la página web*",
      requiredErrorMsg: "La información es requerida",
    },
    work_had_page:{
      name: "work_had_page",
      label: "Ingrese si tienen página web*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_dateInit: {
      name: "work_ne_dateInit",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_salaryPersonal: {
      name: "work_ne_salaryPersonal",
      label: "Ingrese el salario de su personal*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_detail: {
      name: "work_ne_detail",
      label: "Detalle de que trata su negocio*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_detailIncome: {
      name: "work_ne_detailIncome",
      label: "Detalle sus ganancias*",
      requiredErrorMsg: "La información es requerida",
    },
    work_ne_whatwill: {
      name: "work_ne_whatwill",
      label: "¿Qué hará con su negocio al obtener el empleo?*",
      requiredErrorMsg: "La información es requerida",
    },

    /* add work data */
    work_select_entity: {
      name: "work_select_entity",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    work_name_entity: {
      name: "work_name_entity",
      label: "Ingrese el nombre*",
      requiredErrorMsg: "La información es requerida",
    },
    work_lsname_entity: {
      name: "work_lsname_entity",
      label: "Ingrese el apellido*",
      requiredErrorMsg: "La información es requerida",
    },
    work_bank: {
      name: "work_bank",
      label: "Indique en que banco labora*",
      requiredErrorMsg: "La información es requerida",
    },
    work_relation: {
      name: "work_relation",
      label: "Indique la relación que posee con el familiar*",
      requiredErrorMsg: "La información es requerida",
    },


    //Economic
    economic_date: {
      name: "economic_date",
      requiredErrorMsg: "La información es requerida",
    },
    economic_use: {
      name: "economic_use",
      label: "Ingrese para qué lo utilizó*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_plan: {
      name: "economic_plan",
      label: "¿Debe cancelarlo en un plazo dé?*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_bill: {
      name: "economic_bill",
      label: "Selecciona una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    amount: {
      name: "amount",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_balance: {
      name: "economic_balance",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },

    economic_monthly_payment: {
      name: "economic_monthly_payment",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_delinquent_payment: {
      name: "economic_delinquent_payment",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    economic_dateother: {
      name: "economic_dateother",
      requiredErrorMsg: "La información es requerida",
    },
    economic_useother: {
      name: "economic_useother",
      label: "Ingrese para qué lo utilizó*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_planother: {
      name: "economic_planother",
      label: "¿Debe cancelarlo en un plazo dé?*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_billother: {
      name: "economic_billother",
      label: "Selecciona una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    amountother: {
      name: "amountother",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_balanceother: {
      name: "economic_balanceother",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },

    economic_monthly_paymentother: {
      name: "economic_monthly_paymentother",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_delinquent_paymentother: {
      name: "economic_delinquent_paymentother",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    econmic_observaciones: {
      name: "econmic_observaciones", 
      label: "Ingrese los detalles de esta deuda*",
      requiredErrorMsg: "La información es requerida",
    },

    economic_vivienda: {
      name: "economic_vivienda",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_food: {
      name: "economic_food",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_aporte: {
      name: "economic_aporte",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_water: {
      name: "economic_water",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_phone: {
      name: "economic_phone",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_recreation: {
      name: "economic_recreation",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_vestuario: {
      name: "economic_vestuario",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_gastos: {
      name: "economic_gastos",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_trans: {
      name: "economic_trans",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_medic: {
      name: "economic_medic",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_estudy: {
      name: "economic_estudy",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_ahorro: {
      name: "economic_ahorro",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_payment_deuda: {
      name: "economic_payment_deuda",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_other: {
      name: "economic_other",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_total: {
      name: "economic_total",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },

    // changes 2.2
    economic_usethree: {
      name: "economic_usethree",
      label: "Ingrese para que lo utilizó*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_billthree: {
      name: "economic_billthree",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    amountthree: {
      name: "amountthree",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_balancethree: {
      name: "economic_balancethree",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_monthly_paymentthree: {
      name: "economic_monthly_paymentthree",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    economic_delinquent_paymentthree: {
      name: "economic_delinquent_paymentthree",
      label: "Ingrese una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    econmic_observacionesthree: {
      name: "econmic_observacionesthree",
      label: "Ingrese los detalles de esta deuda*",
      requiredErrorMsg: "La información es requerida",
    },
    economic_payment_card: {
      name: "economic_payment_card",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },

    //social
    social_group: {
      name: "social_group",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_gtime: {
      name: "social_gtime",
      label: "Ingrese a que grupo pertenece*",
      requiredErrorMsg: "La información es requerida",
    },
    social_politic: {
      name: "social_politic",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_politic_name: {
      name: "social_politic_name",
      label: "Ingrese el nombre del familiar*",
      requiredErrorMsg: "La información es requerida",
    },
    social_politic_relacion: {
      name: "social_politic_relacion",
      label: "Ingrese la relación que tiene con esta persona*",
      requiredErrorMsg: "La información es requerida",
    },
    social_politic_puesto: {
      name: "social_politic_puesto",
      label: "Ingrese el puesto que posee*",
      requiredErrorMsg: "La información es requerida",
    },
    social_fuma: {
      name: "social_fuma",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_fuma_time: {
      name: "social_fuma_time",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },
    social_alco: {
      name: "social_alco",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_alco_time: {
      name: "social_alco_time",
      label: "",
      requiredErrorMsg: "La información es requerida",
    },

    social_alco_bebida: {
      name: "social_alco_bebida",
      label: "Ingrese que fue lo último que consumió*",
      requiredErrorMsg: "La información es requerida",
    },

    social_fuma_frequency: {
      name: "social_fuma_frequency", 
      label: "Seleccione una de las opciones*", 
      requiredErrorMsg: "La información es requerida"
    }, 
    social_alco_howmuch: {
      name: "social_alco_howmuch", 
      label: "Ingrese cuanto consumió*", 
      requiredErrorMsg: "La información es requerida"
    }, 
    social_alco_frequency: {
      name: "social_alco_frequency", 
      label: "Seleccione una de las opciones*", 
      requiredErrorMsg: "La información es requerida"
    },

    social_drog: {
      name: "social_drog",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_drog_option: {
      name: "social_drog_option",
      label: "Ingrese cuáles*",
      requiredErrorMsg: "La información es requerida",
    },
    social_drog_time: {
      name: "social_drog_time",
      label: "Ingrese la última vez que consumió*",
      requiredErrorMsg: "La información es requerida",
    },
    social_drog_person: {
      name: "social_drog_person",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_tatto: {
      name: "social_tatto",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_tatto_descri: {
      name: "social_tatto_descri",
      label: "Ingrese la descripción*",
      requiredErrorMsg: "La información es requerida",
    },
    social_tatto_sign: {
      name: "social_tatto_sign",
      label: "Ingrese el significado*",
      requiredErrorMsg: "La información es requerida",
    },
    social_tatto_ubi: {
      name: "social_tatto_ubi",
      label: "Ingrese donde lo tiene*",
      requiredErrorMsg: "La información es requerida",
    },
    social_tatto_fot: {
      name: "social_tatto_fot",
    },
    social_tatto_foto: {
      name: "social_tatto_foto",
    },

    //changes 2.1
    social_drug: {
      name: "social_drug",
      label: "Ingrese como obtuvo la droga*",
      requiredErrorMsg: "La información es requerida",
    },
    social_drug_relation: {
      name: "social_drug_relation",
      label: "Ingrese la relación que tiene:*",
      requiredErrorMsg: "La información es requerida",
    },
    social_drug_position: {
      name: "social_drug_position",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    //changes 2.2
    social_value_gather: {
      name: "social_value_gather",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_value_howOften: {
      name: "social_value_howOften",
      label: "Indique cada cuanto se reúnen*",
      requiredErrorMsg: "La información es requerida",
    },
    social_value_time: {
      name: "social_value_time",
      label: "Indique en que horario*",
      requiredErrorMsg: "La información es requerida",
    },
    social_value_conditionWork: {
      name: "social_value_conditionWork",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    social_value_amount: {
      name: "social_value_amount",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },


    //Delictivas
    criminal_association_option: {
      name: "criminal_association_option",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_relacion: {
      name: "criminal_relacion",
      label: "Ingrese la relación que tiene*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_name: {
      name: "criminal_name",
      label: "Ingrese el nombre*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_group_belong: {
      name: "criminal_group_belong",
      label: "Ingrese a qué grupo pertenece*",
      requiredErrorMsg: "La información es requerida",
    },

    criminal_police_option: {
      name: "criminal_police_option",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_why_stained: {
      name: "criminal_why_stained",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_why_clear: {
      name: "criminal_why_clear",
      label: "Ingrese cuando los limpio*",
      requiredErrorMsg: "La información es requerida",
    },

    criminal_family: {
      name: "criminal_family",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_name: {
      name: "criminal_family_name",
      label: "Ingrese el nombre*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_lastname: {
      name: "criminal_family_lastname",
      label: "Ingrese el apellido*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_age: {
      name: "criminal_family_age",
      label: "Ingrese la edad*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_civil_status: {
      name: "criminal_family_civil_status",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_profession: {
      name: "criminal_family_profession",
      label: "Ingrese el año de detención*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_phone: {
      name: "criminal_family_phone",
      label: "Ingrese cuanto tiempo estuvo detenido*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_family_reason: {
      name: "criminal_family_reason",
      label: "Ingrese la razón*",
      requiredErrorMsg: "La información es requerida",
    },

    criminal_was_sued: {
      name: "criminal_was_sued",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_you_demand: {
      name: "criminal_you_demand",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    criminal_was_suedwhy: {
      name: "criminal_was_suedwhy",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_you_demandwhy: {
      name: "criminal_you_demandwhy",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    // changes 2.2 criminal
    criminal_validation_background: {
      name: "criminal_validation_background",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    //penales
    criminal_because_record: {
      name: "criminal_because_record",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_because_clear: {
      name: "criminal_because_clear",
      label: "Ingrese cuando los limpio*",
      requiredErrorMsg: "La información es requerida",
    },
    // ambos penales
    criminal_becauseTwo_record: {
      name: "criminal_becauseTwo_record",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_becauseTwo_clear: {
      name: "criminal_becauseTwo_clear",
      label: "Ingrese cuando los limpio*",
      requiredErrorMsg: "La información es requerida",
    },
    // policiacos
    criminal_whyTwo_stained: {
      name: "criminal_whyTwo_stained",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
    criminal_whyTwo_clear: {
      name: "criminal_whyTwo_clear",
      label: "Ingrese cuando los limpio*",
      requiredErrorMsg: "La información es requerida",
    },
    //a quien demando
    criminal_you_demandwhom: {
      name: "criminal_you_demandwhom",
      label: "Ingrese a quién demando*",
      requiredErrorMsg: "La información es requerida",
    },

    //Heal
    disease_hipertension_option: {
      name: "disease_hipertension_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_diabetes_option: {
      name: "disease_dXiabetes_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_VIH_option: {
      name: "diseXase_VIH_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_ITS_option: {
      name: "diseXase_ITS_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_gastritis_option: {
      name: "disease_gaXstritis_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_cancer_option: {
      name: "diseaseX_cancer_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_cardiopatias_option: {
      name: "disease_cardiXopatias_option",
      label: "X",
      requiredErrorMsg: "La información es requerida",
    },
    disease_hipertension_observacion: {
      name: "disease_hipertension_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_diabetes_observacion: {
      name: "disease_diabetes_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_VIH_observacion: {
      name: "disease_VIH_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_ITS_observacion: {
      name: "disease_ITS_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_gastritis_observacion: {
      name: "disease_gastritis_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_cancer_observacion: {
      name: "disease_cancer_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_cardiopatias_observacion: {
      name: "disease_cardiopatias_observacion",
      label: "Observaciones*",
      requiredErrorMsg: "La información es requerida",
    },

    disease_name: {
      name: "disease_name",
      label: "Ingrese la enfermedad*",
      requiredErrorMsg: "La información es requerida",
    },
    disease_observacion: {
      name: "disease_observacion",
      label: "Ingrese las observaciones*",
      requiredErrorMsg: "La información es requerida",
    },

    accident_option: {
      name: "accident_option",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    accident_detail: {
      name: "accident_detail",
      label: "Detalle su accidente*",
      requiredErrorMsg: "La información es requerida",
    },
    accident_suffer: {
      name: "accident_suffer",
      label: "Detalle si sufrió amputaciones*",
      requiredErrorMsg: "La información es requerida",
    },

    covid_option: {
      name: "covid_option",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    gave_covid: {
      name: "gave_covid",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    covid_dosis: {
      name: "covid_dosis",
      label: "Ingrese cuando fue la última que tuvo COVID-19*",
      requiredErrorMsg: "La información es requerida",
    },
    /* porque no tiene vacunas */
    reason_no_vaccines_covid: {
      name: "reason_no_vaccines_covid",
      label: "Razón por la que no tiene vacunas*",
      requiredErrorMsg: "La información es requerida",
    },
    need_vacinnes: {
      name: "need_vacinnes",
      label: "Razón por la que no tiene vacunas*",
      requiredErrorMsg: "La información es requerida",
    },
    reason_no_true: {
      name: "reason_no_true",
      label: "Razón por la que no se vacunaría*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_sex: {
      name: "validate_sex",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_gestacion: {
      name: "validate_gestacion",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_children: {
      name: "validate_children",
      label: "Ingrese si tiene interés en tener hijos*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_lactando: {
      name: "validate_lactando",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_lac_month: {
      name: "validate_lac_month",
      label: "Ingrese desde hace cuantos meses*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_lac_age: {
      name: "validate_lac_age",
      label: "Ingrese la edad de su hijo*",
      requiredErrorMsg: "La información es requerida",
    },
    validate_dosis: {
      name: "validate_dosis",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    dosis_name: {
      name: "dosis_name",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    dosis_date: {
      name: "dosis_date",
      requiredErrorMsg: "La información es requerida",
    },
    dosis_dosis: {
      name: "dosis_dosis",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    objectivs_corto: {
      name: "objectivs_corto",
      label: "Ingrese sus objetivos a corto plazo*",
      requiredErrorMsg: "La información es requerida",
    },
    objectivs_mediano: {
      name: "objectivs_mediano",
      label: "Ingrese sus objetivos a mediano plazo*",
      requiredErrorMsg: "La información es requerida",
    },
    objectives_largo: {
      name: "objectives_largo",
      label: "Ingrese sus objetivos a largo plazo*",
      requiredErrorMsg: "La información es requerida",
    },

    sindicatos_favor: {
      name: "sindicatos_favor",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    sindicatos_formar: {
      name: "sindicatos_formar",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    sindicatos_why: {
      name: "sindicatos_why",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },

    // changes 2.1
    sindicatos_why_two: {
      name: "sindicatos_why_two",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },

    //Honestidad
    honest_p1: {
      name: "honest_p1",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    /* ---------- */
    whyIdentityHidde: {
      name: "whyIdentityHidde",
      label: "Ingrese por qué ha ocultado su identidad*",
      requiredErrorMsg: "La información es requerida",
    },
    documentInOrder: {
      name: "documentInOrder",
      label: "Ingrese por qué no están en orden sus documentos*",
      requiredErrorMsg: "La información es requerida",
    },
    /* -------------- */
    honest_p2: {
      name: "honest_p2",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    honest_p3: {
      name: "honest_p3",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    honest_p4: {
      name: "honest_p4",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    red_faccebook: {
      name: "red_faccebook",
      label: "Ingrese el link de su Facebook*",
      requiredErrorMsg: "La información es requerida",
    },

    red_faccebookOther: {
      name: "red_faccebookOther",
      label: "Ingrese el link de su red social*",
      requiredErrorMsg: "La información es requerida",
    },
    red_faccebookval: {
      name: "red_faccebookval",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },
    red_faccebookOtherVal: {
      name: "red_faccebookOtherVal",
      label: "Seleccione una de las opciones*",
      requiredErrorMsg: "La información es requerida",
    },

    validation_form: {
      name: "validation_form",
      label: "Acepto los términos y condiciones*",
      requiredErrorMsg: "La información es requerida",
    },
    red_faccebookval_two: {
      name: "red_faccebookval_two",
      label: "Ingrese el motivo*",
      requiredErrorMsg: "La información es requerida",
    },
  },
};
