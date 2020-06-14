import ChapterLayout from '../../components/layouts/ChapterLayout';

const Consequence = () => {
  const title = '21. Consequence';
  const image = '/pics/consequence.jpg';
  const prevChapter = 'destruction';
  const nextChapter = 'endofjourney';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        The consequence of that thirst of power and questionable scientific
        advancement - were machines of war.
      </p>
    </ChapterLayout>
  );
};

export default Consequence;
