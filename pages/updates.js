import Layout from '../components/layouts/Layout';

const Updates = () => {
  return (
    <Layout>
      <h1>Updates</h1>

      <div className="updates-container">
        <div className="big">13 of 35 illustrations done.</div>
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .updates-container {
          text-align: center;
          width: 80%;
          margin: auto;
          padding-top: 50px;
        }

        .big {
          font-size: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Updates;
