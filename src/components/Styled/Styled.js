import styled from 'styled-components';

import Content from '../Content/Content';

export const Wrapper = styled(Content)`
  padding-left: 15vw;
  padding-right: 15vw;
  text-align: left;
  width: 100vw;

  @media only screen and (max-width: 800px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;
