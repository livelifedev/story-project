import ChapterLayout from '../../components/layouts/ChapterLayout';

const TheKing = () => {
  const title = '27. The King';
  const image = '/pics/theking.jpg';
  const prevChapter = 'residents';
  const nextChapter = 'oldforest';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>The oddest one of the kingdom - the King.</p>

      <p>
        Dressed in a bold, gold and black striped gown, he had unkempt hair and
        a black crown to top it off.
      </p>

      <p>
        The King spoke in riddles and philosophy, which made it difficult for
        Crow to understand him.
      </p>

      <p>“…riddle, …philosophy, …riddle, …philosophy.”</p>

      <p>“Do you understand what I am saying?”</p>

      <p>Crow stood confused and speechless.</p>

      <p>
        “Anyway, when you go back to your world, go visit the Master of Time. He
        will be able to help you find your answer."
      </p>
    </ChapterLayout>
  );
};

export default TheKing;
