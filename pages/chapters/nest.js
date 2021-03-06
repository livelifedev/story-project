import ChapterLayout from '../../components/layouts/ChapterLayout';

const Nest = () => {
  const title = '4. Nest';
  const image = '/pics/nest.jpg';
  const prevChapter = 'cursed';
  const nextChapter = 'theboy';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>However, there was one boy who stood out from the rest.</p>

      <p>A very peculiar young boy.</p>

      <p>
        This boy loved to climb high places and was always seen nesting in the
        tallest tower - just forever gazing up towards the sky.
      </p>
    </ChapterLayout>
  );
};

export default Nest;
