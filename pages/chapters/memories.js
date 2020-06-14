import ChapterLayout from '../../components/layouts/ChapterLayout';

const Memories = () => {
  const title = '32. Memories';
  const image = '/pics/memories.jpg';
  const prevChapter = 'tree';
  const nextChapter = 'masteroftime';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Arriving at the top thanks to the griffin's help, Crow finds a distorted
        space.
      </p>

      <p>Shards of light scattered all around.</p>

      <p>
        Reflected in those shards were the memories of Crow. The memories of his
        journey and the memories before then. They were all replaying in front
        of him.
      </p>

      <p>“So, this is my life.” - He remarks and sits down to watch.</p>

      <p>
        After finishing, Crow approaches the mystical being standing at the
        centre of the space - a titan, its head was a spherical chamber.
      </p>

      <p>The titan lent its hand to Crow and placed him inside the chamber.</p>
    </ChapterLayout>
  );
};

export default Memories;
