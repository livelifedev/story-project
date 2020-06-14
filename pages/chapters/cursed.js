import ChapterLayout from '../../components/layouts/ChapterLayout';

const Cursed = () => {
  const title = '3. Cursed';
  const image = '/pics/cursed.jpg';
  const prevChapter = 'soottown';
  const nextChapter = 'nest';

  return (
    <ChapterLayout
      title={title}
      image={image}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    >
      <p>The towns folk are cursed with a plague.</p>
      <p>
        A plague birthed from the thick black smog of their own factories. They
        live in terror as disease lurks the streets, hiding in shadows in wait
        for its next victim.
      </p>
      <p>
        Orphans inhabit the slums, which have become a marketplace for
        unscrupulous businessmen.
      </p>
      <p>
        And the remainder of the town is populated by lifeless residents whom
        have lost their own existence.
      </p>
      <p>Yes, it is a very sad and dreary town.</p>
    </ChapterLayout>
  );
};

export default Cursed;
