import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import uuidv4 from 'uuid/v4';

import { Typography } from '@material-ui/core';
import Content from '../../components/Content/Content';
import SEO from '../../components/Seo/Seo';
import Banner from '../../components/cta/Banner/Banner';

import { gutter, pxToEm } from '../../styles/utils';

import { faqs } from '../../data/faqs';

/**
 * Description.
 */
const FaqsPage = () => (
  <main>
    <SEO title='FAQs' />

    <Content>
      <Header>
        <Typography component='h1' variant='h2'>FAQs</Typography>
      </Header>

      <FaqList>
        {faqs.map((faq) => {
          if (!isEmpty(faq.question) && !isEmpty(faq.answer())) {
            return (
              <li key={uuidv4()}>
                <div>
                  <Typography component='h2' variant='h3'>{faq.question}</Typography>
                  <Typography>
                    {faq.answer()}
                  </Typography>
                </div>
              </li>
            );
          }

          return null;
        })}
      </FaqList>
    </Content>

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
    margin: 0 auto;
    padding: ${gutter.M} 0 ${gutter.XL};
    width: 70vw;

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
    }

    h2 {
      margin-bottom: ${gutter.M};
    }

    ul {
      margin: 2ex 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media only screen and (max-width: 1150px) {
      width: 80vw;
    }

    @media only screen and (max-width: 800px) {
      width: 90vw;
    }
  }
`;

export default FaqsPage;
