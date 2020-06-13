import ChapterLayout from '../../components/layouts/ChapterLayout';

const Cursed = () => {
  const title = 'Cursed';
  const image = '/pics/cursed.jpg';

  return (
    <ChapterLayout title={title} image={image}>
      <p>
        In this town, people are cursed with a plague birthed from the thick
        black smog of their own factories. The towns folk live in terror as
        disease lurks the streets hiding in shadows in wait for the next victim.
      </p>

      <p>
        Orphans inhabit the slums which have become a marketplace for
        unscrupulous businessmen.
      </p>

      <p>
        The remainder of the town is populated by lifeless citizens whom have
        lost their own existence.
      </p>

      <p>Yes, a very sad and dreary town.</p>
    </ChapterLayout>
  );
};

export default Cursed;
