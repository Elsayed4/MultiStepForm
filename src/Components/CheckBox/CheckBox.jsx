import React, { useState ,useEffect} from 'react'
import './CheckBox.scss';
function CheckBox({formData,setFormData}) {


  return (
    <>
   <div className="row CheckBox1">
  <h4 className="fw-bold text-center mt-3"></h4>
  <form className="px-4" action="">
    <h3 className="QuestionStyle">Choose one or more options</h3>
    <div className="form-check">
    <label className="container-checkbox form-check-label" for="flexCheckDefault"> Option 1
      <input className="form-check-input" required checked={formData.checkBox1[0]} 
      onClick={() => setFormData({...formData,checkBox1:[!formData.checkBox1[0],formData.checkBox1[1],formData.checkBox1[2]]})}
      type="checkbox" value="" id="flexCheckDefault" />
       <span className="checkmark"></span>
      </label>
    </div>

   
    <div className="form-check">
    <label className="container-checkbox form-check-label" for="flexCheckDefault2"> Option2
      <input className="form-check-input" checked={formData.checkBox1[1]} 
      onClick={() => setFormData({...formData,checkBox1:[formData.checkBox1[0],!formData.checkBox1[1], formData.checkBox1[2]]})}
      type="checkbox" value="" id="flexCheckDefault2" />
     <span className="checkmark"></span>
      </label>
    </div>

    
    <div className="form-check">
    <label className="container-checkbox form-check-label" for="flexCheckDefault3">Option 3
      <input className="form-check-input" type="checkbox" checked={formData.checkBox1[2]}
       onClick={() => setFormData({...formData,checkBox1:[formData.checkBox1[0],formData.checkBox1[1],!formData.checkBox1[2]]})}
      value="" id="flexCheckDefault3" />
       <span className="checkmark"></span>
      </label>
    </div>

    
  </form>
 
</div>

    </>
  )

}

export default CheckBox
