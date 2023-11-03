import React from 'react'


function Form() {
    return (
        <div className="form-section-padding">

        <div className="container">
                    <div className="widget_div" id="simpleBooking">
                        <div className="booking-widget">
                            <div className="form-group">
                                <div className="inner-addon right-addon">
                                    <label>Select your Gateway</label>
                                    <select name="hotel" id="hotel">
                                        <option value={8460} selected="selected" className='form-option'>
                                            Country Inn Tarika Riverside Resort, Jim Corbett
                                        </option>
                                        <option value={8461} className='form-option'>Country Inn Resort, Bhimtal</option>
                                        <option value={8663} className='form-option'>Country Inn Tarika Goa, Varca Beach</option>
                                        <option value={9008} className='form-option'>Country Inn Maple Resort, Chail</option>
                                        <option value={9009} className='form-option'>
                                            Country Inn Premier Pacific Resort, Mussoorie
                                        </option>
                                        <option value={9050} className='form-option'>Country Inn Resort, Vrindavan</option>
                                        <option value={9243} className='form-option'>
                                            Country Inn Premier The Prominence, Dehradun
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group checkmargin form-field">
                                <div className="inner-addon right-addon rounded-0">
                                    <label>Check-In</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Check-in"
                                        id="Check-in"
                                        readOnly=""
                                    />
                                </div>
                            </div>
                            <div className="form-group form-field">
                                <div className="inner-addon right-addon">
                                    <label>Check- Out</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Check-Out"
                                        id="Check-out"
                                        readOnly="readonly"
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
                                    />
                                </div>
                            </div>
                            <div className="form-group book_btn">
                                <button className="btn btn-book" type="submit" onClick="booknow1();">
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
