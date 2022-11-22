import React, { useEffect } from 'react'
import AgregarLibro from './AgregarLibro';
import BtnAgregar from './BtnAgregar';

export const TablaLibros = () => {
    useEffect(() =>{
        if(localStorage.getItem("libros")!=null){
            let libros = JSON.parse(localStorage.getItem("libros"));
                
                let encabezados = libros[0];
                
                document.querySelector("#col1").innerHTML = encabezados.id;
                document.querySelector("#col2").innerHTML = encabezados.titulo;
                document.querySelector("#col3").innerHTML = encabezados.fecha;
                document.querySelector("#col4").innerHTML = encabezados.categoria;
                document.querySelector("#col5").innerHTML = encabezados.editorial;
                document.querySelector("#col6").innerHTML = encabezados.paginas;
                document.querySelector("#col7").innerHTML = encabezados.descripcion;
                document.querySelector("#col8").innerHTML = encabezados.portada;
                
                const filas = document.querySelector("#filas");
                let filasHtml = "";
                libros.forEach(e => {
                    if(e.id != "Id"){
                        let btnEliminar = `<button class='btn btn-danger'><i className='bi bi-calendar'></i></button>`
                        filasHtml +=`<tr><td>${e.id}</td><td>${e.titulo}</td><td>${e.fecha}</td><td>${e.categoria}</td><td>${e.editorial}</td><td>${e.paginas}</td><td>${e.descripcion}</td><td>${e.portada}</td><td>${btnEliminar}</td></tr>`
                        console.log(e.titulo)
                    }
                });

                filas.innerHTML = filasHtml;
            
        }
    })
  return (
    <div>
        
        <div className='float: right mt-3'>
            <BtnAgregar/>
        </div>

        <table className='table table-dark mt-3'>
            <thead>
                <tr>
                    <th id="col1"></th>
                    <th id="col2"></th>
                    <th id="col3"></th>
                    <th id="col4"></th>
                    <th id="col5"></th>
                    <th id="col6"></th>
                    <th id="col7"></th>
                    <th id="col8"></th>
                    <th id="col9">Acciones</th>
                </tr>
            </thead>
            <tbody id="filas">

            </tbody>
        </table>
    </div>
  )
}

export default TablaLibros

