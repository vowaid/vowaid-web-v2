import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * Description.
 *
 * @param {} props.description
 * @param {} props.lang
 * @param {} props.meta
 * @param {} props.keywords
 * @param {} props.title
 * @param {} props.viewport
 */
const SEO = ({ description, lang, meta, keywords, title, viewport }) => {
  const defaultSiteMetadata = {
    title: 'Veterans of War Aid Foundation',
    description: 'The Veterans of War Aid Foundation (VOWAID) delivers targeted assistance to American Heroes in need.',
    author: '@vowaid',
    siteUrl: `https://www.vowaid.org`,
    viewport: 'width=device-width, initial-scale=1.0'
  };

  const metadata = {
    description: description || defaultSiteMetadata.description,
    title: title || defaultSiteMetadata.title,
    viewport: viewport || defaultSiteMetadata.viewport,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`${defaultSiteMetadata.title} | %s`}
      meta={[
        {
          name: 'description',
          content: metadata.description,
        },
        {
          property: 'og:title',
          content: metadata.title,
        },
        {
          property: 'og:site_name',
          content: metadata.title,
        },
        {
          property: 'og:description',
          content: metadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@vowaid',
        },
        {
          name: 'twitter:title',
          content: metadata.title,
        },
        {
          name: 'twitter:description',
          content: metadata.description,
        },
        {
          name: 'viewport',
          content: metadata.viewport,
        },
      ]
        .concat((keywords.length > 0) ? {
          name: 'keywords',
          content: keywords.join(`, `),
        } : [])
        .concat(meta)
      }
    />
  );
};

SEO.defaultProps = {
  keywords: [],
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
