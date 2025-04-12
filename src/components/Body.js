import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";

const categories = [
  "T-shirt", "Shirts", "Jeans", "Trousers", "Ethnic Sets",
  "Footwear", "Home", "Accessory", "Winter"
];

const Body = () => {
  return (
    <div className="home-body">
      {/* Circle Category Icons */}
      <div className="category-scroll py-3">
        <div className="d-flex justify-content-center overflow-auto px-3">
          {categories.map((cat, index) => (
            <div key={index} className="text-center mx-3">
              <div className="circle-icon mb-1"></div>
              <small className="text-uppercase fw-bold">{cat}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Offers */}
      <div className="container my-4">
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://via.placeholder.com/1200x300?text=Offer+1"
              alt="Offer 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://via.placeholder.com/1200x300?text=Offer+2"
              alt="Offer 2"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Offer Cards */}
      <div className="container my-5">
  <div className="row g-4">
    {[
      "New Arrivals", "Simply Elegant!", "Plaid’s Back, Baby!", "Summer Checkmate",
      "Glamorous Picks", "Boho Vibes", "Work From Home", "Weekend Ready",
      "Classic Styles", "Festive Feels", "Chic & Sleek", "Casual Cool",
      "Elegant Drapes", "Bold & Beautiful", "Monsoon Must-Haves", "Bright Days Ahead",
      "Street Smart", "Minimal Mode", "Color Pop", "Urban Edge",
      "Pastel Crush", "Vacation Edit", "Retro Revival", "Soft Glam",
      "Power Dressing", "Everyday Essentials", "Denim Dreams", "Party Perfect",
      "Ethnic Charm", "Sporty Chic", "Lounge Luxe", "Cozy Comfort"
    ].map((title, index) => {
      const randomRating = (Math.random() * 2 + 3).toFixed(1);
      const randomLikes = Math.floor(Math.random() * 100 + 20);
      return (
        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
          <div className="offer-card p-2 rounded shadow-sm h-100 d-flex flex-column justify-content-between border position-relative">
            <img
              src={`https://via.placeholder.com/300x400?text=${encodeURIComponent(title)}`}
              className="img-fluid rounded mb-2"
              alt={title}
            />
            <h6 className="fw-bold">{title}</h6>
            <p className="small text-muted mb-2">Explore our latest collection now!</p>

            <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
              <div className="d-flex align-items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" width="16" alt="star" />
                <small className="text-muted">{randomRating} ★</small>
              </div>

              <div className="d-flex align-items-center gap-3 icon-group">
                <div className="icon-btn">
                  <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" width="20" alt="like" />
                  <div className="small text-muted">{randomLikes}</div>
                </div>
                <div className="icon-btn">
                  <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" width="20" alt="cart" />
                  <div className="small text-muted">Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>









    </div>
  );
};

export default Body;
