import React, { useState } from 'react';

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="input-counter">
        <span className="minus-btn" onClick={decreaseQuantity}>
          <i className="bx bx-minus"></i>
        </span>
        <input type="text" value={quantity} readOnly />
        <span className="plus-btn" onClick={increaseQuantity}>
          <i className="bx bx-plus"></i>
        </span>
      </div>
    </>
  );
};

export default QuantityCounter;
