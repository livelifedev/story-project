import ChapterLayout from '../../components/layouts/ChapterLayout';

const SootTown = () => {
  const title = '2. Soot Town';
  const image = '/pics/soottown.jpg';
  const prevChapter = 'bedtimestory';
  const nextChapter = 'cursed';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        In a town engulfed in smoke, where roads and buildings are decorated in
        soot, a place forsaken by the sun and moon and the streets illuminated
        with artificial daylight.
      </p>
    </ChapterLayout>
  );
};

export default SootTown;
