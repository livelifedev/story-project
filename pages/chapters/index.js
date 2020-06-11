import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout';

const Board = () => {
  const router = useRouter();

  // prettier-ignore
  const boardThumbnails = [
    { name: 'cover', src: '/thumbs/cover.jpg', link: '/chapters/cover' },
    { name: 'character', src: '/thumbs/character.jpg', link: '/chapters/character' },
    { name: 'bedtimestory', src: '/thumbs/bedtimestory.jpg', link: '/chapters/cover' },
    { name: 'hometown', src: '/thumbs/hometown.jpg', link: '/chapters/cover' },
    { name: 'curse', src: '/thumbs/curse.jpg', link: '/chapters/cover' },
    { name: 'nest', src: '/thumbs/nest.jpg', link: '/chapters/cover' },
    { name: 'theboy', src: '/thumbs/theboy.jpg', link: '/chapters/cover' },
    { name: 'caged', src: '/thumbs/caged.jpg', link: '/chapters/caged' },
    { name: 'fly', src: '/thumbs/fly.jpg', link: '/chapters/cover' },
    { name: 'sky', src: '/thumbs/sky.jpg', link: '/chapters/cover' },
    { name: 'newworld', src: '/thumbs/newworld.jpg', link: '/chapters/cover' },
    { name: 'smile', src: '/thumbs/smile.jpg', link: '/chapters/cover' },
    { name: 'beautybeasts', src: '/thumbs/beautybeasts.jpg', link: '/chapters/cover' },
    { name: 'village', src: '/thumbs/village.jpg', link: '/chapters/cover' },
    { name: 'warmth', src: '/thumbs/warmth.jpg', link: '/chapters/cover' },
    { name: 'storm', src: '/thumbs/storm.jpg', link: '/chapters/cover' },
    { name: 'sanctuary', src: '/thumbs/sanctuary.jpg', link: '/chapters/cover' },
    { name: 'bluecity', src: '/thumbs/bluecity.jpg', link: '/chapters/cover' },
    { name: 'abundance', src: '/thumbs/abundance.jpg', link: '/chapters/cover' },
    { name: 'underbelly', src: '/thumbs/underbelly.jpg', link: '/chapters/cover' },
    { name: 'madscience', src: '/thumbs/madscience.jpg', link: '/chapters/cover' },
    { name: 'destruction', src: '/thumbs/destruction.jpg', link: '/chapters/cover' },
    { name: 'consequence', src: '/thumbs/consequence.jpg', link: '/chapters/cover' },
    { name: 'endofjourney', src: '/thumbs/endofjourney.jpg', link: '/chapters/cover' },
    { name: 'luckyday', src: '/thumbs/luckyday.jpg', link: '/chapters/cover' },
    { name: 'guardian', src: '/thumbs/guardian.jpg', link: '/chapters/cover' },
    { name: 'dream', src: '/thumbs/dream.jpg', link: '/chapters/cover' },
    { name: 'residents', src: '/thumbs/residents.jpg', link: '/chapters/cover' },
    { name: 'theking', src: '/thumbs/theking.jpg', link: '/chapters/cover' },
    { name: 'ancientforest', src: '/thumbs/ancientforest.jpg', link: '/chapters/cover' },
    { name: 'giants', src: '/thumbs/giants.jpg', link: '/chapters/cover' },
    { name: 'griffin', src: '/thumbs/griffin.jpg', link: '/chapters/cover' },
    { name: 'tree', src: '/thumbs/tree.jpg', link: '/chapters/cover' },
    { name: 'tiktok', src: '/thumbs/tiktok.jpg', link: '/chapters/cover' },
    { name: 'masteroftime', src: '/thumbs/masteroftime.jpg', link: '/chapters/cover' },
    { name: 'goodnight', src: '/thumbs/goodnight.jpg', link: '/chapters/cover' },
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
