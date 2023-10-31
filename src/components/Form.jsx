import React from 'react'

const booknow1=()=>{

    var checkindate = $("#Check-in").val();
    var checkoutdate = $("#Check-out").val();
    var hotel = $("#hotel").val();
    var promocode = $("#promo").val() != "undefined" ? $("#promo").val() : "";
    
    
    var chkin = changeFormat(checkindate);
    var chkout = changeFormat(checkoutdate);
    
    
    
    var startDay = new Date(checkindate);
    var endDay = new Date(checkoutdate);
    
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    
    var millisBetween = endDay.getTime() - startDay.getTime();
    var days = millisBetween / millisecondsPerDay;
    
    if (checkindate == "") {
        alert("Select check-in date");
        return false;
    } else if (checkoutdate == "") {
        alert("Select check-out date");
        return false;
    } else {
    
        window.open("https://www.simplebooking.it/ibe/search?hid=" + hotel + "&lang=EN&cur=INR#q&guests=A,A&in=" + chkin + "&out=" + chkout + "&coupon=" + promocode, "_blank");
    }
}


function Form() {
    return (
        <div className='my-5 d-flex justify-content-center'>
            <div className="custom-container-1140 form-section align-item-center d-flex">
                <div className="row align-items-center g-0">
                    <div className="col-md-auto ms-3 me-3">
                        <p className='m-0 form-heading'>Select Your Gateway</p>
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
                        <p className='m-0 form-heading'>Check-In</p>
                        <input type="date" id="birthday" name="Check In" className='form-border date-form' />
                    </div>
                    <div className="col-md-auto me-3">
                        <p className='m-0 form-heading'>Check- Out</p>
                        <input type="date" id="birthday" name="Check In" className='form-border date-form' />
                    </div>
                    <div className="col-md-auto me-3">
                        <p className='m-0 form-heading'>Promo Code</p>
                        <input type="text" className='form-border date-form' placeholder='Promo Code' />
                    </div>
                    <div className="col-md-auto">
                        <button type="button" className="btn book-now-btn rounded-0 me-3 form-heading" onClick={booknow1}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>

        //         <div className="container">
        //             <div className="widget_div" id="simpleBooking">
        //                 <div className="booking-widget">
        //                     <div className="form-group">
        //                         <div className="inner-addon right-addon">
        //                             <label>Select your Gateway</label>
        //                             <select name="hotel" id="hotel">
        //                                 <option value={8460} selected="selected">
        //                                     Country Inn Tarika Riverside Resort, Jim Corbett
        //                                 </option>
        //                                 <option value={8461}>Country Inn Resort, Bhimtal</option>
        //                                 <option value={8663}>Country Inn Tarika Goa, Varca Beach</option>
        //                                 <option value={9008}>Country Inn Maple Resort, Chail</option>
        //                                 <option value={9009}>
        //                                     Country Inn Premier Pacific Resort, Mussoorie
        //                                 </option>
        //                                 <option value={9050}>Country Inn Resort, Vrindavan</option>
        //                                 <option value={9243}>
        //                                     Country Inn Premier The Prominence, Dehradun
        //                                 </option>
        //                                 {/* <option value="NDA1Mw==">Country Inn Resort, Jim Corbett</option> */}
        //                             </select>
        //                         </div>
        //                     </div>
        //                     <div className="form-group checkmargin form-field">
        //                         <div className="inner-addon right-addon rounded-0">
        //                             <label>Check-In</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 placeholder="Check-in"
        //                                 id="Check-in"
        //                                 readOnly=""
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="form-group form-field">
        //                         <div className="inner-addon right-addon">
        //                             <label>Check- Out</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 placeholder="Check-Out"
        //                                 id="Check-out"
        //                                 readOnly="readonly"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="form-group form-field promofield">
        //                         <div className="inner-addon right-addon">
        //                             <label>Promo Code </label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 placeholder="Promo Code"
        //                                 id="promo"
        //                             />
        //                         </div>
        //                     </div>
        //                     {/* <div class="form-group buttoncheck check-button"><span class="button-checkbox">
        //       <input id="flexi" type="checkbox" />
        //       <label for="flexi" style="display: inline-block;">Flexible Dates</label>
        //       </span>
        //   </div> */}
        //                     <div className="form-group book_btn">
        //                         <button className="btn btn-book" type="submit" onclick="booknow1();">
        //                             {" "}
        //                             Book Now
        //                         </button>
        //                     </div>
        //                     {/* <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12"> <a class="btn btn-danger btn-call"><i class="fa fa-phone"></i>'.$phone.'</a> </div>*/}
        //                 </div>
        //             </div>
        //         </div>

    )
}

export default Form
