import ChapterLayout from '../../components/layouts/ChapterLayout';

const Character = () => {
  const title = 'The Character';
  const image = '/pics/character.jpg';
  const prevChapter = 'cover';
  const nextChapter = null;

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
