import React, { useState ,useEffect} from 'react'
import './Radio.css';
function Radio({formData,setFormData}) {


  return (
    <>
      <div className="RadioComponent row">
  <h4 className="fw-bold text-center mt-3"></h4>
  <form className="bg-white px-4" action="">
    <h3 className='QuestionStyle'>How satisfied are you with our product?</h3>
  


    <div class="form-check mb-2">
    <label class="container-radio form-check-label" for="radioExample1">product1
      <input class="form-check-input" value="product2" 
      onClick={() => setFormData({...formData,checked:[!formData.checked[0],false,false]})}
      checked={formData.checked[0]} type="radio" name="exampleForm" id="radioExample1" />
      <span class="checkmark"></span>
      </label>
    </div>

    <div class="form-check mb-2">
    <label class="container-radio form-check-label" for="radioExample2">product2
      <input class="form-check-input" value="product2" 
      onClick={() => setFormData({...formData,checked:[false,!formData.checked[1],false]})}
      checked={formData.checked[1]} type="radio" name="exampleForm" id="radioExample2" />
      <span class="checkmark"></span>
      </label>
    </div>


    <div class="form-check mb-2">
    <label class="container-radio form-check-label" for="radioExample3">product3
      <input class="form-check-input" 
      value="product3" 
      onClick={() => setFormData({...formData,checked:[false,false,!formData.checked[2]]})}
      checked={formData.checked[2]} type="radio" name="exampleForm" id="radioExample3" />
      <span class="checkmark"></span>
      </label>
    </div>
 
  </form>
</div>

    </>
  )

}

export default Radio
