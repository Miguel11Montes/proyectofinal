import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CampoFecha from './CampoFecha'
import { CampoImage } from './CampoImage'
import CampoNumero from './CampoNumero'
import CampoTexto from './CampoTexto'

const AgregarLibro = () => {
    const [mensaje, setMensaje] = useState("");

    const guardarLibro = () =>{
        setMensaje("");
        let id = document.querySelector("#txtId").value;
        let titulo = document.querySelector("#txtTitulo").value;
        let fecha = document.querySelector("#txtFecha").value;
        let categoria = document.querySelector("#txtCategoria").value;
        let editorial = document.querySelector("#txtEditorial").value;
        let paginas = document.querySelector("#txtPaginas").value;
        let descripcion = document.querySelector("#txtDescripcion").value;
        

        console.log(id)
        
        if(validarLibro(id, titulo, fecha, categoria, editorial, paginas, descripcion)){
            //localStorage.clear();
            if(localStorage.getItem("libros")!=null){
                let libros = JSON.parse(localStorage.getItem("libros"))
                console.log(libros)
                if(existe(libros, id)){
                    alert("el id ya existe")
                }else{
                    let librosAdd = {id:id, titulo:titulo, fecha:fecha, categoria:categoria, editorial:editorial, paginas:paginas, descripcion:descripcion};
                    libros.push(librosAdd);

                    let l = JSON.stringify(libros)

                    localStorage.setItem("libros", l)

                    document.querySelector("#btnCancelar").click();
                }
            }
        }
        else{
            setMensaje("Complete todos los campos");
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

  const validarLibro = (id, titulo, fecha, categoria, editorial, paginas, descripcion) =>{
     return id=="" || titulo=="" || fecha=="" || categoria=="" || editorial=="" || paginas =="" || descripcion==""  ? false : true
  }
  return (    
    <div className='row'>
         <div className={mensaje!=""?'alert alert-warning':''}>{mensaje}</div>
        <CampoTexto id="txtId">Id</CampoTexto>
        <CampoTexto id="txtTitulo">Titulo</CampoTexto>
        <CampoFecha id="txtFecha">Fecha</CampoFecha>
        <CampoTexto id="txtCategoria">Categoria</CampoTexto>
        <CampoTexto id="txtEditorial">Editorial</CampoTexto>
        <CampoNumero id="txtPaginas">Paginas</CampoNumero>
        <CampoImage id="txtDescripcion">Descripcion</CampoImage>
       
      

        <div className='mt-3'>
            <button className='btn btn-primary col-3 m-3' onClick={()=> guardarLibro()} >Guardar</button>
            <Link id="btnCancelar" className='btn btn-secondary col-3 m-3' to="/libros">Cancelar</Link>
        </div>
    </div>
  )
}

export default AgregarLibro
