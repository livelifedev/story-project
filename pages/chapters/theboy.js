import ChapterLayout from '../../components/layouts/ChapterLayout';

const TheBoy = () => {
  const title = 'The Boy';
  const image = '/pics/theboy.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>This boy was a chimney sweep.</p>

      <p>
        He would be constantly distracted and lost in his own thoughts. Everyone
        in town found him very odd.
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
