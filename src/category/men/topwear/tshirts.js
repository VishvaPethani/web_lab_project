import React, { useState } from "react";
import StarRating from "../../../components/Star-rating";
import { Form } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Classic Grey Tee",
    image: "/images/men/tshirts/id1.jpg",
    price: 761,
    originalPrice: 1300,
    rating: 4.8,
    tags: ["Slim Fit", "New"],
  },
  {
    id: 2,
    name: "Sky Blue V-Neck Tee",
    image: "/images/men/tshirts/id2.jpg",
    price: 948,
    originalPrice: 1199,
    rating: 4.1,
    tags: ["Top Rated"]
  },
  {
    id: 3,
    name: "Maroon Weekend TShirt",
    image: "/images/men/tshirts/id3.jpg",
    price: 322,
    originalPrice: 533,
    rating: 4.5,
    tags: ["Regular Fit"]
  },
  {
    id: 4,
    name: "Midnight Black Polo",
    image: "/images/men/tshirts/id4.jpg",
    price: 875,
    originalPrice: 1200,
    rating: 4.2,
    tags: ["Polo", "Cotton"]
  },
  {
    id: 5,
    name: "Olive Green Crew",
    image: "/images/men/tshirts/id5.jpg",
    price: 322,
    originalPrice: 900,
    rating: 4.4,
    tags: ["Regular Fit", "Cotton"]
  },
  {
    id: 6,
    name: "Pink Polo TShirt",
    image: "/images/men/tshirts/id6.jpg",
    price: 799,
    originalPrice: 1100,
    rating: 4.3,
    tags: ["Lightweight"]
  },
  {
    id: 7,
    name: "Rustic Red TShirt",
    image: "/images/men/tshirts/id7.jpg",
    price: 689,
    originalPrice: 999,
    rating: 4.5,
    tags: ["Buttoned", "Regular Fit"]
  },
  {
    id: 8,
    name: "Copper Charge Polo",
    image: "/images/men/tshirts/id8.jpg",
    price: 950,
    originalPrice: 1400,
    rating: 4.6,
    tags: ["Slim Fit", "New", "Polyester"]
  },
  {
    id: 9,
    name: "Azure Blue Henley",
    image: "/images/men/tshirts/id9.jpg",
    price: 849,
    originalPrice: 1300,
    rating: 4.7,
    tags: ["Top Rated", "Stretchable"]
  },
  {
    id: 10,
    name: "Sunset Yellow Tee",
    image: "/images/men/tshirts/id10.jpg",
    price: 728,
    originalPrice: 1049,
    rating: 4.1,
    tags: ["New Arrival"]
  },
  {
    id: 11,
    name: "Purple Casual",
    image: "/images/men/tshirts/id11.jpg",
    price: 422,
    originalPrice: 799,
    rating: 4.5,
    tags: ["Soft Cotton", "Regular Fit"]
  },
  {
    id: 12,
    name: "Summer Sky Tee",
    image: "/images/men/tshirts/id12.jpg",
    price: 915,
    originalPrice: 1200,
    rating: 4.2,
    tags: ["Polo", "Breathable"]
  },
  {
    id: 13,
    name: "Steel Grey V-Neck",
    image: "/images/men/tshirts/id13.jpg",
    price: 765,
    originalPrice: 1050,
    rating: 4.6,
    tags: ["Slim Fit", "New"]
  },
  {
    id: 14,
    name: "Beige Polo Tshirt",
    image: "/images/men/tshirts/id14.jpg",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    tags: ["Henley", "Top Rated"]
  },
  {
    id: 15,
    name: "Ocean Blue Tee",
    image: "/images/men/tshirts/id15.jpg",
    price: 579,
    originalPrice: 833,
    rating: 4.3,
    tags: ["Relaxed Fit", "Soft"]
  },
  {
    id: 16,
    name: "Ebony Black Polo",
    image: "/images/men/tshirts/id16.jpg",
    price: 899,
    originalPrice: 1300,
    rating: 4.2,
    tags: ["Polo", "Cotton", "Premium"]
  }
];

const filters = {
  color: ["Red", "Blue", "Green", "Black", "White", "Yellow", "Grey"],
  fit: ["Slim Fit", "Regular Fit", "Oversized"],
  size: ["S", "M", "L", "XL", "XXL"],
  neck: ["Crew Neck", "V-Neck", "Polo", "Turtle Neck"],
  material: ["Cotton", "Polyester", "Linen"],
  print: ["Solid", "Printed", "Striped"],
};

const Tshirts = () => {
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar Filter */}
        <div
          className="col-lg-2 bg-light border-end p-3"
          style={{ height: "100vh", overflowY: "auto" }}
        >
          <h5 className="mb-3">Filter & Sort</h5>
          {Object.entries(filters).map(([key, values]) => (
            <div className="mb-3" key={key}>
              <strong className="text-capitalize">{key}</strong>
              {values.map((val) => (
                <div key={val} className="form-check small">
                  <Form.Check
                    type="checkbox"
                    id={`${key}-${val}`}
                    label={
                      key === "color" ? (
                        <>
                          <span
                            style={{
                              display: "inline-block",
                              backgroundColor: val.toLowerCase(),
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              border: "1px solid #999",
                              marginRight: "6px"
                            }}
                          ></span>
                          {val}
                        </>
                      ) : (
                        val
                      )
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="col-lg-10 p-3">
          <div className="row g-3">
            {products.map((item) => {
              const isLiked = likedProducts[item.id];

              return (
                <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "340px", objectFit: "cover" }}
                    />
                    <div className="card-body p-2 d-flex flex-column">
                      <h6 className="card-title text-truncate mb-1">
                        {item.name}
                      </h6>

                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <StarRating rating={item.rating} />
                          <span className="ms-1 small">{item.rating}</span>
                        </div>
                        <div
                          onClick={() => toggleLike(item.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={
                              isLiked
                                ? "https://cdn-icons-png.flaticon.com/128/833/833472.png" // filled heart
                                : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png" // empty heart
                            }
                            width="18"
                            alt="like"
                          />
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mb-2 small">
                        <div>
                          <strong>₹{item.price}</strong>{" "}
                          <del className="text-muted">₹{item.originalPrice}</del>{" "}
                          <span className="text-success">
                            ({Math.round(
                              ((item.originalPrice - item.price) /
                                item.originalPrice) *
                                100
                            )}
                            % OFF)
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                            width="18"
                            alt="cart"
                          />
                          <small className="text-muted">Cart</small>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-1 mb-1">
                        {item.tags.map((tag, i) => (
                          <span className="badge bg-info text-dark" key={i}>
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirts;