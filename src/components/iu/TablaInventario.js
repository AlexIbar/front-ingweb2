import React from 'react'
import { usuario, marca, estadoEquipo, tipoEquipo } from '../../services/EstadoService'

function obtenerDatos(est) {
  let r = {
    user : '',
    marc:'',
    tipoEquip:'',
    estadoEquip:''
  }
  usuario(est.usuarioCargo)
    .then(response => {
      r.user = response.data.usuarios;
      return marca(est.marca)
    })
    .then(response => {
      r.marc = response.data.nombre
      return tipoEquipo(est.tipoEquipo)
    })
    .then(response => {
      r.tipoEquip = response.data.nombre
      return estadoEquipo(est.estadoEquipo)
    })
    .then((response)=> {
      r.estadoEquip=response.data.nombre
      console.log(r)
    })
}

export default function TablaModulos({ componentes, openEditById }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Serial</th>
            <th scope="col">Modelo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Foto equipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Usuario cargo</th>
            <th scope="col">Marca</th>
            <th scope="col">Estado equipo</th>
            <th scope="col">Tipo equipo</th>
          </tr>
        </thead>
        <tbody>
          {
            componentes.map((est, index) => {
              return (
                <tr key={est._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{est.serial}</td>
                  <td>{est.modelo}</td>
                  <td>{est.descripcion}</td>
                  <td>
                    <img src={est.fotoEquipo} width="100px" />
                  </td>
                  <td>{est.precio}</td>
                  <td>{est.nomUsuario}</td>
                  <td>{est.nomMarca}</td>
                  <td>{est.nomEstadoEquipo}</td>
                  <td>{est.nomTipoEquipo}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data={est._id}
                      onClick={openEditById}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    {/*<button 
                    type="button" 
                    className="btn btn-outline-danger mx-1"
                  >
                    <i className="fa-solid fa-trash"></i>
            </button>*/}
                  </td>
                  <td></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}
