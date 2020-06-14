import ChapterLayout from '../../components/layouts/ChapterLayout';

const Shepherd = () => {
  const title = '10. Shepherd';
  const image = '/pics/shepherd.jpg';
  const prevChapter = 'newworld';
  const nextChapter = 'beautybeasts';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>In this new world, the boy met many interesting individuals.</p>

      <p>
        The most memorable of the bunch, was the very first person he had met.
        The smiling shepherd and his herd of smiling sheep.
      </p>

      <p>
        “As a shepherd I have seen many things in my days travelling across the
        lands. Many positives and many negatives - I’ve learned to be grateful,
        and smile and laugh as much as I can. That’s my preferred way of
        living.”
      </p>

      <p>
        This shepherd had an infectious smile, that carried over to the boy’s
        face.
      </p>

      <p>“What is your name, young traveller?”</p>

      <p>The boy paused and gave some thought.</p>

      <p>“My name is Crow."</p>
    </ChapterLayout>
  );
};

export default Shepherd;
