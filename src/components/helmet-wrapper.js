import React from 'react'
import Helmet from 'react-helmet';

const HelmetWrapper = ({
  metaDescription,
  title
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'en'
    }}
    title={title || "Vegard Haugstvedt.com"}
  >
    {metaDescription && <meta name="description" content={metaDescription} />}

    {/* Facebook Open Graph */}
    {/*<meta property="fb:app_id" content="123456789" />
    <meta property="og:url" content="https://example.com/page.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Content Title" />
    <meta property="og:image" content="https://example.com/image.jpg" />
    <meta property="og:description" content="Description Here" />
    <meta property="og:site_name" content="Site Name" />
    <meta property="og:locale" content="en_US" />
    <meta property="article:author" content="" />*/}

    {/* Twitter card */}
    {/*<meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@site_account" />
    <meta name="twitter:creator" content="@individual_account" />
    <meta name="twitter:url" content="https://example.com/page.html" />
    <meta name="twitter:title" content="Content Title" />
    <meta name="twitter:description" content="Content description less than 200 characters" />
    <meta name="twitter:image" content="https://example.com/image.jpg" />*/}
  </Helmet>
)

export default HelmetWrapper