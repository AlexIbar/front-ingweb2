import React, { useEffect, useState } from 'react'
import { obtenerTipoEquipo, guardarTipoEquipo, editaTipoEquipoPorId } from '../../services/EstadoService';
import TablaModulos from '../iu/TablaModulos';
import Modal from '../estado/Modal';

export default function TipoEquipo() {
  
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState({
    _id: '',
    nombre: '',
    estado: true
  });
  const [error, setError] = useState(false);
  const [hidden] = useState('hidden');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    getEstados();
  }, []);

  const changeEstado = e => {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value 
    })
  }
  const getEstados = () => {
    obtenerTipoEquipo()
    .then(r => {
        setEstados(r.data)
    }).catch(e => {
        console.log(e)
    })
}
  const add = e => {
    setLoading(true);
    e.preventDefault();
    if(estado._id){
      editarEstado();
    }else{
      guardarEstado();
    }
    resetEstado();
  }

  const guardarEstado = () => {
    guardarTipoEquipo(estado)
    .then(r => {
      setEstados([...estados, r.data.dato]);
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const closeModal = () => {
    resetEstado()
    changeError(false)
  }

  const changeError = e => {
    setError(e);
  }

  const openEditById = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if(e.target.classList[0]== 'fa-solid'){
        const id = e.target.parentNode.getAttribute('data')
        const estadoFilter = estados.filter(est => est._id == id)[0];
        setEstado({
          ...estadoFilter
        });
      }else{
        const id = e.target.getAttribute('data');
        const estadoFilter = estados.filter(est => est._id == id)[0];
        setEstado({
          ...estadoFilter
        });
      }
    }, 500)
  }

  const editarEstado = () => {
    editaTipoEquipoPorId(estado)
    .then(r => {
      r.data.estado = r.data.estado === 'true'
      const id = r.data._id;
      changeError(false)
      setLoading(false);
      getEstados()
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const resetEstado = () => {
    setEstado({
      _id: '',
      nombre: '',
      estado: true
    })
  }

  return (
    <div className='container'>
      <br></br>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"></i>
        Agregar
      </button>
      <br></br>
      <TablaModulos 
        componentes={estados}
        openEditById={openEditById}
      />
      <Modal 
        estado={estado}
        loading={loading}
        closeModal={closeModal}
        hidden={hidden}
        changeEstado={changeEstado}
        error={error}
        add={add}
      />
    </div>
  )
}
