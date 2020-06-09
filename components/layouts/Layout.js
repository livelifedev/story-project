import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}

      <style jsx global>
        {`
          html {
            font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial,
              sans-serif;
          }

          body {
            background-color: #151719;
            color: #ffffff;
          }

          a {
            color: #ffffff;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
