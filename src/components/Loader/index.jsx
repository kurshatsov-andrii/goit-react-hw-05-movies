import { Oval } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Oval
  height={300}
  width={300}
  color="#00ff9d"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: '20',
          transform: 'translate(-50%,-50%)',        
  }}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#00ff9d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/>          
    </LoaderWrap>
  );
};
