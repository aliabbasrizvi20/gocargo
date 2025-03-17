import React from "react";

function OrderSuccess() {
  return (
    <div class="card">
      <div className="card-icon">
        <i class="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
}

export default OrderSuccess;
