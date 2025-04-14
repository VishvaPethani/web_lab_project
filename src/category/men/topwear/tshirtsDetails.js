import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TshirtsDetails = () => {
  const { id } = useParams(); // get the ID from the URL
  console.log(id);

  const imagePrefix = `/images/men/tshirts/details/id${id}/Picture`;
  const detailImages = Array.from({ length: 7 }, (_, i) => `${imagePrefix}${i + 1}.jpg`); // Showing all 7 images

  const [currentImage, setCurrentImage] = useState(detailImages[0]);

  return (
    <div className="container py-4">
      <h4 className="mb-3">Product Details</h4>
      <div className="row">
        {/* Images */}
        <div className="col-md-6">
          {/* Large Image */}
          <img
            src={currentImage}
            alt="Main"
            className="img-fluid rounded mb-3"
          />
          {/* Thumbnail images */}
          <div className="d-flex gap-2 flex-wrap mb-5 ">
            {detailImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Preview ${idx + 1}`}
                className="img-thumbnail"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  cursor: 'pointer',
                  border: currentImage === img ? '2px solid #007bff' : 'none', // Highlight selected thumbnail
                }}
                onClick={() => setCurrentImage(img)} // Change large image when clicked
              />
            ))}
          </div>
          {/* Rating & Reviews */}
          <div className="mt-5 mb-2">
            <strong>Ratings</strong>
            </div>
            <div className="d-flex align-items-center">
              <span>4.8</span> 
              <span className="ms-2">| 76 Ratings</span>
            </div>
            <div className="mt-2 mb-2">
              <strong>What Customers Said:</strong>
              </div>
              <div style={{ lineHeight: '0.7' }}>
                <p>Fit: Just Right (61%)</p>
                <p>Length: Just Right (63%)</p>
              </div>
        </div>

        

        {/* Info */}
        <div className="col-md-6">
          <h5>Classic Grey Tee</h5>
          <p className="text-muted">Stylish, comfortable, and perfect for daily wear.</p>
          <div className="mb-2">
            <strong>Price:</strong> ₹761 <del className="text-muted">₹1300</del> <span className="text-success">(41% OFF)</span>
          </div>

          {/* Size Selector (Click to Select) */}
          <div>
            <strong>Select Size:</strong>
            <div className="d-flex gap-2 mb-3 mt-1">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
                <button
                  key={size}
                  className="btn btn-outline-secondary rounded-circle"
                  style={{
                    width: '40px',
                    height: '40px',
                    lineHeight: '40px',
                    textAlign: 'center',
                    fontSize: '16px',
                    borderColor: '#ccc',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="btn btn-primary mb-2">Add to Cart</button>

          {/* Product Details */}
          <p>
            Grey and black T-shirt for men with a brand logo embroidered. Regular fit, regular length, short sleeves, and round neck. Made from knitted cotton.
          </p>

          {/* Delivery & Offers */}
          <div className="mb-3">
            <strong>Delivery Options:</strong>

            <input
              type="text"
              className="form-control mb-0"
              placeholder="Enter Pincode"
            />
            <small className="text-muted">Please enter PIN code to check delivery time & Pay on Delivery availability</small>
          </div>

          <div className="mb-2">
            <strong >Best Offers:</strong>
            </div>
            <div style={{ lineHeight: '1.0' }}>
              <p>Best Price: Rs. 419 (Applicable on orders above Rs. 499, only on first purchase)</p>
              <p>10% Discount on IDFC FIRST SWYP Credit Card (Min Spend ₹850, Max Discount ₹350)</p>
              <p>EMI option available, starting from Rs. 28/month</p>
            </div>
          

          {/* Product Specifications */}
          <div className="mb-2">
            <strong>Product Details:</strong>
            </div>
            <div style={{ lineHeight: '0.7' }}>
              <p>Grey Tshirt for men</p>
              <p>Brand logo embroidered</p>
              <p>Regular fit</p>
              <p>Regular length</p>
              <p>Short sleeves</p>
              <p>Round neck</p>
              <p>Knitted cotton</p>
            </div>
        

          <div  className="mb-2">
            <strong>Size & Fit:</strong>
            </div>
            <div style={{ lineHeight: '0.7' }}>
              <p>Regular Fit</p>
              <p>The model (height 6') is wearing size M</p>
            </div>
        

          <div className="mb-2">
            <strong>Material & Care:</strong>
            </div>
            <div style={{ lineHeight: '0.7' }}>
              <p>Pure Cotton</p>
              <p>Machine Wash</p>
              <p>Use only mild detergent, wash with similar colour</p>
            </div>
         

          <div className="mb-2">
            <strong>Specifications:</strong>
            </div>
            <div style={{ lineHeight: '0.7' }}>
              <p>Fabric: Cotton</p>
              <p>Fit: Regular Fit</p>
              <p>Length: Regular</p>
              <p>Multipack Set: 1</p>
              <p>Net Quantity Unit: Piece</p>
            </div>
          

           
        </div>
      </div>
    </div>
  );
};

export default TshirtsDetails;
