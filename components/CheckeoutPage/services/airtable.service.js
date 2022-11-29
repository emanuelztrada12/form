import axios from 'axios';

export const valuesAirtble = async (values) => {
    const vehicle = values.vehicle;
    const biker = values.biker; 

    const air_url = process.env.AIR_URL;
    const air_table = process.env.AIR_GENERAL; 
    const air_key = process.env.AIR_API_KEY;
    
    console.log(`${air_url}${air_table}`);

    const dataVehicle = vehicle.map((item, index) => {
        return `
            --------------------------------------------
            Vehiculo ${index + 1}
            Marca: ${item.general_brand}
            Modelo: ${item.general_model} 
            Propietario: ${item.general_model_propetary}
            --------------------------------------------
        `;
    });

    const dataBiker = biker.map((item, index) => {
        return `
            --------------------------------------------
            Vehiculo ${index + 1}
            Marca: ${item.general_brand_biker}
            Modelo: ${item.general_model_biker} 
            Propietario: ${item.general_model_propetary_biker}
            --------------------------------------------
        `;
    });

    let years = new Date(new Date() - new Date(values.general_birth)).getFullYear() - 1970;
    let year = years.toString();

    try {
        let config = {
            url: `${air_url}${air_table}`,
            method: "post",
            headers: {
                authorization: `Bearer ${air_key}`
            },
            data: {
                records: [{
                    'fields': {
                        "Nombre"        : values.general_name,
                        "Apellido"      : values.general_lastname, 
                        "Cumpleaños"    : year,
                        "DPI"           : values.general_dpi,
                        "VEHICULOS"     : dataVehicle.toString(),
                    }
                }]
            }
        }

        let res = await axios(config).data;
        // console.log(res);
    } catch (error) {
        console.log(error)
    }
}