import ChapterLayout from '../../components/layouts/ChapterLayout';

const Abundance = () => {
  const title = '17. Abundance';
  const image = '/pics/abundance.jpg';
  const prevChapter = 'bluecity';
  const nextChapter = 'underbelly';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>This city is so bizarre, Crow thought.</p>

      <p>
        Not sure whether to laugh in amusement or frown with judgement at what
        he saw.
      </p>

      <p>
        Suits, robots and grease… the combination really did not paint a pretty
        picture.
      </p>

      <p>
        While so many things to see and do, the city was definitely draining.
        Crowds racing in all directions, people hooked into their machines, the
        difficulty to catch anyones attention.
      </p>

      <p>It was all too much for Crow, it all felt very abundant.</p>
    </ChapterLayout>
  );
};

export default Abundance;
