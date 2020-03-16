import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import uuidv4 from 'uuid/v4';

import { H1, H2, Seo, Banner, Wrapper } from '../../../components';

import { gutter, pxToEm } from '../../../styles/utils';

import { faqs } from '../../../data/faqs';

/**
 * Description.
 */
const FaqsPage = () => (
  <main>
    <Seo title='FAQs' />

    <Wrapper>
      <Header>
        <H1>FAQs</H1>
      </Header>

      <FaqList>
        {faqs.map((faq) => {
          if (!isEmpty(faq.question) && !isEmpty(faq.answer())) {
            return (
              <li key={uuidv4()}>
                <div>
                  <H2>{faq.question}</H2>
                  {faq.answer()}
                </div>
              </li>
            );
          }

          return null;
        })}
      </FaqList>
    </Wrapper>

    <Banner />
  </main>
);

const Header = styled.header`
  padding: ${gutter.XXL} 0;
  text-align: center;
`;

const FaqList = styled.ol`
  counter-reset: faq-counter;

  > li {
    counter-increment: faq-counter;
    display: flex;
    padding-top: ${gutter.M};
    padding-bottom: ${gutter.XL};

    &::before {
      box-sizing: border-box;
      content: counter(faq-counter);
      display: inline-block;
      font-family: 'Montserrat', 'Roboto', 'Franklin Gothic Medium', Tahoma, Helvetica, Arial, sans-serif;
      font-size: 3.1428rem; /* 44px */
      font-weight: bold;
      line-height: 1.2727em; /* 56px */
      min-width: ${pxToEm(70)};
      padding-right: 2vw;
      text-align: right;
      width: ${pxToEm(70)};
    }

    ul {
      list-style: initial;
      padding-left: ${gutter.M};
      margin: 2ex 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    h2 {
      margin-bottom: ${gutter.M};
    }

    @media only screen and (max-width: 1150px) {
      width: 80%;
    }

    @media only screen and (max-width: 800px) {
      width: 90%;
    }

    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

export default FaqsPage;
