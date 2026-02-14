import { Helmet } from 'react-helmet-async';

function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
  twitterCard = 'summary_large_image',
  children
}) {
  const siteName = 'OrganicShop';
  const defaultTitle = 'OrganicShop - Fresh Organic Groceries & Wellness from India';
  const defaultDescription =
    'Shop certified organic groceries, fresh produce, dairy, and wellness products at OrganicShop. Curated for Indian lifestyles and delivered to your doorstep.';

  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Extra tags per page */}
      {children}
    </Helmet>
  );
}

export default SEO;
