import {React, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {TablaLibros} from "./Componets/TablaLibros"
import AgregarLibro from './Componets/AgregarLibro'

import TablaJuegos from './Componets/TablaJuegos'
import AgregarJuego from './Componets/AgregarJuego'

import {DeleteLibro} from './Componets/DeleteLibro'


export const App = () => {

  useEffect(() =>{
    //localStorage.clear();
    if(localStorage.getItem("libros") == null){
        let libros = {id:"Id", titulo:"Título", fecha:"Fecha", categoria:"Categoría", editorial:"Editorial", paginas:"Páginas", descripcion:"Descripción"};
        let lista = [];
        lista.push(libros);
        let l = JSON.stringify(lista);
        localStorage.setItem("libros", l)
    }
  }, []) 
  return (
    <div className='proyecto'>
        <div className='container text-center'>
            <BrowserRouter>
                <div id='principal' className='h1 text-center mt-5 col-10 col-md-8 col-lg-6 mx-auto'>Bienvenidos al sistema de registro de productos de tiendas</div>
                
                <div className="rutas my-3">
                    <Link className='btn btn-dark text-center mt-4 m-3' to="/libros">Tienda Libros</Link>
                    <Link className='btn btn-dark text-center mt-4 m-3' to="/juegos">Tienda video juegos</Link>
                </div>

                <Switch>
                    <Route path="/libros"><TablaLibros/></Route>
                    <Route path="/AgregarLibro"><AgregarLibro/></Route>

                    <Route path="/juegos"><TablaJuegos/></Route>
                    <Route path="/AgregarJuego"><AgregarJuego/></Route>

                    <Route path="/Delete/:id" children={<DeleteLibro/>}></Route>
                    <Route path="/juegos">Juegos</Route>

                </Switch>       
            </BrowserRouter>
        </div>
    </div>
      
  )
}

export default App