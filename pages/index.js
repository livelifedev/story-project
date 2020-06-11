import Layout from '../components/layouts/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="title-container">
        <h1>The Travelling Chimney Sweep</h1>
      </div>

      <style jsx>{`
        .title-container {
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
