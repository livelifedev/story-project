import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from './Layout';

const ChapterLayout = ({
  title,
  image,
  children,
  prevChapter,
  nextChapter,
}) => {
  const router = useRouter();
  const [imageLoading, setimageLoading] = useState(true);
  const pageImage = useRef();

  const nextPage = () => {
    router.push(`/chapters/${nextChapter}`);
  };

  const prevPage = () => {
    router.push(`/chapters/${prevChapter}`);
  };

  const turnOffImageLoading = () => {
    setimageLoading(false);
  };

  useEffect(() => {
    if (pageImage.current.complete) {
      turnOffImageLoading();
    }
  }, []);

  return (
    <Layout>
      <div className="chapter-header">
        <span
          className={`chapter-button ${prevChapter ? '' : 'hide'}`}
          onClick={prevPage}
        >
          &lt;
        </span>
        <div className="chapter-title">- {title} -</div>
        <span
          className={`chapter-button ${nextChapter ? '' : 'hide'}`}
          onClick={nextPage}
        >
          &gt;
        </span>
      </div>

      <div className={`chapter-container ${imageLoading ? 'hide' : ''}`}>
        {children && <div className="chapter-text">{children}</div>}
        <div className="chapter-image">
          <img
            ref={pageImage}
            onLoad={turnOffImageLoading}
            src={image}
            alt={title}
          />
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
            align-items: center;
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
            word-spacing: 2px;
            align-self: center;
            padding: 0 15px;
            margin-right: 30px;
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

          .hide {
            visibility: hidden;
          }

          @media only screen and (max-width: 680px) {
            .chapter-text {
              margin-right: 0;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default ChapterLayout;
