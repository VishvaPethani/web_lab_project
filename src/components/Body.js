import React from "react";
import { Carousel } from "react-bootstrap";
import "./Body.css";
import StarRating from "./Star-rating";

const categories = [
  "T-shirt", "Shirts", "Jeans", "Trousers", "Casuals", "Ethnic Sets",
  "Footwear", "Accessory", "Summer"
];

const offerTitles = [
  "New Arrivals", "Simply Elegant!", "Plaid’s Back, Baby!", "Summer Checkmate",
  "Glamorous Picks", "Boho Vibes", "Work From Home", "Weekend Ready",
  "Classic Styles", "Festive Feels", "Chic & Sleek", "Casual Cool",
  "Elegant Drapes", "Bold & Beautiful", "Monsoon Must-Haves", "Bright Days Ahead",
  "Street Smart", "Minimal Mode", "Color Pop", "Urban Edge",
  "Pastel Crush", "Vacation Edit", "Retro Revival", "Soft Glam",
  "Power Dressing", "Everyday Essentials", "Denim Dreams", "Party Perfect",
  "Ethnic Charm", "Sporty Chic", "Lounge Luxe", "Cozy Comfort"
];

const Body = () => {
  return (
    <div className="home-body">
      {/* Tagline Heading */}
      <div className="text-center py-3">
        <h5 className="fw-bold">
          Discover <span className="text-primary">WardrobeHUB</span> — Where Clothes Don’t Just Fit, They <span className="text-success">CALL You Apart</span>.
        </h5>
      </div>

      {/* Circle Category Icons */}
      <div className="category-scroll py-3">
        <div className="d-flex justify-content-center overflow-auto px-3">
          {categories.map((cat, index) => (
            <div key={index} className="text-center mx-3">
              <div className="circle-icon mb-1">
                <img
                  src={`/images/circleimages/${cat.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={cat}
                  className="circle-img"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/80?text=No+Image")
                  }
                />
              </div>
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
              className="d-block w-100 rounded carousel-img"
              src="/images/offers/offer1.jpg"
              alt="Offer 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded carousel-img"
              src="/images/offers/offer2.jpg"
              alt="Offer 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded carousel-img"
              src="/images/offers/offer3.jpg"
              alt="Offer 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Offer Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {offerTitles.map((title, index) => {
            const randomRating = (Math.random() * 2 + 3).toFixed(1);
            const randomLikes = Math.floor(Math.random() * 100 + 20);
            const imageName = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/-+$/, "");

            return (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="offer-card p-2 rounded shadow-sm h-100 d-flex flex-column justify-content-between border position-relative">
                  <img
                    src={`/images/homeimages/${imageName}.jpg`}
                    className="img-fluid rounded mb-2"
                    alt={title}
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300x400?text=Image+Not+Found")
                    }
                  />
                  <h6 className="fw-bold">{title}</h6>
                  <p className="small text-muted mb-2">
                    Explore our latest collection now!
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                    <div className="d-flex align-items-center gap-2">
                      <StarRating rating={parseFloat(randomRating)} />
                      <small className="text-muted">{randomRating} ★</small>
                    </div>

                    <div className="d-flex align-items-center gap-3 icon-group">
                      <div className="icon-btn">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                          width="20"
                          alt="like"
                        />
                        <div className="small text-muted">{randomLikes}</div>
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
