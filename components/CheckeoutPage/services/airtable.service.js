import axios from 'axios';
export const valuesAirtble = async (values) => {
    const data = values.vehicle;
    const api_url = process.env.URL_API;
    const api_key = process.env.API_KEY;


    const dataVehicle = data.map((item, index) => {
        return `
            --------------------------------------------
            Vehiculo ${index + 1}
            Marca: ${item.general_brand}
            Modelo: ${item.general_model} 
            Propietario: ${item.general_model_propetary}
            --------------------------------------------
        `;
    });

    try {
        let config = {
            url: api_url,
            method: "post",
            headers: {
                authorization: `Bearer ${api_key}`
            },
            data: {
                records: [{
                    'fields': {
                        "Nombre": values.general_name,
                        "Apellido": values.general_lastname,
                        "DPI": values.general_dpi,
                        "VEHICULOS": dataVehicle.toString(),
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
