import React from 'react'
import { Link } from 'react-router-dom'
import CampoTexto from './CampoTexto'

const AgregarLibro = () => {
    const guardarLibro = () =>{
        let id = document.querySelector("#txtId").value;
        let titulo = document.querySelector("#txtTitulo").value;
        let fecha = document.querySelector("#txtFecha").value;
        let categoria = document.querySelector("#txtCategoria").value;
        let editorial = document.querySelector("#txtEditorial").value;
        let paginas = document.querySelector("#txtPaginas").value;
        let descripcion = document.querySelector("#txtDescripcion").value;
        let portada = document.querySelector("#txtPortada").value;

        console.log(id)
        
        if(validarLibro(id, titulo, fecha, categoria, editorial, paginas, descripcion, portada)){
            if(localStorage.getItem("libros")!=null){
                let libros = JSON.parse(localStorage.getItem("libros"))
                console.log(libros)
                if(existe(libros, id)){
                    alert("el id ya existe")
                }else{
                    let librosAdd = {id:id, titulo:titulo, fecha:fecha, categoria:categoria, editorial:editorial, paginas:paginas, descripcion:descripcion, portada:portada};
                    libros.push(librosAdd);

                    let l = JSON.stringify(libros)

                    localStorage.setItem("libros", l)

                    document.querySelector("#btnCancelar").click();
                }
            }
        }
    } 

    const existe = (libros, id) =>{
        let encontrado = false;
        libros.forEach(e => {
            if(e.id==id)
            encontrado = true
        });
        return encontrado;
    }

  const validarLibro = (id, titulo, fecha, categoria, editorial, paginas, descripcion, portada) =>{
     return id=="" || titulo=="" || fecha=="" || categoria=="" || editorial=="" || paginas =="" || descripcion=="" || portada=="" ? false : true
  }
  return (    
    <div className='row'>
        <CampoTexto id="txtId">Id</CampoTexto>
        <CampoTexto id="txtTitulo">Titulo</CampoTexto>
        <CampoTexto id="txtFecha">Fecha</CampoTexto>
        <CampoTexto id="txtCategoria">Categoria</CampoTexto>
        <CampoTexto id="txtEditorial">Editorial</CampoTexto>
        <CampoTexto id="txtPaginas">Paginas</CampoTexto>
        <CampoTexto id="txtDescripcion">Descripcion</CampoTexto>
        <CampoTexto id="txtPortada">Portada</CampoTexto>

        <div className='mt-3'>
            <button className='btn btn-primary col-3 m-3' onClick={()=> guardarLibro()} >Guardar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-3 m-3' to="/libros">Cancelar</Link>
        </div>
    </div>
  )
}

export default AgregarLibro
