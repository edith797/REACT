import React, { useState } from 'react';

const PhotoItem = ({ photo }) => {
  const [isBought, setIsBought] = useState(false);

  const handleBuy = () => {
    setIsBought(true);
  };

  return (
    <div className="card">
      <img src={photo.url} className="card-img-top" alt={photo.title} />
      <div className="card-body">
        <h5 className="card-title">{photo.title}</h5>
        <p className="card-text">Price: Rs {photo.price}</p>
        <button className="btn btn-success" onClick={handleBuy} disabled={isBought}>
          {isBought ? 'Bought' : 'Buy'}
        </button>
        {isBought && <p className="text-success mt-2">Thank you for your purchase!</p>}
      </div>
    </div>
  );
};

export default PhotoItem;
