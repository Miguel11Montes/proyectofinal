import React from 'react'



export const CampoTexto = ({children, id}) => {
  return (
    
    <div id='campo' className="text-center justify-content-center">
        <form className="row g-3 needs-validation center-block justify-content-center">
            <div className='row mt-5 justify-content-center'>
                <div className='row align-items-start justify-content-center'>
                    <div className='col-2'>
                        <label className='text-white font-weight-bold form-label text-center'><b>{children} :</b></label>
                    </div>
                    <div className='col-5'>
                        <input type={"text"} className='form-control text-center' id={id} />
                    </div>
                </div>
            </div>
            
        </form>
    </div>
  )
}
export default CampoTexto