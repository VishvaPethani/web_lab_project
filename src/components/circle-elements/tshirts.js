import { useParams } from 'react-router-dom';
import React from 'react';

const CircleTshirts = () => {
  const { categoryName } = useParams();
  let categoryItems = [];

  if (categoryName === 't-shirt') {
    categoryItems = [
      { title: 'Men', items: ['Men\'s T-shirt 1', 'Men\'s T-shirt 2', 'Men\'s T-shirt 3'] },
      { title: 'Women', items: ['Women\'s T-shirt 1', 'Women\'s T-shirt 2', 'Women\'s T-shirt 3'] },
      { title: 'Kids', items: ['Kids\' T-shirt 1', 'Kids\' T-shirt 2', 'Kids\' T-shirt 3'] }
    ];
  } else if (categoryName === 'other-category') {
    categoryItems = [
      { title: 'Men', items: ['Vests', 'Shorts', 'Sunglasses', 'Hat', 'Cap'] },
      { title: 'Women', items: ['Shorts', 'Skirts', 'Tops', 'Dresses', 'Sunglasses', 'Hat'] },
      { title: 'Kids', items: ['Boys: Shorts', 'Boys: Sunglasses', 'Boys: Cap', 'Girls: Shorts', 'Girls: Sunglasses'] }
    ];
  }

  return (
    <div className="container">
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category</h2>
      <div className="row">
        {categoryItems.map((category, index) => (
          <div key={index} className="col-4">
            <h4>{category.title}</h4>
            <div>
              {category.items.map((item, idx) => (
                <div key={idx} className="card mb-3">
                  <img
                    src={`/images/${category.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={item}
                    className="card-img-top"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/200x300?text=Image+Not+Found")}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleTshirts;
