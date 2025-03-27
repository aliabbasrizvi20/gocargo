import React, { useEffect, useState } from "react";
import "./addCar.css";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import UploadField from "../../../components/UploadField";
import { API } from "../../../helpers/requests";
import { PATH } from "../../../helpers/constants";
import { getCoordinatesFromGoogle } from "../../../helpers/methods";
import BackButton from "../../../components/BackButton/BackButton";

const ownerDetails = {
  name: null,
  carModel: null,
  mobileNumber: null,
  email: null,
  type: null,
  price: {
    selling_price: null,
    striked_price: null,
  },
  description: null,
  area: {
    address: null,
    city: null,
  },
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
};
function AddCar() {
  const [images, setImages] = useState([]);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const saveCar = async () => {
    const formData = new FormData();

    // Append images
    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]); // "image" matches backend field
    }

    // Append car data
    Object.keys(details).forEach((key) => {
      const stringifiableKeys = ["area", "location"];
      if (stringifiableKeys.includes(key)) {
        formData.append(key, JSON.stringify(details[key]));
        return;
      }
      formData.append(key, details[key]);
    });

    try {
      const response = await API.post(PATH.SAVE_CAR, formData, {
        headers: { contentType: "multipart" },
      });
      console.log(response.data);
      alert("Car added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add car!");
    }
  };

  // 🔥 UseEffect to wait for state update before making API call
  useEffect(() => {
    if (!isReadyToSubmit) return;
    saveCar();
  }, [isReadyToSubmit]);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onCarModelChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      carModel: e.target.value,
    }));
  };
  const onNameChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  const onMobileNumberChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      mobileNumber: e.target.value,
    }));
  };
  const onEmailChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };
  const onImagesChange = (e) => {
    setImages(e.target.files);
  };
  const onCarTypeChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };
  const onCarAddressChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      area: {
        address: e.target.value,
      },
    }));
  };
  const onCarAskingPriceChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      "price.selling_price": e.target.value,
    }));
  };
  const onCarDescriptionChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const [details, setDetails] = useState(ownerDetails);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(details);

    // Get coordinates
    const coordinates = await getCoordinatesFromGoogle(details.area.address);

    if (coordinates) {
      setDetails((prev) => ({
        ...prev,
        location: {
          type: "Point",
          coordinates: [coordinates.latitude, coordinates.longitude],
        },
      }));
    }

    setIsReadyToSubmit(true);
  }

  function onClick() {
    console.log(details);
    navigate("./your-listing");
  }

  return (
    <>
      <div className="main-body">
        <div class="main-container">
          <BackButton />
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
                      Fuel Type
                    </label>
                    <InputField
                      type="email"
                      name="text"
                      id="model"
                      placeholder="Fuel Type"
                      onChange={(e) => {
                        setDetails((prev) => ({
                          ...prev,
                          fuel_type: e.target.value,
                        }));
                      }}
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
                    <UploadField
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
                    <select
                      id="dropdown"
                      name="role"
                      class="form-control"
                      required
                    >
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
                      Car Adress
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="model"
                      placeholder="Enter Car Address"
                      onChange={onCarAddressChange}
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
                    onClick={onSubmit}
                  >
                    Add To Listing
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCar;
