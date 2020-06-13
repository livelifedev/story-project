import ChapterLayout from '../../components/layouts/ChapterLayout';

const Tree = () => {
  const title = 'Tree';
  const image = '/pics/tree.jpg';
  const prevChapter = 'griffin';
  const nextChapter = 'memories';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        With the griffin navigating through the forest, Crow finally made it
        there.
      </p>

      <p>The home of the Master of Time.</p>

      <p>A sight to behold.</p>

      <p>
        Shrouded in thick clouds, it was hidden from afar. But if not the case,
        the place would be visible from everywhere in the world.
      </p>

      <p>
        The home of the Master of Time was at the top of the oldest tree,
        absolutely indescribable in size, it grew to the heavens.
      </p>
    </ChapterLayout>
  );
};

export default Tree;
