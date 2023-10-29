import React from 'react'

function Form() {
  return (
    <div className='my-5 d-flex justify-content-center'>
        <div className="custom-container-1140 form-section align-item-center d-flex">
            <div className="row align-items-center g-0">
                <div className="col-md-auto ms-3 me-3">
                    <p className='m-0'>Select Your Gateway</p>
                    <div className="dropdown form-border custom-dropdown">
                        <button className="btn rounded-0 dropdown-toggle custom-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">Country Inn Tarika Riverside</button>
                        <ul className="dropdown-menu ">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-auto me-3">
                    <p className='m-0'>Check-In</p>
                    <input type="date" id="birthday" name="Check In" className='form-border date-form'/>
                </div>
                <div className="col-md-auto me-3">
                    <p className='m-0'>Check- Out</p>
                    <input type="date" id="birthday" name="Check In" className='form-border date-form'/>
                </div>
                <div className="col-md-auto me-3">
                    <p className='m-0'>Promo Code</p>
                    <input type="text" className='form-border date-form' placeholder='Promo Code'/>
                </div>
                <div className="col-md-auto">
                    <button type="button" className="btn book-now-btn rounded-0 me-3">Book Now</button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Form
