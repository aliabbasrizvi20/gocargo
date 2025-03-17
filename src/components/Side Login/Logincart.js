import { useNavigate } from "react-router";
import "./style.css";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/auth/authSelector";
import { API } from "../../helpers/requests";
import { PATH } from "../../helpers/constants";
import { useEffect } from "react";

export default function Logintocheckout({ car }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(car);
  const navigate = useNavigate();
  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);
  function onClick() {
    navigate("/login");
  }

  const handlePayment = async () => {
    const { data } = await API.post(PATH.CREATE_ORDER, {
      amount: 500, // Amount in INR
    });

    const options = {
      key: "rzp_test_oyVsBDn3ANTg4H", // Get from Razorpay dashboard
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "GoCargo",
      description: "Car Rental Payment",
      handler: function (response) {
        console.log(response);
        navigate("/order-success");
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="Car-info">
      <div className="Price">
        <div className="rating-box">
          <p>4.5/5</p>
        </div>
        <h5>Total Price</h5> <span id="Crossed-price">$200</span>
        <p id="Offer-price">{car.price.selling_price}</p>
        {!isAuthenticated && (
          <button onClick={onClick}>LogIn to Continue</button>
        )}
        {isAuthenticated && <button onClick={handlePayment}>Checkout</button>}
      </div>
    </div>
  );
}
