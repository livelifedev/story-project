import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
  const seo = {
    title: 'Story Project',
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
