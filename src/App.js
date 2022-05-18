import React, { useState ,useEffect} from 'react'
import Radio from './Components/Radio/Radio';
import CheckBox from './Components/CheckBox/CheckBox';
import InputQusetion from './Components/InputQusetion/InputQusetion';
import PersonalData from './Components/PersonalData/PersonalData';
import Final from './Components/Final/Final';

function App() {
let [page,setPage] = useState(0);
let [disabled,setDisabled] = useState(true);
let [remove,setRemove] = useState(false);

const formTitles = ['Sign Up','Personal Info','others',"others2"];
const [formData, setFormData] = useState({
  name:'',
  email:'',
  product:'',
  InputQustions:'',
  checked:[false,false,false],
  checkBox1:[false,false,false],
});

const presentage =(page / (formTitles.length - 1)) * 100;


useEffect(function(){
   if(formData.name.length &&  formData.email.length && page === 0){
     setDisabled(false);
   }else if(page === 0){
     setDisabled(true)
     
   }else if(formData.checked.includes(true) && page === 1){
    setDisabled(false);
   }else if(formData.checked.includes(true) && page === 1){

   }
   
   if(page === 0){
    if(formData.name.length &&  formData.email.length){
      setDisabled(false);
    }else{
      setDisabled(true);
    }

   }else if(page === 1){

    if(formData.checked.includes(true)){
      setDisabled(false);
     }else{
      setDisabled(true);
     }
    }else if(page===2){
      if(formData.checkBox1.includes(true)){
        setDisabled(false);
      }else{
        setDisabled(true);
       }
    }else if(page ===3){
      setRemove(false);
    }else{
      setRemove(true);
    }
},[formData.name.length,formData.email.length,page,formData.checked,formData.checkBox1])

const pageDisplay = () =>{
  if(page == 0){
    console.log(presentage);
   return <PersonalData formData= {formData} setFormData= {setFormData}/>;
  }
  else if(page == 1){
    console.log(presentage);
    return <Radio formData= {formData} setFormData= {setFormData}/>;
  }

  else if(page == 2){
    return <CheckBox formData= {formData} setFormData= {setFormData}/>
  }

  else if(page == 3){
   return <InputQusetion />
  }else if(page == 4){
  
    return <Final />
  }
}

if(page >= formTitles.length){
  page = formTitles.length ;
}

const handleForm = (e) =>{
 e.preventDefault();
}

  return(
    <section className='Survey'>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='Survey_Container'>
      <div className='Survey_Progress mb-3'>
        <h2 className='text-center'>{
        page > 3 || `${page + 1} / ${formTitles.length}`
        }</h2>
      <div className="progress">
        <div className="progress-bar" style={{width:`${presentage}%`}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      </div>

      <div className='progress_body'>
         {
         pageDisplay()
         }
      </div>
       <form onSubmit={handleForm}>
         
      <div className='progress_Footer py-3 row'>
        <div className='col-6'>
        <button type='button'  className='ml-2 btn' disabled={page < 1 } 
        onClick={ () => setPage((currPage) => currPage - 1) }>Previous</button>
        </div>
        
        <div className='col-6 text-end'>
        <button className='ml-2 btn' hidden={remove} disabled = {disabled} type="submit"  
         onClick={ () =>
          { setPage((currPage) => currPage + 1) }}>
          {page === formTitles.length - 1 ? 'Submit' : 'next'}
        </button>
        </div>
      </div>
      </form>
      </div>
      </div>

   
    </section>
  )

}

export default App
