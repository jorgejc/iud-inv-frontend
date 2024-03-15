import { axiosInstance } from '../helper/axios-config';

const obtenerTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearTipoEquipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarTipoEquipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerTiposEquipos, crearTipoEquipo, editarTipoEquipo
}