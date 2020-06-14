import ChapterLayout from '../../components/layouts/ChapterLayout';

const BedtimeStory = () => {
  const title = '1. Bedtime Story';
  const image = '/pics/bedtimestory.jpg';
  const prevChapter = 'character';
  const nextChapter = 'soottown';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>Eight thirty.</p>

      <p>
        “There is still a half hour before your bedtime,” the grandfather said
        to his grandson.
      </p>

      <p>
        “Very well, let me tell you a tale to pass the time. it's a tale of a
        very peculiar young boy and his journey into a new world…
      </p>

      <p>“The tale of the travelling chimney sweep.”</p>
    </ChapterLayout>
  );
};

export default BedtimeStory;
