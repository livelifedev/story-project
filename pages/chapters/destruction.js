import ChapterLayout from '../../components/layouts/ChapterLayout';

const Destruction = () => {
  const title = 'Destruction';
  const image = '/pics/destruction.jpg';
  const prevChapter = 'madness';
  const nextChapter = 'consequence';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>Ultimately, this path led to destruction.</p>
    </ChapterLayout>
  );
};

export default Destruction;
