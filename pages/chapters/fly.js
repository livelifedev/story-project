import ChapterLayout from '../../components/layouts/ChapterLayout';

const Fly = () => {
  const title = '7. Fly';
  const image = '/pics/fly.jpg';
  const prevChapter = 'caged';
  const nextChapter = 'sky';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Riding atop the crow, they pierce through the wall in the sky. This
        marked the beginning of the travelling chimney sweep and his journey.
      </p>
    </ChapterLayout>
  );
};

export default Fly;
