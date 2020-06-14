import ChapterLayout from '../../components/layouts/ChapterLayout';

const Caged = () => {
  const title = '6. Caged';
  const image = '/pics/caged.jpg';
  const prevChapter = 'theboy';
  const nextChapter = 'fly';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>
        One day, on the job cleaning a deep chimney, the boy stumbled upon a
        tunnel to a hidden chamber - what he saw in there really troubled him.
      </p>

      <p>Chained down to ground in the darkness was a gargantuan crow.</p>

      <p>
        The boy watched it and saw a painful reflection... Gazing up towards the
        sky, wanting to get out but trapped.
      </p>

      <p>It was here, the boy decided it was time… he released the shackles.</p>
    </ChapterLayout>
  );
};

export default Caged;
