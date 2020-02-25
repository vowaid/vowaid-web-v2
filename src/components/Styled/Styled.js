import styled from 'styled-components';

import Content from '../Content/Content';

export const Wrapper = styled(Content)`
  padding: 0 15vw;
  text-align: left;
  width: 100vw;

  @media only screen and (max-width: 800px) {
    padding: 0 10vw;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 5vw;
  }
`;
