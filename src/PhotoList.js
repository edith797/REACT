// src/components/PhotoList.js
import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

class PhotoList extends Component {
  render() {
    const photos = [
      { id: 1, title: 'Candle', url: 'https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', price: 10 },
      { id: 4, title: 'Beach', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', price: 12 },
      { id: 5, title: 'Cityscape', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60', price: 20 },
    ];

    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Available Photos</h2>
        <div className="row">
          {photos.map((photo) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={photo.id}>
              <PhotoItem photo={photo} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoList;
