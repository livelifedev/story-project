import ChapterLayout from '../../components/layouts/ChapterLayout';

const EndOfJourney = () => {
  const title = '22. End of Journey';
  const image = '/pics/endofjourney.jpg';
  const prevChapter = 'consequence';
  const nextChapter = 'luckyday';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        It has been a long journey now for Crow. He has seen the lands, crossed
        the seas, experienced many things, met wonderful people, met horrible
        people and seen the destruction of the world.
      </p>

      <p>This was not how he imagined the end of his journey to be.</p>

      <p>
        Even after going through all that he has. There was still something
        missing. Something he was seeking, but couldn’t find.
      </p>
    </ChapterLayout>
  );
};

export default EndOfJourney;
