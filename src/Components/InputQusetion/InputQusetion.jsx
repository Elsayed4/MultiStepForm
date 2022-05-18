import React, { useState ,useEffect} from 'react'
function CheckBox({formData,setFormData}) {
  return (
    <form className='px-4'>
    <div className="mb-3">
    <label htmlFor="exampleInputQustions" className="QuestionStyle form-label">You Have Any Nots?</label>
    <input type="text" required
    
    className="form-control" id="exampleInputQustions" aria-describedby="emailHelp" />
     
  </div> 
    </form>
  )

}

export default CheckBox
