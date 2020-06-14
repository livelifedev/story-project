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
      <p>The boy met many interesting individuals in the new world.</p>

      <p>
        The most memorable of the bunch, was the very first person he met there.
        The smiling shepherd and his herd of smiling sheep.
      </p>

      <p>
        “As a shepherd I have seen many things in my days travelling across the
        lands. Many positives and many negatives - I’ve learned to be grateful,
        and smile and laugh as much as I can. That’s my preferred way of
        living.”
      </p>

      <p>
        This shepherd had an infectious smile that even rubbed off on the boy.
      </p>

      <p>“So, do you have name young traveller?”</p>

      <p>“...</p>

      <p>“My name is Crow.”</p>
    </ChapterLayout>
  );
};

export default Shepherd;
