import ChapterLayout from '../../components/layouts/ChapterLayout';

const Warmth = () => {
  const title = 'Warmth';
  const image = '/pics/warmth.jpg';
  const prevChapter = 'sunnyvillage';
  const nextChapter = 'storm';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Crow is greeted by the curious villagers. They welcome him into their
        homes and ask for stories of his adventures.
      </p>

      <p>“Ooh!” and “Ahh!”</p>

      <p>They listen with the utmost interest.</p>

      <p>
        The nights in this village were filled with home-cooked meals and family
        banter, something the travelling chimney sweep had never experienced
        before.
      </p>

      <p>It was very warm.</p>
    </ChapterLayout>
  );
};

export default Warmth;
