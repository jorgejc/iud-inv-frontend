import { axiosInstance } from '../helper/axios-config';

const getEstados = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearEstado = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarEstado = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getEstados, crearEstado, editarEstado
}