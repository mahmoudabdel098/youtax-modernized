import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  const fullTitle = `${title} | Youtax.it - Forum Diritto Tributario`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
