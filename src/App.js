import {React, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {TablaLibros} from "./Componets/TablaLibros"
import AgregarLibro from './Componets/AgregarLibro'
import TablaJuegos from './Componets/TablaJuegos'
import AgregarJuego from './Componets/AgregarJuego'

export const App = () => {

  useEffect(() =>{
    if(localStorage.getItem("libros") == null){
        let libros = {id:"Id", titulo:"titulo", fecha:"fecha", categoria:"categoria", editorial:"editorial", paginas:"paginas", descripcion:"descripcion", portada:"portada"};
        let lista = [];
        lista.push(libros);
        let l = JSON.stringify(lista);
        localStorage.setItem("libros", l)
    }
  }, []) 
  return (
    <div>
        <p id='principal' className='h1 text-center mt-5'>Bienvenidos al sistema de registro de productos de tiendas</p>

        <div className='container text-center'>
            <BrowserRouter>
                <div className="form-group">
                    <Link className='btn btn-dark text-center mt-4 m-3' to="/">Inicio</Link>
                    <Link className='btn btn-dark text-center mt-4 m-3' to="/libros">Tienda Libros</Link>
                    <Link className='btn btn-dark text-center mt-4 m-3' to="/juegos">Tienda video juegos</Link>
                </div>
                <Switch>
                    <Route path="/" exact>Inicio</Route>
                    <Route path="/libros"><TablaLibros/></Route>
                    <Route path="/AgregarLibro"><AgregarLibro/></Route>
                    <Route path="/juegos"><TablaJuegos/></Route>
                    <Route path="/AgregarJuego"><AgregarJuego/></Route>
                </Switch>       
            </BrowserRouter>
        </div>
    </div>
      
  )
}

export default App