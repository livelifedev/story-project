import ChapterLayout from '../../components/layouts/ChapterLayout';

const Underbelly = () => {
  const title = 'Underbelly';
  const image = '/pics/underbelly.jpg';
  const prevChapter = 'abundance';
  const nextChapter = 'madness';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        Crow traversed the metal and concrete region of the world. High speed
        transport and interconnected routes made seeing it all easy.
      </p>

      <p>
        Unfortunately, the deeper he explored, the more of worlds gritty
        underbelly he witnessed.
      </p>

      <p>
        Crime, hate, abuse of power… bigger realities he really did not want to
        see.
      </p>
    </ChapterLayout>
  );
};

export default Underbelly;
