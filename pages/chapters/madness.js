import ChapterLayout from '../../components/layouts/ChapterLayout';

const Madness = () => {
  const title = '19. Madness';
  const image = '/pics/madness.jpg';
  const prevChapter = 'underbelly';
  const nextChapter = 'destruction';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        The troubles of the world only continued to escalate. It was at the
        stage where it was all madness.
      </p>

      <p>
        Thirst for power and scientific advancements paved the way forward,
        regardless of questions to the ethics and morals involved.
      </p>
    </ChapterLayout>
  );
};

export default Madness;
