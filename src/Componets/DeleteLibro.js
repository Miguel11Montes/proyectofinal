import React, {useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import CampoTexto from './CampoTexto';


export const DeleteLibro = () => {
const {id} = useParams();
useEffect(() =>{
    if(localStorage.getItem("libros")!=null){
        //localStorage.clear();
        let libro = JSON.parse(localStorage.getItem("libros"));

        libro.forEach(e => { 
            if(e.id==id){
                document.querySelector("#txtId").value = e.id;
                document.querySelector("#txtTitulo").value = e.titulo;
                document.querySelector("#txtFecha").value = e.fecha;
                document.querySelector("#txtCategoria").value = e.catetegoria;
                document.querySelector("#txtEditorial").value = e.editorial;
                document.querySelector("#txtPaginas").value = e.paginas;
                document.querySelector("#txtDescripcion").value = e.descripcion;
             
         
                console.log(e)
            }
         //let lo = document.querySelector('#txtId').value = e.id;
         //alert(lo)
            //document.querySelector("#txtTitulo").value = e.titulo;
         
        });
    }
},[])

const deleteLibro = () => {
    if(localStorage.getItem("libros")!=null){
        let libro = JSON.parse(localStorage.getItem("libros"));
        
        let index = -1;
        let i = 0;
        libro.forEach(e => {
            if(e.id == id){
                index = i;
            }
            i++;
        });

        if(index!=-1){
            libro.splice(index,1);
        }

        let j = JSON.stringify(libro);
        
        localStorage.setItem("libros", j);
        document.querySelector("#btnCancelar").click();
    }
}
  return (
    <div className='row'>
        <CampoTexto id="txtId" disable>Id</CampoTexto>
        <CampoTexto id="txtTitulo" disable>Titulo</CampoTexto>
        <CampoTexto id="txtFecha" disable>Fecha</CampoTexto>
        <CampoTexto id="txtCategoria" disable>Categoria</CampoTexto>
        <CampoTexto id="txtEditorial" disable>Editorial</CampoTexto>
        <CampoTexto id="txtPaginas" disable>Paginas</CampoTexto>
        <CampoTexto id="txtDescripcion" disable>Descripcion</CampoTexto>
       


        <div className='mt-3'>
            <button className='btn btn-primary col-3 m-3' onClick={()=> deleteLibro()} >Eliminar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-3 m-3' to="/libros">Cancelar</Link>
        </div>
    </div>
  )
}
export default DeleteLibro