import ChapterLayout from '../../components/layouts/ChapterLayout';

const MasterOfTime = () => {
  const title = '33. Master of Time';
  const image = '/pics/masteroftime.jpg';
  const prevChapter = 'memories';
  const nextChapter = 'dreams';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        The chamber of the Master of Time, like a mini-forest, trees decorating
        the space, a waterfall as a backdrop and even a phoenix circling the
        infinite ceiling.
      </p>

      <p>
        At the centre of the chamber stood an earthy column, and there sat the
        Master of Time in his throne.
      </p>

      <p>
        “I’ve been expecting you, Crow. I am Grandfather Time, the Master of
        Time.
      </p>

      <p>“Go ahead and ask your question, Crow.”</p>

      <p>Crow looked him in the eye.</p>

      <p>
        “I did have a question I wanted to ask, a question I trudged through the
        Old Forest for - travelled the world desiring to find - a question I’ve
        been asking myself for as far as I can remember.
      </p>

      <p>
        “However... I’ve already found my answer. I don’t need to ask it
        anymore.”
      </p>

      <p>Crow looked very content, as a soft smile appeared on his face.</p>

      <p>Grandfather Time smiled in response.</p>

      <p>“Very well, Crow. One last thing before you go…”</p>
    </ChapterLayout>
  );
};

export default MasterOfTime;
