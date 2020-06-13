import ChapterLayout from '../../components/layouts/ChapterLayout';

const Sanctuary = () => {
  const title = 'Sanctuary';
  const image = '/pics/sanctuary.jpg';
  const prevChapter = 'storm';
  const nextChapter = 'bluecity';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>When Crow awoke, he felt very disoriented.</p>

      <p>
        He was underwater. - Though, strangely enough he could breathe again.
      </p>

      <p>Appearing before him was a mermaid with gentle blue eyes.</p>

      <p>“Young one, how are you feeling?”</p>

      <p>She had saved him from drowning.</p>

      <p>“Welcome to the Sanctuary.”</p>

      <p>
        “Hurt sea creatures come here to rest and recover. Please, stay as long
        as you need.”
      </p>

      <p>
        Such a soothing place, Crow thought. He rested up before continuing his
        journey.
      </p>

      <p></p>
    </ChapterLayout>
  );
};

export default Sanctuary;
