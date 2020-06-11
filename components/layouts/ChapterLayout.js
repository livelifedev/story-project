import Layout from './Layout';

const ChapterLayout = ({ title, image, children }) => {
  return (
    <Layout>
      <div className="chapter-header">
        <span className="chapter-button">&lt;</span>
        <div className="chapter-title">- {title} -</div>
        <span className="chapter-button">&gt;</span>
      </div>

      <div className="chapter-container">
        <div className="chapter-text">{children}</div>
        <div className="chapter-image">
          <img src={image} />
        </div>
      </div>

      <style jsx>
        {`
          .chapter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto 10px;
            padding: 10px 5px;
          }

          .chapter-title {
            text-transform: uppercase;
          }

          .chapter-container {
            display: flex;
            flex-wrap: wrap-reverse;
            justify-content: center;
            margin: 0 auto 40px;
            max-width: 1100px;
          }

          .chapter-text,
          .chapter-image {
            width: 40%;
            min-width: 300px;
          }

          .chapter-text {
            box-sizing: border-box;
            text-align: justify;
            align-self: center;
            padding: 0 15px;
            margin-right: 30px;
            margin-top: -20px;
          }

          .chapter-image img {
            width: 100%;
            border-radius: 2px;
          }

          .chapter-button {
            background-color: black;
            text-align: center;
            border-radius: 2px;
            cursor: pointer;
            padding: 10px;
          }

          @media only screen and (max-width: 680px) {
            .chapter-text {
              margin-right: 0;
              margin-top: 0;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default ChapterLayout;
