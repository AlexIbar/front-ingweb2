import React from 'react'

export default function Modal({estado, loading, closeModal, hidden, changeEstado, error, add}) {
  return (
<div 
    className="modal fade" id="exampleModal" 
    tabIndex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{estado._id ? 'Editar precio': ''}</h5>
          {
            (loading && <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>)
          }
          
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
            onClick={closeModal}
          >
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={add}>
            <input type={hidden} name="_id" value={estado._id}></input>
            <div className="mb-3">
              <label 
                htmlFor="recipient-name" 
                className="col-form-label"
              >
                Serial:
              </label>
              <input 
                required
                value={estado.serial}
                name="serial"
                type="text" 
                className="form-control"
                disabled         
              />
            </div>
            <div className="mb-3">
              <label 
                htmlFor="recipient-name" 
                className="col-form-label"
              >
                Modelo:
              </label>
              <input 
                required
                value={estado.modelo}
                name="modelo"
                type="text" 
                className="form-control"
                disabled
              />
            </div>
            <div className="mb-3">
              <label 
                htmlFor="recipient-name" 
                className="col-form-label"
              >
                Modelo:
              </label>
              <input 
                required
                value={estado.precio}
                name="precio"
                type="number" 
                className="form-control"
                onChange={changeEstado}                
              />
            </div>
            <div className="modal-footer">
            <div className={error ? 'alert alert-danger': 'd-none'} role="alert">
              ¡Ha ocurrido un error!
            </div>
              <button 
                type="button" 
                className="btn btn-secondary" data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              {
                loading ? (<button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                  </button>) : (<button type="submit" className="btn btn-primary">
                    Guardar
                  </button>)
              }
            </div>
          </form>
            </div>
        </div>
        </div>
    </div>
  )
}
