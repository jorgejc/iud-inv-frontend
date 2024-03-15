import { axiosInstance } from '../helper/axios-config';

const obtenerInventario = () => {
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
    obtenerInventario, crearInventario, editarInventario
}