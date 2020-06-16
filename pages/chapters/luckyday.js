import ChapterLayout from '../../components/layouts/ChapterLayout';

const LuckyDay = () => {
  const title = '23. Lucky Day';
  const image = '/pics/luckyday.jpg';
  const prevChapter = 'endofjourney';
  const nextChapter = 'gatekeeper';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Taking a wander to reflect on many things, a flicker of green light
        caught his eye.
      </p>

      <p>“Oops, it appears you’ve spotted me young lad.</p>

      <p>
        “Today is your lucky day. I am a leprechaun. And for finding me, let me
        give you a special reward.”
      </p>

      <p>
        The leprechaun spoke a bit like a con man, Crow thought - but also
        enchanted by his magical green swag and ever so curious of the 'special'
        reward, he asked -
      </p>

      <p>“What is my reward?”</p>

      <p>Gleeful colours swirled around Crow and carried him off.</p>
    </ChapterLayout>
  );
};

export default LuckyDay;
