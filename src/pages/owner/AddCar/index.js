import React, { useState } from "react";
import "./addCar.css"
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";
import BackButton from "../../../components/BackButton/BackButton";

const ownerDetails = {
  name: null,
  carModel: null,
  mobileNumber: null,
  email: null,
  images: null,
  carType: null,
  carLocation: null,
  askingPrice: null,
  carDescription: null,
}
function AddCar() {
  const navigate=useNavigate();
  const [name, setName] = useState("");

  const onCarModelChange = (e) => {
    // console.log("Hello")
    setDetails((prev) => ({
      ...prev,
      carModel: e.target.value
    }))
  }
  const onNameChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value
    }))
  }
  const onMobileNumberChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      mobileNumber: e.target.value
    }))
  }
  const onEmailChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      email: e.target.value
    }))
  }
  const onImagesChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      images: e.target.value
    }))
  }
  const onCarTypeChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      carType: e.target.value
    }))
  }
  const onCarLocationChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      carLocation: e.target.value
    }))
  }
  const onCarAskingPriceChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      askingPrice: e.target.value
    }))
  }
  const onCarDescriptionChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      carDescription: e.target.value
    }))
  }


  const [details, setDetails] = useState(ownerDetails);

  function onClick() {
    console.log(details)
    navigate('./your-listing')
  }

  return (
    <>
   
    <div className="main-body">
      <div class="main-container">
      <BackButton/>
        {/* <header class="header"> */}
       
        <h1 id="title" class="text-center">
        
          List Your Car
        </h1>
        {/*<p id="description" class="text-center"></p> */}
        {/* </header> */}

        <div class="form-wrap">
          <form id="survey-form">
            <div className="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">
                    Name
                  </label>
                  <InputField
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    onChange={onNameChange}
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label id="email-label" for="email">
                    Car Model
                  </label>
                  <InputField
                    type="text"
                    name="text"
                    id="model"
                    placeholder="Enter car name"
                    className="form-control"
                    onChange={onCarModelChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">
                    Phone Number
                  </label>
                  <InputField
                    type="number"
                    name="name"
                    id="name"
                    placeholder="Enter your Number"
                    className="form-control"
                    onChange={onMobileNumberChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label" for="email">
                    Email
                  </label>
                  <InputField
                    type="email"
                    name="text"
                    id="model"
                    placeholder="Enter Email"
                    onChange={onEmailChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" for="number">
                    Upload Images <small>(Upto 10)</small>
                  </label>
                  <InputField
                    type="file"
                    name="upload car images"
                    id="file"
                    // min="10"
                    // max="99"
                    className="form-control p-2"
                    placeholder="Image"
                    onChange={onImagesChange}
                    accept="image/*"
                    multiple
                  // onChange={handleFileChange}

                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>car type</label>
                  <select id="dropdown" name="role" class="form-control" required>
                    <option disabled selected value>
                      Select
                    </option>
                    <option value="student">Manual</option>
                    <option value="job">CNG</option>
                    <option value="learner">Electric</option>
                    <option value="preferNo">Automatic</option>
                    {/* <option value="other">Other</option> */}
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label id="email-label" for="email">
                    Car Location
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="model"
                    placeholder="Enter car location"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label for="askingPrice">Asking Price</label>
                  <div class="input-group">
                    {/* <span class="input-group-text">₹</span> */}
                    <InputField
                      type="number"
                      name="askingPrice"
                      id="askingPrice"
                      className="form-control"
                      placeholder="Enter asking price"
                      onChange={onCarAskingPriceChange}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Car Description</label>
                  <textarea
                    id="comments"
                    class="form-control"
                    name="comment"
                    onChange={onCarDescriptionChange}
                    placeholder="Enter details about your car ..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <Button
                  type="submit"
                  id="submit"
                  class="btn btn-primary btn-block w-100"
                  onClick={onClick}
                >
                  Add To Listing
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div></div>
      </>
  );
}

export default AddCar;
