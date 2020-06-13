import ChapterLayout from '../../components/layouts/ChapterLayout';

const Hermit = () => {
  const title = 'Hermit';
  const image = '/pics/hermit.jpg';
  const prevChapter = 'oldforest';
  const nextChapter = 'griffin';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Inside the forest, it was proving extremely difficult to track the
        Master of Time.
      </p>

      <p>Crow was losing hope, when he is approached.</p>

      <p>
        The hermit - he had a towering figure and a staff exuding a mysterious
        aura. He was a descendant of the original civilisation and had been
        watching Crow for some time.
      </p>

      <p>“You, what is your purpose in this forest?”</p>

      <p>Crow was surprised but shared his story.</p>

      <p>
        “You have reached this deep into the forest, not many people can make it
        this far.“
      </p>

      <p>
        The hermit saw the efforts of Crow and was willing to help. He gave crow
        the ‘voice' of the forest.
      </p>
    </ChapterLayout>
  );
};

export default Hermit;
