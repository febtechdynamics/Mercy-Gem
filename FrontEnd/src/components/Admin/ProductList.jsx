import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Import your Modal component
import Products from "./Products"; // Import your Products component

function ProductList({ handleEdit, handleDelete }) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  useEffect(() => {
    // Fetch products from API or database
    axios
      .get("http://localhost:3000/api/product/?perPage=10&page=1")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-list">
      <button onClick={openModal}>Add New Product</button>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">Gemstones</div>
              <div className="brief-description">
                Beautiful gemstones for every occasion.
              </div>
            </div>
          </div>
          {products?.map(({ id, name, image, price, description }, index) => {
            const productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    index % 2 === 0 ? 1 : 2
                  }`}
                >
                  <div className="product-title">{name}</div>
                  <div className="product-description">{description}</div>
                  <div className="price">{`Price: ${price}`}</div>
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? 2 : 1
                  }`}
                >
                  <div className="product-image">
                    <img src={image} alt="product" />
                  </div>
                </div>
                <div>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
      {showModal && (
        <Modal onClose={closeModal}>
          {/* Render the Products component as a modal */}
          <Products />
        </Modal>
      )}
    </div>
  );
}

export default ProductList;
