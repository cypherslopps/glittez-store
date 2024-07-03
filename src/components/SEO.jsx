import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const { pathname } = useLocation();

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keyword" content='glittez, ecommerce, shop, cart' />
        <link rel="canonical" href={`https://www.glittez.com${pathname}`} />

        {/* OG Meta tags */}
        <meta property="og:type" content="web app" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://www.glittez.com${pathname}`} />
        <meta property='og:description' content={description} />
        <meta property="og:site_name" content="https://glittez.com" />

        {/* Twitter */}
        <meta name="twitter:creator" content="TonBunnies" />
        <meta name="twitter:card" content="web app" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO;