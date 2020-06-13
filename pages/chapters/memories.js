import ChapterLayout from '../../components/layouts/ChapterLayout';

const Memories = () => {
  const title = 'Memories';
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
        Reaching the top thanks to the griffin, Crow finds a distorted space.
      </p>

      <p>Shards of light scatter all around.</p>

      <p>
        Reflecting in those shards are the memories of Crow. The memories of his
        journey and the memories before then. They were all replaying in front
        of him.
      </p>

      <p>“So, this is my life.” - He remarks and sits down to watch.</p>

      <p>
        After finishing, Crow approaches the mysterious creature standing at the
        centre of the space - a titan, its head was a spherical chamber.
      </p>

      <p>The titan lent its hand to Crow and placed him inside the chamber.</p>
    </ChapterLayout>
  );
};

export default Memories;
