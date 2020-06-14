import ChapterLayout from '../../components/layouts/ChapterLayout';

const TheBoy = () => {
  const title = '5. The Boy';
  const image = '/pics/theboy.jpg';
  const prevChapter = 'nest';
  const nextChapter = 'caged';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>This boy was a chimney sweep.</p>

      <p>
        Constantly, he would be distracted and lost in his own thoughts.
        Everyone in town found him very odd.
      </p>

      <p>When spoken to, he would say the most abnormal things:</p>

      <p>“Don’t you ever wonder…?”</p>

      <p>
        “What lies beyond this black smog? Is there more to this? I can’t help
        but be curious.”
      </p>
    </ChapterLayout>
  );
};

export default TheBoy;
