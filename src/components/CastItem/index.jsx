import {
  CastItemCharacter,
  CastItemStyled,
  CastItemTitle,
} from 'components/Cast/Cast';
import defaultPhoto from 'images/defaultPhoto.jpg';

const CastItem = ({ actor }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const { name, profile_path, character } = actor || {};
  const imageSrc = profile_path ? IMAGE_URL + profile_path : defaultPhoto;
  return (
    <CastItemStyled>
      <img src={imageSrc} alt={name} width={100} />
      <div>
        <CastItemTitle>{name}</CastItemTitle>
        <CastItemCharacter>Character: {character}</CastItemCharacter>
      </div>
    </CastItemStyled>
  );
};

export default CastItem;
