import { ErrorMessageText } from './ErrorMessage.styled';

const ErrorMessage = ({ error }) => {
  return <ErrorMessageText>{error}</ErrorMessageText>;
};

export default ErrorMessage;
