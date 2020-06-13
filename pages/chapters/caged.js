import ChapterLayout from '../../components/layouts/ChapterLayout';

const Caged = () => {
  const title = 'Caged';
  const image = '/pics/caged.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        One day, on the job cleaning a deep chimney, the boy stumbled upon a
        secret tunnel. He followed it and on the other end was an enormous
        chamber, what he saw there troubled him.
      </p>

      <p>
        Chained down to ground was a gargantuan crow, the size of the chamber
        itself.
      </p>

      <p>
        The boy watched it and he saw a painful reflection... Gazing up towards
        the sky, wanting to get out but trapped.
      </p>

      <p>It was here, the boy decided it was time… he released the shackles.</p>
    </ChapterLayout>
  );
};

export default Caged;
