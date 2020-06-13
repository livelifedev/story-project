import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout';

const Board = () => {
  const router = useRouter();

  // prettier-ignore
  const boardThumbnails = [
    { name: 'cover', src: '/thumbs/cover.jpg', link: '/chapters/cover' },
    { name: 'character', src: '/thumbs/character.jpg', link: '/chapters/character' },
    { name: 'bedtimestory', src: '/thumbs/bedtimestory.jpg', link: '/chapters/bedtimestory' },
    { name: 'soottown', src: '/thumbs/soottown.jpg', link: '/chapters/soottown' },
    { name: 'cursed', src: '/thumbs/cursed.jpg', link: '/chapters/cursed' },
    { name: 'nest', src: '/thumbs/nest.jpg', link: '/chapters/nest' },
    { name: 'theboy', src: '/thumbs/theboy.jpg', link: '/chapters/theboy' },
    { name: 'caged', src: '/thumbs/caged.jpg', link: '/chapters/caged' },
    { name: 'fly', src: '/thumbs/fly.jpg', link: '/chapters/fly' },
    { name: 'sky', src: '/thumbs/sky.jpg', link: '/chapters/sky' },
    { name: 'newworld', src: '/thumbs/newworld.jpg', link: '/chapters/newworld' },
    { name: 'shepherd', src: '/thumbs/shepherd.jpg', link: '/chapters/shepherd' },
    { name: 'beautybeasts', src: '/thumbs/beautybeasts.jpg', link: '/chapters/beautybeasts' },
    { name: 'sunnyvillage', src: '/thumbs/sunnyvillage.jpg', link: '/chapters/sunnyvillage' },
    { name: 'warmth', src: '/thumbs/warmth.jpg', link: '/chapters/warmth' },
    { name: 'storm', src: '/thumbs/storm.jpg', link: '/chapters/storm' },
    { name: 'sanctuary', src: '/thumbs/sanctuary.jpg', link: '/chapters/sanctuary' },
    { name: 'bluecity', src: '/thumbs/bluecity.jpg', link: '/chapters/bluecity' },
    { name: 'abundance', src: '/thumbs/abundance.jpg', link: '/chapters/abundance' },
    { name: 'underbelly', src: '/thumbs/underbelly.jpg', link: '/chapters/underbelly' },
    { name: 'madness', src: '/thumbs/madness.jpg', link: '/chapters/madness' },
    { name: 'destruction', src: '/thumbs/destruction.jpg', link: '/chapters/destruction' },
    { name: 'consequence', src: '/thumbs/consequence.jpg', link: '/chapters/consequence' },
    { name: 'endofjourney', src: '/thumbs/endofjourney.jpg', link: '/chapters/endofjourney' },
    { name: 'luckyday', src: '/thumbs/luckyday.jpg', link: '/chapters/luckyday' },
    { name: 'gatekeeper', src: '/thumbs/gatekeeper.jpg', link: '/chapters/gatekeeper' },
    { name: 'wishkingdom', src: '/thumbs/wishkingdom.jpg', link: '/chapters/wishkingdom' },
    { name: 'residents', src: '/thumbs/residents.jpg', link: '/chapters/residents' },
    { name: 'theking', src: '/thumbs/theking.jpg', link: '/chapters/theking' },
    { name: 'oldforest', src: '/thumbs/ancientforest.jpg', link: '/chapters/oldforest' },
    { name: 'hermit', src: '/thumbs/hermit.jpg', link: '/chapters/hermit' },
    { name: 'griffin', src: '/thumbs/griffin.jpg', link: '/chapters/griffin' },
    { name: 'tree', src: '/thumbs/tree.jpg', link: '/chapters/tree' },
    { name: 'memories', src: '/thumbs/memories.jpg', link: '/chapters/memories' },
    { name: 'masteroftime', src: '/thumbs/masteroftime.jpg', link: '/chapters/masteroftime' },
    { name: 'dreams', src: '/thumbs/dreams.jpg', link: '/chapters/dreams' },
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
