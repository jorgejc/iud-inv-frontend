import { axiosInstance } from '../helper/axios-config';

const obtenerEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarEstadoEquipo = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerEstadosEquipos, crearEstadoEquipo, editarEstadoEquipo
}