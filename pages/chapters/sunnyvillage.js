import ChapterLayout from '../../components/layouts/ChapterLayout';

const SunnyVillage = () => {
  const title = '12. Sunny Village';
  const image = '/pics/sunnyvillage.jpg';
  const prevChapter = 'beautybeasts';
  const nextChapter = 'warmth';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Crow arrives at a small village - Sunny Village - is what the sign says.
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
