import React from "react";
import Tour from "./tour";
function Tours({ tours, removeTour }) {
    return (
      <section>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </section>
    );
  }
  export default Tours