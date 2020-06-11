import ChapterLayout from '../../components/layouts/ChapterLayout';

const Cover = () => {
  const title = 'Cover';
  const image = '/pics/cover.jpg';
  const nextChapter = 'character';

  return (
    <ChapterLayout title={title} image={image} nextChapter={nextChapter} />
  );
};

export default Cover;
