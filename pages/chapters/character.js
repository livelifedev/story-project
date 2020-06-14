import ChapterLayout from '../../components/layouts/ChapterLayout';

const Character = () => {
  const title = 'Character: Crow';
  const image = '/pics/character.jpg';
  const prevChapter = 'cover';
  const nextChapter = 'bedtimestory';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
};

export default Character;
