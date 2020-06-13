import ChapterLayout from '../../components/layouts/ChapterLayout';

const SunnyVillage = () => {
  const title = 'Sunny Village';
  const image = '/pics/sunnyvillage.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Crow arrives at a small village - Sunny Village - is what the sign says.
        Very fitting, he thinks when compared to his home town.
      </p>

      <p>So peaceful.</p>

      <p>
        Sitting down, he enjoys the sweet, earthy smell of the sun-drenched
        grass alongside the pleasant scenery and background noise.
      </p>

      <p>
        Reckless children playing around, adults chatting amongst themselves, a
        real sense of community.
      </p>
    </ChapterLayout>
  );
};

export default SunnyVillage;
