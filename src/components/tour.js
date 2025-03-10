import React, {useState} from "react";
function Tour({ tour, removeTour }) {
    const { id, name, info, image, price } = tour;
    const [showMore, setShowMore] = useState(false);
  
    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <div className="tour-info">
          <h4>{name}</h4>
          <h5 className="tour-price">${price}</h5>
          <p>
            {showMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Delete Tour
          </button>
        </div>
      </article>
    );
  }
  export default Tour