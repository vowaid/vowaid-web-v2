import React from 'react';
import styled from 'styled-components';

import { Header, Footer, Wrapper } from '../../../components';

import ThemeProvider from '../../../theme/ThemeProvider';

import { ScrollToTop } from '../../../utils/routerUtils';

const FlexWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  padding: 0 !important;

  > * {
    flex: 1;
  }
`;

const Page = (props) => (
  <ThemeProvider>
    <ScrollToTop />
    <FlexWrapper>
      <Header />
      {props.children}
      <Footer />
    </FlexWrapper>
  </ThemeProvider>
);

export default Page;
