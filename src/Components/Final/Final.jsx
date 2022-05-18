import React, { useState ,useEffect} from 'react';
import './Final.scss';
function Final() {
  return (
    <div className='Final text-center px-4'>
        <div className=''>
          <i class="fa-solid fa-circle-check py-2"></i>
          <h2 className='my-3'>Survey complete! Thank you for you time.</h2>
          <button type="submit" name="process" class="submit">Submit the survey</button>
      </div>
    </div>
  )

}

export default Final;
