import React from 'react'

export const CampoImage = ({children, id}) => {
  return (
    <div id='campo' className="text-center justify-content-center">
        <form className="row g-3 needs-validation center-block justify-content-center">
            <div className='row mt-5 justify-content-center'>
                <div className='row align-items-start justify-content-center'>
                    <div className='col-2'>
                        <label className='text-white'><b>{children} :</b></label>
                    </div>
                    <div className='col-5'>
                        <textarea type={"text"} className="form-control" id={id} rows="3"></textarea>
                    </div>
                </div>
            </div>
             
        </form>
    </div>
  )
}
