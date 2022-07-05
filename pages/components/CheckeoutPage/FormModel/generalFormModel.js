export default {
    formId: 'generalForm',
    formField: {
        //general
        general_name: {
            name: 'general_name',
            label: 'Ingrese sus nombres*',
            requiredErrorMsg: 'Los nombres son requeridos'

        },
        general_lastname: {
            name: 'general_lastname',
            label: 'Ingrese sus apellidos*',
            requiredErrorMsg: 'Los apellidos son requeridos'

        },
        general_age: {
            name: 'general_age',
            label: 'Ingrese su edad*',
            requiredErrorMsg: 'La edad es requerida'

        },
        general_birth: {
            name: 'general_birth',
            requiredErrorMsg: 'La fecha de nacimiento es requerida'

        },
        general_place_birth: {
            name: 'general_place_birth',
            label: 'Ingrese su lugar de nacimiento*',
            requiredErrorMsg: 'El lugar de nacimiento es requerido'

        },
        general_civil_status: {
            name: 'general_civil_status',
            label: 'Seleccione una de las opciones*',
            requiredErrorMsg: 'El estado civil es requerido'

        },
        general_profession: {
            name: 'general_profession',
            label: 'Ingrese su profesión u oficio*',
            requiredErrorMsg: 'La profesión u oficio es requerido'

        },
        general_direction: {
            name: 'general_direction',
            label: 'Ingrese su dirección*',
            requiredErrorMsg: 'La dirección es requerida'

        },
        general_time_reside: {
            name: 'general_time_reside',
            label: 'Ingrese el tiempo de residir en la vivienda*',
            requiredErrorMsg: 'El tiempo de residir en la vivienda es requerida'

        },
        general_emergency_name: {
            name: 'general_emergency_name',
            label: 'Ingrese el nombre de la persona encargada en caso de emergencias*',
            requiredErrorMsg: 'El nombre es requerido'

        },
        general_emergency_kinship: {
            name: 'general_emergency_kinship',
            label: 'Ingrese el parentesco que tiene con esta persona*',
            requiredErrorMsg: 'El nombre del encargado es requerido'

        },
        general_previous_direction: {
            name: 'general_previous_direction',
            label: 'Ingrese la dirección anterior*',
            requiredErrorMsg: 'La dirección anterior es requerida'

        },
        general_phone: {
            name: 'general_phone',
            label: 'Ingrese el teléfono Celular*',
            requiredErrorMsg: 'El teléfono celular es requerido'

        },
        general_emergency_phone: {
            name: 'general_emergency_phone',
            label: 'Ingrese el teléfono de emergencia*',
            requiredErrorMsg: 'El teléfono de emergencia es requerido'

        },
        general_dpi: {
            name: 'general_dpi',
            label: 'Ingrese su DPI*',
            requiredErrorMsg: 'El DPI es requerido'

        },
        general_nit: {
            name: 'general_nit',
            label: 'Ingrese su NIT*',
            requiredErrorMsg: 'El NIT es requerido'

        },
        general_igss: {
            name: 'general_igss',
            label: 'Ingrese la afilación IGSS'
        },
        general_irtra: {
            name: 'general_irtra',
            label: 'Ingrese la afilación IRTRA',
        },
        general_vehicle: {
            name: 'general_vehicle',
            label: '¿Posee vehículo?*',
        },
        general_count_vehicle: {
            name: 'general_count_vehicle',
            label: '¿Cuantos Vehículos posee?*',
            requiredErrorMsg: 'Los vehículos son requeridos'

        },
        general_license: {
            name: 'general_license',
            label: 'Ingrese la licencia de conducir*',
            requiredErrorMsg: 'La licencia de conducir es requerida'
        },
        general_license_type: {
            name: 'general_license_type',
            label: 'Ingrese el tipo de licencia*',
            requiredErrorMsg: 'El tipo de la licencia de conducir es requerida'

        },
        general_license_expire: {
            name: 'general_license_expire',
            requiredErrorMsg: 'El vencimiento de la licencia de conducir es requerida'

        },
        general_model: {
            name: 'general_model',
            label: 'Ingrese el Modelo*',
            requiredErrorMsg: 'El modelo es requerido'

        },
        general_brand: {
            name: 'general_brand',
            label: 'Ingrese la Marca*',
            requiredErrorMsg: 'La marca es requerida'

        },
        general_email: {
            name: 'general_email',
            label: 'Ingrese el Email*',
            requiredErrorMsg: 'El Email es requerido'
        },

        //dad
        family_dad_name: {
            name: 'family_dad_name',
            label: 'Ingrese el nombre del padre*',
            requiredErrorMsg: 'El nombre del padre es requerido'
        }, 
        family_dad_age: {
            name: 'family_dad_age', 
            label: 'Ingrese la edad del padre*', 
            requiredErrorMsg: 'La edad del padre es requerida'
        }, 
        family_dad_status: {
            name: 'family_dad_status', 
            label: 'Seleccione una de las opciones*', 
            requiredErrorMsg: 'El estado civil del padre es requerida'
        }, 
        family_dad_place: {
            name: 'family_dad_place', 
            label: 'Ingrese el puesto del padre*',
            requiredErrorMsg: 'El puesto del padre es requerida'
        },
        family_dad_company: {
            name: 'family_dad_company', 
            label: 'Ingrese la empresa en que labora el padre*',
            requiredErrorMsg: 'La empresa del padre es requerida'
        }, 
        family_dad_financial_income: {
            name: 'family_dad_financial_income', 
            label: 'Ingresos promedio del padre', 
            requiredErrorMsg: 'Los ingresos promedio del padre es requerida'
        },
        family_dad_phone: {
            name: 'family_dad_phone', 
            label: 'Ingrese el teléfono del padre', 
            requiredErrorMsg: 'El teléfono del padre es requerida'
        },
        family_dad_no_phone: {
            name: 'family_dad_no_phone', 
            label: 'Ingrese el por qué no tiene teléfono el padre', 
            requiredErrorMsg: 'El motivo del padre es requerida'
        },
        family_dad_depend: {
            name: 'family_dad_depend', 
            label: 'De quien depende economicamente el padre', 
            requiredErrorMsg: 'De quien depende economicamente es obligatoria'
        },
        family_dad_time_died: {
            name: 'family_dad_time_died', 
            label: 'Ingrese desde hace cuanto tiempo falleció su padre', 
            requiredErrorMsg: 'El tiempo de fallecimiento es obligatoria'
        },
        family_dad_reason_died: {
            name: 'family_dad_reason_died', 
            label: 'Ingrese la razón por la cual falleció su padre', 
            requiredErrorMsg: 'La razón del fallecimiento es obligatoria'
        },
        family_dad_life: {
            name: 'family_dad_life', 
            label: 'Seleccione una de las opciones*', 
        },
        family_dad_phone_val: {
            name: 'family_dad_phone_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_dad_working_val: {
            name: 'family_dad_working_val', 
            label: 'Seleccione una de las opciones*', 
        },

        //mom
        family_mom_name: {
            name: 'family_mom_name',
            label: 'Ingrese el nombre de la madre*',
            requiredErrorMsg: 'El nombre de la madre es requerido'
        }, 
        family_mom_age: {
            name: 'family_mom_age', 
            label: 'Ingrese la edad de la madre*', 
            requiredErrorMsg: 'La edad de la madre es requerida'
        }, 
        family_mom_status: {
            name: 'family_mom_status', 
            label: 'Seleccione una de las opciones*', 
            requiredErrorMsg: 'El estado civil de la madre es requerida'
        }, 
        family_mom_place: {
            name: 'family_mom_place', 
            label: 'Ingrese el puesto de la madre*',
            requiredErrorMsg: 'El puesto de la madre es requerida'
        },
        family_mom_company: {
            name: 'family_mom_company', 
            label: 'Ingrese la empresa en que labora la madre*',
            requiredErrorMsg: 'La empresa de la madre es requerida'
        }, 
        family_mom_financial_income: {
            name: 'family_mom_financial_income', 
            label: 'Ingresos promedio de la madre', 
            requiredErrorMsg: 'Los ingresos promedio de la madre es requerida'
        },
        family_mom_phone: {
            name: 'family_mom_phone', 
            label: 'Ingrese el teléfono de la madre', 
            requiredErrorMsg: 'El teléfono de la madre es requerida'
        },
        family_mom_depend: {
            name: 'family_mom_depend', 
            label: 'De quien depende economicamente la madre', 
            requiredErrorMsg: 'De quien depende economicamente es obligatoria'
        },
        family_mom_no_phone: {
            name: 'family_mom_no_phone', 
            label: 'Ingrese el por qué no tiene teléfono la madre', 
            requiredErrorMsg: 'El motivo del porque no tiene teléfono la madre es requerida'
        },
        family_mom_time_died: {
            name: 'family_mom_time_died', 
            label: 'Ingrese desde hace cuanto tiempo falleció su madre', 
            requiredErrorMsg: 'El tiempo de fallecimiento es obligatoria'
        },
        family_mom_reason_died: {
            name: 'family_mom_reason_died', 
            label: 'Ingrese la razón por la cual falleció su madre', 
            requiredErrorMsg: 'La razón del fallecimiento es obligatoria'
        },
        family_mom_life: {
            name: 'family_mom_life', 
            label: 'Seleccione una de las opciones*', 
        },
        family_mom_phone_val: {
            name: 'family_mom_phone_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_mom_working_val: {
            name: 'family_mom_working_val', 
            label: 'Seleccione una de las opciones*', 
        },

        //stepFather
        family_stepfather_name: {
            name: 'family_stepfather_name',
            label: 'Ingrese el nombre del padrastro*',
            requiredErrorMsg: 'El nombre del padrastro es requerido'
        }, 
        family_stepfather_age: {
            name: 'family_stepfather_age', 
            label: 'Ingrese la edad del padrastro*', 
            requiredErrorMsg: 'La edad del padrastro es requerida'
        }, 
        family_stepfather_status: {
            name: 'family_stepfather_status', 
            label: 'Seleccione una de las opciones*', 
            requiredErrorMsg: 'El estado civil del padrastro es requerida'
        }, 
        family_stepfather_place: {
            name: 'family_stepfather_place', 
            label: 'Ingrese el puesto del padrastro*',
            requiredErrorMsg: 'El puesto del padrastro es requerida'
        },
        family_stepfather_company: {
            name: 'family_stepfather_company', 
            label: 'Ingrese la empresa en que labora el padrastro*',
            requiredErrorMsg: 'La empresa del padrastro es requerida'
        }, 
        family_stepfather_financial_income: {
            name: 'family_stepfather_financial_income', 
            label: 'Ingresos promedio del padrastro', 
            requiredErrorMsg: 'Los ingresos promedio del padrastro es requerida'
        },
        family_stepfather_phone: {
            name: 'family_stepfather_phone', 
            label: 'Ingrese el teléfono del padrastro', 
            requiredErrorMsg: 'El teléfono del padrastro es requerida'
        },
        family_stepfather_depend: {
            name: 'family_stepfather_depend', 
            label: 'De quien depende economicamente el padrastro', 
            requiredErrorMsg: 'De quien depende economicamente es obligatoria'
        },
        family_stepfather_no_phone: {
            name: 'family_stepfather_no_phone', 
            label: 'Ingrese el por qué no tiene teléfono el padrastro', 
            requiredErrorMsg: 'El motivo del porque no tiene teléfono el padrastro es requerida'
        },
        family_stepfather_time_died: {
            name: 'family_stepfather_time_died', 
            label: 'Ingrese desde hace cuanto tiempo falleció su padrastro', 
            requiredErrorMsg: 'El tiempo de fallecimiento es obligatoria'
        },
        family_stepfather_reason_died: {
            name: 'family_stepfather_reason_died', 
            label: 'Ingrese la razón por la cual falleció su padrastro', 
            requiredErrorMsg: 'La razón del fallecimiento es obligatoria'
        },
        family_stepfather_info: {
            name: 'family_stepfather_info', 
            label: 'Seleccione una de las opciones', 
            // requiredErrorMsg: 'La razón por la cual no tiene la información es obligatoria'
        },
        family_stepfather_life: {
            name: 'family_stepfather_life', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepfather_phone_val: {
            name: 'family_stepfather_phone_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepfather_working_val: {
            name: 'family_stepfather_working_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepfather_noInfo: {
            name: 'family_stepfather_noInfo', 
            label: 'Ingrese por qué no posee la información'
        },
        //stepMother
        family_stepmother_name: {
            name: 'family_stepmother_name',
            label: 'Ingrese el nombre de la madrastra*',
            requiredErrorMsg: 'El nombre de la madrastra es requerido'
        }, 
        family_stepmother_age: {
            name: 'family_stepmother_age', 
            label: 'Ingrese la edad de la madrastra*', 
            requiredErrorMsg: 'La edad de la madrastra es requerida'
        }, 
        family_stepmother_status: {
            name: 'family_stepmother_status', 
            label: 'Seleccione una de las opciones*', 
            requiredErrorMsg: 'El estado civil de la madrastra es requerida'
        }, 
        family_stepmother_place: {
            name: 'family_stepmother_place', 
            label: 'Ingrese el puesto de la madrastra*',
            requiredErrorMsg: 'El puesto de la madrastra es requerida'
        },
        family_stepmother_company: {
            name: 'family_stepmother_company', 
            label: 'Ingrese la empresa en que labora la madrastra*',
            requiredErrorMsg: 'La empresa de la madrastra es requerida'
        }, 
        family_stepmother_financial_income: {
            name: 'family_stepmother_financial_income', 
            label: 'Ingresos promedio de la madrastra', 
            requiredErrorMsg: 'Los ingresos promedio de la madrastra es requerida'
        },
        family_stepmother_phone: {
            name: 'family_stepmother_phone', 
            label: 'Ingrese el teléfono de la madrastra', 
            requiredErrorMsg: 'El teléfono de la madrastra es requerida'
        },
        family_stepmother_depend: {
            name: 'family_stepmother_depend', 
            label: 'De quien depende economicamente la madrastra', 
            requiredErrorMsg: 'De quien depende economicamente es obligatoria'
        },
        family_stepmother_no_phone: {
            name: 'family_stepmother_no_phone', 
            label: 'Ingrese el por qué no tiene teléfono la madrastra', 
            requiredErrorMsg: 'El motivo del porque no tiene teléfono la madrastra es requerida'
        },
        family_stepmother_time_died: {
            name: 'family_stepmother_time_died', 
            label: 'Ingrese desde hace cuanto tiempo falleció su madrastra', 
            requiredErrorMsg: 'El tiempo de fallecimiento es obligatoria'
        },
        family_stepmother_reason_died: {
            name: 'family_stepmother_reason_died', 
            label: 'Ingrese la razón por la cual falleció su madrastra', 
            requiredErrorMsg: 'La razón del fallecimiento es obligatoria'
        },
        family_stepmother_info: {
            name: 'family_stepmother_info', 
            label: 'Ingrese la razón por la cual no tiene la información de su madrastra', 
            requiredErrorMsg: 'La razón por la cual no tiene la información es obligatoria'
        },
        family_stepmother_life: {
            name: 'family_stepmother_life', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepmother_phone_val: {
            name: 'family_stepmother_phone_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepmother_working_val: {
            name: 'family_stepmother_working_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_stepmother_noInfo: {
            name: 'family_stepmother_noInfo', 
            label: 'Ingrese por qué no posee la información', 
            requiredErrorMsg: 'Este campo es requerido'
        },

        //son 
        family_son_name: {
            name: 'family_son_name',
            label: 'Ingrese el nombre*',
            requiredErrorMsg: 'El nombre es requerido'
        }, 
        family_son_age: {
            name: 'family_son_age', 
            label: 'Ingrese la edad*', 
            requiredErrorMsg: 'La edad es requerida'
        }, 
        family_son_status: {
            name: 'family_son_status', 
            label: 'Seleccione una de las opciones*', 
            requiredErrorMsg: 'El estado civil es requerida'
        }, 
        family_son_place: {
            name: 'family_son_place', 
            label: 'Ingrese el puesto*',
            requiredErrorMsg: 'El puesto es requerida'
        },
        family_son_company: {
            name: 'family_son_company', 
            label: 'Ingrese la empresa en que labora*',
            requiredErrorMsg: 'La empresa es requerida'
        }, 
        family_son_financial_income: {
            name: 'family_son_financial_income', 
            label: 'Ingresos promedio', 
            requiredErrorMsg: 'Los ingresos promedio es requerida'
        },
        family_son_phone: {
            name: 'family_son_phone', 
            label: 'Ingrese el teléfono', 
            requiredErrorMsg: 'El teléfono es requerida'
        },
        family_son_no_phone: {
            name: 'family_son_no_phone', 
            label: 'Ingrese el por qué no tiene teléfono', 
            requiredErrorMsg: 'El motivo es requerida'
        },
        family_son_depend: {
            name: 'family_son_depend', 
            label: 'De quien depende economicamente', 
            requiredErrorMsg: 'De quien depende economicamente es obligatoria'
        },
        family_son_time_died: {
            name: 'family_son_time_died', 
            label: 'Ingrese desde hace cuanto tiempo falleció', 
            requiredErrorMsg: 'El tiempo de fallecimiento es obligatoria'
        },
        family_son_reason_died: {
            name: 'family_son_reason_died', 
            label: 'Ingrese la razón por la cual falleció', 
            requiredErrorMsg: 'La razón del fallecimiento es obligatoria'
        },
        family_son_life: {
            name: 'family_son_life', 
            label: 'Seleccione una de las opciones*', 
        },
        family_son_phone_val: {
            name: 'family_son_phone_val', 
            label: 'Seleccione una de las opciones*', 
        },
        family_son_working_val: {
            name: 'family_son_working_val', 
            label: 'Seleccione una de las opciones*', 
        },
    }
}