import {
  ReviewsItemAuthor,
  ReviewsItemContent,
  ReviewsItemPublicReview,
  ReviewsItemRating,
  ReviewsItemStyled,
  ReviewsItemTextBox,
} from 'components/Reviews/Reviews.styled';
import defaultPhoto from 'images/defaultPhoto.jpg';

const ReviewsItem = ({ review }) => {
  const { author, content, updated_at, author_details } = review;
  const { avatar_path, rating } = author_details;
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const imageSrc = avatar_path ? IMAGE_URL + avatar_path : defaultPhoto;

  const publicReview = `${updated_at.slice(0, 10)} ${updated_at.slice(11, 19)}`;
  return (
    <ReviewsItemStyled>
      <img src={imageSrc} alt={author} width={100} height={100} />
      <ReviewsItemTextBox>
        <ReviewsItemRating>{rating}</ReviewsItemRating>
        <ReviewsItemAuthor>{author}</ReviewsItemAuthor>
        <ReviewsItemContent>{content}</ReviewsItemContent>
        <ReviewsItemPublicReview>{publicReview}</ReviewsItemPublicReview>
      </ReviewsItemTextBox>
    </ReviewsItemStyled>
  );
};

export default ReviewsItem;
