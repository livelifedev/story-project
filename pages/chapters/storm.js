import ChapterLayout from '../../components/layouts/ChapterLayout';

const Storm = () => {
  const title = '14. Storm';
  const image = '/pics/storm.jpg';
  const prevChapter = 'warmth';
  const nextChapter = 'sanctuary';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Crow continued to learn more about the world, seeking new places to
        venture.
      </p>

      <p>Not all was good.</p>

      <p>
        Crossing the seas, he became exposed to many of the cruel acts in the
        world.
      </p>

      <p>
        Suddenly, a very cold and heavy feeling hits him - it turns pitch black
        and becomes hard to breathe.
      </p>

      <p>Crow had fallen in.</p>
    </ChapterLayout>
  );
};

export default Storm;
