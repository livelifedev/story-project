import ChapterLayout from '../../components/layouts/ChapterLayout';

const NewWorld = () => {
  const title = '9. New World';
  const image = '/pics/newworld.jpg';
  const prevChapter = 'sky';
  const nextChapter = 'shepherd';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        As the boy lands, all his thoughts, emotions and senses are overwhelmed.
      </p>

      <p>
        A realm of colour and beauty which could only be described as a fantasy.
        The clean air filled his lungs, it was easy to breathe. He could feel
        the sun blanket over him and the wind dance around him. His mind was
        clear and his body felt light.
      </p>

      <p>
        Excitement - a new feeling stirred inside him, this was the new world he
        was stepping into.
      </p>
    </ChapterLayout>
  );
};

export default NewWorld;
