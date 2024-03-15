import { axiosInstance } from '../helper/axios-config';

const obtenerUsuario = () => {
    return axiosInstance.get('usuario', { // http://localhost:4000/usuario
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const crearUsuario = (data) => {
    return axiosInstance.post('usuario', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarUsuario = (usuarioId, data) => {
    return axiosInstance.put(`usuario${usuarioId}`, data, { //http://localhost:4000/usuario/0123456789012
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    obtenerUsuario, crearUsuario, editarUsuario
}