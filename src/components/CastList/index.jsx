import CastItem from 'components/CastItem';
import { CastListStyled } from '../Cast/Cast';

const CastList = ({ cast: { cast } }) => {
  return (
    <CastListStyled>
      {cast.map(actor => (
        <CastItem key={actor.id} actor={actor} />
      ))}
    </CastListStyled>
  );
};

export default CastList;
