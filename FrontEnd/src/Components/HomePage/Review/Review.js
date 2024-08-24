import React, { useEffect, useState } from 'react';
import './Review.css';

// Imported Images
import user1 from '../../../assets/avatar.png';
import user2 from '../../../assets/avatar.png';
import user3 from '../../../assets/avatar.png';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Initial hardcoded reviews
    const initialReviews = [
      {
        image: user1,
        text: "My family and I got to enjoy our trip with no hassle! Thank you so much. Will book again with the rest of my family (well, of course, on a more discounted price again hehe). Thank you and stay safe always!",
        name: "Samantha Juan"
      },
      {
        image: user2,
        text: "TreksSafari was really helpful for our Hiking trip. They guide us to go to mount apo and the staff is so kind. We had a great time to go to mount apo. We hike 3 days , will surely go back. Thank you for all the help",
        name: "Wanwan Cruz"
      },
      {
        image: user3,
        text: "had a really smooth and relaxing hiking experience with my husbands family. the view of the mount ulap was so nice and the food was great too. thank you so much trekssafari to the unforgetable experiece we will surely book again.",
        name: "Maria Dela Cruz"
      }
    ];

    // Fetch stored feedback
    const storedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
    const newReviews = storedFeedback.map(feedback => ({
      image: user1, // Using a default image for new feedback
      text: feedback.feedback,
      name: feedback.name
    }));

    // Combine initial reviews with stored feedback
    setReviews([...initialReviews, ...newReviews]);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
          <p>We have satisfied a number of clients so far!</p>
        </span>

        <div className="reviewContainer container grid">
          {reviews.map((review, index) => (
            <div key={index} data-aos='fade-up' data-aos-duration={3000 + index * 500} className="singleReview">
              <div className="imgDiv">
                <img src={review.image} alt={`User ${index + 1}`} />
              </div>
              <p>{review.text}</p>
              <div className="name">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;