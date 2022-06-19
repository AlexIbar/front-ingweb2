import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodos = () => {
  return axiosConfig.get(
      '/traerEstadoEquipos'
  );
}
export const guardar = (estado) => {
  return axiosConfig.post('/crearEstadoEquipo', estado);
}
export const editarPorId = (id, estado) => {
  return axiosConfig.put('/modificarEstadoEquipo', estado);
}

export const obtenerMarcas = ()=>{
  return axiosConfig.get('/traerMarcas')
}
export const guardarMarca = (marca)=>{
  return axiosConfig.post('/crearMarca', marca)
}
export const editarMarcaPorId = (marca) =>{
  return axiosConfig.put('/modificarMarca', marca)
}

export const obtenerTipoEquipo = ()=>{
  return axiosConfig.get('/traerTipoEquipos')
}
export const guardarTipoEquipo = (tipoEquipo)=>{
  return axiosConfig.post('/crearTipoEquipo', tipoEquipo)
}
export const editaTipoEquipoPorId = (tipoEquipo) =>{
  return axiosConfig.put('/modificarTipoEquipo', tipoEquipo)
}


export const obtenerUsuario = ()=>{
  return axiosConfig.get('/traerUsuarios')
}
export const guardarUsuario = (usuario)=>{
  return axiosConfig.post('/crearUsuarios', usuario)
}
export const editaUsuarioPorId = (usuario) =>{
  return axiosConfig.put('/modificarUsuario', usuario)
}

export const obtenerInventario = ()=>{
  return axiosConfig.get('/getInventarioAll')
}
export const guardarInventario = (datos)=>{
  return axiosConfig.post('/crearinventario', datos)
}
export const editaInventarioPorId = (usuario) =>{
  return axiosConfig.put('/modificarInventario', usuario)
}


//Traer unidad

export const usuario = idUsuario=> axiosConfig.get('/traerUsuario/'+idUsuario)
export const marca = idMarca=> axiosConfig.get('/traerMarca/'+idMarca)
export const estadoEquipo = idEstadoEquipo=> axiosConfig.get('/traerEstadoEquipo/'+idEstadoEquipo)
export const tipoEquipo = idtipoEquipo => axiosConfig.get('/traerTipoEquipo/'+ idtipoEquipo)