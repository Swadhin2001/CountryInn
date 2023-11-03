import React from 'react'

function Get_quote_form() {
  return (
    <>
    <section id="get-quote" className='form-padding'>
  <div className=" text-center">
    <h3 id="form-head" className="mb-5 font-Trajan f-s-28 color-gold">
      SUBMIT DETAILS
    </h3>
    <div className="container">
      <form className="form-card" method="post" action="#form-head">
        <div className="row justify-content-between text-start my-3">
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              First name<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              onblur="validate(1)"
            />{" "}
          </div>
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              Last name<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              onblur="validate(2)"
            />{" "}
          </div>
        </div>
        <div className="row justify-content-between text-start my-3">
          <div className="form-group">
            <label className="form-control-label  " htmlFor="sel1">
              Resort<span className="text-danger"> *</span>:
            </label>
            <select
              className="form-control"
              id="sel1"
              name="resorts"
              required=""
            >
              <option>Country Inn Resort, Bhimtal</option>
              <option>Country Inn Resort, Jim corbett</option>
              <option>Country Inn Tarika Riverside Resort, Jim Corbett</option>
              <option>Country Inn Hall of Heritage, Amritsar</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-between text-start my-3">
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              Start Date<span className="text-danger"> *</span>
            </label>
            <input
              type="date"
              id="sdate"
              name="sdate"
              placeholder=""
              onblur="validate(3)"
            />{" "}
          </div>
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              End Date<span className="text-danger"> *</span>
            </label>
            <input
              type="date"
              id="edate"
              name="edate"
              placeholder=""
              onblur="validate(4)"
            />{" "}
          </div>
        </div>
        <div className="row justify-content-between text-start my-3">
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              Email ID<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder=""
              onblur="validate(3)"
            />{" "}
          </div>
          <div className="form-group col-sm-6 flex-column d-flex">
            {" "}
            <label className="form-control-label  ">
              Contact No.<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              id="mob"
              name="mob"
              placeholder=""
              onblur="validate(4)"
            />{" "}
          </div>
        </div>
        <div className="row justify-content-between text-start my-3">
          <div className="form-group col-12 flex-column d-flex">
            {" "}
            <label
              className="form-control-label  "
              htmlFor="qdetail"
            >
              Details about the occassion<span className="text-danger"> *</span>
            </label>
            <textarea
              id="qdetail"
              name="qdetail"
              rows={4}
              cols={50}
              placeholder="Enter your message here..."
              defaultValue={
                "                                \n                            "
              }
            />
          </div>
        </div>
        <div className="row justify-content-center text-center my-3">
          <div className="form-group col-sm-6">
            <button
              type="submit"
              className="btn submit-btn color-gold-bg text-white  "
            >
              SUBMIT
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default Get_quote_form