import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";


function Form() {
    const today = new Date();
    const [checkinDate, setCheckinDate] = useState(today)
    const [selectedOption, setSelectedOption] = useState("8460");
    const [promoCode, setPromoCode] = useState("");
    const isCheckinDisabled = (date) => {
        return date >= today;
    };

    const tomorrow = addDays(checkinDate, 1);
    const [checkoutDate, setCheckoutDate] = useState(tomorrow)
    const isCheckoutDisabled = (date) => {
        return date >= tomorrow;
    };

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };


    const Checkindate = checkinDate;
    const Checkoutdate = checkoutDate;
    const SelectedHotel = selectedOption;

    const bookNow = () => {
        const promocode = promoCode;
        const url = `https://www.simplebooking.it/ibe/search?hid=${SelectedHotel}&lang=EN&cur=INR#q&guests=A,A&in=${Checkindate}&out=${Checkoutdate}&coupon=${promocode}`;
        window.open(url, "_blank");
        // console.log (promocode);
    }


    return (
        <div className="form-section-padding">

            <div className="container">
                <div className="widget_div" id="simpleBooking">
                    <div className="booking-widget">
                        <div className="form-group">
                            <div className="inner-addon right-addon">
                                <label>Select your Gateway</label>
                                <select name="hotel" id="hotel" value={selectedOption} onChange={handleDropdownChange}>
                                    <option value="8460" selected="selected" className='form-option'>
                                        Country Inn Tarika Riverside Resort, Jim Corbett
                                    </option>
                                    <option value="8461" className='form-option'>Country Inn Resort, Bhimtal</option>
                                    <option value="8663" className='form-option'>Country Inn Tarika Goa, Varca Beach</option>
                                    <option value="9008" className='form-option'>Country Inn Maple Resort, Chail</option>
                                    <option value="9009" className='form-option'>
                                        Country Inn Premier Pacific Resort, Mussoorie
                                    </option>
                                    <option value="9050" className='form-option'>Country Inn Resort, Vrindavan</option>
                                    <option value="9243" className='form-option'>
                                        Country Inn Premier The Prominence, Dehradun
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group checkmargin form-field">
                            <div className="inner-addon right-addon rounded-0">
                                <label>Check-In</label>
                                <DatePicker
                                    selected={checkinDate}
                                    onChange={(date) => { setCheckinDate(date); setCheckoutDate(addDays(date, 1)) }}
                                    dateFormat="dd MMM yyyy"
                                    todayButton="Today"
                                    minDate={today}
                                    filterDate={isCheckinDisabled}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group form-field">
                            <div className="inner-addon right-addon">
                                <label>Check- Out</label>
                                <DatePicker
                                    selected={checkoutDate}
                                    onChange={(date) => setCheckoutDate(date)}
                                    dateFormat="dd MMM yyyy"
                                    todayButton="Tomorrow"
                                    minDate={tomorrow}
                                    filterDate={isCheckoutDisabled}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group form-field promofield">
                            <div className="inner-addon right-addon">
                                <label>Promo Code </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Promo Code"
                                    id="promo"
                                    value={promoCode}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setPromoCode(value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group book_btn">
                            <button className="btn btn-book" type="submit" onClick={bookNow}>
                                {" "}
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form
