import ChapterLayout from '../../components/layouts/ChapterLayout';

const LuckyDay = () => {
  const title = 'Lucky Day';
  const image = '/pics/luckyday.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        Taking a wander to reflect on many things, a flicker of green light
        caught Crow's eye.
      </p>

      <p>“Oops, it appears you’ve spotted me young lad.”</p>

      <p>
        “Today is your lucky day. I am a leprechaun. And for finding me, let me
        give you a reward.”
      </p>

      <p>
        The leprechaun spoke a bit like a con man, Crow thought. But he was
        enchanted by the magical green swag and was curios of the reward.
      </p>

      <p>Gleeful colours swirled around Crow and carried him off.</p>
    </ChapterLayout>
  );
};

export default LuckyDay;
