import { Container } from 'components/App.styled';
import {
  AdditionalInfoWrap,
  AdditionalNavBox,
  AdditionalNavLink,
  AdditionalTitle,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <AdditionalInfoWrap>
      <Container>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalNavBox>
          <AdditionalNavLink to="cast">Cast</AdditionalNavLink>
          <AdditionalNavLink to="reviews">Reviews</AdditionalNavLink>
        </AdditionalNavBox>
      </Container>
    </AdditionalInfoWrap>
  );
};

export default AdditionalInfo;
