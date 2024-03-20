import { axiosInstance } from '../helper/axios-config';

const obtenerInventarios = () => {
    return axiosInstance.get('inventario', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearInventario = (data) => {
    return axiosInstance.post('inventario', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarInventario = (inventarioId, data) => {
    return axiosInstance.put(`inventario${inventarioId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerInventarios, crearInventario, editarInventario
}