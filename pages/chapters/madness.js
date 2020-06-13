import ChapterLayout from '../../components/layouts/ChapterLayout';

const Madness = () => {
  const title = 'Madness';
  const image = '/pics/madness.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        The troubles of the world continued rapidly escalating. It was at the
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
