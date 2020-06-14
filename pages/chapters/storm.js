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

      <p>Not all was was good.</p>

      <p>
        Crossing the seas, he became exposed to many nasty things of the world.
      </p>

      <p>
        It felt very cold and heavy all of a sudden. Turning pitch black, it
        became hard to breathe.
      </p>

      <p>He had fallen in.</p>
    </ChapterLayout>
  );
};

export default Storm;
