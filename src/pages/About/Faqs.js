import { _, React, ReactHtmlParser, styled, uuidv4 } from 'appReact';

import Layout from 'components/layout/Layout';
import SEO from 'components/seo';
import Banner from 'components/cta/Banner';

import { gutter, pxToEm } from 'styles/util';

import { faqs } from 'data/faqs';

/**
 * Description.
 */
const FaqsPage = () => (
  <Layout>
    <SEO title='FAQs' />

    <Header>
      <h1>FAQs</h1>
    </Header>

    <FaqList>
      {faqs.map((faq) => {
        if (!_.isEmpty(faq.question) && !_.isEmpty(faq.answer)) {
          return (
            <li key={uuidv4()}>
              <div>
                <h2>{faq.question}</h2>
                {ReactHtmlParser(faq.answer)}
              </div>
            </li>
          );
        }
      })}
    </FaqList>

    <Banner />
  </Layout>
);

const Header = styled.header`
  margin: ${gutter.XXL} 0;
  text-align: center;
`;

const FaqList = styled.ol`
  counter-reset: faq-counter;

  > li {
    counter-increment: faq-counter;
    display: flex;
    margin: ${gutter.M} auto ${gutter.XL};
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
