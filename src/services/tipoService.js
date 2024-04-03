import { axiosInstance } from '../helper/axios-config';

const getTipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearTipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarTipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getTipos, crearTipo, editarTipo
}