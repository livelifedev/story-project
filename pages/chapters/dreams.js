import ChapterLayout from '../../components/layouts/ChapterLayout';

const Dreams = () => {
  const title = 'Dreams';
  const image = '/pics/dreams.jpg';
  const prevChapter = 'masteroftime';

  return (
    <ChapterLayout title={title} image={image} prevChapter={prevChapter}>
      <p>Good night.</p>

      <p>May your dreams be fun and sweet.</p>
    </ChapterLayout>
  );
};

export default Dreams;
