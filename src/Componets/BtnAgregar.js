import React from 'react'
import { Link } from 'react-router-dom'

const BtnAgregar = () => {
  return (
    <div>
        <Link className='btn btn-primary'  to="/AgregarLibro">Agregar libro</Link>
    </div>
  )
}

export default BtnAgregar
