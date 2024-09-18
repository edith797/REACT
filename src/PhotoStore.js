import React from 'react';
import Header from './Header';
import PhotoList from './PhotoList';

const PhotoStore = () => {
  return (
    <div className="photo-store">
      <Header />
      <PhotoList />
    </div>
  );
};

export default PhotoStore;
