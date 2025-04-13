import React from "react";
import "./Star-rating.css";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const fill = Math.min(Math.max(rating - i + 1, 0), 1) * 100;

    stars.push(
      <div className="star" key={i}>
        <div className="star-bg">★</div>
        <div className="star-fill" style={{ width: `${fill}%` }}>★</div>
      </div>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
