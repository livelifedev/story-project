import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  const seo = {
    title: 'Story Project',
    description:
      'A picture book I did for my final design project in high school - 10 years ago.',
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seo.description} />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
