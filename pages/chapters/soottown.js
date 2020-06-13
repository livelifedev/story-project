import ChapterLayout from '../../components/layouts/ChapterLayout';

const SootTown = () => {
  const title = 'Soot Town';
  const image = '/pics/soottown.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        In a town engulfed in smoke, where roads and buildings are decorated in
        soot, a place forsaken by the sun and moon and the streets illuminated
        with artificial daylight.
      </p>
    </ChapterLayout>
  );
};

export default SootTown;
