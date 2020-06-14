import Layout from '../components/layouts/Layout';

const Updates = () => {
  return (
    <Layout>
      <h1>Updates</h1>

      <div className="update-text">13 of 35 illustrations done.</div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .update-text {
          text-align: center;
          width: 80%;
          margin: auto;
          font-size: 2rem;
          padding-top: 50px;
        }
      `}</style>
    </Layout>
  );
};

export default Updates;
