import "./Reviews.css";
import { useParams } from "react-router-dom";

function Review({ reviews }) {
  const params = useParams();
  let id = params.reviewId;
  // Decrement the id from the parameter so we access the correct items. This
  // is necessary because the array indexes start with 0, whereas the IDs in
  // the API begin at 1.
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Final rating:{reviews[id]?.rating}/5</p>
        </div>
      )}
    </div>
  );
}

export default Review;
