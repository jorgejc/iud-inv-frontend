import { axiosInstance } from '../helper/axios-config';

const obtenerMarca = () => {
    return axiosInstance.get('marca', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearMarca = (data) => {
    return axiosInstance.post('marca', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarMarca = (marcaId, data) => {
    return axiosInstance.put(`marca${marcaId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerMarca, crearMarca, editarMarca
}