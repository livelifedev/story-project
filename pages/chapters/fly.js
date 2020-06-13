import ChapterLayout from '../../components/layouts/ChapterLayout';

const Fly = () => {
  const title = 'Fly';
  const image = '/pics/fly.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Riding atop the crow, they pierce through the wall in the sky. This
        marked the beginning of the travelling chimney sweep and his journey.
      </p>
    </ChapterLayout>
  );
};

export default Fly;
