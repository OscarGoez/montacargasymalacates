import React, { useState } from 'react';
import './products.css';
import ml1 from '../images/ml1.jpg';
import ml2 from '../images/ml2.jpg';
import ml3 from '../images/ml3.jpg';
import ml4 from '../images/ml4.jpg';
import ml5 from '../images/ml5.jpg';
import ml6 from '../images/ml6.jpg';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: ml1,
      description: 'Montacargas tipo 1',
    },
    {
      image: ml2,
      description: 'Montacargas tipo 2',
    },
    {
      image: ml3,
      description: 'Montacargas tipo 3',
    },
    {
      image: ml4,
      description: 'Montacargas tipo 4',
    },
    {
      image: ml5,
      description: 'Montacargas tipo 5',
    },
    {
      image: ml6,
      description: 'Montacargas tipo 6',
    },
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mb-2 productImg">
      <section className="is-info bgf">
        <h3 className="title is-size-2 has-text-black has-text-centered titleProduct">PRODUCTOS</h3>
        <div className="hero-body">
          <div className="columns is-multiline is-mobile is-centered">
            {products.map((product, index) => (
              <div className="column is-4-desktop is-6-tablet is-12-mobile colon" key={index}>
                <div className="card" onClick={() => openImage(product.image)}>
                  <div className="card-image has-text-centered">
                    <figure className="image is-3by2">
                      <img className="imgModal"src={product.image} alt={product.description} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-size-5 has-text-black">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeImage}></div>
          <div className="modal-content">
            <p className="image">
              <img src={selectedImage} alt="Selected" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeImage}></button>
        </div>
      )}
    </div>
  );
};

export default Products;