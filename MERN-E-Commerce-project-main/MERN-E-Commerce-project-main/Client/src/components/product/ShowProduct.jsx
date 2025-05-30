import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const { filtereData, addToCart } = useContext(AppContext);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center my-5">
        <div className="row d-flex justify-content-center align-items-center">
          {filtereData?.map((product) => (
            <div
              key={product._id}
              className="my-3 col-md-4 d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light text-center"
                style={{ width: "18rem" }}
              >
                <Link
                  to={`/product/${product._id}`}
                  className="d-flex justify-content-center align-items-center p-3"
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                      border: "2px solid yellow",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title mb-3">{product.title}</h5>
                  <div className="my-3">
                    <button className="btn btn-primary mx-3">
                      {product.price} {"₹"}
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        addToCart(
                          product._id,
                          product.title,
                          product.price,
                          1,
                          product.imgSrc
                        )
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
