import ChapterLayout from '../../components/layouts/ChapterLayout';

const Nest = () => {
  const title = 'Nest';
  const image = '/pics/nest.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>However, there was one boy who stood out from the rest.</p>

      <p>A very peculiar young boy.</p>

      <p>
        This boy loved to climb high places and was always seen nesting in the
        tallest tower, just forever gazing up towards the sky.
      </p>
    </ChapterLayout>
  );
};

export default Nest;
