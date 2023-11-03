import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    resort: "",
    startDate: "",
    endDate: "",
    email: "",
    contactNo: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
    };

    const serviceId = "service_21knk46";

    const templateId = "template_8l2uvhd";

    emailjs
      .send(serviceId, templateId, templateParams)
      .then(
        (response) => {
          console.log("Email sent:", response);
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      )
      .finally(() => {
        setFormData({
          firstName: "",
          lastName: "",
          resort: "",
          startDate: "",
          endDate: "",
          email: "",
          contactNo: "",
          details: "",
        });
      });
  };

  return (
    <section id="get-quote" className="form-padding">
      <div className="text-center">
        <h3 id="form-head" className="mb-5 font-Trajan f-s-28 color-gold">
          SUBMIT DETAILS
        </h3>
        <div className="container">
          <form className="form-card" onSubmit={handleSubmit}>
            <div className="row justify-content-between text-start my-3">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  First name<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  Last name<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-between text-start my-3">
              <div className="form-group">
                <label className="form-control-label" htmlFor="sel1">
                  Resort<span className="text-danger"> *</span>:
                </label>
                <select
                  className="form-control"
                  name="resort"
                  value={formData.resort}
                  onChange={handleChange}
                  required
                >
                  <option value="Country Inn Resort, Bhimtal">Country Inn Resort, Bhimtal</option>
                  <option value="Country Inn Resort, Jim Corbett">Country Inn Resort, Jim Corbett</option>
                  <option value="Country Inn Tarika Riverside Resort, Jim Corbett">Country Inn Tarika Riverside Resort, Jim Corbett</option>
                  <option value="Country Inn Hall of Heritage, Amritsar">Country Inn Hall of Heritage, Amritsar</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-between text-start my-3">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  Start Date<span className="text-danger"> *</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  End Date<span className="text-danger"> *</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-between text-start my-3">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  Email ID<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label">
                  Contact No.<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  name="contactNo"
                  placeholder="Enter your contact number"
                  value={formData.contactNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-between text-start my-3">
              <div className="form-group col-12 flex-column d-flex">
                <label className="form-control-label" htmlFor="qdetail">
                  Details about the occasion<span className="text-danger"> *</span>
                </label>
                <textarea
                  name="details"
                  rows={4}
                  cols={50}
                  // placeholder="Enter your message here..."
                  value={formData.details}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-center text-center my-3">
              <div className="form-group col-sm-6">
                <button type="submit" className="btn submit-btn color-gold-bg text-white">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
