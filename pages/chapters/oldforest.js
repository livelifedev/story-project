import ChapterLayout from '../../components/layouts/ChapterLayout';

const OldForest = () => {
  const title = '28. Old Forest';
  const image = '/pics/oldforest.jpg';
  const prevChapter = 'theking';
  const nextChapter = 'hermit';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Following the advice of the King, Crow set off to meet the Master of
        Time - hoping to find the answer to his question.
      </p>

      <p>He made his way to the Old Forest.</p>

      <p>
        The Myth surrounding this forest say that the first civilisation of
        mankind stood here, it flourished and perished with time.
      </p>

      <p>
        The ruins still exist here, but now a vast forest has taken over the
        civilisation's place.
      </p>
    </ChapterLayout>
  );
};

export default OldForest;
