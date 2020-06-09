import { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import Caged from '../../components/chapters/Caged';

const About = () => {
  const [image, setImage] = useState('/blue-city.jpg');
  const text = 'tests';

  return (
    <Layout>
      <div className="chapter-header">
        <span className="chapter-button">&lt;</span>
        <div>- BLUE CITY -</div>
        <span className="chapter-button">&gt;</span>
      </div>

      <div className="chapter-container">
        <div className="chapter-text">
          <Caged />
        </div>
        <div className="chapter-image">
          <img src={image} />
        </div>
      </div>
      {/* <button onClick={() => setImage('/blue-city2.jpg')}>></button> */}

      <style jsx>
        {`
          .chapter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto 10px;
            padding: 10px 5px;
          }

          .chapter-container {
            display: flex;
            flex-wrap: wrap-reverse;
            justify-content: center;
            margin-bottom: 40px;
          }

          .chapter-text,
          .chapter-image {
            width: 40%;
            min-width: 300px;
            max-width: 475px;
          }

          .chapter-text {
            box-sizing: border-box;
            text-align: justify;
            align-self: center;
            padding: 0 45px 0 15px;
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
        `}
      </style>
    </Layout>
  );
};

export default About;
