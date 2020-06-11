import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout';

const Board = () => {
  const router = useRouter();

  const boardThumbnails = [
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
    { name: 'blue city', src: '/blue-city.jpg', link: '/chapters/caged' },
  ];

  const goToChapter = (link) => {
    router.push(link);
  };

  return (
    <Layout>
      <h1>Board</h1>

      <div className="image-grid">
        {boardThumbnails.map((item) => (
          <img
            className="grid-thumb"
            src={item.src}
            alt={item.name}
            key={item.name}
            onClick={() => goToChapter(item.link)}
          />
        ))}
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 1px;
          max-width: 1200px;
          margin: auto;
        }

        .grid-thumb {
          width: 100%;
          cursor: pointer;
        }

        @media only screen and (max-width: 600px) {
          .image-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Board;
