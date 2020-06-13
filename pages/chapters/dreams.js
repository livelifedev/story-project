import ChapterLayout from '../../components/layouts/ChapterLayout';

const Dreams = () => {
  const title = 'Dreams';
  const image = '/pics/dreams.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>Good night.</p>

      <p>May your dreams be fun and sweet.</p>
    </ChapterLayout>
  );
};

export default Dreams;
