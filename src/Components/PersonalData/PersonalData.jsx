import React, { useState ,useEffect} from 'react'
function PersonalData({formData,setFormData}) {

  if(formData.email == ''){
    console.log('error')
  }
  return (
    <>
     <form action="" className='px-4'>
     <div className="mb-3">
    <label htmlFor="exampleInputName1" className="QuestionStyle form-label">Your Name Is ?</label>
    <input type="text" required className="form-control" id="exampleInputName1" 
    aria-describedby="emailHelp"
    value={formData.name}
      onChange={(event) => setFormData({...formData,name:event.target.value})} />
      
  </div>
         

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="QuestionStyle form-label">Your Email address Is ?</label>
    <input type="email" required
     value={formData.email}
    onChange={(event) => setFormData({...formData,email:event.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
     
  </div>


     </form>
    </>
  )

}

export default PersonalData;
