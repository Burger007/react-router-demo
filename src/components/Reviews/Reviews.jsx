import "./Reviews.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function Reviews({ reviews }) {
  const { reviewId } = useParams();
  const navigate = useNavigate();

  if (!reviewId) {
    return (
      <ul className="reviews">
        {reviews &&
          reviews.map((review, index) => (
            <li className="reviews__item" key={review.id ?? index}>
              <Link to={`/reviews/${index + 1}`}>{review.title}</Link>
            </li>
          ))}
      </ul>
    );
  }

  // Decrement the id from the parameter so we access the correct items. This
  // is necessary because the array indexes start with 0, whereas the IDs in
  // the API begin at 1.
  const id = reviewId - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Final rating:{reviews[id]?.rating}/5</p>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="review__back"
          >
            Back to the review list
          </button>
        </div>
      )}
    </div>
  );
}

export default Reviews;
