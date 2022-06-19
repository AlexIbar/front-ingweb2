import React from 'react'

export default function TablaModulos({componentes, openEditById}) {
  return (
    <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha Creación</th>
          <th scope="col">Fecha Actualización</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          componentes.map((est, index) => {
            const date = new Date(est.fechaCreacion);
            const creacion = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            let actualizacion = new Date(est.fechaActualizacion)
            let fechaActualizacion = actualizacion.getFullYear()+"-"+(actualizacion.getMonth()+1)+"-"+actualizacion.getDate();
            return(
              <tr key={est._id}>
                <th scope="row">{index + 1}</th>
                <td>{est.usuarios}</td>
                <td>{est.email}</td>
                <td>{est.estado ? 'Activo' : 'Inactivo'}</td>
                <td>{creacion}</td>
                <td>{fechaActualizacion}</td>
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
