import ChapterLayout from '../../components/layouts/ChapterLayout';

const Sky = () => {
  const title = 'Sky';
  const image = '/pics/sky.jpg';
  const prevChapter = 'fly';
  const nextChapter = 'newworld';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Moments after, the boy is blinded by a brightness his eyes were not
        prepared for. The glorious blue sky, dressed in an endless string of
        majestic white clouds.
      </p>

      <p>
        Left and right, magnificent creatures bathing and swimming so freely.
      </p>
    </ChapterLayout>
  );
};

export default Sky;