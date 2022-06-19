import React, { useEffect, useState } from 'react'
import { obtenerUsuario, guardarUsuario, editaUsuarioPorId } from '../../services/EstadoService';
import TablaUsuarios from '../iu/TablaUsuarios';
import ModalDos from './Modal';

export default function TipoEquipo() {
  
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState({
    _id: '',
    usaurios: '',
    email:'',
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
    obtenerUsuario()
    .then(r => {
      console.log(r.data)
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
    guardarUsuario(estado)
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
    editaUsuarioPorId(estado)
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
      usuarios: '',
      email:'',
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
      <TablaUsuarios 
        componentes={estados}
        openEditById={openEditById}
      />
      <ModalDos 
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
